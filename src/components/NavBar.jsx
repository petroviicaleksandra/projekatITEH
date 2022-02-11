import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

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
      window.sessionStorage.setItem("auth_token", null);
      console.log(JSON.stringify(response.data));
      // window.sessionStorage.setItem("auth_token", null);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function NavBar({ cartNum, token, role }) {
  return (
    <div className="navBar">
      <div>
        <h1 className="logo">ONLINE-BIOSKOP</h1>
      </div>
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
        <a class="nav-bar" href="/signup" onClick={handleIzloguj}>
          Izloguj se
        </a>
        // <Header labs="Izloguj se" onclick={handleIzloguj}></Header>
      )}
      {role == "admin" ? (
        <>
          <Link to="/tabela">Prikaz</Link>
          <Link to="/tickets">Kupljeno</Link>{" "}
          <h4 className="ulogovan">Ulogovan je: admin</h4>
        </>
      ) : (
        ""
      )}
      {role == "user" ? (
        <>
          <h4 className="ulogovan">Ulogovan je: user</h4>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
