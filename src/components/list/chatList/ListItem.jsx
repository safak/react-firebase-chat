function ListItem({ chat }) {
  return (
    <div className="flex cursor-pointer items-center gap-5 border-b border-[#dddddd35] p-5">
      <img
        src={chat.user.avatar || "./avatar.png"}
        alt=""
        className="h-[50px] w-[50px] rounded-full object-cover"
      />
      <div className="flex flex-col gap-[10px]">
        <span className="font-medium">{chat.user.username}</span>
        <p className="text-[14px] font-light">{chat.lastMessage}</p>
      </div>
    </div>
  );
}

export default ListItem;
