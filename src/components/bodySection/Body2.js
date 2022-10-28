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
          <ul>
            <li>
              <img src={props.image2} />
              <h3>{props.title2}</h3>
              <p>{props.descT}</p>
              <p>{props.mainDesc}</p>
              <h3>{props.lastText}</h3>
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Body2;
