import React from "react";
import { Carousel } from "antd";
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
          <img
            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/67510183_418465662097882_6981797114372161536_n.png?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeFy0jqo5g6qm5wlv5NcXRXeDCcs5Apubc8MJyzkCm5tz69-lPwkwlcGLI8NeUkOFvq9ldTwyzqVJEfGm_BAsNLI&_nc_ohc=vL3RQ7Ss26YQ7kNvgH_Yt-n&_nc_ht=scontent.fhan14-3.fna&oh=00_AYB53v_huo9ZySUSnCSd2j6RhHzpWeJTL8JiXQ1-NvvU6g&oe=66D53951"
            alt="/img1"
            className="w-fit h-full"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/308169077_1129211097689998_3040521098847991606_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeHMYfUrDwKCeYuiohV6eixx2hJ7djaUdxnaEnt2NpR3GbqjzLmGflSRdixp-QKF6mPKPxUBWpEIHt9u2kc-FFik&_nc_ohc=kzafLpXQB-oQ7kNvgFgKNOH&_nc_ht=scontent.fhan14-2.fna&oh=00_AYAGNedJo6E4uUa24SQtRdBA3fd5REGPqCtswfzRrahEmw&oe=66B3986F"
            alt="/img2"
            className="w-fit h-full"
          />
        </h3>
      </div>
    </Carousel>
  </>
);
export default SlideImageWork;
