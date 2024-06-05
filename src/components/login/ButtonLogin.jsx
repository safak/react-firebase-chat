function ButtonLogin({ children, disabled }) {
  return (
    <button
      className="disabled:bg-login-blue-disabled w-full cursor-pointer rounded-[5px] bg-login-blue p-5 font-medium text-white disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonLogin;
