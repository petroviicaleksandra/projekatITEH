import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1 className="logo">Elektronika Shop</h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Proizvodi</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signup">Uloguj se</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart" className="cart">
              <i class="fas fa-shopping-cart"></i> Korpa
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
