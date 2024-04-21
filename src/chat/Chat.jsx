import React from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../library/firebase";
import { useChatStore } from "../library/chatStore";
import { useUserStore } from "../library/userStore";

function Chat() {
  const [chat, setChat] = useState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);
  const { chatId } = useChatStore();
  const { currentUser } = useUserStore();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, []);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  const handleEmoji = (e) => {
    // console.log(e);
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleSend = async () => {
    if (text === "") return;

    try {
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
        }),
      });

      const userChatsRef = doc(db, "userChats", currentUser.id);
      const userChatsSnapshot = await getDoc(userChatsRef);

      if (userChatsSnapshot.exists()) {
        const userChatsData = userChatsSnapshot.data();

        const chatIndex = userChatsData.chats.findIndex(
          (c) => c.chatId === chatId
        );

        userChatsData[chatIndex].updatedAt == Date.now();

        await updateDoc(userChatsRef, {
          chats: userChatsData.chats,
        });
      }
    } catch (err) {
      console.log(err);
    }
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
        {chat?.message?.map((message) => (
          <div className="message own" key={message?.createAt}>
            <div className="texts">
              {message.img && <img src={message.img} alt="" />}
              <p>{message.text}</p>
              {/* <span>1 min ago</span> */}
            </div>
          </div>
        ))}
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
        <button className="sendButton" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
