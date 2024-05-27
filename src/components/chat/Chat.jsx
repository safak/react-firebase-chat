import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Yann Boucka</span>
            <p>Miami Heat basketball</p>
          </div>
        </div>

        <div className="icons">
          <img src="./phone" alt="" />
          <img src="./video" alt="" />
          <img src="./info" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              perspiciatis magni vero ducimus at rerum cupiditate accusantium
              ipsa consectetur omnis, sapiente maxime a debitis reiciendis
              aspernatur nisi, veritatis eos aliquid?
            </p>
            <span>18h09</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              perspiciatis magni vero ducimus at rerum cupiditate accusantium
              ipsa consectetur omnis, sapiente maxime a debitis reiciendis
              aspernatur nisi, veritatis eos aliquid?
            </p>
            <span>18h09</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              perspiciatis magni vero ducimus at rerum cupiditate accusantium
              ipsa consectetur omnis, sapiente maxime a debitis reiciendis
              aspernatur nisi, veritatis eos aliquid?
            </p>
            <span>18h09</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              perspiciatis magni vero ducimus at rerum cupiditate accusantium
              ipsa consectetur omnis, sapiente maxime a debitis reiciendis
              aspernatur nisi, veritatis eos aliquid?
            </p>
            <span>18h09</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              perspiciatis magni vero ducimus at rerum cupiditate accusantium
              ipsa consectetur omnis, sapiente maxime a debitis reiciendis
              aspernatur nisi, veritatis eos aliquid?
            </p>
            <span>18h09</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              perspiciatis magni vero ducimus at rerum cupiditate accusantium
              ipsa consectetur omnis, sapiente maxime a debitis reiciendis
              aspernatur nisi, veritatis eos aliquid?
            </p>
            <span>18h09</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              perspiciatis magni vero ducimus at rerum cupiditate accusantium
              ipsa consectetur omnis, sapiente maxime a debitis reiciendis
              aspernatur nisi, veritatis eos aliquid?
            </p>
            <span>18h09</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/5157735/pexels-photo-5157735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              perspiciatis magni vero ducimus at rerum cupiditate accusantium
              ipsa consectetur omnis, sapiente maxime a debitis reiciendis
              aspernatur nisi, veritatis eos aliquid?
            </p>
            <span>18h09</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Ecrire un message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
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
        <button className="sendButton">Envoyer</button>
      </div>
    </div>
  );
};

export default Chat;
