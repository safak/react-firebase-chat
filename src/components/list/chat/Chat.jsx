import "./chat.css";
import { useState } from "react";

export const Chat = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <>
      <div className="chatList">
        <div className="search">
          <div className="searchBar">
            <img src="./search.png" alt="" className="icon"/>
            <input type="text" placeholder="Search ...." />
          </div>
          <img
            src={addMode ? "./minus.png" : "./plus.png"}
            alt=""
            className="add"
            onClick={() => setAddMode((prev) => !prev)}
          />
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
    </>
  );
};
