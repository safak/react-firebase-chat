import { useState } from "react";
import ItemLogin from "./ItemLogin";
import FormLogin from "./FormLogin";
import InputLogin from "./InputLogin";
import ButtonLogin from "./ButtonLogin";
import { toast } from "react-toastify";

function Login() {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  function handleAvatar(e) {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  }

  function handleRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    console.log(username, email, password);
  }

  function handleLogin(e) {
    e.preventDefault();
  }

  return (
    <div className="flex h-full w-full items-center gap-[100px]">
      <ItemLogin>
        <h2>Welcome back,</h2>
        <FormLogin onSumbit={handleLogin}>
          <InputLogin type="text" placeholder="Email" name="email" />
          <InputLogin type="password" placeholder="Password" name="password" />

          <ButtonLogin>Sign In</ButtonLogin>
        </FormLogin>
      </ItemLogin>

      <div className="h-4/5 w-[2px] border border-border-gray"></div>

      <ItemLogin>
        <h2>Create an Account</h2>
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
          <InputLogin type="password" placeholder="Password" name="password" />

          <ButtonLogin>Sign Up</ButtonLogin>
        </FormLogin>
      </ItemLogin>
    </div>
  );
}

export default Login;
