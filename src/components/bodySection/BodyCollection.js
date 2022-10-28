import React from "react";
import Body1 from "./Body1";
import Body2 from "./Body2";
import { body4Data, body5Data, dummyData } from "../../data/dummyData";
import { body1Data } from "../../data/dummyData";
import { body3Data } from "../../data/dummyData";
import Body3 from "./Body3";
import Body5 from "./Body5";
// import Body4 from "./Body5";
import "./Body.css";

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
        image2={item.image2}
        title2={item.title2}
        descT={item.descT}
        mainDesc={item.mainDesc}
        lastText={item.lastText}
      />
    );
  });
  const body3Elements = body3Data.map((item1) => {
    return (
      <Body3
        text1={item1.text1}
        text2={item1.text2}
        description={item1.description}
        image={item1.image}
      />
    );
  });
  const body4Elements = body4Data.map((item1) => {
    return (
      <Body1
        text1={item1.text1}
        text2={item1.text2}
        description={item1.description}
        image={item1.image}
      />
    );
  });
  const body5Elements = body5Data.map((item1) => {
    return (
      <Body5
        image={item1.image}
        text1={item1.text1}
        text2={item1.text2}
        description={item1.description}
      />
    );
  });
  return (
    <div>
      {body1Elements}
      <h2 className="title-body2">Popular challenges</h2>
      {body2Elements}
      {body3Elements}
      {body4Elements}
      {body5Elements}
    </div>
  );
};

export default BodyCollection;
