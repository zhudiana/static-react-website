import React from "react";
import "./Body.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Body1 = (props) => {
  return (
    <>
      <div className="body1-container">
        <ul className="body1-list-content">
          <li className="body1-each-list">
            <div className="ver-text1-container">
              <h3 className="ver-text1">{props.text1}</h3>
            </div>
          </li>
          <li className="body1-each-list">
            <div className="text2-container">
              <h1 className="ver-text2">{props.text2} </h1>
            </div>
            <div className="ver-text2-container">
              <p className="body1-desc">{props.description}</p>
              <div className="social">
                <p className="body1-social-media">
                  <FaFacebook />
                </p>
                <p className="body1-social-media">
                  <FaTwitter />
                </p>
                <p className="body1-social-media">
                  <FaInstagram />
                </p>
              </div>
            </div>
          </li>
          <li className="body1-each-list">
            <img src={props.image} alt="everest-pic" className="everest-pic" />
            <div className="arrow-container">
              <div className="right-arrow">
                <FaArrowRight className="arrow" />
              </div>
              <div className="left-arrow">
                <FaArrowLeft className="arrow" />
              </div>
            </div>
          </li>
          <li>
            <div className="left-num">
              <div>
                <h1>01</h1>
                <hr
                  style={{
                    width: "40px",
                    marginTop: "-15px",
                    marginLeft: "30px",
                  }}
                />
              </div>

              <div>
                <h3>02</h3>
                <h3>03</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Body1;
