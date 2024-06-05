function IconImage({ src, onClick, type }) {
  const base = "h-5 w-5 cursor-pointer";
  const details =
    "h-[30px] w-[30px] cursor-pointer rounded-full bg-dark-blue p-[10px]";

  const styles = {
    base,
    details,
  };

  if (onClick)
    return (
      <img
        className={styles[type]}
        src={`./${src}.png`}
        alt=""
        onClick={onClick}
      />
    );

  return <img className={styles[type]} src={`./${src}.png`} alt="" />;
}

export default IconImage;
