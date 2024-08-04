import React, { useState } from "react";
import SlideImageWork from "../carouselImgage/SlideImageWork";
import NewModal from "./NewModal";

const Content4 = (props) => {
  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="flex md:flex-col flex-col gap-5 items-center md:mt-10 mt-[500px] ">
      <div className="flex md:flex-row flex-col mt-10  md:w-[90%] w-[98%] justify-center  h-[700px]  gap-10">
        <div className="md:w-[60%] w-full h-[700px] md:items-center bg-slate-500">
          <SlideImageWork />
        </div>
        <div className="md:w-[30%] w-[90%] bg-red-700 md:ml-0 ml-10  md:h-full ">
          <img
            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/67510183_418465662097882_6981797114372161536_n.png?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeFy0jqo5g6qm5wlv5NcXRXeDCcs5Apubc8MJyzkCm5tz69-lPwkwlcGLI8NeUkOFvq9ldTwyzqVJEfGm_BAsNLI&_nc_ohc=vL3RQ7Ss26YQ7kNvgH_Yt-n&_nc_ht=scontent.fhan14-3.fna&oh=00_AYB53v_huo9ZySUSnCSd2j6RhHzpWeJTL8JiXQ1-NvvU6g&oe=66D53951"
            alt=""
            className="w-fit md:h-full h-[1000px] object-cover transform transition-transform hover:scale-110"
          />
        </div>
      </div>
      <button
        className="px-10 py-5 auto-zoom-out-button md:mt-7 mt-[500px] bg-red-700 rounded-md text-2xl w-[280px] text-white font-bold"
        onClick={openModal}
      >
        ĐĂNG KÝ NGAY
      </button>
      <NewModal isOpen={isOpenModal} onClose={closeModal} />
    </div>
  );
};

export default Content4;
