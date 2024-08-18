import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    timeRegistered: "",
  });

  const handleChangeName = (e) => {
    const { value } = e?.target;
    setFormData({
      ...formData,
      fullName: value,
    });
  };

  const handleChangePhoneNumber = (e) => {
    const { value } = e.target;

    setFormData({
      ...formData,
      phoneNumber: value,
    });
  };

  const handleChangeAddress = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      address: value,
    });
  };

  // const handleChangeTimeRegistered = (e) => {
  //   const { value } = e.target;
  //   setFormData({
  //     ...formData,
  //     timeRegistered: value,
  //   });
  // };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8080/api/test/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="w-[600px] h-[750px] bg-maincolor mt-10 rounded-md shadow-md">
      <h2 className=" flex flex-col text-3xl font-bold py-3  text-textmaincolor justify-center items-center">
        <div>ĐĂNG KÝ</div>
        <div>THAM GIA TRẢI NGHIỆM NGAY</div>
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mt-10"
      >
        <div className="mb-4 m-4 w-[80%]">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="fullName"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChangeName}
            className="h-20 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-2xl"
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
            value={formData.phoneNumber}
            onChange={handleChangePhoneNumber}
            className="block w-full h-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-2xl"
            placeholder="Số điện thoại"
          />
        </div>

        <div className="mb-4 m-4 w-[80%]">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <input
            type="address"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChangeAddress}
            className="block w-full h-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-2xl"
            placeholder="Quận/Huyện + Tỉnh thành sinh sống"
          />
        </div>

        <button className="flex justify-center w-[80%] ">
          <div className="flex justify-center text-5xl w-full items-center  bg-white  text-textmaincolor  font-bold mt-32 py-7  rounded focus:outline-none focus:shadow-outline">
            <button
              type="button"
              className="auto-zoom-out-button"
              onClick={() => handleSubmit()}
            >
              ĐĂNG KÝ NGAY!
            </button>
          </div>
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
