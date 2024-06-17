import React from 'react'
import Userinfo from './Userinfo/Userinfo'
import Chatlist from './Chatlist/Chatlist'

const List=() =>{
  return (
    <div className='flex-1'>
  <Userinfo/>
  <Chatlist/>
    </div>
  )
}

export default List
