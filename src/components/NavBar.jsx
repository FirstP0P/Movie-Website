import React from "react";
import "../css/Navbar.css"
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navebar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/favorites" className="navbar-link">
          Favorites
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
