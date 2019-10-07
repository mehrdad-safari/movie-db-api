import React from 'react';
import { IMAGE_BASE_URL } from '../../../config';
import PropTypes from 'prop-types';
import './Actor.css';

const Actor = ( actor ) => {
  
  const actorList = actor.actor;
  const POSTER_SIZE = "w154";
 
  return (
    <div className="Tabel-actors" style={{ marginTop: 40 }}>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="tcol tcol-1"></div>
          <div className="tcol tcol-2">Crows</div>
          <div className="tcol tcol-3">Role</div>
        </li>

        { actorList.map((element, index) => {
          return (
            <li key={index} className="table-row">
              <div className="tcol tcol-1" data-label="Job Id">
                <img
                  src={
                    element.profile_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.profile_path}`
                      : "./static/images/no_image.jpg"
                  }
                  alt={`Image Of ${element.name} In The Role Of ${element.character} `}
                />
              </div>
              <div className="tcol tcol-2" data-label="Customer Name">
                {element.name}
              </div>
              <div className="tcol tcol-3" data-label="Amount">
                {element.character}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Actor.propTypes = {
  actor: PropTypes.array
}

export default Actor;