import IconImage from "../chat/IconImage";
import OptionDetail from "./OptionDetail";

function Detail() {
  return (
    <div className="flex-1 overflow-scroll">
      {/* user */}
      <div className="flex flex-col items-center gap-3 border-b border-[#dddddd35] px-5 py-[30px]">
        <img
          src="./avatar.png"
          alt=""
          className="h-[100px] w-[100px] rounded-full object-cover"
        />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      {/* info */}
      <div className="flex flex-col gap-[25px] p-5">
        <OptionDetail src="arrowUp" optionName="Chat Settings" />

        <OptionDetail src="arrowUp" optionName="Privacy & Help" />

        <OptionDetail
          src="arrowDown"
          optionName="Shared photos"
          photos={true}
        />

        <OptionDetail src="arrowUp" optionName="Shared Files" />

        <button className="bg-danger-red cursor-pointer rounded-[5px] p-[15px] text-white hover:bg-[rgba(220,20,60,0.796)]">
          Block User
        </button>
        <button className="bg-[#1a73e8] p-[10px]">Logout</button>
      </div>
    </div>
  );
}

export default Detail;
