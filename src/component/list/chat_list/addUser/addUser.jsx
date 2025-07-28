import "./addUser.css"
import { db } from "../../../../lib/firebase";
import {
  arrayUnion,
  collection,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where
} from "firebase/firestore";
import { useState } from "react";
import {useUserStore} from "../../../../lib/userStore";





const AddUser = () => {
  const[user, setUser] = useState(null);
  const {currentUser} = useUserStore();

  const handleSearch = async (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try{

      const userRef = collection(db, "users");

      const q = query(userRef, where("regusername", "==", username));

      const querySnapShot = await getDocs(q);

      if(!querySnapShot.empty){
        setUser(querySnapShot.docs[0].data());
      }

    }catch(err){
      console.log(err)
    }
  };




  //add chat
  const handleAdd = async ()=>{

    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try{

      const newChatRef = doc(chatRef)

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages:[],
      });

      console.log(newChatRef.id)


      await updateDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage:"",
          receiverId: currentUser.id,
          UpdateAt: Date.now()
        })
      })

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage:"",
          receiverId: user.id,
          UpdateAt: Date.now()
        })
      })

    }catch(err){
      console.log(err);
    }
  };


  return (
    <div className='add_User'>

        <form onSubmit={handleSearch}>
            <input type="text" placeholder="User_name" name="username" />
            <button>Search</button>
        </form>




        {user && <div className="user">
            <div className="user_detail">
                <img src={user.avatar ||"./avatar.png"} alt="" />
                <span>{user.regusername}</span>
            </div>

            <button onClick={handleAdd}>Add User</button>
        </div>}

    </div>
  )
}

export default AddUser