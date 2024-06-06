import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import AddUser from "./addUser/AddUser";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useUserStore } from "../../../lib/userStore";

function ChatList() {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userChats", currentUser.id),
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
      },
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  return (
    <div className="flex-1 overflow-scroll">
      <div className="flex items-center gap-5 p-5">
        <div className="flex flex-1 gap-5 rounded-[10px] bg-dark-blue p-[10px]">
          <img className="h-5 w-5" src="./search.png" alt="" />
          <input
            type="text"
            placeholder="Search..."
            className="flex border-none bg-transparent text-white outline-none placeholder:text-sm"
          />
        </div>
        <img
          className="h-9 w-9 cursor-pointer rounded-[10px] bg-dark-blue p-[10px]"
          src={addMode ? "./minus.png" : "./plus.png"}
          onClick={() => setAddMode((prevState) => !prevState)}
          alt=""
        />
      </div>

      {chats.map((chat) => {
        return <ListItem key={chat.chatId} chat={chat} />;
      })}

      {addMode && <AddUser />}
    </div>
  );
}

export default ChatList;
