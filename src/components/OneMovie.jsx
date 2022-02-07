import React from "react";

import { TiPlus, TiMinus } from "react-icons/ti";


function OneMovie({ movie, onAdd, onRemove, inCart }) {
  const stil = { margin: 1 + "em", borderStyle: "dotted" };
  const stilSlika = {height: 310}
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
            <TiPlus />
          </button>
          <button className="btn"
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
