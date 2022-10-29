import React from "react";
import "./Body.css";
import { FaTimes } from "react-icons/fa";

const Body2 = (props) => {
  return (
    <>
      <div className="body2-container">
        <ul>
          <ul className="image-list-body2">
            <li>
              <img src={props.image} />
            </li>
            <li className="text-content">
              <h6 className="text1">{props.text1}</h6>
              <h3>{props.title}</h3>
              <p>{props.description}</p>
              <FaTimes className="x-sign" />
              <h6 className="sign-next-text">{props.text2}</h6>
            </li>
          </ul>
        </ul>
        <ul>
          <div className="left-component">
            <h1 className="body2-over-image-num">{props.text3}</h1>
            <img src={props.image2} className="boots-image" />
            <h4 className="title2-body2">{props.title2}</h4>
            <p className="bold-desc">{props.descT}</p>
            <p className="mainDesc">{props.mainDesc}</p>
            <FaTimes className="left-x-sign" />
            <h5>{props.lastText}</h5>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Body2;
