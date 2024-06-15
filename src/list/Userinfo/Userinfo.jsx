import React from 'react'

const  Userinfo=()=> {
  return (
    <div className='p-20px flex items-center justify-between'>Userinfo
    <div className='flex items-center gap-20px user'>
<img className='w-20px h-10 rounded-xl object-cover ' src='./avatar.png' alt=''/>
<h2>Avram </h2>    
    </div>
<div className='icons'>
<img className='w-20px h-10 rounded-xl object-cover ' src='./more.png' alt=''/>
<img  src='./video.png' alt=''/>
<img src='./edit.png' alt=''/>

</div>


    </div>
    
  )
}

export default Userinfo