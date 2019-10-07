import React from "react";

const Footer = () => (
  <div>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h6>Contact Info</h6>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">feedbacks</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h6>About Us</h6>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Find us</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h6>Policy</h6>
            <ul>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Cookie policy</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h6>Social Accounts</h6>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus"></i> Google +
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
            2019 &copy; MovieDB /{" "}
            <a href="https://github.com/mehrdad-safari/">
              Developed by Mehrdad Safari
            </a>{" "}
            API Powered By themoviedb.org
          </p>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
