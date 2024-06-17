
import React from "react";
import Chats from "./chat/Chats";
import List from "./list/list";
import Detail from "./details/detail";
import Login from "./login/Login";
const App = () => {

const user= false;

  return (
    <div className='container flex '>
      
        { user ? ( 
        <> <List/>
          <Chats/>
           <Detail/>
           </>
           ) :(<Login/>)}
    </div>
  
  )
}

export default App