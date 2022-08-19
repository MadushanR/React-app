import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">HomePage</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/articleList">Articles List</Link>
    </nav>
  );
};

export default NavBar;
