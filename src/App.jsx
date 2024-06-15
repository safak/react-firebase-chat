
import React from "react";
import Chats from "./chat/Chats";
import List from "./list/list";
import Detail from "./details/detail";
const App = () => {
  return (
    <div className='container flex'>
          <List/>
          <Chats/>
           
           <Detail/>

    </div>
  
  )
}

export default App