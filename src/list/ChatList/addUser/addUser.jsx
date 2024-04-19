import React from "react";
import "./addUser.css";

function AddUser() {
  return (
    <div className="addUser">
      <form>
        <input type="text" name="username" placeholder="Username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>Tushank Bhardwaj</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
}

export default AddUser;
