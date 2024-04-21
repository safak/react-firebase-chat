import React, { useEffect } from "react";
import "./ChatList.css";
import { useState } from "react";
import AddUser from "./addUser/addUser";
import { useUserStore } from "../../library/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../library/firebase";
import { useChatStore } from "../../library/chatStore";

function ChatList() {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const { currentUser } = useUserStore();
  const { chatId, changeChat } = useChatStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  const handleSelect = (chat) => {
    changeChat(chat.chatId, chat.user);
  };

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          onClick={() => setAddMode((prev) => !prev)} // To change the state to previous to new value, false to true
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
        />
      </div>
      {chats.map((chat) => (
        <div
          className="item"
          key={chat.chatId}
          onClick={() => handleSelect(chat)}
        >
          <img src={chat.user.avatar || "./avatar.png"} alt="" />
          <div className="text">
            <span>{chat.user.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
      {addMode && <AddUser />}
    </div>
  );
}

export default ChatList;
