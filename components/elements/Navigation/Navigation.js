import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const Navigation = ({ movie }) => (
  <div className="navigation">
    <div className="navigation-content">
      <Link href="/">
        <p className="clickable">Home</p>
      </Link>
      <p>/</p>
      <p>{movie}</p>
    </div>
  </div>
);

Navigation.propTypes = {
  movie: PropTypes.string
};

export default Navigation;
