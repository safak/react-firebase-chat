import Chat from "/src/components/chat/Chat.jsx";
import Detail from "/src/components/detail/Detail.jsx";
import List from "/src/components/list/List.jsx";


const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
      </div>
  )
}

export default App