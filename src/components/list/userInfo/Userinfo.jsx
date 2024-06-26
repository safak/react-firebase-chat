import "./userInfo.css"

const Userinfo = () => {
    return (
        <div className="userInfo">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Michael Goldberg</h2>
            </div>
            <div className="icons">
            <img src="./more.png" alt=""/>
            <img src="./video.png" alt=""/>
            <img src="./edit.png" alt=""/>
        </div>
        </div>
    )
}

export default Userinfo