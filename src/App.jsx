import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";

const App = () => {
  return (
    <div>
      <p className="w-90v h-90v bg-dark-blue flex rounded-xl border border-white/10 backdrop-blur-lg backdrop-saturate-100">
        <List />
        <Chat />
        <Detail />
      </p>
    </div>
  );
};

export default App;
