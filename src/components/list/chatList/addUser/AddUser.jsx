import AddUserButton from "./AddUserButton";

function AddUser() {
  return (
    <div className="absolute inset-0 m-auto h-max w-max rounded-[10px] bg-[#111928e7] p-[30px]">
      <form className="flex gap-5">
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="rounded-[10px] p-5 outline-none"
        />

        <AddUserButton type="base">Search</AddUserButton>
      </form>
      <div className="mt-[50px] flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            src="./avatar.png"
            alt=""
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <span>Jane Doe</span>
        </div>

        <AddUserButton type="small">Add User</AddUserButton>
      </div>
    </div>
  );
}

export default AddUser;
