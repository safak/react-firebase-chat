import ChatList from './ChatList/ChatList'
import './saitbar.css'
import UserInfo from './UserInfo/UserInfo'

const Saitbar = () => {
    return (
        <div className="saitbar">
            <UserInfo />
            <ChatList />
        </div>
    )
}

export default Saitbar