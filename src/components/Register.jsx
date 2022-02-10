import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  function handleInput(e) {
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  }
  function handleRegister(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/register", userData)
      .then((res) => {
        console.log(res.data);
        alert("Uspesna registracija");
        navigate("/");
        // window.sessionStorage.setItem("auth_token", res.data.access_token);
      })
      .catch((e) => {
        console.log("greska");
        alert("Proverite da li ste popunili sva polja");
      });
  }
  return (
    <section
      className="vh-100"
      style={{
        paddingTop: 4.5 + "rem",
      }}
    >
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              className="img-fluid"
              alt="Simple image"
            ></img>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleRegister}>
              <div className="form-outline mb-4">
                <input
                  type="name"
                  id="form3Example2"
                  className="form-control form-control-lg"
                  placeholder="Unesite korisnicko ime"
                  name="name"
                  required
                  onInput={handleInput}
                ></input>
                <label className="form-label" htmlFor="form3Example3">
                  Korisniko ime
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Unesite email adresu"
                  name="email"
                  required
                  onInput={handleInput}
                ></input>
                <label className="form-label" htmlFor="form3Example3">
                  Email adresa
                </label>
              </div>
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Unesite lozinku"
                  name="password"
                  onInput={handleInput}
                  required
                ></input>
                <label className="form-label" htmlFor="form3Example4">
                  Lozinka
                </label>
              </div>
              <div className="form-outline mb-3">
                <input
                  type="text"
                  id="form3Example5"
                  className="form-control form-control-lg"
                  placeholder="Vasa uloga je"
                  name="role"
                  onInput={handleInput}
                  required
                ></input>
                <label className="form-label" htmlFor="form3Example5">
                  Uloga
                </label>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{
                    paddingLeft: 2.5 + "rem",
                    paddingRight: 2.5 + "rem",
                  }}
                >
                  Registruj se
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
