import "./detail.css"

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="./public/avatar.png" alt="" />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./public/arrowUp.png" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./public/arrowUp.png" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./public/arrowUp.png" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/28283491/pexels-photo-28283491/free-photo-of-a-man-with-glasses-and-a-beanie-on.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                                <span>photo_2024.png</span>
                            </div>
                            <img src="./public/download.png" alt="" className="icon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/28283491/pexels-photo-28283491/free-photo-of-a-man-with-glasses-and-a-beanie-on.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                                <span>photo_2024.png</span>
                            </div>
                            <img src="./public/download.png" alt="" className="icon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/28283491/pexels-photo-28283491/free-photo-of-a-man-with-glasses-and-a-beanie-on.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                                <span>photo_2024.png</span>
                            </div>
                            <img src="./public/download.png" alt="" className="icon" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./public/arrowUp.png" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="logOut">Log Out</button>
            </div>
        </div>
    )
}

export default Detail