import ChatList from "./chatList/ChatList";
import Userinfo from "./userInfo/Userinfo";

function List() {
  return (
    <div className="flex-1">
      <Userinfo />
      <ChatList />
    </div>
  );
}

export default List;
