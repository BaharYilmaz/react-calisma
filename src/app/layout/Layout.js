import React from 'react';
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid mt-5 pt-5">
      <Header />
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export default Layout;