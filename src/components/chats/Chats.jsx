import { useEffect, useRef, useState } from "react";
import "./Chats.css";
import EmojiPicker from "emoji-picker-react";

export const Chats = () => {
  const [pickEmoji, setPickEmoji] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const toggleEmojiPicker = () => {
    setPickEmoji((prev) => !prev);
  };

  const handleEmo = (e) => {
    setText((prev) => prev + e.emoji);
    setPickEmoji(false);
  };

  console.log(text);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="userDetails">
            <span>Caroline Sarfo</span>
            <p>Lorem ipsum dolor sit amet.</p>
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
          <div className="messageText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, voluptates at? Ad laborum eos quam sit, corrupti,
              laboriosam vitae facilis earum corporis placeat, aut dolor amet
              dignissimos eligendi accusamus magni!
            </p>
            <div className="date">
              <span>1 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="messageText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, voluptates at? Ad laborum eos quam sit, corrupti,
              laboriosam vitae facilis earum corporis placeat, aut dolor amet
              dignissimos eligendi accusamus magni!
            </p>
            <div className="date">
              <span>1 minutes ago</span>
            </div>
          </div>
          <img src="./avatar.png" alt="" />
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="messageText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, voluptates at? Ad laborum eos quam sit, corrupti,
              laboriosam vitae facilis earum corporis placeat, aut dolor amet
              dignissimos eligendi accusamus magni!
            </p>
            <div className="date">
              <span>1 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="message own">
          <div className="messageText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, voluptates at? Ad laborum eos quam sit, corrupti,
              laboriosam vitae facilis earum corporis placeat, aut dolor amet
              dignissimos eligendi accusamus magni!
            </p>
            <div className="date">
              <span>1 minutes ago</span>
            </div>
          </div>

          <img src="./avatar.png" alt="" />
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="messageText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, voluptates at? Ad laborum eos quam sit, corrupti,
              laboriosam vitae facilis earum corporis placeat, aut dolor amet
              dignissimos eligendi accusamus magni!
            </p>
            <div className="date">
              <span>1 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="messageText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, voluptates at? Ad laborum eos quam sit, corrupti,
              laboriosam vitae facilis earum corporis placeat, aut dolor amet
              dignissimos eligendi accusamus magni!
            </p>
            <div className="date">
              <span>1 minutes ago</span>
            </div>
          </div>
          <img src="./avatar.png" alt="" />
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="messageText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, voluptates at? Ad laborum eos quam sit, corrupti,
              laboriosam vitae facilis earum corporis placeat, aut dolor amet
              dignissimos eligendi accusamus magni!
            </p>
            <div className="date">
              <span>1 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="messageText">
            <img className="imgSent" src="./background.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, voluptates at? Ad laborum eos quam sit, corrupti,
              laboriosam vitae facilis earum corporis placeat, aut dolor amet
              dignissimos eligendi accusamus magni!
            </p>
            <div className="date">
              <span>1 minutes ago</span>
            </div>
          </div>
          <img src="./avatar.png" alt="" />
        </div>
        <div ref={endRef}></div>
      </div>
      {/* <div ref={endRef}></div> */}

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>

        <div className="messageInput">
          <input
            type="text"
            value={text}
            placeholder="Type a message..."
            onChange={(e) => setText(e.target.value)}
          />
          <div className="emoji">
            <img src="./emoji.png" alt="" onClick={toggleEmojiPicker} />
            <div className="picker">
              {pickEmoji && <EmojiPicker onEmojiClick={handleEmo} />}
            </div>
          </div>
          <button className="send">Send</button>
        </div>
      </div>
    </div>
  );
};
