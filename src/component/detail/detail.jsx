import { auth } from "../../lib/firebase"
import "./detail.css"


const Detail = () => {
  return (
    <div className='detail'>

      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Josephina</h2>
        <p>Lorem ipsum dolor sit amet consectetur </p>
      </div>


      <div className="info">

        
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>


        <div className="option">
          <div className="title">
            <span>Privacy</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>


        <div className="option">
          <div className="title">
            <span>shared photo</span>
            <img src="./arrowDown.png" alt="" />
          </div>

          <div className="photos">

            <div className="photo_item">
              <div className="photo_detail">
              <img src="https://i.natgeofe.com/n/4def1048-f5e5-4973-ad3a-e188a97d363f/regents-street-london-england.jpg" alt="" />
              <span>photo_2024</span>
              </div>

              <img 
              src="./download.png" 
              alt=""
              className="down_icon"
               />
            </div>


            <div className="photo_item">
              <div className="photo_detail">
              <img src="https://i.natgeofe.com/n/4def1048-f5e5-4973-ad3a-e188a97d363f/regents-street-london-england.jpg" alt="" />
              <span>photo_2024</span>
              </div>

              <img 
              src="./download.png" 
              alt=""
              className="down_icon"
               />
            </div>


            
          </div>
        </div>


        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>


        <button>Bloeck User</button>

        <button className="logout"
        onClick={()=>auth.signOut()}
        >Logout</button>



      </div>
    </div>
  )
}

export default Detail