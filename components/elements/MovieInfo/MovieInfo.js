import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../../config";

import FontAwesome from "react-fontawesome";

const MovieInfo = props => {
  const { movie, directors } = props;

  return (
    <div
      className="movieinfo"
      style={{
        background: movie.backdrop_path
          ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
          : "./static/images/no_image.jpg"
      }}
    >
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <img
            src={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : "./static/images/no_image.jpg"
            }
            alt="moviethumb"
          />
        </div>
        <div className="movieinfo-text">
          <h1>{movie.title}</h1>
          <span> PLOT :</span>
          <p>{movie.overview}</p>
          <span>IMDB RATING:</span>
          <div className="rating">
            <meter
              min="0"
              max="100"
              optimum="100"
              low="40"
              high="70"
              value={movie.vote_average * 10}
            />
            <p className="score"> {movie.vote_average} </p>
          </div>
          {directors.length > 1 ? (
            <span> Directors:</span>
          ) : (
            <span>Director:</span>
          )}
          {directors.map((element, index) => {
            return (
              <p key={index} className="director">
                {element.name}
              </p>
            );
          })}
        </div>
        <FontAwesome className="fa-film" name="film" size="5x" />
      </div>
    </div>
  );
};

export default MovieInfo;
