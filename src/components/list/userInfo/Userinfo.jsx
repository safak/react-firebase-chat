function Userinfo() {
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-5">
        <img
          src="./avatar.png"
          alt=""
          className="h-[50px] w-[50px] rounded-full object-cover"
        />
        <h2>John Doe</h2>
      </div>
      <div className="flex gap-5">
        <img className="h-5 w-5 cursor-pointer" src="./more.png" alt="" />
        <img className="h-5 w-5 cursor-pointer" src="./video.png" alt="" />
        <img className="h-5 w-5 cursor-pointer" src="./edit.png" alt="" />
      </div>
    </div>
  );
}

export default Userinfo;
