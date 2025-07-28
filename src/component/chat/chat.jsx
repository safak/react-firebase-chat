import { useEffect, useState } from "react";
import "./chat.css"
import EmojiPicker from "emoji-picker-react";



const Chat = () => {
const[open,setOpen] = useState(false)

const handleEmoji = e =>{
  setText((prev)=> prev + e.emoji)
  setOpen(false)
}

const[text,setText] = useState("")



  return (
    <div className='chat'>

      
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Josephina</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consectetur</p>
          </div>
        </div>



        <div className="icon">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>





      <div className="center">

        <div className="messsage_self">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel, earum nostrum, perferendis esse, expedita tempore incidunt cum quaerat totam dolorem hic minima inventore sed illum delectus itaque veritatis voluptate.
            </p>

            <span>1 min ago</span>
          </div>
        </div>

        <div className="messsage">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel, earum nostrum, perferendis esse, expedita tempore incidunt cum quaerat totam dolorem hic minima inventore sed illum delectus itaque veritatis voluptate.
            </p>

            <span>1 min ago</span>
          </div>
        </div>

        <div className="messsage_self">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel, earum nostrum, perferendis esse, expedita tempore incidunt cum quaerat totam dolorem hic minima inventore sed illum delectus itaque veritatis voluptate.
            </p>

            <span>1 min ago</span>
          </div>
        </div>

        <div className="messsage">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <img src="https://i.natgeofe.com/k/679e983c-4461-4398-bb6d-9b508fe3e4de/norway-northern-lights.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel, earum nostrum, perferendis esse, expedita tempore incidunt cum quaerat totam dolorem hic minima inventore sed illum delectus itaque veritatis voluptate.
            </p>

            <span>1 min ago</span>
          </div>
        </div>




        
      </div>




      <div className="bottom">
        <div className="icons">
          <img src="img.png" alt="" />
          <img src="camera.png" alt="" />
          <img src="mic.png" alt="" />
        </div>

        <input 
        type="text" 
        placeholder="type the message..."
        onChange={e=>setText(e.target.value)} 
        value={text}
        />

        
        <div className="emoji">
          <img 
          src="./emoji.png" 
          alt=""
          onClick={()=>setOpen(prev=> !prev)}
           />

          <div className="emo_box">
          <EmojiPicker open ={open}   onEmojiClick={handleEmoji}/>
          </div>

        </div>



        <button className="send_button">send</button>
      </div>







    </div>
  )
}

export default Chat