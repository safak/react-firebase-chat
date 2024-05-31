import React, { useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/addUser";

const Chatlist = () => {
  // state de depart à false si addMode est true, on affiche le bouton add sinon on affiche le bouton minus
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Chercher..." />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="add"
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />

        <div className="texts">
          <span>Khedy Enami</span>
          <span>Kikibouu </span>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />

        <div className="texts">
          <span>Neila Badirou</span>
          <span>1-2-3 </span>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default Chatlist;
