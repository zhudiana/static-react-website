import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Body.css";

const Body5 = (props) => {
  return (
    <>
      <div className="body5-container">
        <ul className="body5-list">
          <li className="each-content">
            <img
              src="https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGluZyUyMHRlbnR8ZW58MHx8MHx8&w=1000&q=80"
              className="body5-image"
            />
            <h5 className="body5-upper-text">
              Lorem ipsum dolor sit amet, consectetur
            </h5>
            <h2 className="body5-lower-text">
              Morbi metus augue, tempor ut porta a, pharetra sed purus. Donec
              mattis justo a nunc viverra mollis.
            </h2>
          </li>
          <li className="each-content">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQYdJeE0s0X-xsmODRmXy9HDXBktOVHeStw&usqp=CAU"
              className="body5-image"
            />
            <h5 className="body5-upper-text">
              Lorem ipsum dolor sit amet, consectetur
            </h5>
            <h2 className="body5-lower-text">
              Morbi metus augue, tempor ut porta a, pharetra sed purus. Donec
              mattis justo a nunc viverra mollis.
            </h2>
          </li>
          <li className="each-content">
            <h1 className="body5-side-text">Gallery</h1>
            <p className="body5-side-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              metus augue, tempor ut porta a, pharetra sed purus. Donec mattis
              justo a nunc viverra mollis. Suspendisse eget dui quis purus
              fringilla auctor id sit amet urna.
            </p>
            <FaTimes
              style={{ color: "red", fontSize: "25px", marginLeft: "35px" }}
            />
            <p
              style={{
                fontWeight: 900,
                marginLeft: "65px",
                marginTop: "-25px",
                fontSize: "12px",
              }}
            >
              lorem
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Body5;
