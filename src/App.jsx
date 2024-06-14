import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";
import Notificaiton from "./components/notification/Notification";
import { Fragment } from "react";


const App = () => {
  const user = false;

  return (
    <div className='container'>
      {user ? (
        <Fragment>
          <List />
          <Chat />
          <Detail />
        </Fragment>
      ) : (
        <Login/>
      )}
      <Notificaiton/>
    </div>
  )
}

export default App