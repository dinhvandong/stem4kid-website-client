import React, { useRef, useState } from "react";
import Modal from "./contentDetail/Modal";
// import { useNavigate } from "react-router-dom";
// import Modal from "./modal/Modal";

const Header = (props) => {
  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="w-full px-5 h-[100px] bg-white flex   fixed items-center text-xl font-mediumv z-10">
      <div className="flex md:flex-row flex-col w-1/3 md:w-1/6 ">
        <a href="/" title="Home Page" className="">
          <img
            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/454037218_1256989388622217_7864845323277101681_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEWI454xLA-SuYiKE4bF2YgMOcTfg06oKww5xN-DTqgrCaku3DqRe6IzT47QO91CJaTGZjRWHxVjHX6Lx6i1URJ&_nc_ohc=MRdWXKewqI8Q7kNvgFHoqQp&_nc_ht=scontent.fhan14-3.fna&oh=00_AYAAjtQsEr5tD0_JGGf8okQNtoD10sGcKbywyRmPRFWGuw&oe=66B5564A"
            alt=""
            className="w-[100px] h-fit"
          />
        </a>
      </div>

      <button className="hidden md:block md:w-1/6 font-semibold text-2xl hover:text-blue-500 object-cover transform transition-transform hover:scale-110">
        Tại sao chọn Stem4kids
      </button>
      <button className="md:w-1/6 w-1/3 font-semibold text-2xl hover:text-blue-500 object-cover transform transition-transform hover:scale-110">
        Các khóa học
      </button>
      <button className="hidden md:block md:w-1/6 font-semibold text-2xl hover:text-blue-500 object-cover transform transition-transform hover:scale-110">
        Báo chí nói về Stem4kids
      </button>
      <button className="hidden md:block  md:w-1/6 font-semibold text-2xl hover:text-blue-500 object-cover transform transition-transform hover:scale-110">
        Thành tích học viên
      </button>

      <div className="md:w-1/6 w-1/3 font-semibold text-2xl">
        <button
          className="auto-zoom-out-button px-5 py-3  bg-maincolor border   rounded-full p-3 text-textmaincolor"
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
