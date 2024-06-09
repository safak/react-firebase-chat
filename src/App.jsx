import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import { Fragment } from "react";
import Login from "./components/login/Login";


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
    </div>
  )
}

export default App