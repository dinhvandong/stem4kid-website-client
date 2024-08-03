import React from "react";
import { CiGift } from "react-icons/ci";
import SignUpForm from "./SignUpForm";

const SignupContent = () => {
  return (
    <div className="bg-[#fce5dd] flex flex-row h-[800px] ">
      <div className="flex flex-col ml-44 ">
        <img
          src="https://mindx.edu.vn/logo-200.png"
          alt=""
          className="w-[250px] h-[30] ml-28 mt-10"
        />

        <div className="flex flex-row gap-1 text-3xl font-semibold mt-3 ml-24">
          <div>ƯU ĐÃI</div>
          <div className="text-red-600">THÁNG 6</div>
        </div>

        <div className="flex flex-row gap-1 text-5xl mt-3 font-semibold ml-10">
          <div>TRẢI NGHIỆM</div>
          <div className="text-red-600">MIỄN PHÍ</div>
        </div>

        <button className="flex text-white text-4xl bg-red-600 w-32 h-20 rounded-xl m-3  items-center justify-center ml-52">
          28
        </button>

        <div className="flex flex-row gap-1 text-3xl mt-3 font-semibold ml-10">
          <div className="text-red-600">PHỤ HUYNH ĐĂNG KÝ ĐẦU TIÊN</div>
        </div>

        <div className="flex flex-row gap-1 text-3xl mt-3 font-semibold ml-36">
          <div className="text-black">
            Chỉ còn <span className="text-red-600">00</span> suất{" "}
          </div>
        </div>

        <div className="text-black text-2xl font-semibold mt-7">
          Đăng ký ngay hôm nay nhận trọn bộ{" "}
          <span className="text-red-600">quà tặng độc quyền</span> từ MindX:
        </div>

        <div className="flex flex-col gap-7 mt-7 text-xl font-semibold">
          <div className="flex flex-row">
            <CiGift className="text-red-600 text-3xl font-bold" />
            <div>
              Tặng khoá học{" "}
              <span className="text-red-600">
                {" "}
                "Giúp con sử dụng thiết bị điện tử đúng cách của ba mẹ <br></br>
                thông thái"{" "}
              </span>{" "}
              trị giá 500.000
            </div>
          </div>

          <div className="flex flex-row">
            <CiGift className="text-red-600 text-3xl font-bold" />
            <div>
              Tặng khoá học{" "}
              <span className="text-red-600">
                {" "}
                "Nhập môn lập trình cho trẻ đam mê Công nghệ"
              </span>{" "}
              trị giá <br></br> 500.000
            </div>
          </div>

          <div className="flex flex-row">
            <CiGift className="text-red-600 text-3xl font-bold" />
            <div>
              <span className="text-red-600">Khai phá tiềm năng trong con</span>
              , giúp con làm chủ công nghệ, phát triển <br></br>tư duy, kỹ năng
              mềm và tự tin hội nhập trong thời đại mới.
            </div>
          </div>
        </div>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignupContent;
