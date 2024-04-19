import "./user.css";
import { IoVideocamOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { FiEdit } from "react-icons/fi";


export const User = () => {
  return (
    <>
      <div className="userInfo">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div>
            <h2>Edward Apersil</h2>
            <span>Online</span>
          </div>
        </div>
        <div className="icons">
          {/* <img src="./more.png" alt="" /> */}
          <FiEdit/>
          {/* <img src="./video.png" alt="" /> */}
          <IoVideocamOutline/>
          {/* <img src="./edit.png" alt="" /> */}
          <IoIosMore/>
        </div>
      </div>
    </>
  );
};
