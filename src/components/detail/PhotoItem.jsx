import IconImage from "../chat/IconImage";

function PhotoItem({ imgUrl, iconUrl, type, date }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img
          className="h-10 w-10 rounded-[5px] object-cover"
          src={imgUrl}
          alt=""
        />
        <span className="text-sm font-light text-gray-200">{date}</span>
      </div>
      <IconImage src={iconUrl} type={type} />
    </div>
  );
}

export default PhotoItem;
