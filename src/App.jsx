import Saitbar from "./components/Saitbar/Saitbar"
import Chat from "./components/Chat/Chat"
import Detail from "./components/Detail/Detail"

const App = () => {
  return (
    <div className='container'>
      <Saitbar />
      <Chat />
      <Detail />
    </div>
  )
}

export default App