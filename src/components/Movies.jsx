import React from "react";
import OneMovie from "./OneMovie.jsx";

const Movies = ({ movies, onAdd }) => {
  
  return (
    <div className="all-products">
      {movies.map((mov) => (
        <OneMovie movie={mov} image={mov.imgUrl} key={mov.id} onAdd={onAdd} inCart={1} />
      ))}
    </div>
  );
};

export default Movies;
