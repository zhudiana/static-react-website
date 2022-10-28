import React from "react";
import "./Body.css";

const Body3 = (props) => {
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
            <div className="ver-text2-container">
              <h1 className="ver-text2">{props.text2}</h1>

              <p>{props.description}</p>
            </div>
          </li>
          <li className="body1-each-list">
            <img src={props.image} alt="everest-pic" className="everest-pic" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Body3;
