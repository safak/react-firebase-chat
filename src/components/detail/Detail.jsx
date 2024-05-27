import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useChatStore } from '../../lib/chatStore';
import { auth, db } from '../../lib/firebase';
import { useUserStore } from '../../lib/userStore';
import './detail.css';

const Detail = () => {
    const {
        chatId,
        user,
        isCurrentUserBlocked,
        isReceiverBlocked,
        changeBlock,
    } = useChatStore();

    const { currentUser } = useUserStore();

    const handleBlock = async () => {
        if (!user) return;

        const userDocRef = doc(db, 'users', currentUser.id);

        try {
            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked
                    ? arrayRemove(user.id)
                    : arrayUnion(user.id),
            });
            changeBlock();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='detail'>
            <div className='user'>
                <img
                    src={user?.avatar || './avatar.png'}
                    alt=''
                />
                <h2>{user?.username}</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='info'>
                <div className='option'>
                    <div className='title'>
                        <span>Chat Settings</span>
                        <img
                            src='./arrowUp.png'
                            alt=''
                        />
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Privacy & help</span>
                        <img
                            src='./arrowUp.png'
                            alt=''
                        />
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Shared photos</span>
                        <img
                            src='./arrowDown.png'
                            alt=''
                        />
                    </div>
                    <div className='photos'>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img
                                    src='https://zdjecia-cdn.r.pl/hotel/3984/zakwaterowanie-umn_3984_131867_3x2.jpg?class=khMainGalleryDesktopLargePrimaryV2'
                                    alt=''
                                />
                                <span>photo_2024</span>
                            </div>
                            <img
                                className='icon'
                                src='./download.png'
                                alt=''
                            />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img
                                    src='https://zdjecia-cdn.r.pl/hotel/3984/zakwaterowanie-umn_3984_131867_3x2.jpg?class=khMainGalleryDesktopLargePrimaryV2'
                                    alt=''
                                />
                                <span>photo_2024</span>
                            </div>
                            <img
                                className='icon'
                                src='./download.png'
                                alt=''
                            />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img
                                    src='https://zdjecia-cdn.r.pl/hotel/3984/zakwaterowanie-umn_3984_131867_3x2.jpg?class=khMainGalleryDesktopLargePrimaryV2'
                                    alt=''
                                />
                                <span>photo_2024</span>
                            </div>
                            <img
                                className='icon'
                                src='./download.png'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Shared Files</span>
                        <img
                            src='./arrowUp.png'
                            alt=''
                        />
                    </div>
                </div>
                <div className='button'>
                    <button onClick={handleBlock}>
                        {isCurrentUserBlocked
                            ? 'You are Blocked!'
                            : isReceiverBlocked
                            ? 'User Blocked'
                            : 'Block User'}
                    </button>
                    <button
                        className='logout'
                        onClick={() => auth.signOut()}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Detail;
