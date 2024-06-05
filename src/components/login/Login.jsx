import { useState } from "react";
import ItemLogin from "./ItemLogin";
import FormLogin from "./FormLogin";
import InputLogin from "./InputLogin";
import ButtonLogin from "./ButtonLogin";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

function Login() {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  console.log(avatar.file);

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

          <ButtonLogin disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign In"}
          </ButtonLogin>
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

          <ButtonLogin disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign Up"}
          </ButtonLogin>
        </FormLogin>
      </ItemLogin>
    </div>
  );
}

export default Login;
