function Chat() {
  return (
    <div className="h-full flex-[2_2_0%] border-x border-[#dddddd35]">
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
          <img className="h-4 w-4" src="./phone.png" alt="" />
          <img className="h-4 w-4" src="./video.png" alt="" />
          <img className="h-4 w-4" src="./info.png" alt="" />
        </div>
      </div>

      <div className="center"></div>

      <div className="bottom"></div>
    </div>
  );
}

export default Chat;
