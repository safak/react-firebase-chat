import { auth, db } from "../../lib/firebase";
import OptionDetail from "./OptionDetail";

import { useUserStore } from "../../lib/userStore";
import { useChatStore } from "../../lib/chatStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

function Detail() {
  const { chatId, user, isCurrentUserBlocked, isReceiverlocked, changeBlock } =
    useChatStore();

  const { currentUser } = useUserStore();

  function userSignOut() {
    auth.signOut();
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

        <OptionDetail
          src="arrowDown"
          optionName="Shared photos"
          photos={true}
        />

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
        <button className="bg-[#1a73e8] p-[10px]" onClick={userSignOut}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Detail;
