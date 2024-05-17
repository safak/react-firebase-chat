import { useEffect, useRef, useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const Chat = () => {
    const [chat, setChat] = useState();
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');

    const refEnd = useRef(null);

    useEffect(() => {
        refEnd.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
        const unSub = onSnapshot(
            doc(db, 'chats', 'TMSE4G0teZbMQKoq75DVhDEEwZQ2'),
            (res) => {
                setChat(res.data());
            }
        );
    }, []);

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
                <div className='message own'>
                    <div className='texts'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{' '}
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <img
                        src='./avatar.png'
                        alt=''
                    />
                    <div className='texts'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{' '}
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message own'>
                    <div className='texts'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{' '}
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <img
                        src='./avatar.png'
                        alt=''
                    />
                    <div className='texts'>
                        <img
                            src='https://zdjecia-cdn.r.pl/hotel/3984/zakwaterowanie-umn_3984_131867_3x2.jpg?class=khMainGalleryDesktopLargePrimaryV2'
                            alt=''
                        />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{' '}
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
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
