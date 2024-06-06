function AddUserButton({ children, type, onClick }) {
  const base = "cursor-pointer rounded-[10px] bg-[#1a73e8] text-white";

  const styles = {
    base: base + " p-5 ",
    small: base + " p-[10px]",
  };

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default AddUserButton;
