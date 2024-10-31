import "./userinfo.css"

const Userinfo = () => {
    return (
        <div className="userinfo">
            <div className="user">
                <img src="./public/avatar.png" alt="" srcset="" />
                <h2>Vicky Singh</h2>
            </div>
            <div className="icons">
                <img src="./public/more.png" alt=""/>
                <img src="./public/video.png" alt=""/>
                <img src="./public/edit.png" alt=""/>
            </div>
        </div>
    )
}

export default Userinfo