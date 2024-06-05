function ButtonLogin({ children }) {
  return (
    <button className="bg-login-blue w-full cursor-pointer rounded-[5px] p-5 font-medium text-white">
      {children}
    </button>
  );
}

export default ButtonLogin;
