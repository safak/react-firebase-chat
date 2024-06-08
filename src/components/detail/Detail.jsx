import { auth, db } from "../../lib/firebase";
import OptionDetail from "./OptionDetail";

import { useUserStore } from "../../lib/userStore";
import { useChatStore } from "../../lib/chatStore";
import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDate } from "../../utils/getDate";

function Detail() {
  const {
    chatId,
    user,
    isCurrentUserBlocked,
    isReceiverlocked,
    changeBlock,
    signOutChat,
  } = useChatStore();

  const [sharedImages, setSharedImges] = useState([]);
  const { currentUser, signOutUser } = useUserStore();

  // Listening updates in CHATS collection and Triggering useState Update if any changes have happened.
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setSharedImges(res.data().messages);
    });

    return () => unSub();
  }, [chatId]);

  function userSignOut() {
    auth.signOut();

    // Sign Out Local State Zustand
    signOutChat();
    signOutUser();
  }

  async function handleBlock() {
    if (!user) return;

    // Creating Ref for Current User / USERS collection
    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex-1 overflow-scroll">
      {/* user */}
      <div className="flex flex-col items-center gap-3 border-b border-[#dddddd35] px-5 py-[30px]">
        <img
          src={user?.avatar || "./avatar.png"}
          alt=""
          className="h-[100px] w-[100px] rounded-full object-cover"
        />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      {/* info */}
      <div className="flex flex-col gap-[25px] p-5">
        <OptionDetail src="arrowUp" optionName="Chat Settings" />

        <OptionDetail src="arrowUp" optionName="Privacy & Help" />

        {sharedImages.length > 0 &&
          sharedImages
            .filter((item) => item.img)
            .map((message) => {
              const imgUrl = message.img;
              const date = getDate(message.createdAt.seconds);
              return (
                <OptionDetail
                  key={message.createdAt}
                  src="arrowDown"
                  optionName="Shared photos"
                  url={imgUrl}
                  date={date}
                  photos={true}
                />
              );
            })}

        <OptionDetail src="arrowUp" optionName="Shared Files" />

        <button
          className="cursor-pointer rounded-[5px] bg-danger-red p-[15px] text-white hover:bg-[rgba(220,20,60,0.796)]"
          onClick={handleBlock}
        >
          {isCurrentUserBlocked
            ? "You are blocked!"
            : isReceiverlocked
              ? "User blocked"
              : "Block user"}
        </button>
        <button
          className="rounded-[5px] bg-[#1a73e8] p-[10px] hover:bg-[#1034e6]"
          onClick={userSignOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Detail;
