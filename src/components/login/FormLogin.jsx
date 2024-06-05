function FormLogin({ children, onSumbit }) {
  return (
    <form
      className="flex flex-col items-center justify-between gap-5"
      onSubmit={onSumbit}
    >
      {children}
    </form>
  );
}

export default FormLogin;
