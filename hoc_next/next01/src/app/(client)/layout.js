const ClientLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>HEADER</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h1>FOOTER</h1>
      </footer>
    </>
  );
};

export default ClientLayout;
