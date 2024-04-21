import { toast } from "react-toastify";
import "./addUser.css";

const AddUser = () => {

    const addToast = e => {
        toast.success("Added a new user")
    }
  return (
    <>
      <div className="addUser">
        <form action="">
          <input type="text" placeholder="Username" name="username" />
          <button>Search</button>
        </form>
        <div className="user">
          <div className="details">
            <img src="./avatar.png" alt="" />
            <span>Caroline Sarfo</span>
          </div>
          <button onClick={addToast}>Add User</button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
