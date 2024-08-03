import React from "react";

const SignUpForm = () => {
  return (
    <div className="w-[600px] h-[609px] m-16 bg-[#c4282c] rounded-md shadow-md">
      <h2 className=" flex flex-col text-2xl font-bold mb-4 text-white justify-center items-center">
        <div>ĐĂNG KÝ</div>
        <div>THAM GIA TRẢI NGHIỆM NGAY</div>
      </h2>
      <form>
        <div className="mb-4 m-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="name"
            id="name"
            name="name"
            className="mt-1 h-20 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Tên phụ huynh"
          />
        </div>

        <div className="mb-4 m-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full h-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4 m-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full h-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className=" w-full block text-3xl  bg-white  text-red-600  font-bold mt-16 h-20 rounded focus:outline-none focus:shadow-outline"
        >
          Dang ki ngay
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
