import IconImage from "../chat/IconImage";
import PhotoItem from "./PhotoItem";

function OptionDetail({ src, optionName, photos }) {
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
            imgUrl="https://images.pexels.com/photos/25473496/pexels-photo-25473496.jpeg"
            iconUrl="download"
            type="details"
          />
          <PhotoItem
            imgUrl="https://images.pexels.com/photos/25473496/pexels-photo-25473496.jpeg"
            iconUrl="download"
            type="details"
          />
          <PhotoItem
            imgUrl="https://images.pexels.com/photos/25473496/pexels-photo-25473496.jpeg"
            iconUrl="download"
            type="details"
          />
          <PhotoItem
            imgUrl="https://images.pexels.com/photos/25473496/pexels-photo-25473496.jpeg"
            iconUrl="download"
            type="details"
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
