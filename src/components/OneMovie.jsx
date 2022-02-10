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
  // function getId() {
  //   var config = {
  //     method: "get",
  //     url: "http://127.0.0.1:8000/api/getId",
  //     headers: {
  //       Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
  //     },
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //       return response.data;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  function handleRemove(movie_id) {
    var config = {
      method: "delete",
      url: "http://127.0.0.1:8000/api/tickets/" + movie_id,
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
      // data : data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleTicket(movieId) {
    var data = JSON.stringify({
      movie_id: movieId,
    });
    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/ticket",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
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
            onClick={() => {
              onAdd(movie.title, movie.id);
              handleTicket(movie.id);
            }}
          >
            <TiPlus />
          </button>
          <button
            className="btn"
            onClick={() => {
              onRemove(movie.title, movie.id);
              handleRemove(movie.id);
            }}
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
