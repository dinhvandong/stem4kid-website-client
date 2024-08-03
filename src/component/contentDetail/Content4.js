import React from "react";
import SlideImageWork from "../carouselImgage/SlideImageWork";

const Content4 = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row  mt-10  w-[90%] justify-center  h-[700px] ml-28 gap-10">
        <div className="w-[60%] h-[700px] items-center bg-slate-500">
          <SlideImageWork />
        </div>
        <div className="w-[30%]  bg-red-700  h-[700px] ">
          <img
            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/67510183_418465662097882_6981797114372161536_n.png?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeFy0jqo5g6qm5wlv5NcXRXeDCcs5Apubc8MJyzkCm5tz69-lPwkwlcGLI8NeUkOFvq9ldTwyzqVJEfGm_BAsNLI&_nc_ohc=vL3RQ7Ss26YQ7kNvgH_Yt-n&_nc_ht=scontent.fhan14-3.fna&oh=00_AYB53v_huo9ZySUSnCSd2j6RhHzpWeJTL8JiXQ1-NvvU6g&oe=66D53951"
            alt=""
            className="w-fit h-full object-cover transform transition-transform hover:scale-110"
          />
        </div>
      </div>
      <button className="px-10 py-5 auto-zoom-out-button mt-7  bg-red-700 rounded-md text-2xl w-[280px] text-white font-bold">
        ĐĂNG KÝ NGAY
      </button>
    </div>
  );
};

export default Content4;
