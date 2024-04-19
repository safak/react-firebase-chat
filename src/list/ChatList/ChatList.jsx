import React from "react";
import "./ChatList.css";
import { useState } from "react";
import AddUser from "./addUser/addUser";

function ChatList() {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          onClick={() => setAddMode((prev) => !prev)} // To change the state to previous to new value, false to true
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Tushank Bhardwaj</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Tushank Bhardwaj</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Tushank Bhardwaj</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Tushank Bhardwaj</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
}

export default ChatList;
