import { useState } from "react";
import { db } from "../../../../lib/firebase";
import AddUserButton from "./AddUserButton";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useUserStore } from "../../../../lib/userStore";

function AddUser() {
  const [user, setUser] = useState(null);

  const { currentUser } = useUserStore();

  async function handleSearch(e) {
    // Prevent Default Refresh Event.
    e.preventDefault();

    // Gettin Data from Form Inputs.
    const formData = new FormData(e.target);
    const username = formData.get("username");

    // Async Operation
    try {
      // Gets a CollectionReference instance that refers to the collection at the specified absolute path.
      const userRef = collection(db, "users");

      // where(fieldPath, opStr, value)
      // Creates a QueryFieldFilterConstraint that enforces that documents must contain the specified field and that the value should satisfy the relation constraint provided.
      const q = query(userRef, where("username", "==", username));

      // Executes the query and returns the results as a QuerySnapshot.
      const querySnapShot = await getDocs(q);

      console.log(querySnapShot.docs[0].data());

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleAdd() {
    // Collections Refs
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userChats");

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="absolute inset-0 m-auto h-max w-max rounded-[10px] bg-[#111928e7] p-[30px]">
      <form className="flex gap-5" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="rounded-[10px] p-5 text-[#111928e7] outline-none"
        />

        <AddUserButton type="base">Search</AddUserButton>
      </form>
      {user && (
        <div className="mt-[50px] flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img
              src={user.avatar || "./avatar.png"}
              alt=""
              className="h-[50px] w-[50px] rounded-full object-cover"
            />
            <span>{user.username}</span>
          </div>

          <AddUserButton onClick={handleAdd} type="small">
            Add User
          </AddUserButton>
        </div>
      )}
    </div>
  );
}

export default AddUser;
