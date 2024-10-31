
import React from "react"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/login/Login"
import Notification from "./components/notifications/Notification"

const App = () => {

  const user = false;

  return (
    <div className='container'>
      {
        user ? (
          <>
            <List/>
            <Chat/>
            <Detail/>
          </>
        ) : (<Login />)
      }
      <Notification />
    </div>
  )
}

export default App