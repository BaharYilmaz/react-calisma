import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="collapse navbar-collapse px-5 py-2">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item text-dark">
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Link to="/users">Users</Link>
      </div>
    </nav>
    </>
  );
};

export default Header;