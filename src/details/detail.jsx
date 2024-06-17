import React from 'react';
import './details.css'
const  Detail =( )=> {
  return (
    <div className='flex-1 detail' >
<div className="user">
<img src="./avatar.png" alt="" />
<h2>avram ab</h2>
<p>Lorem ipsum dolor sit amet consectetur...</p>
</div>
<div className="info">
  <div className="option">
    <div className="title">
      <span>chat settings</span>
      <img src="./arrowUp.png" alt="" />
    </div>
  </div>
  <div className="option">
    <div className="title">
      <span>Privacy % help</span>
      <img src="./arrowUp.png" alt="" />
    </div>
  </div>
  <div className="option">
    <div className="title">
      <span>Shared photos </span>
      <img src="./arrowDown.png" alt="" />
    </div>
    <div className="photos">
      <div className="photoItem">
      <div className='photoDetail'>
        <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" />
        <span>Photo_2024_2.png</span>

      </div>
    
<img src="./download.png" className='icon' alt="" />
</div>
    </div>
    <div className="photos">
      <div className="photoItem">
      <div className='photoDetail'>
        <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" />
        <span>Photo_2024_2.png</span>

      </div>
    
<img src="./download.png" className='icon' alt="" />
</div>
    </div>
    
    <div className="photos">
      <div className="photoItem">
      <div className='photoDetail'>
        <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" />
        <span>Photo_2024_2.png</span>

      </div>
    
<img src="./download.png" className='icon' alt="" />
</div>
    </div>
    
    
    
    
  </div>
  
  <div className="option">
    <div className="title">
      <span>shared files</span>
      <img src="./arrowUp.png" alt="" />
    </div>
  </div>
  <button>Block User </button>
  <button className='logout'>Logout</button>

</div>



    </div>
  )
}

export default Detail