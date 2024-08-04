import React from "react";
import { CiGift } from "react-icons/ci";
import SignUpForm from "./SignUpForm";
import logo from "../../assets/logo.png";

const SignupContent = () => {
  return (
    <div className="bg-[#fce5dd] flex flex-col md:flex-row gap-20 h-full">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col md:w-1/2 px-5 items-center gap-2  ">
          <img src={logo} alt="logo" className="w-[250px] h-[30]  mt-10" />

          <div className="flex flex-row md:flex-row gap-1 text-3xl font-semibold">
            <div>ƯU ĐÃI</div>
            <div className="text-textmaincolor">THÁNG 6</div>
          </div>

          <div className="flex flex-row md:flex-row gap-1 text-3xl  font-bold ">
            <div>TRẢI NGHIỆM</div>
            <span className="text-textmaincolor">MIỄN PHÍ</span>
          </div>

          <button className="flex text-white text-4xl bg-textmaincolor  rounded-xl px-10 py-5  items-center justify-center">
            28
          </button>

          <div className="flex flex-row md:flex-row gap-1 text-3xl mt-3 font-semibold">
            <div className="text-textmaincolor">PHỤ HUYNH ĐĂNG KÝ ĐẦU TIÊN</div>
          </div>

          <div className="flex flex-row gap-1 text-3xl mt-3 font-semibold">
            <div className="text-black">
              Chỉ còn <span className="text-textmaincolor">00</span> suất{" "}
            </div>
          </div>

          <div className="text-black text-2xl font-semibold mt-7 w-full">
            Đăng ký ngay hôm nay nhận trọn bộ{" "}
            <span className="text-textmaincolor">quà tặng độc quyền</span> từ
            Stem4kids:
          </div>

          <div className="flex flex-col gap-7 mt-7 text-xl font-semibold">
            <div className="flex flex-row">
              <CiGift className="text-textmaincolor text-4xl font-bold" />
              <div>
                Tặng khoá học{" "}
                <span className="text-textmaincolor">
                  {" "}
                  "Giúp con sử dụng thiết bị điện tử đúng cách của ba mẹ thông
                  thái"{" "}
                </span>{" "}
                trị giá 500.000
              </div>
            </div>

            <div className="flex flex-row">
              <CiGift className="text-textmaincolor text-3xl font-bold" />
              <div>
                Tặng khoá học{" "}
                <span className="text-textmaincolor">
                  {" "}
                  "Nhập môn lập trình cho trẻ đam mê Công nghệ"
                </span>{" "}
                trị giá 500.000
              </div>
            </div>

            <div className="flex flex-row mb-6">
              <CiGift className="text-textmaincolor text-5xl font-bold" />
              <div>
                <span className="text-textmaincolor">
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
