import { useState } from "react";
import { toast } from "react-toastify";
import "./login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "/src/lib/firebase.js"
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase.js";

const Login = () => {

    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const handleAvatar = e => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = e => {
        e.preventDefault();
        toast.warn("Hello", {
            position: "bottom-center"
        });
    }

    const handleRegister = async e => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const {username, email, password} = Object.fromEntries(formData);
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                id: res.user.uid,
                blocked:[],

            });
            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: []
            });
            toast.success("User Created", {
                position: "bottom-center"
            });
        } catch (err) {
            console.log(err)
            toast.error(err.message);
        }
    }

    return <div className="login">
        <div className="item">
            <h2>Welcome Back,</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
            <h2>Create Account</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="file">
                    <img src={avatar.url || "./avatar.png"} alt="" />
                    Upload An Image
                </label>
                <input type="file" id="file" style={{display: "none"}} onChange={handleAvatar}/>
                <input type="text" placeholder="username" name="username" />
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Sign Up</button>
            </form>
        </div>
    </div>
}

export default Login;