import { useEffect, useState } from "react";
import IconImage from "./IconImage";
import EmojiPicker from "emoji-picker-react";
import Message from "./Message";
import { useEmojiPickerState } from "../../hooks/useEmojiPickerState";
import { db } from "../../lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";

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

  console.log(chat);

  const { chatId } = useChatStore();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [endRef]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => unSub();
  }, [chatId]);

  console.log(chat);

  function handleEmoji(e) {
    console.log(e);
    setText((prevText) => prevText + e.emoji);
    closeEmojiContainer();
  }

  return (
    // chat
    <div className="flex h-full flex-[2_2_0%] flex-col border-x border-border-gray">
      {/* top */}
      <div className="flex items-center justify-between border-b border-border-gray p-5">
        <div className="flex items-center gap-5">
          <img
            className="h-[60px] w-[60px] rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-[5px]">
            <span className="text-lg font-bold">Jane Doe</span>
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
        {chat?.messages?.map((message) => (
          <Message key={message?.createdAt} message={message} type="base" />
        ))}
        <div ref={endRef}></div>
      </div>

      {/* bottom */}
      <div className="mt-auto flex items-center justify-between gap-5 border-t border-[#dddddd35] p-5">
        <div className="flex gap-5">
          <IconImage src="img" type="base" />
          <IconImage src="camera" type="base" />
          <IconImage src="mic" type="base" />
        </div>
        <input
          className="flex-1 rounded-[10px] border-none bg-dark-blue p-5 text-base text-white outline-none placeholder:text-sm"
          type="text"
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
          value={text}
          ref={messageInputRef}
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
        <button className="cursor-pointer rounded-[5px] bg-[#5183fe] px-5 py-[10px] text-white">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
