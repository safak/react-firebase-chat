import IconImage from "../chat/IconImage";
import PhotoItem from "./PhotoItem";

function OptionDetail({ src, optionName, photos, url, date }) {
  if (photos)
    return (
      <div className="option">
        {/* title */}

        <div className="flex items-center justify-between">
          <span>{optionName}</span>
          <IconImage src={src} type="details" />
        </div>
        {/* photos */}
        <div className="mt-5 flex flex-col gap-5">
          <PhotoItem
            imgUrl={url}
            iconUrl="download"
            type="details"
            date={date}
          />
        </div>
      </div>
    );

  return (
    <div className="option">
      <div className="flex items-center justify-between">
        <span>{optionName}</span>
        <IconImage src={src} type="details" />
      </div>
    </div>
  );
}

export default OptionDetail;
