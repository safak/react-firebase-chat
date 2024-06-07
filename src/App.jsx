import { useEffect, useState } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";
import PreviewScreenChat from "./components/chat/PreviewScreenChat";
import PreviewScreenDetail from "./components/detail/PreviewScreenDetail";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

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
    <div className="flex h-90v w-80v rounded-xl border border-white/10 bg-dark-blue shadow-lg shadow-gray-500 backdrop-blur-lg backdrop-saturate-100">
      {currentUser ? (
        <>
          <List />
          {chatId ? <Chat /> : <PreviewScreenChat />}
          {chatId ? <Detail /> : <PreviewScreenDetail />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
