import React from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    // console.log(e);
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Tushank Bhardwaj</span>
            <p>Lorem ipsum dolor sit amet .</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              enim minus velit provident reprehenderit soluta repudiandae
              aliquam, molestias ratione nemo temporibus, modi voluptatibus
              laudantium, alias earum vel ipsum debitis? Architecto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              enim minus velit provident reprehenderit soluta repudiandae
              aliquam, molestias ratione nemo temporibus, modi voluptatibus
              laudantium, alias earum vel ipsum debitis? Architecto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              enim minus velit provident reprehenderit soluta repudiandae
              aliquam, molestias ratione nemo temporibus, modi voluptatibus
              laudantium, alias earum vel ipsum debitis? Architecto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              enim minus velit provident reprehenderit soluta repudiandae
              aliquam, molestias ratione nemo temporibus, modi voluptatibus
              laudantium, alias earum vel ipsum debitis? Architecto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              enim minus velit provident reprehenderit soluta repudiandae
              aliquam, molestias ratione nemo temporibus, modi voluptatibus
              laudantium, alias earum vel ipsum debitis? Architecto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              enim minus velit provident reprehenderit soluta repudiandae
              aliquam, molestias ratione nemo temporibus, modi voluptatibus
              laudantium, alias earum vel ipsum debitis? Architecto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Chat;
