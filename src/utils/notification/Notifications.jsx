import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import './notification.css'
 
 export const Notifications = () => {
   return (
     <>
        <div>
            <ToastContainer position='bottom-right'/>
        </div>
     </>
   )
 }
 