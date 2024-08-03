import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Modal from "./modal/Modal";

const Header = (props) => {
  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="w-full px-5 h-[100px] bg-maincolor flex   fixed items-center text-xl font-medium">
      <div className="flex md:flex-row flex-col w-1/3 md:w-1/6 ">
        <a href="/" title="Home Page" className="">
          <img
            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/453747816_1256029288718227_3087344852547097757_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHMpLy_fdeQgR2dUkuZLvjVMPJBm5nxW6gw8kGbmfFbqFLb7yRCtHjxQ9MoH9f-RrFrZNYvkgoGdlTFZtuRLKF9&_nc_ohc=y9CJhfFaNj8Q7kNvgHUCGEQ&_nc_ht=scontent.fhan14-3.fna&oh=00_AYA1_maLA0OSKlazTI5BY3Maid08WJgTAcDU4Z1YgZVk3w&oe=66B3A7E5"
            alt=""
            className="w-[100px] h-fit"
          />
        </a>
      </div>

      <div className="hidden md:block md:w-1/6  ">Tại sao chọn MindX</div>
      <div className="md:w-1/6 w-1/3 ">Các khóa học</div>
      <div className="hidden md:block md:w-1/6 ">Báo chí nói về MindX</div>
      <div className="hidden md:block  md:w-1/6 ">Thành tích học viên</div>

      <div className="md:w-1/6 w-1/3">
        <button
          className="auto-zoom-out-button px-5 py-3  bg-red-600 border  rounded-full p-3 text-white"
          onClick={openModal}
        >
          Học thử ngay
        </button>
        <Modal isOpen={isOpenModal} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Header;
