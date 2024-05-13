import './addUser.css';

const AddUser = () => {
    return (
        <div className='addUser'>
            <form>
                <input
                    type='text'
                    placeholder='Username'
                    name='username'
                />
                <button>Search</button>
            </form>
            <div className='user'>
                <div className='detail'>
                    <img
                        src='./avatar.png'
                        alt=''
                    />
                    <span>Jane Doe</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    );
};

export default AddUser;
