import "./login.css";
import { useState } from "react";

const Login = () => {
const [avatar, setAvatar] = useState({
    File: null,
    URL: "",
});

const handleAvatar = (e) => { 
    if (e.target.files[0]) {
    setAvatar({
        File: e.target.files[0],
        URL: URL.createObjectURL(e.target.files[0]),
    });
    }}

const handleLogin = (e) => {
    e.preventDefault();
}

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Se connecter</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Creer un compte</h2>
        <form>
          <label htmlFor="file">
            <img src={avatar.URL || "./avatar.png"} alt="" />
            Télécharger une image</label>
          <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar}/>
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
