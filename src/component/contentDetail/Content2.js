import React, { useState } from "react";
import VideoPlayer from "../videoPlay/VideoPlayer ";
import NewModal from "./NewModal";

const Content2 = (props) => {
  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row bg-[#fce5dd] w-full h-auto ">
        <div className="bg-white w-full md:w-[50vw]">
          <div className="flex items-center flex-col mt-5 gap-5">
            <div className="md:text-4xl text-xl font-extrabold text-red-600">
              TẠI SAO NÊN CHO CON HỌC <br></br> LẬP TRÌNH SỚM TẠI STEM4KIDS?
            </div>

            <div className="text-lg font-medium pl-5">
              <div className="flex flex-row gap-5 items-end text-red-600">
                <div className="text-3xl font-medium">01.</div>{" "}
                <span className="text-lg font-medium">
                  Khai phá tiềm năng và thúc đẩy sự tự tin
                </span>
              </div>
              Giúp con tự tin hoạt bát, kích thích sự sáng tạo, tăng tư duy và
              kỹ
              <br></br>năng giao tiếp qua các hoạt động teamwork, thuyết trình,
              phản
              <br></br>biện, hackathon, cuộc thi hàng tháng, camp summer,...
            </div>

            <div className="text-lg font-medium pl-5">
              <div className="flex flex-row gap-5 items-end text-red-600">
                <div className="text-3xl font-medium">02.</div>{" "}
                <span className="text-lg font-medium">Học đi đôi với hành</span>
              </div>
              Vận dụng kiến thức vào thực tế giúp 100% học viên có thể tự tay
              <br></br>tạo ra sản phẩm công nghệ hoàn chỉnh, kiếm được thu nhập
              trên
              <br></br>CHPlay, AppStore,...
            </div>

            <div className="text-lg font-medium pl-5">
              <div className="flex flex-row gap-5 items-end text-red-600">
                <div className="text-3xl font-medium">03.</div>{" "}
                <span className="text-lg font-medium">
                  Phụ huynh dễ dàng theo dõi sự tiến bộ
                </span>
              </div>
              Phản hồi kịp thời chi tiết về quá trình học và phát triển của con
              để
              <br></br>ba mẹ có cái nhìn rõ ràng, nhanh chóng qua từng bước tiến
              của
              <br></br>con
            </div>

            <div className="text-lg font-medium">
              <div className="flex flex-row gap-5 items-end text-red-600">
                <div className="text-3xl font-medium">04.</div>{" "}
                <span className="text-lg font-medium">
                  Định hướng nghề nghiệp sớm
                </span>
              </div>
              Không còn mông lung về định hướng nghề nghiệp cho con với
              <br></br>chương trình bảo trợ việc làm và hoạt động tư vấn 1:1,
              tham gia
              <br></br>event hàng tháng cùng các chuyên gia
            </div>
          </div>
        </div>

        <div className="bg-white w-full md:w-[50vw] flex flex-col items-center gap-5 ">
          <div className="flex flex-row gap-3 items-end mt-5">
            <img
              src="https://w7.pngwing.com/pngs/494/891/png-transparent-vietnam-television-logo-vtv1-others-television-angle-text.png"
              alt=""
              className="w-[120px] h-[25]"
            />
            <div className="text-5xl font-bold"> nói về Stem4kids</div>
          </div>
          <VideoPlayer videoId={"RobAKsukQck"} width={800} height={480} />

          <button
            className="px-10 py-5 auto-zoom-out-button   bg-red-700 rounded-md text-2xl w-[280px] text-white font-bold"
            onClick={openModal}
          >
            ĐĂNG KÝ NGAY
          </button>
          <NewModal isOpen={isOpenModal} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Content2;
