import { useState } from "react";
import IconImage from "./IconImage";
import EmojiPicker from "emoji-picker-react";
import Message from "./Message";

function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  function handleEmoji(e) {
    setText((prevText) => prevText + e.emoji);
    setOpen(false);
  }

  return (
    // chat
    <div className="flex h-full flex-[2_2_0%] flex-col border-x border-[#dddddd35]">
      {/* top */}
      <div className="flex items-center justify-between border-b border-[#dddddd35] p-5">
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
          <IconImage src="phone" />
          <IconImage src="video" />
          <IconImage src="info" />
        </div>
      </div>

      {/* center */}
      <div className="flex flex-1 flex-col gap-5 overflow-scroll p-5">
        <Message />
        <Message type="own" />
        <Message />
        <Message
          type="own"
          url="https://images.pexels.com/photos/25473496/pexels-photo-25473496.jpeg"
        />
        <Message />
        <Message type="own" />
      </div>

      {/* bottom */}
      <div className="mt-auto flex items-center justify-between gap-5 border-t border-[#dddddd35] p-5">
        <div className="flex gap-5">
          <IconImage src="img" />
          <IconImage src="camera" />
          <IconImage src="mic" />
        </div>
        <input
          className="flex-1 rounded-[10px] border-none bg-dark-blue p-5 text-base text-white outline-none placeholder:text-sm"
          type="text"
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="relative">
          <IconImage
            src="emoji"
            onClick={() => setOpen((prevState) => !prevState)}
          />
          <div className="absolute bottom-[50px] left-0">
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
