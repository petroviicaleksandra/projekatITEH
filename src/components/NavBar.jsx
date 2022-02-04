import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
  return (
    <div className="navBar">
      <Link to="/">E-bioskop</Link>
      <Link to="/cart" className="cart-items">
        <BiMoviePlay />
        <p className="cart-num">{cartNum}</p>
      </Link>
    </div>
  );
}

export default NavBar;