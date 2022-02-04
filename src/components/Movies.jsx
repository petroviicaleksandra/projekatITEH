import React from "react";
import OneMovie from "./OneMovie.jsx";

const Movies = ({ movies, onAdd, onRemove }) => {
  
  return (
    <div className="all-products">
      {movies.map((mov) => (
        <OneMovie movie={mov} image={mov.imageLink} key={mov.id} onAdd={onAdd} onRemove={onRemove} inCart={1} />
      ))}
    </div>
  );
};

export default Movies;
