import React from "react";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";
import PropTypes from "prop-types";

const HeroImage = props => {
  const bgimageUrl = IMAGE_BASE_URL + BACKDROP_SIZE;

  return (
    <div
      id="hero"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div className="container">
        <ol className="carousel-indicators">
          <li data-target="#hero" data-slide-to="0" className="active"></li>
          <li data-target="#hero" data-slide-to="1"></li>
          <li data-target="#hero" data-slide-to="2"></li>
          <li data-target="#hero" data-slide-to="3"></li>
          <li data-target="#hero" data-slide-to="4"></li>
        </ol>
      </div>

      <div className="carousel-inner">
        {props.items.map((item, index) => {
          return (
            <div
              key={index}
              className={`item ${index === 0 ? "active" : ""} `}
              style={{
                backgroundImage: `url(${bgimageUrl}${item.backdrop_path})`
              }}
            >
              <div className="container">
                <div
                  className="row blurb scrollme animateme"
                  data-when="exit"
                  data-from="0"
                  data-to="1"
                  data-opacity="0"
                  data-translatey="100"
                >
                  <div className="col-md-9">
                    <h1>{item.original_title}</h1>
                    <p> {item.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
HeroImage.propTypes = {
  items: PropTypes.array
};
export default HeroImage;
