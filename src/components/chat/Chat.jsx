import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./chat.css";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior:"smooth"});
    }, []);

    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    };

    return (
        <div className="chat">
            {/* Top */}
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>

            {/* Center */}
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, modi voluptatibus iste veritatis enim temporibus ipsa natus eveniet corrupti est odio eius in voluptatum? Quae quam quisquam maxime deleniti laboriosam?</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://cdnuploads.aa.com.tr/uploads/userFiles/8e036cdc-7fae-4434-9c64-71791e497147/TOGG-.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, modi voluptatibus iste veritatis enim temporibus ipsa natus eveniet corrupti est odio eius in voluptatum? Quae quam quisquam maxime deleniti laboriosam?</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://cdnuploads.aa.com.tr/uploads/userFiles/8e036cdc-7fae-4434-9c64-71791e497147/TOGG-.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, modi voluptatibus iste veritatis enim temporibus ipsa natus eveniet corrupti est odio eius in voluptatum? Quae quam quisquam maxime deleniti laboriosam?</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://cdnuploads.aa.com.tr/uploads/userFiles/8e036cdc-7fae-4434-9c64-71791e497147/TOGG-.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>

            {/* Bottom */}
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input
                    type="text"
                    placeholder="Type a message"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <div className="emoji">
                    <img
                        src="./emoji.png"
                        alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="picker">
                        <EmojiPicker
                            open={open}
                            onEmojiClick={handleEmoji}
                        />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    );
}

export default Chat;