import React, { useState } from "react";
import SlideImageWork from "../carouselImgage/SlideImageWork";
import NewModal from "./NewModal";
import anh7 from "../../assets/anh7.jpeg";

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
            src={anh7}
            alt="anh7"
            className="w-fit md:h-full h-[1000px] object-cover transform transition-transform hover:scale-110"
          />
        </div>
      </div>
      <button
        className="px-10 py-5 auto-zoom-out-button md:mt-7 mt-[500px] bg-maincolor rounded-md text-2xl w-[280px] text-textmaincolor font-bold"
        onClick={openModal}
      >
        ĐĂNG KÝ NGAY
      </button>
      <NewModal isOpen={isOpenModal} onClose={closeModal} />
    </div>
  );
};

export default Content4;
