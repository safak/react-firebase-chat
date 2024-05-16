import React from 'react'
import "./list.css"
import UserInfo from './userInfo/UserInfo'
import ChatList from './chatList/ChatList'

const List = () => {
  return (
    <div className='list'>
        <UserInfo/>
        <ChatList/>
    </div>
  )
}

export default List