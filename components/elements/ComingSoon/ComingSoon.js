import React, { useState, useEffect } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";
import Link from 'next/link';

const ComingSoon = () => {

    // Define State Hook
  const [state, setState] = useState({ upcoming: [] });

  // Run Once Because of Callback Empty Array
  useEffect(() => {
    fetchComing();
  }, []);

  const fetchComing = async () => {
    
    //Define EndPoint For UpComing Movies Api
    const endPoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`;

    try {
      const res = await (await fetch(endPoint)).json();
      // Put 5 array from Movies to upcoming state
      setState({ upcoming: res.results.slice(0, 5) });
    } catch (err) {
      console.log(err);
    }
  };

  const { upcoming } = state;

  return (
    <div
      id="myCarousel"
      className="dark carousel slide"
      data-ride="carousel"
      style={{ backgroundColor: "#000" }}
    >
      <div className="carousel-inner">
        {upcoming.length > 0 &&
          upcoming.map((element, index) => {
            return (
              <div
                key={index}
                className={`item ${index === 0 && "active"}`}
                style={{
                  backgroundImage: `url(./static/images/slide-${index}.png)`,
                  padding: "40px 100px 30px 100px"
                }}
              >
                <div
                  className={`row single-slide slide${index}`}
                  style={{ opacity: 1 }}
                >
                  <div className="col-sm-5 col-xs-12 slide-content">
                    <h3 className="title">{element.title}</h3>

                    <div className="date">
                      Relase Date : {element.release_date}
                    </div>
                    <p>{element.overview}</p>
                    <Link
                      href={{
                        pathname: "/post",
                        query: { id: element.id, title: element.title }
                      }}
                    >
                      <p className="clickable">More info</p>
                    </Link>
                  </div>
                  <div className="col-sm-6 col-xs-12 col-sm-push-1">
                    <Link
                      href={{
                        pathname: "/post",
                        query: { id: element.id, title: element.title }
                      }}
                    >
                      <img
                        className="clickable"
                        src={`${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`}
                        alt={element.title}
                        style={{ width: "300px" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="right carousel-control"
        href="#myCarousel"
        data-slide="next"
      >
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>

      <ol className="carousel-indicators">
        {upcoming.length > 0 &&
          upcoming.map((element, index) => {
            return (
              <li
                data-target="#myCarousel"
                data-slide-to={index}
                key={index}
                className={`${index === 0 && "active"}`}
              >
                <img
                  className="d-block w-100 img-fluid"
                  src={`${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`}
                  alt={element.title}
                  style={{ width: "150px" }}
                />
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default ComingSoon;
