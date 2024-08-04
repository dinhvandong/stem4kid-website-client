import React from "react";
import { Carousel } from "antd";
import anh5 from "../../assets/anh5.jpeg";
import anh6 from "../../assets/anh6.jpeg";
import anh7 from "../../assets/anh7.jpeg";
const contentStyle = {
  margin: 0,
  height: "700px",
  // color: "#fff",
  // lineHeight: "160px",
  // textAlign: "center",
  // background: "#364d79",
};
const SlideImageWork = () => (
  <>
    <Carousel arrows infinite={true}>
      <div>
        <h3 style={contentStyle}>
          <img src={anh5} alt="anh5" className="w-full h-full" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={anh6} alt="anh6" className="w-full h-full" />
        </h3>
      </div>
    </Carousel>
  </>
);
export default SlideImageWork;
