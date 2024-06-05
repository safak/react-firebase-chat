import ChatList from "./chatList/ChatList";
import Userinfo from "./userInfo/Userinfo";

function List() {
  return (
    <div className="flex flex-1 flex-col">
      <Userinfo />
      <ChatList />
    </div>
  );
}

export default List;
