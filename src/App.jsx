import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => unSub();
  }, [fetchUserInfo]);

  if (isLoading)
    return (
      <div className="rounded-[10px] bg-dark-blue p-[50px] text-4xl">
        Loading...
      </div>
    );

  return (
    <div className="flex h-90v w-80v rounded-xl border border-white/10 bg-dark-blue backdrop-blur-lg backdrop-saturate-100">
      {currentUser ? (
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
