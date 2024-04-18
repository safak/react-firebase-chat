import './user.css'

export const User = () => {
  return (
    <>
      <div className='userInfo'>
        <div className="user">
          <img src="./avatar.png" alt="" />
          <h2>Edward Apersil</h2>
        </div>
        <div className="icons">
          <img src="./more.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./edit.png" alt="" />
        </div>
      </div>
    </>
  )
}
