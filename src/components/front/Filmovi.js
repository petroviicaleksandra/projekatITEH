import React from "react";
import Header from "./Header";

const Filmovi = () => {
  return (
    <section>
      <Header labs="Uloguj se"></Header>
      <div class="container mt-5">
        <h2 class="text-center">Bootstrap movie cards</h2>
        <div class="row justify-content-center"></div>

        <div class="card movie_card">
          <img
            src="https://www.joblo.com/assets/images/joblo/posters/2019/02/Dyow9RgX4AElAGN.jpg"
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <i
              class="fas fa-play play_button"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Play Trailer"
            ></i>
            <h5 class="card-title">Toy Story 4</h5>
            <span class="movie_info">2019</span>
            <span class="movie_info float-right">
              <i class="fas fa-star"></i> 9 / 10
            </span>
          </div>
        </div>

        <div class="card movie_card">
          <img
            src="https://www.joblo.com/assets/images/joblo/posters/2019/02/captin-marvel-poster-international.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <i
              class="fas fa-play play_button"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Play Trailer"
            ></i>
            <h5 class="card-title">Captain Marvel</h5>
            <span class="movie_info">2019</span>
            <span class="movie_info float-right">
              <i class="fas fa-star"></i> 9 / 10
            </span>
          </div>
        </div>

        <div class="card movie_card">
          <img
            src="https://www.joblo.com/assets/images/joblo/posters/2019/01/Spider-Man-Far-From-Home-poster-1.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <i
              class="fas fa-play play_button"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Play Trailer"
            ></i>
            <h5 class="card-title">Spider-Man: Far From Home</h5>
            <span class="movie_info">2019</span>
            <span class="movie_info float-right">
              <i class="fas fa-star"></i> 9 / 10
            </span>
          </div>
        </div>

        <div class="card movie_card ">
          <img
            src="https://www.joblo.com/assets/images/joblo/posters/2019/01/Alita-character-poster-1.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <i
              class="fas fa-play play_button"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Play Trailer"
            ></i>
            <h5 class="card-title">Alita: Battle Angel</h5>
            <span class="movie_info">2019</span>
            <span class="movie_info float-right">
              <i class="fas fa-star"></i> 9 / 10
            </span>
          </div>
        </div>

        <div class="card movie_card">
          <img
            src="https://www.joblo.com/assets/images/joblo/posters/2018/11/Spider-Verse-poster-1.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <i
              class="fas fa-play play_button"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Play Trailer"
            ></i>
            <h5 class="card-title">Spider-Man: Into the Spider-Verse</h5>
            <span class="movie_info">2019</span>
            <span class="movie_info float-right">
              <i class="fas fa-star"></i> 9 / 10
            </span>
          </div>
        </div>
      </div>

      <div class="row col-md-12 justify-content-center">
        <div class="card credits col-md-4 ">
          <div class="card-body">
            <p>
              Made with <i class="fas fa-heart"></i> by Sukhmeet Singh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filmovi;
