import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import Header from "./Header";
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

function NavBar({ cartNum, token, ulog }) {
  return (
    <div className="navBar">
      <h1>Role</h1>
      <Link to="/">E-bioskop</Link>
      <Link to="/cart" className="cart-items">
        <BiMoviePlay />
        <p className="cart-num">{cartNum}</p>
      </Link>
      <Link to="/popular">Popularno</Link>
      {window.sessionStorage.getItem("auth_token") == null ? (
        <a class="nav-bar" href="/signup">
          Uloguj se
        </a>
      ) : (
        <a class="nav-bar" href="/signup" onClick={handleIzloguj}>
          Izloguj se
        </a>
        // <Header labs="Izloguj se" onclick={handleIzloguj}></Header>
      )}
      {ulog == "admin" ? (
        <>
          <Link to="/tabela">Prikaz</Link>
          <Link to="/tickets">Kupljeno</Link>{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
