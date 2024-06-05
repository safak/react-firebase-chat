function Message({ type, url }) {
  const baseMessage = "flex max-w-[70%] gap-5";

  const styles = {
    base: baseMessage,
    own: baseMessage + " self-end",
  };

  //   <div className={styles[type]}>

  if (type === "own")
    return (
      <div className={styles[type]}>
        <div className="flex flex-1 flex-col gap-[5px]">
          {url && (
            <img
              className="h-[300px] w-full rounded-lg object-cover"
              src={url}
              alt=""
            />
          )}

          <p className="rounded-[10px] bg-[#5183fe] p-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            harum sunt consequuntur earum fugit non neque beatae totam pariatur
            ipsum eius illo reiciendis, enim provident aliquam quibusdam quis
            quaerat fugiat!
          </p>
          <span className="text-sm">1 min ago</span>
        </div>
      </div>
    );

  return (
    <div className={styles[type]}>
      <img
        src="./avatar.png"
        alt=""
        className="h-[30px] w-[30px] rounded-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-[5px]">
        <p className="rounded-[10px] bg-dark-blue p-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus harum
          sunt consequuntur earum fugit non neque beatae totam pariatur ipsum
          eius illo reiciendis, enim provident aliquam quibusdam quis quaerat
          fugiat!
        </p>
        <span className="text-sm">1 min ago</span>
      </div>
    </div>
  );
}

export default Message;
