import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  return (
    <div className=''>
      <ToastContainer
      position="top-center"
      theme="dark"
      icon = {false}
      />
    </div>
  )
}

export default Notification;