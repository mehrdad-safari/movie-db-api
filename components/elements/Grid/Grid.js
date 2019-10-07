import React from "react";

import PropTypes from "prop-types";

const Grid = props => {
  return (
    <div className="container section">
      <div className="row">
        <div className="col-sm-12">
          {props.header && !props.loading ? <h2>{props.header}</h2> : null}

          <div className="slick-list" id="newIn">
            {props.children.map((element, index) => {
              return element;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Grid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
};
export default Grid;
