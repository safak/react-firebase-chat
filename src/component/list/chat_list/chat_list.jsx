import { useEffect, useState } from "react"
import "./chat_list.css"
import AddUser from "./addUser/addUser"
import { useUserStore } from "../../../lib/userStore"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../../lib/firebase"



const Chat_list = () => {
  const [chats,setChats]= useState([])
  const [addMode,setAddMode]= useState(false)

  const {currentUser} = useUserStore()

  useEffect(()=>{
    const unSub = onSnapshot(doc(db,"userchats",currentUser.id), async(res) => {
      const item = res.data().chats;

      const promises = item.map(async(item)=>{

        const userDocRef = doc(db, "users", item.receiverID);
        const userDocSnap =  await getDoc(userDocRef);

        const user = userDocSnap.data();

        return { ...item, user };

      });


      const chatData = await Promise.all(promises) ;

      setChats(chatData.sort((a,b)=>b.updatedAt - a.updatedAt));
    }
  );

    return ()=>{
      unSub();
    };

  },[currentUser.id]);


  
  return (
    <div className='chat_list'>
      <div className="search">



        <div className="searh_bar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder="search" />
        </div> 


        <img 
        src={addMode ? "./minus.png" : "./plus.png"} 
        alt="" 
        className="add_button" 
        onClick={()=>setAddMode((prev) => !prev)}/>



      </div>





      {chats.map(chat=>(
        <div className="item" key={chat.chatId}>
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Josephina</span>
          <p>{chat.lastMessage}</p>
        </div>
      </div>
      ))}
      









      {addMode && <AddUser/>}



    </div>
  )
}

export default Chat_list