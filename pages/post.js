import React from "react";
import Head from "../components/elements/Header/Header";
import Navigation from "../components/elements/Navigation/Navigation";
import MovieInfoBar from "../components/elements/MovieInfoBar/MovieInfoBar";
import Actor from "../components/elements/Actor/Actor";
import "../static/css/index.css";

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../config";

import FontAwesome from "react-fontawesome";
import fetch from "isomorphic-unfetch";

const Post = ({ movieData }) => {
  return (
    <div className="movie-post">
      <Head
        title={movieData.title}
        description={movieData.overview}
        keywords={"keys"}
      />
      <Navigation movie={movieData.title} />
      <div>
        {movieData ? (
          <div
            className="movieinfo"
            style={{
              background: movieData.backdrop_path
                ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movieData.backdrop_path}')`
                : "./static/images/no_image.jpg"
            }}
          >
            <div className="movieinfo-content">
              <div className="movieinfo-thumb">
                <img
                  src={
                    movieData.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movieData.poster_path}`
                      : "./static/images/no_image.jpg"
                  }
                  alt={`Image For  ${movieData.title}`}
                />
              </div>
              <div className="movieinfo-text">
                <h1>{movieData.title}</h1>
                <span> PLOT :</span>
                <p>{movieData.overview}</p>
                <span>IMDB RATING:</span>
                <div className="rating">
                  <meter
                    min="0"
                    max="100"
                    optimum="100"
                    low="40"
                    high="70"
                    value={movieData.vote_average * 10}
                  />
                  <p className="score"> {movieData.vote_average} </p>
                </div>
                {movieData.directors.length > 1 ? (
                  <span> Directors:</span>
                ) : (
                  <span>Director:</span>
                )}
                {movieData.directors.map((element, index) => {
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
        ) : (
          ""
        )}

        <MovieInfoBar
          time={movieData.runtime}
          budget={movieData.budget}
          revenue={movieData.revenue}
        />
      </div>

      {movieData.actors ? (
        <div className="movie-grid">
          <Actor actor={movieData.actors} />
        </div>
      ) : null}
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  // Define Endpoint For Movie 
  const endpoint = `${API_URL}movie/${query.id}?api_key=${API_KEY}&language=en-US`;
  let movieData = {};

  try {
    const res = await (await fetch(endpoint)).json();

    if (res.status_code) {
      // if There is not any Movie
      console.log(
        "The Movie ID is Wrong or is Not Found Status Error Code:",
        res.status_code
      );
    } else {
      // Add Movie Data to movieData
      movieData = { ...res };
      // Define Endpoint to get movie credits
      const creditsEndpoint = `${API_URL}movie/${query.id}/credits?api_key=${API_KEY}`;

      const creditsResult = await (await fetch(creditsEndpoint)).json();

      const directors = creditsResult.crew.filter(
        member => member.job === "Director"
      );
       // Add Credits to movieData
      movieData = { ...movieData, actors: creditsResult.cast, directors };
    }
  } catch (e) {
    console.error("Error:", e);
  }
  return { movieData };
};

export default Post;
