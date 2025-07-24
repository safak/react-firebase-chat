import {
    collection,
    doc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    arrayUnion,
    where,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../../lib/firebase";
import { useUserStore } from "../../../../lib/userStore";
import { useChatStore } from "../../../../lib/chatStore";
import "./addUser.css";

export default function AddUser() {
    const [foundUser, setFoundUser] = useState(null);
    const { currentUser } = useUserStore();
    const { changeChat } = useChatStore();

    const handleSearch = async (e) => {
        e.preventDefault();
        const username = e.target.username.value.trim();
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", username));
        const snap = await getDocs(q);
        if (!snap.empty) {
            setFoundUser({ id: snap.docs[0].id, ...snap.docs[0].data() });
        } else {
            setFoundUser(null);
            console.warn("No user found:", username);
        }
    };

    // 2) when you click “Add User,” create the chat doc + userchats entries
    const handleAdd = async () => {
        if (!foundUser) return;

        // a) define a stable chatId (e.g. sorted pair)
        const sorted = [currentUser.id, foundUser.id].sort();
        const chatId = sorted.join("_");

        // b) build your bot UID tied to this chat
        const botId = `bot_${chatId}`;

        // c) write the chat doc (if not already existing)
        const chatRef = doc(db, "chats", chatId);
        const chatSnap = await chatRef.get?.() || await chatRef; 
        if (!(await chatRef.get?.())?.exists()) {
            await setDoc(chatRef, {
                participants: [currentUser.id, foundUser.id, botId],
                messages: [],
                createdAt: serverTimestamp(),
            });
        }

        // d) update each human’s userchats list
        const userChatsRef = collection(db, "userchats");
        for (const uid of [currentUser.id, foundUser.id]) {
            const ucRef = doc(userChatsRef, uid);
            await updateDoc(ucRef, {
                chats: arrayUnion({
                    chatId,
                    receiverId: uid === currentUser.id ? foundUser.id : currentUser.id,
                    lastMessage: "",
                    updatedAt: Date.now(),
                    isSeen: uid === currentUser.id,
                }),
            });
        }

        changeChat(chatId);
    };

    return (
        <div className="addUser">
            <form onSubmit={handleSearch}>
                <input type="text" name="username" placeholder="Username" />
                <button type="submit">Search</button>
            </form>

            {foundUser && (
                <div className="user">
                    <div className="detail">
                        <img
                            src={foundUser.avatar || "./avatar.png"}
                            alt={foundUser.username}
                        />
                        <span>{foundUser.username}</span>
                    </div>
                    <button onClick={handleAdd}>Add User</button>
                </div>
            )}
        </div>
    );
}