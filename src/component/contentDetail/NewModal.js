import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import authService from "../services/authService";
import { toast } from "react-toastify";

const NewModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   const data = await authService.loginByUser({ email, password });
      //   localStorage.setItem("userToken", data.token);
      //   localStorage.setItem("userInfo", JSON.stringify(data));
      //   toast.success("Đăng nhập thành công");
      //   onClose();
      //   setEmail("");
      //   setPassword("");
    } catch (error) {
      toast.error("Đăng nhập thất bại");
    }
  };

  return (
    <>
      {isOpen && (
        <form
          className="fixed inset-0 flex items-center justify-center z-50 w-full"
          onSubmit={handleSubmit}
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          {/* <div className="bg-white rounded-[12px] shadow-md z-50"> */}
          <div
            className="bg-cover bg-center h-auto shadow-md z-50 "
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYxTtnYM9n9oDlIlNQunn83s2WIWI2IEWIQ&s')",
            }}
          >
            <div className="w-full h-auto px-5 py-5">
              <div className="flex flex-col gap-5 items-end">
                <div className="hover:cursor-pointer text-3xl text-white ">
                  <AiOutlineClose
                    onClick={onClose}
                    className="hover:cursor-pointer"
                  />
                </div>
                <div className="text-4xl font-bold bg-blue-600  shadow-violet-600 shadow-xl rounded-xl px-3 py-3 ">
                  ĐĂNG KÝ TRẢI NGHIỆM HỌC LẬP TRÌNH MIỄN PHÍ
                </div>
              </div>
              <div className="h-auto w-full p-[24px] flex flex-col items-center gap-3">
                <div className="text-xl text-black">
                  Thời gian: 40 phút, lịch linh động |Nội dung trải nghiệm: Tùy
                  vào độ tuổi của con
                </div>
                <input
                  className="w-[70%] py-4 rounded-[4px] text-xl border-[3px] border-orange-400 hover:border-blue-400 px-[10px] focus:outline-none focus:ring-0"
                  id="name"
                  type="name"
                  placeholder="Họ tên phụ huynh"
                ></input>
                <input
                  className="w-[70%] py-4 rounded-[4px] text-xl border-[3px] border-orange-400 hover:border-blue-400 px-[10px] focus:outline-none focus:ring-0"
                  id="phoneNumber"
                  type="phoneNumber"
                  placeholder="Số điện thoại"
                ></input>
                <input
                  className="w-[70%] py-4 rounded-[4px] text-xl border-[3px] border-orange-400 hover:border-blue-400 px-[10px] focus:outline-none focus:ring-0"
                  id="text"
                  type="text"
                  placeholder="Khung giờ tiện nghe máy (VD: 10h - 11h)"
                ></input>
                <input
                  className="w-[70%] py-4 rounded-[4px] text-xl border-[3px] border-orange-400 hover:border-blue-400 px-[10px] focus:outline-none focus:ring-0 "
                  id="address"
                  type="address"
                  placeholder="Tỉnh thành sinh sống"
                ></input>

                <button className="rounded-[8px] font-medium text-4xl  py-5  text-white bg-red-500 hover:bg-orange-300 w-[70%] mt-10">
                  ĐĂNG KÝ NGAY
                </button>
                <button className="rounded-[8px] font-medium  text-2xl py-5  text-black w-[10 0%] ">
                  Stem4kids - Cam kết chất lượng giảng dạy tốt nhất và hỗ trợ
                  học viên
                  <span className=" text-red-600 px-2 border-b-2 border-red-600 ">
                    trọn đời
                  </span>
                </button>

                <button
                  className="mr-[6px] rounded-[8px] font-medium px-10 py-3 bg-red-500 hover:bg-slate-200"
                  onClick={onClose}
                >
                  HỦY
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default NewModal;
