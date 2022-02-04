import React from "react";

import { BsPlusLg, BsDashLg } from "react-icons/bs";

function OneMovie({ movie, onAdd, inCart }) {
  const stil = { margin: 1 + "em", borderStyle: "dotted" };
  const stilSlika = {height: 200}
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
          >
            <BsPlusLg />
          </button>
          <button className="btn">
            <BsDashLg />
          </button>
        </>
      ) : (
        <h4>Amount: {movie.amount}</h4>
      )}
    </div>
  );
}

export default OneMovie;
