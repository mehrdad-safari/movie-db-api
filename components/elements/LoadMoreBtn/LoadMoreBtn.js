import React from "react";
import PropTypes from "prop-types";

const LoadMoreBtn = ({ text, onClick }) => (
  <div className="container section">
    <div className="row">
      <div className="loadmoreBtn col-sm-12" onClick={() => onClick(true)}>
        {text}
      </div>
    </div>
  </div>
);

LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default LoadMoreBtn;
