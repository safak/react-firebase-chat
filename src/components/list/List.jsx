import UserInfo from "./userInfo/UserInfo";
import ChatList from "./chatList/ChatList";
import "./list.css";

const List = () => {
    return ( 
        <div className="list">
            <UserInfo/>
            <ChatList/>
        </div>
     );
}
 
export default List;