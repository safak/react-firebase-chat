import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";

const App = () => {
  return (
    <div className="flex h-90v w-80v rounded-xl border border-white/10 bg-dark-blue backdrop-blur-lg backdrop-saturate-100">
      <List />
      <Chat />
      <Detail />
    </div>
  );
};

export default App;
