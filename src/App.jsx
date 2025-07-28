import Chat from "./component/chat/chat"
import List from "./component/list/list"
import Detail from "./component/detail/detail"
import Login from "./component/login/Login"
import Notification from "./component/notification/Notification"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore"




const App = () => {


  const {currentUser, isLoading, fetchUserInfo} = useUserStore();

  

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user) => {
      fetchUserInfo(user?.uid);
    });

    return() => {
      unSub();
    };
    
  },[fetchUserInfo]);

  console.log(currentUser);

  if (isLoading) return <div className="loading">Loading...</div>



  return (
    <div className='container'>

      {
        currentUser ? (<>


      <List/>
      <Chat/>
      <Detail/>
        
        
        </>
        ) : (<Login/>)
      }


      <Notification/>

      



      
    </div>
  )
}

export default App