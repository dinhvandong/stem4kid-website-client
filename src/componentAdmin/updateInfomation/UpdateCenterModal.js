import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateCenterModal = ({ isOpen, onClose, onUpdate, center }) => {
  const [updateData, setUpdateData] = useState({
    facilityName: "",
    location: "",
    capacity: "",
    currentUsage: "",
    numberOfClassrooms: "",
    openHours: "",
    closeHours: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const navigate = useNavigate();
  // const goToCourse = () => {
  //   navigate("/admin/course");
  // };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(updateData);
    onUpdate({
      ...updateData,
    });
  };
  useEffect(() => {
    if (center) {
      setUpdateData({
        facilityName: center.facilityName,
        location: center.facilityName,
        capacity: center.capacity,
        currentUsage: center.currentUsage,
        numberOfClassrooms: center.numberOfClassrooms,
        openHours: center.openHours,
        closeHours: center.closeHours,
      });
    }
  }, [center]);

  if (!isOpen) return null;

  return (
    <div
      className="h-screen w-full flex justify-center items-center text-2xl"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
      }}
    >
      <div className="w-full h-full bg-black opacity-50 z-10"></div>
      <form
        onSubmit={handleSubmit}
        className=" w-[60%] bg-white rounded-lg z-20 absolute p-4"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <h1 className="text-[26px] font-bold my-3 text-center">
          Cập Nhật Cơ Sở
        </h1>

        <div>
          <label className="block font-medium text-gray-700 text-2xl">
            Tên Cơ Sở<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="facilityName"
            value={updateData.facilityName}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Địa Điểm<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="location"
            value={updateData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Sức Chứa<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="capacity"
            value={updateData.capacity}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Số Lượng Sử Dụng Cơ Sở Hiện Tại
            <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="currentUsage"
            value={updateData.currentUsage}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Số Lượng Phòng Học<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="numberOfClassrooms"
            value={updateData.numberOfClassrooms}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Giờ Mở Cửa<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="openHours"
            value={updateData.openHours}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Giờ Đóng Cửa<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="closeHours"
            value={updateData.closeHours}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <button
          type="button"
          className="w-full bg-orange-400 text-white p-2 rounded hover:bg-orange-700 text-2xl"
          onClick={() => handleSubmit()}
        >
          Cập Nhật Ngay
        </button>
      </form>
    </div>
  );
};

export default UpdateCenterModal;
