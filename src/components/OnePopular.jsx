import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w500/";
const OnePopular = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div class="card">
      <img src={IMG_API + poster_path} class="card-img-top" alt={title}></img>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{overview}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Ocena : {vote_average}</small>
      </div>

      <div class="card"></div>
    </div>
  );
};

export default OnePopular;
