function ListItem({ chat, onClick, currentUser }) {
  console.log(currentUser);

  return (
    <div
      className={`flex cursor-pointer items-center gap-5 border-b border-[#dddddd35] p-5 ${chat.isSeen ? "bg-transparent" : "bg-[#5183fe]"}`}
      onClick={onClick}
    >
      <img
        src={
          chat.user.blocked.includes(currentUser.id)
            ? "./avatar.png"
            : chat.user.avatar || "./avatar.png"
        }
        alt=""
        className="h-[50px] w-[50px] rounded-full object-cover"
      />
      <div className="flex flex-col gap-[10px]">
        <span className="font-medium">
          {chat.user.blocked.includes(currentUser.id)
            ? "User"
            : chat.user.username}
        </span>
        <p className="text-[14px] font-light">{chat.lastMessage}</p>
      </div>
    </div>
  );
}

export default ListItem;
