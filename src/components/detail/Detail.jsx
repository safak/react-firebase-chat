import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase"
import { useUserStore } from "../../lib/userStore";
import "./detail.css"


const Detail = () => {
    const { chatId, users, participants, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = useChatStore();
    const { currentUser } = useUserStore();

    const humanIds = participants.filter((uid) => !uid.startsWith("bot_"));
    const botId = participants.find((uid) => uid.startsWith("bot_"));
    const otherUserId = humanIds.find((uid) => uid !== currentUser.id);


    const handleBlock = async () => {
        if (!user) return;

        const userDocRef = doc(db, "users", currentUser.id);

        try {
            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
            })
            changeBlock();
        } catch (err) {
            console.log(err);
        }

    }
    const headerProfile =
        botId && participants.length === 2
            ? users[botId]
            : users[otherUserId];
    return (
        <div className="detail">
            <div className="user">
                <img src={headerProfile?.avatar || "./avatar.png"} alt="" />
                <h2>{users?.username}</h2>
            </div>
            <div className="info">
                {/* <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div> */}
                {/* <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div> */}
                {/* <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fth.tripadvisor.com%2FAttraction_Review-g295424-d10687494-Reviews-IMG_Worlds_of_Adventure-Dubai_Emirate_of_Dubai.html&psig=AOvVaw0hVdFX2SlLNrPsTUPRJ4v_&ust=1750410520739000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMidpbuR_Y0DFQAAAAAdAAAAABAL" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fth.tripadvisor.com%2FAttraction_Review-g295424-d10687494-Reviews-IMG_Worlds_of_Adventure-Dubai_Emirate_of_Dubai.html&psig=AOvVaw0hVdFX2SlLNrPsTUPRJ4v_&ust=1750410520739000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMidpbuR_Y0DFQAAAAAdAAAAABAL" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fth.tripadvisor.com%2FAttraction_Review-g295424-d10687494-Reviews-IMG_Worlds_of_Adventure-Dubai_Emirate_of_Dubai.html&psig=AOvVaw0hVdFX2SlLNrPsTUPRJ4v_&ust=1750410520739000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMidpbuR_Y0DFQAAAAAdAAAAABAL" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fth.tripadvisor.com%2FAttraction_Review-g295424-d10687494-Reviews-IMG_Worlds_of_Adventure-Dubai_Emirate_of_Dubai.html&psig=AOvVaw0hVdFX2SlLNrPsTUPRJ4v_&ust=1750410520739000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMidpbuR_Y0DFQAAAAAdAAAAABAL" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                    </div> */}
                {/* </div> */}
                {/* <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div> */}
                <button onClick={handleBlock}>
                    {
                        isCurrentUserBlocked
                            ? "You have blocked by this user"
                            : isReceiverBlocked
                                ? "User blocked"
                                : "Block User"
                    }
                </button>
                <button className="logout" onClick={() => auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}

export default Detail