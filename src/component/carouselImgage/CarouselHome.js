import React from "react";
import { Carousel } from "antd";
import anh1 from "../../assets/anh1.jpeg";
import anh2 from "../../assets/anh2.jpeg";
import anh3 from "../../assets/anh3.jpeg";
import anh4 from "../../assets/anh4.jpeg";

const contentStyle = {
  margin: 0,
  height: "660px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  //   background: "#364d79",
};
const CarouselHome = () => (
  <>
    <Carousel arrows infinite={true}>
      <div>
        <h3 style={contentStyle}>
          <div className="">
            {/* <a href="/" title="Home Page" className="mr-4"> */}
            <img src={anh1} alt="anh1" className="w-full md:h-fit h-[700px] " />
            {/* </a> */}
          </div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <div className="">
            {/* <a href="/" title="Home Page" className="mr-4"> */}
            <img src={anh2} alt="anh2" className="w-full md:h-fit h-[700px]" />
            {/* </a> */}
          </div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <div className="">
            {/* <a href="/" title="Home Page" className="mr-4"> */}
            <img src={anh3} alt="anh3" className="w-full md:h-fit h-[700px] " />
            {/* </a> */}
          </div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <div className="">
            {/* <a href="/" title="Home Page" className="mr-4"> */}
            <img src={anh4} alt="anh4" className="w-full md:h-fit h-[700px]" />
            {/* </a> */}
          </div>
        </h3>
      </div>
    </Carousel>
  </>
);
export default CarouselHome;
