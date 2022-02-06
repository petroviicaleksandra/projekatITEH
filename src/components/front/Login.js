import React from "react";

const Login = () => {
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
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Simple image"
            ></img>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Unesite email adresu"
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
                ></input>
                <label className="form-label" htmlFor="form3Example4">
                  Lozinka
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
                  Uloguj se
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Nemas nalog?{" "}
                  <a href="/register" className="link-danger">
                    Registruj se
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
