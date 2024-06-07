import { Fragment, useEffect, useState } from "react";
import IconImage from "./IconImage";
import EmojiPicker from "emoji-picker-react";
import Message from "./Message";
import { useEmojiPickerState } from "../../hooks/useEmojiPickerState";
import { db } from "../../lib/firebase";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import upload from "../../lib/upload";

function Chat() {
  // Custom hook, needs KEY for handling closing Emoji Container.
  const [
    open,
    closeEmojiContainer,
    endRef,
    emojiContainerRef,
    messageInputRef,
    setOpen,
  ] = useEmojiPickerState("Escape");
  const [text, setText] = useState("");
  const [chat, setChat] = useState([]);
  const [img, setImg] = useState({
    file: null,
    url: "",
  });

  const { chatId, user, isCurrentUserBlocked, isReceiverlocked } =
    useChatStore();
  const { currentUser } = useUserStore();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("hello");
  }, [endRef]);

  // Listening updates in CHATS collection and Triggering useState Update if any chanes have happened.
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => unSub();
  }, [chatId]);

  function handleEmoji(e) {
    setText((prevText) => prevText + e.emoji);
    closeEmojiContainer();
  }

  function handleImg(e) {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  }

  async function handleSend() {
    if (text === "") return;

    let imgUrl = null;

    if (img.file) {
      imgUrl = await upload(img.file);

      console.log(imgUrl);
    }
    // Updating messages array inside CHATS collection by CHAT_ID.
    try {
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(imgUrl && { img: imgUrl }),
        }),
      });

      const userIDs = [currentUser.id, user.id];

      userIDs.forEach(async (id) => {
        // Getting reference to document inside userChats collection by CURRENT_USER_ID.
        const userChatsRef = doc(db, "userChats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId,
          );
          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen =
            id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          // Updating userChats collection by USER_ID and RECEIVER_ID.
          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }

    // Resetting initial state for message inputs
    setImg({
      file: null,
      imgUrl: "",
    });

    setText("");
  }

  return (
    // chat
    <div className="flex h-full flex-[2_2_0%] flex-col border-x border-border-gray">
      {/* top */}
      <div className="flex items-center justify-between border-b border-border-gray p-5">
        <div className="flex items-center gap-5">
          <img
            className="h-[60px] w-[60px] rounded-full object-cover"
            src={user?.avatar || "./avatar.png"}
            alt=""
          />
          <div className="flex flex-col gap-[5px]">
            <span className="text-lg font-bold">{user?.username}</span>
            <p className="text-sm font-light text-[#a5a5a5]">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <IconImage src="phone" type="base" />
          <IconImage src="video" type="base" />
          <IconImage src="info" type="base" />
        </div>
      </div>

      {/* center */}
      <div className="flex flex-1 flex-col gap-5 overflow-scroll p-5">
        {chat?.messages?.map((message, index) => (
          <Fragment key={message.createdAt}>
            <Message
              // key={message?.createdAt}
              message={message}
              type={message.senderId === currentUser.id ? "own" : "base"}
              img={img}
            />
            {img.url && (
              <div
                className={`flex max-w-[70%] gap-5 ${message.senderId === currentUser.id ? "self-end" : ""}`}
              >
                <div className="flex flex-1 flex-col gap-[5px]">
                  <img
                    src={img.url}
                    alt=""
                    className="h-[300px] w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            )}
          </Fragment>
        ))}
        <div ref={endRef}></div>
      </div>

      {/* bottom */}
      <div className="mt-auto flex items-center justify-between gap-5 border-t border-[#dddddd35] p-5">
        <div className="flex gap-5">
          <label htmlFor="file">
            <IconImage src="img" type="base" />
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleImg}
          />
          <IconImage src="camera" type="base" />
          <IconImage src="mic" type="base" />
        </div>
        <input
          className="flex-1 rounded-[10px] border-none bg-dark-blue p-5 text-base text-white outline-none placeholder:text-sm disabled:cursor-not-allowed"
          type="text"
          placeholder={
            isCurrentUserBlocked || isReceiverlocked
              ? "You cannot send a message..."
              : "Type a message..."
          }
          onChange={(e) => setText(e.target.value)}
          value={text}
          ref={messageInputRef}
          disabled={isCurrentUserBlocked || isReceiverlocked}
        />
        <div className="relative">
          <IconImage
            src="emoji"
            onClick={() => setOpen((prevState) => !prevState)}
            type="base"
          />
          <div
            className="absolute bottom-[50px] left-0"
            ref={emojiContainerRef}
          >
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button
          className="cursor-pointer rounded-[5px] bg-[#5183fe] px-5 py-[10px] text-white disabled:cursor-not-allowed disabled:bg-[#5182feba]"
          onClick={handleSend}
          disabled={isCurrentUserBlocked || isReceiverlocked}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
