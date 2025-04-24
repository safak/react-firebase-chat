import "./details.css";


const Details = () => {
    return(
        <div className = "details">
            <div className="user">
                <img src="./avatar.png" alt=""/>
                <h2>Luffy</h2>
                <p>I'm gonna be king of the pirates</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt=""/>
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                              <img 
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xkV0TZMll3HkZWmoxNscKwQJPk2Rn_Ojuw&s" 
                              alt=""
                              />
                            <span>photo_going_merry.png</span>
                            </div>
                        <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                              <img 
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xkV0TZMll3HkZWmoxNscKwQJPk2Rn_Ojuw&s" 
                              alt=""
                              />
                            <span>photo_going_merry.png</span>
                            </div>
                        <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                              <img 
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xkV0TZMll3HkZWmoxNscKwQJPk2Rn_Ojuw&s" 
                              alt=""
                              />
                            <span>photo_going_merry.png</span>
                            </div>
                        <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                              <img 
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xkV0TZMll3HkZWmoxNscKwQJPk2Rn_Ojuw&s" 
                              alt=""
                              />
                            <span>photo_going_merry.png</span>
                            </div>
                        <img src="./download.png" alt="" className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>    
                </div>
                <button>Block User</button>
                <button className="logout">Log Out</button>
            </div>
        </div>
    )
}

export default Details