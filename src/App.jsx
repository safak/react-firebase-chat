import { Chats } from "./components/chats/Chats";
import { List } from "./components/list/List";
import { Details } from "./components/details/Details";
import { Login }from "./pages/login/Login"
import { Notifications } from "./utils/notification/Notifications";

const App = () => {
  const user = false;

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
