import { useEffect, useRef, useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';

const Chat = () => {
    const [chat, setChat] = useState();
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');

    const { chatId } = useChatStore();

    const refEnd = useRef(null);

    useEffect(() => {
        refEnd.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
        const unSub = onSnapshot(doc(db, 'chats', chatId), (res) => {
            setChat(res.data());
        });
    }, [chatId]);
    console.log(chat);
    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    };
    return (
        <div className='chat'>
            <div className='top'>
                <div className='user'>
                    <img
                        src='./avatar.png'
                        alt=''
                    />
                    <div className='texts'>
                        <span>Jane Doe</span>
                        <p>
                            nam libero justo laoreet sit amet cursus sit amet.
                        </p>
                    </div>
                </div>
                <div className='icons'>
                    <img
                        src='./phone.png'
                        alt=''
                    />
                    <img
                        src='./video.png'
                        alt=''
                    />
                    <img
                        src='./info.png'
                        alt=''
                    />
                </div>
            </div>
            <div className='center'>
                {chat.messages.map((message) => (
                    <div
                        className='message'
                        key={message?.createAt}
                    >
                        <img
                            src='./avatar.png'
                            alt=''
                        />
                        <div className='texts'>
                            <img
                                src={message.img}
                                alt=''
                            />
                            <p>{message.text}</p>
                            {/* <span>{message}</span> */}
                        </div>
                    </div>
                ))}
                <div ref={refEnd}></div>
            </div>
            <div className='bottom'>
                <div className='icons'>
                    <img
                        src='./img.png'
                        alt=''
                    />
                    <img
                        src='./camera.png'
                        alt=''
                    />
                    <img
                        src='./mic.png'
                        alt=''
                    />
                </div>
                <input
                    type='text'
                    placeholder='Type a message...'
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <div className='emoji'>
                    <img
                        src='./emoji.png'
                        alt=''
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className='picker'>
                        <EmojiPicker
                            open={open}
                            onEmojiClick={handleEmoji}
                        />
                    </div>
                </div>
                <button className='sendButton'>Send</button>
            </div>
        </div>
    );
};

export default Chat;
