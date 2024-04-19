import "./Login.css";
import { useState } from "react";

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

  // create a function that will display greeting message depending on the time of the day
  const greet = () => {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 24) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const user = {
    name: "Caroline Sarfo",
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
            <form className="loginForm">
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
              {greet()}, {user.name}
              {user.avatar}
            </h2>
          </div>
          <div className="title">
            <h2>Create an account here</h2>
          </div>
          <div className="form">
            <form className="signupForm">
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
