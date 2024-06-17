import React, { useState } from 'react';
import './Chatlist.css';
const Chatlist=()=> {
const [adMode, setAddMode]= useState(false);



  return (
    <div>

<div className='Chatlist'>
<div className='search'>
<div className="searchBar">
<img src="./search.png"  alt="" />
<input type='text' className=''  placeholder='search'/></div>

<img className='add' src={adMode?  './minus.png' : "./plus.png"} alt='' onClick={() =>setAddMode((prev)=> !prev)}/>
</div>
<div className='item'>
    <img src="./avatar.png" alt="" />
     <div className='texts'>
    <span>Avram Ab</span>
    <h1>Hellooo</h1>
     </div>
  </div>
  <div className='item'>
    <img src="./avatar.png" alt="" />
     <div className='texts'>
    <span>Avram Ab</span>
    <h1>Hellooo</h1>
     </div>
  </div>
  <div className='item'>
    <img src="./avatar.png" alt="" />
     <div className='texts'>
    <span>Avram Ab</span>
    <h1>Hellooo</h1>
     </div>
  </div>
  
  
</div>

    </div>

  )
}

export default Chatlist