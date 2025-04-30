import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
const [open, setOpen] = useState(false);
const [text, setText] = useState("");

const endRef = useRef(null)

useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
},[])


const handleEmoji = e =>{
    setText((prev) => prev + e.emoji);
    setOpen(false)
};

console.log(text)


    return(
        <div className = "chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Luffy</span>
                        <p>I'm gonna be king of the pirates.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt=""/>
                    <img src="./video.png" alt=""/>
                    <img src="./info.png" alt=""/>
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <p>If you don't take risks, you can't create a future
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>ok
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <p>If you don't take risks, you can't create a future
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>ok
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <p>If you don't take risks, you can't create a future
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://i.pinimg.com/736x/80/e3/ee/80e3eed289a1342871f53759e75d5a1d.jpg"/>
                        <p>okayyyyy
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref = {endRef} ></div>
            </div>
            <div className="bottom">
                <div className="icons">
                <img src="./img.png" alt=""/>
                <img src="./camera.png" alt=""/>
                <img src="./mic.png" alt=""/>
                </div>
                <input 
                  className="input" type="text" 
                  placeholder="Type a message..." 
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
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat