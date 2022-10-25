import React from "react";
import "./Body.css";

const Body1 = () => {
  return (
    <>
      <div className="body1-container">
        <ul className="body1-list-content">
          <li className="body1-each-list">
            <div className="ver-text1-container">
              <h3 className="ver-text1">Find out if you can</h3>
            </div>
          </li>
          <li className="body1-each-list">
            <div className="ver-text2-container">
              <h1 className="ver-text2">SU</h1>
              <h1 className="ver-text2">RVI</h1>
              <h1 className="ver-text2">VE</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse non leo id enim ultricies hendrerit eu quis sapien.
                Ut non metus pretium, blandit mi eu, maximus nulla.{" "}
              </p>
            </div>
          </li>
          <li className="body1-each-list">
            <img
              src="https://www.gannett-cdn.com/-mm-/d8d0774057d19139d16e6ede624d76e89947662d/c=1-0-1365-767/local/-/media/2022/03/11/USATODAY/usatsports/imageforentry36-jak.jpg?width=1364&height=767&fit=crop&format=pjpg&auto=webp"
              alt="everest-pic"
              className="everest-pic"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Body1;
