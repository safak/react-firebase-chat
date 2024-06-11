function InputLogin({ type, placeholder, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="rounded-[5px] bg-dark-blue p-5 text-white outline-none"
    ></input>
  );
}

export default InputLogin;
