import Chat from "./chat/Chat";
import Detail from "./detail/Detail";
import List from "./list/List";
import Login from "./login/login";
import Notification from "./notification/Notification";

const App = () => {
  const user = false;

  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
