import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
 

// Convert time to hours and minutes
export const getTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
}

// Convert a number to $ format
export const formatMoney = (money) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
}

const MovieInfoBar = ({ time, budget, revenue }) => (
  <div className="movieinfobar">
    <div className="movieinfobar-content">
      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x" />
        <span className="movieinfobar-info">
          Running time: {getTime(time)}
        </span>
      </div>
      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-budget" name="money" size="2x" />
        <span className="movieinfobar-info">
          Budget: { formatMoney(budget)}
        </span>
      </div>
      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-revenue" name="ticket" size="2x" />
        <span className="movieinfobar-info">
          Revenue: { formatMoney(revenue)}
        </span>
      </div>
    </div>
  </div>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number
};

export default MovieInfoBar;
