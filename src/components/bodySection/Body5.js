import React from "react";
import "./Body.css";

const Body5 = (props) => {
  return (
    <>
      <div className="body4-container">
        <ul className="body4-list">
          <li className="each-content">
            <img src={props.image} />
            <h5>{props.text1}</h5>
            <h2>{props.text2}</h2>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Body5;
