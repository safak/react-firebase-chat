import { toast } from "react-toastify";
import "./Details.css";

export const Details = () => {

  function blockToast(){
    toast.info("User bolcked")
  }

  function logoutToast(){
    toast.info("User bolcked")
  }
  return (
    <>
      <div className="details">
        <div className="top">
          <img src="./avatar.png" alt="" />
          <h2>Caroline Sarfo</h2>
          <p>Lorem ipsum dolor sit, amet consectetur.</p>
        </div>
        <div className="center">
          <div className="info">
            <div className="option">
              <span>Chat Settngs</span>
              <img src="./arrowUp.png" alt="" className="icon"/>
            </div>
          </div>

          <div className="info">
            <div className="option">
              <span>Privacy & Help</span>
              <img src="./arrowUp.png" alt="" className="icon"/>
            </div>
          </div>

          <div className="info">
            <div className="option">
              <span>Shared photos</span>
              <img src="./arrowDown.png" alt="" className="icon"/>
            </div>

            <div className="sharePhotos">
              <div className="photo">
                <img src="./background.jpg" alt="" className="img"/>
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>

            <div className="sharePhotos">
              <div className="photo">
                <img src="./background.jpg" alt="" className="img"/>
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>

            <div className="sharePhotos">
              <div className="photo">
                <img src="./background.jpg" alt="" className="img"/>
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>

            <div className="sharePhotos">
              <div className="photo">
                <img src="./background.jpg" alt="" className="img"/>
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>

            <div className="sharePhotos">
              <div className="photo">
                <img src="./background.jpg" alt="" className="img"/>
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
          </div>

          <div className="info">
            <div className="option">
              <span>Shared Files</span>
              <img src="./arrowUp.png" alt="" className="icon"/>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="login">
            <button onClick={logoutToast}>Logout</button>
          </div>
          <div className="block">
            <button onClick={blockToast}>Block User</button>
          </div>
        </div>
      </div>
    </>
  );
};
