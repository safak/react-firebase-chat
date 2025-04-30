import "./list.css"
import Chatlist from "./chatlist/Chatlist"
import Userinfo from "./Userinfo/Userinfo"


const List = () => {
    return(
        <div className = 'list'>
            <Userinfo/>
            <Chatlist/>
        </div>
    )
}

export default List