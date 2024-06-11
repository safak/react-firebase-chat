import { useState } from "react";
import ItemLogin from "./ItemLogin";
import FormLogin from "./FormLogin";
import InputLogin from "./InputLogin";
import ButtonLogin from "./ButtonLogin";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

function Login() {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleAvatar(e) {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userChats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created! You can login now!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("You're signed in!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex h-full w-full items-center gap-[100px]">
      <ItemLogin>
        <h2 className="font-bold">Welcome back,</h2>
        <FormLogin onSumbit={handleLogin}>
          <InputLogin type="text" placeholder="Email" name="email" />
          <InputLogin
            type="password"
            placeholder="Password"
            name="password"
            autocomplete="on"
          />

          <ButtonLogin disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign In"}
          </ButtonLogin>
        </FormLogin>
      </ItemLogin>

      <div className="h-4/5 w-[2px] border border-border-gray"></div>

      <ItemLogin>
        <h2 className="font-bold">Create an Account</h2>
        <FormLogin onSumbit={handleRegister}>
          <label
            className="flex w-full cursor-pointer items-center justify-between underline"
            htmlFor="file"
          >
            <img
              className="h-[50px] w-[50px] rounded-[10px] object-cover opacity-60"
              src={avatar.url || "./avatar.png"}
              alt=""
            />
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleAvatar}
          />

          <InputLogin type="text" placeholder="Username" name="username" />
          <InputLogin type="text" placeholder="Email" name="email" />
          <InputLogin
            type="password"
            placeholder="Password"
            name="password"
            autocomplete="on"
          />

          <ButtonLogin disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign Up"}
          </ButtonLogin>
        </FormLogin>
      </ItemLogin>
    </div>
  );
}

export default Login;
