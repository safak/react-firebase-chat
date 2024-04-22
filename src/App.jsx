import { Chats } from "./components/chats/Chats";
import { List } from "./components/list/List";
import { Details } from "./components/details/Details";
import { Login }from "./pages/login/Login"
import { Notifications } from "./utils/notification/Notifications";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

const App = () => {
  const user = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    })

    return () => {
      unSub();
    }
  })

  return (
    <div className="container">
      {user ? (
        <>
          <div className="list">
            <List />
          </div>
          <Chats />
          <Details />
        </>
      ) : (
        <Login />
      )}
      <Notifications/>
    </div>
  );
};

export default App;
