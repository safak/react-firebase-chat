import { User } from './users/User'
import './List.css'
import { Chat } from './chat/Chat'



export const List = () => {
  return (
    <div className='list'>
      <User/>
      <Chat/>
    </div>
  )
}