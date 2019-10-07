import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const MovieThumb = ({ image, movieId, movieName }) => (
  <Link href={{ pathname: "/post", query: { id: movieId, title: movieName } }}>
    <div className="clickable movie-poster">
      <aside>
        <div>
          <Link
            href={{
              pathname: "/post",
              query: { id: movieId, title: movieName }
            }}
          >
            <a className="read-more">read more</a>
          </Link>
        </div>
      </aside>

      <Link
        href={{ pathname: "/post", query: { id: movieId, title: movieName } }}
      >
        <img className="clickable" src={image} alt={`Image For ${movieName}`} />
      </Link>
    </div>
  </Link>
);

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
};

export default MovieThumb;
