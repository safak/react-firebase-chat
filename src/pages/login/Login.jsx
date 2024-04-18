import { toast } from "react-toastify";
import "./Login.css";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../lib/firebase";
import {
  setDoc,
  doc,
  getFirestore,
  addDoc,
  collection,
  namedQuery,
} from "firebase/firestore";
import upload from "../../lib/uploads";

export const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  // Login and Signup Auth
  const auth = getAuth(app);
  const db = getFirestore(app);

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const { name, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // Add user to the database

      await addDoc(collection(db, "users"), {
        name,
        email,
        id: res.user.uid,
        avatar: avatar.url,
        blocked: [],
      });

      const userChatsDocRef = doc(db, "userchats", res.user.uid);

      await setDoc(userChatsDocRef, {
        chats: [],
      });

      toast.success("Account created successful! You can now login");
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { email, password } = Object.fromEntries(formData);

    console.log(email + " " + password);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // create a function that will display greeting message depending on the time of the day
  const greet = () => {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const user = {
    name: '',
    avatar: "👩🏽‍💼",
  };



  return (
    <>
      <div className="auth">
        <div className="login">
          <div className="greetings">
            <h2>
              {greet()}, {user.name}
              {user.avatar}
            </h2>
          </div>

          <div className="form">
            <form className="loginForm" onSubmit={handleLogin}>
              <div>
                <h2>Welcome Back</h2>
                <h3>Login</h3>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className="form-group">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
        <div className="seperator">
          <hr />
        </div>
        <div className="signup">
          <div className="greetings">
            <h2>
              {greet()},
              {user.avatar}
            </h2>
          </div>
          <div className="title">
            <h2>Create an account here</h2>
          </div>
          <div className="form">
            <form className="signupForm" onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="file" className="img">
                  <img src={avatar.url || "./avatar.png"} alt="" />
                  <span>Upload an image</span>
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleAvatar}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className="form-group">
                <button type="submit">Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
