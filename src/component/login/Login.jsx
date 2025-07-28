import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./login.css";
import { useState, useEffect } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth, db } from "../../lib/firebase.js";
import { doc, setDoc } from "firebase/firestore";


const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);

      setAvatar({ file, url });
    }
  };

  // 避免 memory leak
  useEffect(() => {
    return () => {
      if (avatar.url) {
        URL.revokeObjectURL(avatar.url);
      }
    };
  }, [avatar.url]);

  // ✅ 登入處理
  const handleLogin = async (e) => {
    e.preventDefault();
    

    const formData = new FormData(e.target);

    const { loginemail, loginpassword } = Object.fromEntries(formData);

    try{

      await signInWithEmailAndPassword(auth, loginemail, loginpassword);

    }catch(err){
      console.log(err)
      toast.error(err.message)
    }
  };




  // ✅ 註冊處理
  const handleRegister = async (e) => {
    e.preventDefault();


    const formData = new FormData(e.target);

    const { regusername, regemail, regpassword } = Object.fromEntries(formData);

    try{


      const res = await createUserWithEmailAndPassword(auth,regemail,regpassword)

      await setDoc(doc(db,"users", res.user.uid),{
        regusername,
        regemail,
        id: res.user.uid,
        blocked:[],

      });

      await setDoc(doc(db,"userchats", res.user.uid),{
        chats:[],

      });

      toast.success("Account created!")



    }catch(err){
      console.log(err)
      toast.error(err.message)
    }
  };

  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="email" name="loginemail" />
          <input type="password" placeholder="password" name="loginpassword" />
          <button type="submit">SIGN IN</button>
        </form>
      </div>



      <div className="seperator"></div>



      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="avatar" />
            Upload your image
          </label>

          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="User name" name="regusername" />
          <input type="text" placeholder="email" name="regemail" />
          <input type="password" placeholder="password" name="regpassword" />
          <button type="submit">SIGN UP</button>
        </form>
      </div>

      {/* ✅ 這行讓 toast 能正常顯示 */}
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;
