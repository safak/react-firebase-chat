import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import AddUser from "./addUser/AddUser";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useUserStore } from "../../../lib/userStore";
import { useChatStore } from "../../../lib/chatStore";

function ChatList() {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  const { currentUser, chatId } = useUserStore();
  const { changeChat } = useChatStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userChats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
          // Getting Receiver Object from users collection by receiver ID
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          // Receiver User Object
          const user = userDocSnap.data();

          // Returing Chat Item Object and Receiver User Object
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

  async function handleSelect(chat) {
    const userChats = chats.map((item) => {
      const { user, ...rest } = item;

      return rest;
    });

    const chatIndex = userChats.findIndex(
      (item) => item.chatId === chat.chatId,
    );

    const userChatsRef = doc(db, "userChats", currentUser.id);

    userChats[chatIndex].isSeen = true;

    try {
      await updateDoc(userChatsRef, {
        chats: userChats,
      });
      changeChat(chat.chatId, chat.user);
    } catch (error) {
      console.log(error);
    }
  }

  const filteredChats = chats.filter((c) =>
    c.user.username.toLowerCase().includes(inputSearch.toLowerCase()),
  );

  return (
    <div className="flex-1 overflow-scroll">
      <div className="flex items-center gap-5 p-5">
        <div className="flex flex-1 gap-5 rounded-[10px] bg-dark-blue p-[10px]">
          <img className="h-5 w-5" src="./search.png" alt="" />
          <input
            type="text"
            placeholder="Search..."
            className="flex border-none bg-transparent text-white outline-none placeholder:text-sm"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </div>
        <img
          className="h-9 w-9 cursor-pointer rounded-[10px] bg-dark-blue p-[10px]"
          src={addMode ? "./minus.png" : "./plus.png"}
          onClick={() => setAddMode((prevState) => !prevState)}
          alt=""
        />
      </div>

      {filteredChats.map((chat) => {
        return (
          <ListItem
            key={chat.updatedAt}
            chat={chat}
            onClick={() => handleSelect(chat)}
            currentUser={currentUser}
          />
        );
      })}

      {addMode && <AddUser />}
    </div>
  );
}

export default ChatList;
