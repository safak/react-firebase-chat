import { useEffect, useRef, useState } from "react";
import "./Chats.css";
import EmojiPicker from "emoji-picker-react";
import { IoMdCall } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { MdOutlineEmojiEmotions } from "react-icons/md";



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
          <IoMdCall/>
          <IoVideocamOutline/>
          <IoIosInformationCircleOutline/>
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

      <div className="bottom">
        <div className="icons">
          <CiImageOn/>
          <CiCamera/>
          <CiMicrophoneOn/>
        </div>

        <div className="messageInput">
          <textarea
            type="text"
            value={text}
            placeholder="Type a message..."
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="emoji">
            <MdOutlineEmojiEmotions className="emo" onClick={toggleEmojiPicker}/>
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
