import { useEffect, useState, useRef } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {

    const [ open, setOpen ] = useState(false);
    const [ text, setText ] = useState("");

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior: "smooth"});
    }, []);

    const handleEmoji = (e) => {
        setText(prev => prev + e.emoji);
        setOpen(false);
    }
    return (
        <div className="chat">

            <div className="top">
                <div className="user">
                    <img src="./public/avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit, amet</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./public/phone.png" alt="" />
                    <img src="./public/video.png" alt="" />
                    <img src="./public/info.png" alt="" />
                </div>
            </div>

            <div className="center">
                <div className="message">
                    <img src="./public/avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias sequi hic? Tempora assumenda maiores soluta totam, aliquam iste ex.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias sequi hic? Tempora assumenda maiores soluta totam, aliquam iste ex.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./public/avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias sequi hic? Tempora assumenda maiores soluta totam, aliquam iste ex.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias sequi hic? Tempora assumenda maiores soluta totam, aliquam iste ex.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./public/avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias sequi hic? Tempora assumenda maiores soluta totam, aliquam iste ex.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://images.pexels.com/photos/28283491/pexels-photo-28283491/free-photo-of-a-man-with-glasses-and-a-beanie-on.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias sequi hic? Tempora assumenda maiores soluta totam, aliquam iste ex.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./public/avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias sequi hic? Tempora assumenda maiores soluta totam, aliquam iste ex.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>

            <div className="bottom">
                <div className="icons">
                    <img src="./public/img.png" alt="" />
                    <img src="./public/camera.png" alt="" />
                    <img src="./public/mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message ..." value={text} onChange={(e) => setText(e.target.value)} />
                <div className="emoji">
                    <img src="./public/emoji.png" alt="" onClick={() => setOpen(prev => !prev)} />
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