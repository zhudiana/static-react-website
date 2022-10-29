import React from "react";
import Body1 from "./Body1";
import Body2 from "./Body2";
import { body4Data, body5Data, dummyData } from "../../data/dummyData";
import { body1Data } from "../../data/dummyData";
import { body3Data } from "../../data/dummyData";
import Body3 from "./Body3";
import Body5 from "./Body5";
import "./Body.css";
import Body4 from "./Body4";

const BodyCollection = () => {
  const body1Elements = body1Data.map((item1) => {
    return (
      <Body1
        text1={item1.text1}
        text2={item1.text2}
        description={item1.description}
        image={item1.image}
      />
    );
  });
  const body2Elements = dummyData.map((item) => {
    return (
      <Body2
        text1={item.text1}
        image={item.image}
        title={item.title}
        description={item.description}
        text2={item.text2}
        text3={item.text3}
        image2={item.image2}
        title2={item.title2}
        descT={item.descT}
        mainDesc={item.mainDesc}
        lastText={item.lastText}
      />
    );
  });

  const body4Elements = body4Data.map((item1) => {
    return (
      <Body4
        text1={item1.text1}
        text2={item1.text2}
        description={item1.description}
        image={item1.image}
      />
    );
  });

  return (
    <div>
      {body1Elements}
      <h2 className="title-body2">Popular challenges</h2>

      {body2Elements}
      <Body3 />
      {body4Elements}
      <Body5 />
    </div>
  );
};

export default BodyCollection;
