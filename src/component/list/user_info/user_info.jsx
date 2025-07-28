import "./user_info.css"
import { useUserStore } from "../../../lib/userStore";




const User_info = () => {



  const { currentUser } = useUserStore();







  return (
    <div className='user_info'>


        <div className="user">
            <img src={currentUser.avatar || "./avatar.png"} alt="" />
            <h2>{currentUser.regusername}</h2>
        </div>



        <div className="icons">
            <img src="./more.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./edit.png" alt="" />
        </div>



    </div>
  )
}

export default User_info