import AddUser from "./addUser/AddUser";
import "./chat.css";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";

export const Chat = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <>
      <div className="chatList">
        <div className="search">
          <div className="searchBar">
            {/* <img src="./search.png" alt="" className="icon"/> */}
            <CiSearch className="icon"/>
            <input type="text" placeholder="Search ...." />
          </div>

          <div onClick={() => setAddMode((prev) => !prev)} className="add">
          {addMode ? <IoRemove className="icon"/> : <IoAdd className="icon"/>}
          </div>
          {/* <img
            src=
            alt=""
            className="add"
            onClick={() => setAddMode((prev) => !prev)}
          /> */}
        </div>

        <div className="chatItems">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Kofi Pascal</span>
            <p>Hello, Edward</p>
          </div>
        </div>

        <div className="chatItems">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Kofi Pascal</span>
            <p>Hello, Edward</p>
          </div>
        </div>

        <div className="chatItems">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Kofi Pascal</span>
            <p>Hello, Edward</p>
          </div>
        </div>

        <div className="chatItems">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Kofi Pascal</span>
            <p>Hello, Edward</p>
          </div>
        </div>

        <div className="chatItems">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Kofi Pascal</span>
            <p>Hello, Edward</p>
          </div>
        </div>
        <div className="chatItems">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Kofi Pascal</span>
            <p>Hello, Edward</p>
          </div>
        </div>
        <div className="chatItems">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Kofi Pascal</span>
            <p>Hello, Edward</p>
          </div>
        </div>
        <div className="chatItems">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Kofi Pascal</span>
            <p>Hello, Edward</p>
          </div>
        </div>
        <div className="chatItems">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Kofi Pascal</span>
            <p>Hello, Edward</p>
          </div>
        </div>
        <div className="chatItems">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Kofi Pascal</span>
            <p>Hello, Edward</p>
          </div>
        </div>
        <div className="chatItems">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Kofi Pascal</span>
            <p>Hello, Edward</p>
          </div>
        </div>
        <div className="chatItems">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Kofi Pascal</span>
            <p>Hello, Edward</p>
          </div>
        </div>  
      </div>
     {addMode && <AddUser/>}
    </>
  );
};
