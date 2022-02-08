import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import Header from "./Header";

function NavBar({ cartNum }) {
  return (
    <div className="navBar">
      <Link to="/">E-bioskop</Link>
      <Link to="/cart" className="cart-items">
        <BiMoviePlay />
        <p className="cart-num">{cartNum}</p>
      </Link>
      <Header labs="Uloguj se"></Header>
    </div>
  );
}

export default NavBar;
