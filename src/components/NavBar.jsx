import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

function handleIzloguj() {
  var config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/logout",
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      // window.sessionStorage.setItem("auth_token", null);
      window.sessionStorage.removeItem("auth_token");
    })
    .catch(function (error) {
      console.log(error);
    });
}

function NavBar({ cartNum, token }) {
  return (
    <div className="navBar">
      <Link to="/">E-bioskop</Link>
      <Link to="/cart" className="cart-items">
        <BiMoviePlay />
        <p className="cart-num">{cartNum}</p>
      </Link>
      <Link to="/popular">Popularno</Link>
      {token == null ? (
        <a class="nav-bar" href="/signup">
          Uloguj se
        </a>
      ) : (
        <a class="nav-bar" href="/signup" onclick={handleIzloguj}>
          Izloguj se
        </a>
        // <Header labs="Izloguj se" onclick={handleIzloguj}></Header>
      )}
      <Link to="/tabela">Prikaz</Link>
      <Link to="/tickets">Kupljeno</Link>
    </div>
  );
}

export default NavBar;
