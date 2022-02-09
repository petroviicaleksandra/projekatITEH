import React from "react";
import { useNavigate, useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import axios from "axios";

function OneMovie({ movie, onAdd, onRemove, inCart }) {
  const stil = { margin: 1 + "em", borderStyle: "dotted" };
  const stilSlika = { height: 310 };

  const [ticketData, setTicketData] = useState({
    movie_id: "",
    user_id: "",
  });
  // let navigate = useNavigate();
  // function handleInput(e) {
  let newTicketData = ticketData;
  //   newUserData[e.target.name] = e.target.value;
  //   setUserData(newUserData);
  // }
  // function idFilma() {
  //   axios
  //     .get("http://127.0.0.1:8000/api/getId")
  //     .then((res) => {
  //       console.log(res.data);
  //       return res.data;
  //       // window.sessionStorage.setItem("auth_token", res.data.access_token);
  //     })
  //     .catch((e) => {
  //       console.log("greska");
  //       alert("Proverite da li ste popunili sva polja");
  //     });
  // }
  function handleTicekt(movie) {
    const id = axios.get("http://127.0.0.1:8000/api/getId");

    let newTicket = {
      movie_id: movie,
      user_id: id,
    };

    setTicketData(newTicket);

    axios
      .post("http://127.0.0.1:8000/api/ticket", ticketData)
      .then((res) => {
        console.log(res.data);
        alert("Uspesna dodato u bazu");

        // window.sessionStorage.setItem("auth_token", res.data.access_token);
      })
      .catch((e) => {
        console.log("greska");
        alert("Neuspesna kupovina karte");
      });
  }
  return (
    <div className={inCart === 1 ? "card" : "card-cart"} style={stil}>
      <img
        className={inCart === 1 ? "card-img-top" : "card-img-left"}
        src={movie.imageLink}
        alt="Poster"
        style={stilSlika}
      />
      <div className="card-body">
        <h3 className="card-title">{movie.title}</h3>
        <p className="card-text">{movie.description}</p>
      </div>
      {inCart === 1 ? (
        <>
          <button
            className="btn"
            onClick={() => onAdd(movie.title, movie.id)}
            onClick={() => handleTicekt(movie.id)}
          >
            <TiPlus />
          </button>
          <button
            className="btn"
            onClick={() => onRemove(movie.title, movie.id)}
          >
            <TiMinus />
          </button>
        </>
      ) : (
        <h4>Broj karata: {movie.amount}</h4>
      )}
    </div>
  );
}

export default OneMovie;
