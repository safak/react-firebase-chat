import React from 'react'
import './Userinfo.css';

const  Userinfo=()=> {
  return (
    <div className='Userinfo'>
    <div className='user'>
<img className=' ' src='./avatar.png' alt=''/>
<h2>Avram </h2>    
    </div>
<div className='icons'>
  <img src='./more.png' alt=''/>
  <img className=' ' src='./video.png' alt=''/>
  <img className='' src='./edit.png' alt=''/>
</div>

    </div>
    
  )
}

export default Userinfo




// import React from 'react'

// const  Userinfo=()=> {
//   return (
//     <div className='p-4 flex items-center justify-between'>Userinfo
//     <div className='flex items-center gap-20px user'>
// <img className='w-20px h-10 rounded-xl object-cover ' src='./avatar.png' alt=''/>
// <h2>Avram </h2>    
//     </div>
// <div className='flex icons'>
//   <img className='w-20px h-10 rounded-xl object-cover' src='./more.png' alt=''/>
//   <img className=' w-20px h-10 rounded-xl object-cover' src='./video.png' alt=''/>
//   <img className='w-20px h-10 rounded-xl object-cover' src='./edit.png' alt=''/>
// </div>

//     </div>
    
//   )
// }

// export default Userinfo