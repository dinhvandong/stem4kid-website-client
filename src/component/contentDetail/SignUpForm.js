import React from "react";

const SignUpForm = () => {
  return (
    <div className="w-[600px] h-[750px] bg-[#c4282c] mt-10 rounded-md shadow-md">
      <h2 className=" flex flex-col text-3xl font-bold py-3  text-white justify-center items-center">
        <div>ĐĂNG KÝ</div>
        <div>THAM GIA TRẢI NGHIỆM NGAY</div>
      </h2>
      <form className="flex flex-col items-center mt-10">
        <div className="mb-4 m-4 w-[80%]">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="name"
            id="name"
            name="name"
            className="h-20 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Tên phụ huynh"
          />
        </div>

        <div className="mb-4 m-4 w-[80%]">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
            className="block w-full h-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Số điện thoại"
          />
        </div>

        <div className="mb-4 m-4 w-[80%]">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="text"
            id="text"
            name="text"
            className="block w-full h-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Quận/Huyện + Tỉnh thành sinh sống"
          />
        </div>

        <button className="flex justify-center w-[80%] ">
          <div className="flex justify-center text-5xl w-full items-center  bg-white  text-red-600  font-bold mt-32 py-7  rounded focus:outline-none focus:shadow-outline">
            <div type="submit" className="auto-zoom-out-button">
              ĐĂNG KÝ NGAY!
            </div>
          </div>
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
