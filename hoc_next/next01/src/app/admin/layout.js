import React from "react";
export const metadata = {
  title: "Trang quản trị",
};
const AdminLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>ADMIN HEADER</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h1>ADMIN FOOTER</h1>
      </footer>
    </>
  );
};

export default AdminLayout;
