import React from "react";
import "./Body.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";

const Body4 = (props) => {
  return (
    <>
      <div className="body4-container">
        <ul className="body4-list-content">
          <li className="body4-each-list">
            <div className="ver-text1-container">
              <h3 className="body4-ver-text1">{props.text1}</h3>
            </div>
          </li>
          <li className="body4-each-list">
            <div className="body4-text2-container">
              <h1 className="body4-ver-text2">{props.text2} </h1>

              <p>{props.description}</p>

              <FaTimes
                style={{
                  color: "red",
                  fontSize: "20px",
                  marginLeft: "13%",
                }}
              />
              <h6>ipsum</h6>
            </div>
          </li>
          <li className="body4-each-list">
            <img src={props.image} alt="everest-pic" className="body4-image" />
            <div className="body4-arrow-container">
              <div className="body4-right-arrow">
                <FaArrowRight className="arrow" />
              </div>
              <div className="body4-left-arrow">
                <FaArrowLeft className="arrow" />
              </div>
            </div>
            <div className="body4-num">
              <h1>
                01 <hr style={{ width: "40px" }} />
              </h1>

              <h4>02</h4>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Body4;
