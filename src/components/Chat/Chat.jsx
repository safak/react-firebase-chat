import { useEffect, useRef, useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {

    const [open, setOpen] = useState(false)
    const [text, setText] = useState("")
    const endRef = useRef(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth"})
    },[])

    const handelEmoji = e => {
        setText((prev) => prev + e.emoji)
        setOpen(false)
    }

    return (
        <div className="chat">
            <div className='top'>
                <div className='user'>
                    <img src="./avatar.png" alt="avatar" />
                    <div className='texts'>
                        <span>Joy Yo</span>
                        <p>I want 25000 opf!</p>
                    </div>
                </div>
                <div className='icons'>
                    <img src="./phone.png" alt="phone" />
                    <img src="./video.png" alt="video" />
                    <img src="./info.png" alt="info" />
                </div>
            </div>
            <div className='center'>
                <div className='message'>
                    <img src='./avatar.png' alt='avatar' />
                    <div className='texts'>
                        <p>I love to track and always do it and my goal is to track 25,000 OPF</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className='message own'>
                    <div className='texts'>
                        <p>I love to track and always do it and my goal is to track 25,000 OPF</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className='message'>
                    <img src='./avatar.png' alt='avatar' />
                    <div className='texts'>
                        <p>I love to track and always do it and my goal is to track 25,000 OPF</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className='message own'>
                    <div className='texts'>
                        <p>I love to track and always do it and my goal is to track 25,000 OPF</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <img src='./avatar.png' alt='avatar' />
                    <div className='texts'>
                        <p>I love to track and always do it and my goal is to track 25,000 OPF</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message own'>
                    <div className='texts'>
                        <img src='data:image/jpeg;base64,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' />
                        <p>I love to track and always do it and my goal is to track 25,000 OPF</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className='bottom'>
                <div className='icons'>
                    <img src="./img.png" alt="icons" />
                    <img src="./camera.png" alt="icons" />
                    <img src="./mic.png" alt="icons" />
                </div>
                <input type='text' placeholder='Send message...' value={text} onChange={(e) => setText(e.target.value)}/>
                <div className='emoji'>
                    <img src="./emoji.png" alt="emoji" onClick={() => setOpen((prev) => !prev)} />
                    <div className='picker'>
                    <EmojiPicker open={open} onEmojiClick={handelEmoji} />
                    </div>
                </div>
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}

export default Chat