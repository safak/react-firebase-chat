function IconImage({ src, onClick }) {
  if (onClick)
    return (
      <img
        className="h-5 w-5 cursor-pointer"
        src={`./${src}.png`}
        alt=""
        onClick={onClick}
      />
    );

  return <img className="h-5 w-5 cursor-pointer" src={`./${src}.png`} alt="" />;
}

export default IconImage;
