function FormLogin({ children }) {
  return (
    <form className="flex flex-col items-center justify-between gap-5">
      {children}
    </form>
  );
}

export default FormLogin;
