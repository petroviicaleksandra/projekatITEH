import React from "react";
import { Link } from "react-router-dom";

const Header = ({ labs }) => {
  return (
    <header className="header">
      <div>
        <h1 className="logo">Online bioskop</h1>
      </div>
      <div className="header-links">
        <ul>
          <Link to="/">Filmovi</Link>
        </ul>
        <ul>
          <Link to="/signup">{labs}</Link>
        </ul>
        <ul>
          <Link to="/cart" className="cart">
            <i class="fas fa-shopping-cart"></i> Korpa
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
