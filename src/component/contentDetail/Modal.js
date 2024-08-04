import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import authService from "../services/authService";
import { toast } from "react-toastify";

const Modal = ({ isOpen, onClose }) => {
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
            className="bg-cover bg-center bg-maincolor h-auto shadow-md z-50 "
            // style={{
            //   backgroundImage:
            //     "url('https://w0.peakpx.com/wallpaper/343/479/HD-wallpaper-yellow-lines-background-yellow-abstraction-background-creative-lines-background.jpg')",
            // }}
          >
            <div className="w-full h-auto px-5 py-5">
              <div className="flex flex-col gap-5 items-end">
                <div className="hover:cursor-pointer text-3xl text-white ">
                  <AiOutlineClose
                    onClick={onClose}
                    className="hover:cursor-pointer"
                  />
                </div>
                <div className="text-4xl font-bold bg-white rounded-xl px-3 py-3 ">
                  NHẬN TƯ VẤN KHÓA HỌC VÀ ĐĂNG KÝ VOUCHER HỌC THỬ
                </div>
              </div>
              <div className="h-auto w-full p-[24px] flex flex-col items-center gap-3">
                <div className="text-2xl text-black font-bold">
                  Thời gian: 60 phút | Nội dung học thử: Phụ thuộc độ tuổi của
                  con
                </div>
                <input
                  className="w-full md:w-[50%] py-5 rounded-[4px] text-xl  border-[3px] border-textmaincolor hover:border-blue-400 px-[10px] focus:outline-none focus:ring-0"
                  id="name"
                  type="name"
                  placeholder="Họ tên phụ huynh"
                ></input>
                <input
                  className="w-full md:w-[50%] py-5 rounded-[4px] text-xl border-[3px] border-textmaincolor hover:border-blue-400 px-[10px] focus:outline-none focus:ring-0"
                  id="phoneNumber"
                  type="phoneNumber"
                  placeholder="Số điện thoại"
                ></input>
                <input
                  className="w-full md:w-[50%] py-5 rounded-[4px] text-xl border-[3px] border-textmaincolor hover:border-blue-400 px-[10px] focus:outline-none focus:ring-0"
                  id="text"
                  type="text"
                  placeholder="Khung giờ tiện nghe máy (VD: 10h - 11h)"
                ></input>
                <input
                  className=" w-full md:w-[50%] py-5 rounded-[4px] text-xl border-[3px] border-textmaincolor hover:border-blue-400 px-[10px] focus:outline-none focus:ring-0 "
                  id="address"
                  type="address"
                  placeholder="Tỉnh thành sinh sống"
                ></input>

                <button className="rounded-[8px] font-medium text-4xl  py-5  text-textmaincolor bg-white hover:bg-red-600 hover:text-white w-full md:w-[50%] mt-10">
                  ĐĂNG KÝ NGAY
                </button>
                <button className="rounded-[8px] font-medium  md:text-5xl text-2xl py-5  text-textmaincolor w-[50%] ">
                  CHỈ CÒN{" "}
                  <span className="border border-textmaincolor text-red-600 border-x-4 border-y-4  ">
                    00
                  </span>{" "}
                  VOUCHER
                </button>

                {/* <button
                  className="mr-[6px] rounded-[8px] font-medium px-10 py-3 bg-red-500 text-white hover:bg-slate-200"
                  onClick={onClose}
                >
                  HỦY
                </button> */}
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Modal;
