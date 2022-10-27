import React from "react";
import Body1 from "./Body1";
import Body2 from "./Body2";
import { dummyData } from "../../data/dummyData";

const BodyCollection = () => {
  const body2Elements = dummyData.map((item) => {
    return <Body2 image={item.image} />;
  });
  return (
    <div>
      <Body1 />
      {body2Elements}
    </div>
  );
};

export default BodyCollection;
