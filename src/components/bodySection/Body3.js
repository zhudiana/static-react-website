import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Body.css";

const Body3 = () => {
  return (
    <>
      <div className="body3-container">
        <ul className="body3-list-content">
          <li className="body3-each-list">
            <div className="body3-text-container">
              <h5 className="body3-upper-text">Lorem ipsum dolor</h5>
              <h3 className="ver-num">13</h3>
              <div className="under-text">
                <p>
                  You have <span style={{ color: "red" }}>78%</span> chance for
                  survival
                </p>
                <h5>
                  <FaTimes style={{ color: "red" }} /> lorem ipsum
                </h5>
              </div>
            </div>
          </li>
          <li className="body3-side-text">
            <h1>YOUR RESULTS</h1>
          </li>
          <li>
            <div className="body3-over-container">
              {" "}
              <div className="body3-over-image-text">
                <h1> SHARE YOUR RESULTS ON SOCIAL MEDIA</h1>
                <p>
                  Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
                  dolor
                </p>
                <h5 className="under-text-sign">
                  <FaTimes style={{ color: "red" }} /> lorem ipsum lorem
                </h5>
              </div>
            </div>
          </li>
          <li>
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/50/08/45/1000_F_250084510_fvspwV88wxKxY2l3WTTESHdMW7ajLx6r.jpg"
              className="body3-under-image"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Body3;
