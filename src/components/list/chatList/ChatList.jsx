import { useState } from "react";

function ChatList() {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="">
      <div className="flex items-center gap-5 p-5">
        <div className="bg-dark-blue flex flex-1 gap-5 rounded-[10px] p-[10px]">
          <img className="h-5 w-5" src="./search.png" alt="" />
          <input
            type="text"
            placeholder="Search..."
            className="flex border-none bg-transparent text-white outline-none placeholder:text-sm"
          />
        </div>
        <img
          className="bg-dark-blue h-9 w-9 cursor-pointer rounded-[10px] p-[10px]"
          src={addMode ? "./minus.png" : "./plus.png"}
          onClick={() => setAddMode((prevState) => !prevState)}
          alt=""
        />
      </div>
    </div>
  );
}

export default ChatList;
