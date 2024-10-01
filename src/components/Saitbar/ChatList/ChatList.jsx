import { useState } from 'react'
import './chatlist.css'

const ChatList = () => {

    const [addMode, setMode] = useState(false)

    const users = [
        { id: 1, name: 'Joy Yo', message: 'Hello', avatar: './avatar.png' },
        { id: 2, name: 'Anna Lee', message: 'How are you?', avatar: './avatar.png' },
        { id: 3, name: 'Mike Dee', message: 'Good morning', avatar: './avatar.png' },
        { id: 4, name: 'Sara Con', message: 'See you soon!', avatar: './avatar.png' },
        { id: 5, name: 'Sara Con', message: 'See you soon!', avatar: './avatar.png' },
        { id: 6, name: 'Sara Con', message: 'See you soon!', avatar: './avatar.png' },
        { id: 7, name: 'Sara Con', message: 'See you soon!', avatar: './avatar.png' },
        { id: 8, name: 'Sara Con', message: 'See you soon!', avatar: './avatar.png' },
        { id: 9, name: 'Sara Con', message: 'See you soon!', avatar: './avatar.png' },
        { id: 10, name: 'Sara Con', message: 'See you soon!', avatar: './avatar.png' },
        { id: 11, name: 'Sara Con', message: 'See you soon!', avatar: './avatar.png' },
        { id: 12, name: 'Sara Con', message: 'See you soon!', avatar: './avatar.png' },
        { id: 13, name: 'Sara Con', message: 'See you soon!', avatar: './avatar.png' }
    ];

    return (
        <div className="chatlist">
            <div className='search'>
                <div className='searchBar'>
                    <img src='./search.png' alt='search'/>
                    <input type='text' placeholder='Search'/>
                </div>
                <img src={addMode ? './minus.png' : './plus.png'} alt='add' onClick={() => setMode((prev) => !prev)} />
            </div>
            {users.map(user => (
                <div key={user.id} className='item'>
                    <img src={user.avatar} alt='avatar' />
                    <div className='texts'>
                        <span>{user.name}</span>
                        <p>{user.message}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChatList