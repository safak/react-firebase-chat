import { useEffect, useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/addUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot, updateDoc, setDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useChatStore } from "../../../lib/chatStore";

const ADMIN_USER_ID = "aqCzCkdzXXgio3Ws2lAnzciS0vl2";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  // const [addMode, setAddMode] = useState(false);
  const [input, setInput] = useState("");

  const { currentUser } = useUserStore();
  const { chatId, changeChat } = useChatStore();

  // 2) pull in the Add-Admin logic directly
  const handleAddAdmin = async () => {
    // fetch admin’s profile
    const adminSnap = await getDoc(doc(db, "users", ADMIN_USER_ID));
    if (!adminSnap.exists()) {
      console.warn("Admin user not found!");
      return;
    }
    const foundUser = { id: ADMIN_USER_ID, ...adminSnap.data() };

    // build a stable chatId
    const sorted = [currentUser.id, foundUser.id].sort();
    const chatId = sorted.join("_");
    const botId = `bot_${chatId}`;
    const chatRef = doc(db, "chats", chatId);

    // create the chat doc if needed
    const chatSnap = await getDoc(chatRef);
    if (!chatSnap.exists()) {
      await setDoc(chatRef, {
        participants: [currentUser.id, foundUser.id, botId],
        messages: [],
        createdAt: Date.now(),
      });
    }

    // update each user’s userchats array
    for (const uid of [currentUser.id, foundUser.id]) {
      const ucRef = doc(db, "userchats", uid);
      await updateDoc(ucRef, {
        chats: arrayUnion({
          chatId,
          receiverId: uid === currentUser.id ? foundUser.id : currentUser.id,
          lastMessage: "",
          updatedAt: Date.now(),
          isSeen: uid === currentUser.id,
        }),
      });
    }

    // switch into the new chat right away
    changeChat(chatId);
  };

  useEffect(() => {
    if (!currentUser?.id) return;

    const userChatsDoc = doc(db, "userchats", currentUser.id);
    const unSub = onSnapshot(userChatsDoc, async (res) => {
      const data = res.data();
      if (!data || !Array.isArray(data.chats)) {
        setChats([]);
        return;
      }

      const items = data.chats;
      const chatData = await Promise.all(
        items.map(async (item) => {
          const userSnap = await getDoc(doc(db, "users", item.receiverId));
          return { ...item, user: userSnap.data() };
        })
      );

      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
    });

    return () => unSub();
  }, [currentUser?.id]);

  const handleSelect = async (chat) => {
    const userChats = chats.map((item) => {
      const { user, ...rest } = item;
      return rest;
    });

    const chatIndex = userChats.findIndex(
      (item) => item.chatId === chat.chatId
    );

    userChats[chatIndex].isSeen = true;

    const userChatsRef = doc(db, "userchats", currentUser.id);

    try {
      await updateDoc(userChatsRef, {
        chats: userChats,
      });
      changeChat(chat.chatId);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredChats = chats.filter((c) =>
    c.user.username.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {/* <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        /> */}
        <img
          src="./plus.png"
          alt="Add admin chat"
          className="add"
          onClick={handleAddAdmin}
        />
      </div>
      {filteredChats.map((chat) => (
        <div
          className="item"
          key={chat.chatId}
          onClick={() => handleSelect(chat)}
          style={{
            backgroundColor: chat?.isSeen ? "transparent" : "#5183fe",
          }}
        >
          <img
            src={
              chat.user.blocked?.includes(currentUser.id) || currentUser.blocked?.includes(chat.user.id)
                ? "./avatar.png"
                : chat.user.avatar || "./avatar.png"
            }
            alt=""
          />
          <div className="texts">
            <span>
              {chat.user.blocked?.includes(currentUser.id) || currentUser.blocked?.includes(chat.user.id)
                ? "User"
                : chat.user.username}
            </span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}

      {/* {addMode && <AddUser />} */}
    </div>
  );
};

export default ChatList;