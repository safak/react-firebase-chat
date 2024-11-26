import ChatList from "./chatList/ChatList.jsx";
import Userinfo from "./userinfo/Userinfo.jsx";
import "./list.css"

const List = () => {
    return (
        <div className="list">
            <Userinfo/>
            <ChatList/>
        </div>
    );
};

export default List;
