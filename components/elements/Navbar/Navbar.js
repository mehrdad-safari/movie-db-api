import React from "react";
import Link from "next/link";

const NavBar = () => (
  <div className="navbar" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <Link href={{ pathname: "/" }}>
          <span className="logo">
            <img src="/static/images/moviedb_logo.png" alt="Moviedb Logo" />
          </span>
        </Link>
      </div>

      <div className="navbar-collapse collapse">
        <ul id="menu-primary" className="nav navbar-nav">
          <li className="active">
            <Link href={{ pathname: "/" }}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a href="#myCarousel">What's Coming Soon </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default NavBar;
