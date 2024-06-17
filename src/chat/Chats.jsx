
import React from 'react';
import  { useEffect, useRef, useState } from 'react'
import './chats.css';
import EmojiPicker from 'emoji-picker-react';


const  Chats= () => {

const [open, setOpen]= useState(false)
const [text, setText]= useState('');
const  endRef= useRef(null);

// smooth scroll when refreshing

useEffect(()=>{
  endRef.current?.scrollIntoView({behavior:'smooth'});
},[]);



// useEffect{()=>{
// endRef.current?.scrollIntoView({behaviour:"smooth"});

// }, []};

const handleEmoji=(e)=>{
setText(prev=>prev+e.emoji)
setOpen(false)
}


  return (
    <div className='flex-1 chat' >


      {/* TOP  */}
<div className="top">
<div className="user">
<img src="./avatar.png" alt="" />
<div className="texts">
  <span> Avram Ab</span>
  <p>Lorem ipsum dolor sit amet consectetur </p>

</div>

</div>
<div className="icons">
<img src="./phone.png" alt="" />
<img src="./video.png" alt="" />
<img src="./video.png" alt="" />

</div>
</div>




{/* CENTER */}
<div className="center">

<div className="message">
<img src="./avatar.png" alt="" />
<div className="texts">
  <p>Lorem ipsum dolor sit, amet consectetur 
    adipisicing elit. Vitae a similique eligendi
     blanditiis ipsum?
     </p>
     <span> 1min ago</span>
</div>

</div>
<div className="message own">
<img src="./avatar.png" alt="" />
<div className="texts">
  <p>Lorem ipsum dolor sit, amet consectetur 
    adipisicing elit. Vitae a similique eligendi
     blanditiis ipsum?
     </p>
     <span> 1min ago</span>
</div>

</div>
<div className="message">
<img src="./avatar.png" alt="" />
<div className="texts">
  <p>Lorem ipsum dolor sit, amet consectetur 
    adipisicing elit. Vitae a similique eligendi
     blanditiis ipsum?
     </p>
     <span> 1min ago</span>
</div>

</div>
<div className="message own">
<img src="./avatar.png" alt="" />
<div className="texts">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8AAxAr9ZNr9JCwn2QZ35rSWWuiayhh0ayQ&s" alt="" />
  <p>Lorem ipsum dolor sit, amet consectetur 
    adipisicing elit. Vitae a similique eligendi
     blanditiis ipsum?
     </p>
     <span> 1min ago</span>
</div>

</div>

<div ref={endRef}></div>

</div>





{/* BOTTOM */}
<div className="bottom">
<div className="icons">
  <img src="./img.png" alt="" />
  <img src="./camera.png" alt="" />
  <img src="./mic.png" alt="" />
</div>

{/* message/ TEXT */}
<input type='text' 
placeholder='Type a message' 
onChange={e=>setText(e.target.value)}
value={text} />



{/* emoji picker */}
<div className="emoji">
  <img src="./emoji.png" alt="" 
  onClick={()=>setOpen((prev)=>!prev)}/>
  
  <div className="picker">
  <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
  </div>
</div>



{/* sendButton */}
<button className='sendButton'>Send</button>
    </div>
    </div>
  )
}

export default Chats;