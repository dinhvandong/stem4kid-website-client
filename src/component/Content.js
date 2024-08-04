import React, { useState } from "react";
import SignupContent from "./contentDetail/SignupContent";
import CarouselHome from "./carouselImgage/CarouselHome";
import Content2 from "./contentDetail/Content2";
import Content3 from "./contentDetail/Content3";
import Content4 from "./contentDetail/Content4";
import NumberTalk from "./contentDetail/NumberTalk";
import FeelParent from "./contentDetail/FeelParent";
import ActiveMindx from "./contentDetail/ActiveMindx";
import StudentMindX from "./contentDetail/StudentMindX";
import Modal from "./contentDetail/Modal";

const Content = (props) => {
  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="flex flex-col gap-0">
      <div className="mt-24 relative">
        <div>
          <CarouselHome />
          <div className="absolute flex bottom-8 left-0 right-0 w-full justify-center  ">
            <button
              className="px-5 py-2 auto-zoom-out-button   bg-white rounded-md text-2xl w-[280px] text-red-600 font-bold"
              onClick={openModal}
            >
              HỌC THỬ MIỄN PHÍ
            </button>
            <Modal isOpen={isOpenModal} onClose={closeModal} />
          </div>
        </div>
      </div>
      <SignupContent />
      <Content2 />
      <Content3 />
      <Content4 />
      <NumberTalk />
      <FeelParent />
      <ActiveMindx />
      <StudentMindX />
    </div>
  );
};

export default Content;
