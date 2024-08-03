import React from "react";
import { CiGift } from "react-icons/ci";
import SignUpForm from "./SignUpForm";

const SignupContent = () => {
  return (
    <div className="bg-[#fce5dd] flex flex-col md:flex-row gap-20 h-full">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col w-1/2 items-center gap-2 ml-10 ">
          <img
            src="https://mindx.edu.vn/logo-200.png"
            alt=""
            className="w-[250px] h-[30]  mt-10"
          />

          <div className="flex flex-row md:flex-row gap-1 text-3xl font-semibold">
            <div>ƯU ĐÃI</div>
            <div className="text-red-600">THÁNG 6</div>
          </div>

          <div className="flex flex-row md:flex-row gap-1 text-3xl font-bold ">
            <div>TRẢI NGHIỆM</div>
            <span className="text-red-600">MIỄN PHÍ</span>
          </div>

          <button className="flex text-white text-4xl bg-red-600  rounded-xl px-10 py-5  items-center justify-center">
            28
          </button>

          <div className="flex flex-row md:flex-row gap-1 text-3xl mt-3 font-semibold">
            <div className="text-red-600">PHỤ HUYNH ĐĂNG KÝ ĐẦU TIÊN</div>
          </div>

          <div className="flex flex-row gap-1 text-3xl mt-3 font-semibold">
            <div className="text-black">
              Chỉ còn <span className="text-red-600">00</span> suất{" "}
            </div>
          </div>

          <div className="text-black text-2xl font-semibold mt-7 w-full">
            Đăng ký ngay hôm nay nhận trọn bộ{" "}
            <span className="text-red-600">quà tặng độc quyền</span> từ MindX:
          </div>

          <div className="flex flex-col gap-7 mt-7 text-xl font-semibold">
            <div className="flex flex-row">
              <CiGift className="text-red-600 text-4xl font-bold" />
              <div>
                Tặng khoá học{" "}
                <span className="text-red-600">
                  {" "}
                  "Giúp con sử dụng thiết bị điện tử đúng cách của ba mẹ thông
                  thái"{" "}
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
                trị giá 500.000
              </div>
            </div>

            <div className="flex flex-row mb-6">
              <CiGift className="text-red-600 text-5xl font-bold" />
              <div>
                <span className="text-red-600">
                  Khai phá tiềm năng trong con
                </span>
                , giúp con làm chủ công nghệ, phát triển tư duy, kỹ năng mềm và
                tự tin hội nhập trong thời đại mới.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-1/6 items-start justify-start">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignupContent;
