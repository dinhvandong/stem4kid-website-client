import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { BsPersonFillCheck } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiWorld } from "react-icons/gi";

const NumberTalk = () => {
  return (
    <div className="flex flex-col gap-5 bg-[#f0f0f0] items-center mt-10 h-full">
      <div className="md:text-5xl font-extrabold text-textmaincolor mt-10 mb-10 text-2xl ">
        NHỮNG CON SỐ BIẾT NÓI VỀ STEM4KIDS
      </div>

      <div className="flex flex-col md:flex-row  gap-24 ">
        <div className="flex md:flex-row gap-5">
          <button className="flex flex-col gap-5  items-center justify-center bg-white w-[265px] h-[364px] rounded-md object-cover transform transition-transform hover:scale-110">
            <div className="text-5xl  font-bold flex items-center flex-col gap-5">
              <FaGraduationCap className="text-8xl  bg-maincolor text-white rounded-full" />
              <div className="text-textmaincolor">100%</div>
            </div>
            <div className="text-xl font-medium">
              Học viên có việc làm <br></br>
              sau khi tốt nghiệp <br></br>
              (71% software <br></br>engineer, 21% data,<br></br> AI,...)
            </div>
          </button>

          <button className=" ml-24 flex flex-col gap-5  items-center justify-center bg-white w-[265px] h-[364px] rounded-md object-cover transform transition-transform hover:scale-110">
            <div className="text-5xl  font-bold flex items-center flex-col gap-5">
              <BsPersonFillCheck className="text-8xl  bg-maincolor text-white rounded-full" />
              <div className="text-textmaincolor">25000+</div>
            </div>
            <div className="text-xl font-medium">
              Học sinh đã tốt nghiệp <br></br>
              và đi ra thế giới từ <br></br>
              Stem4kids (16,5% làm việc) <br></br>
              tại nước ngoài
            </div>
          </button>
        </div>
        {/* <button className="flex flex-col gap-5  items-center justify-center bg-white w-[265px] h-[364px] rounded-md object-cover transform transition-transform hover:scale-110">
          <div className="text-5xl  font-bold flex items-center flex-col gap-5">
            <FaGraduationCap className="text-8xl  bg-red-600 text-white rounded-full" />
            <div className="text-red-600">100%</div>
          </div>
          <div className="text-xl font-medium">
            Học viên có việc làm <br></br>
            sau khi tốt nghiệp <br></br>
            (71% software <br></br>engineer, 21% data,<br></br> AI,...)
          </div>
        </button>

        <button className="flex flex-col gap-5  items-center justify-center bg-white w-[265px] h-[364px] rounded-md object-cover transform transition-transform hover:scale-110">
          <div className="text-5xl  font-bold flex items-center flex-col gap-5">
            <BsPersonFillCheck className="text-8xl  bg-red-600 text-white rounded-full" />
            <div className="text-red-600">25000+</div>
          </div>
          <div className="text-xl font-medium">
            Học sinh đã tốt nghiệp <br></br>
            và đi ra thế giới từ <br></br>
            Stem4kids (16,5% làm việc) <br></br>
            tại nước ngoài
          </div>
        </button> */}

        <div className="flex md:flex-row gap-24">
          <button className="flex flex-col gap-5  items-center justify-center bg-white w-[265px] h-[364px] rounded-md object-cover transform transition-transform hover:scale-110">
            <div className="text-5xl font-bold flex items-center flex-col gap-5">
              <RiMoneyDollarCircleFill className="text-8xl  bg-maincolor text-white rounded-full" />
              <div className="text-textmaincolor">1650$</div>
            </div>
            <div className="text-xl font-medium">
              Là mức lương trung <br></br>
              bình nhận được của <br></br>
              học sinh sau 1,5 - 3 năm <br></br>
              tốt nghiệp từ Stem4kids
            </div>
          </button>

          <button className="flex flex-col gap-5  items-center justify-center bg-white w-[265px] h-[364px] rounded-md mb-10 object-cover transform transition-transform hover:scale-110">
            <div className="text-5xl font-bold flex items-center flex-col gap-5">
              <GiWorld className="text-8xl  bg-maincolor text-white rounded-full" />
              <div className="text-textmaincolor">3,5M$</div>
            </div>
            <div className="text-xl font-medium">
              Số tiền từ các quỹ <br></br>
              tư ngoại giúp Stem4kids<br></br>
              lọt top Edtech triệu đô <br></br>
              và sẵn sàng vươn ra <br></br>
              thế giới
            </div>
          </button>
        </div>

        {/* <button className="flex flex-col gap-5  items-center justify-center bg-white w-[265px] h-[364px] rounded-md object-cover transform transition-transform hover:scale-110">
          <div className="text-5xl font-bold flex items-center flex-col gap-5">
            <RiMoneyDollarCircleFill className="text-8xl  bg-red-600 text-white rounded-full" />
            <div className="text-red-600">1650$</div>
          </div>
          <div className="text-xl font-medium">
            Là mức lương trung <br></br>
            bình nhận được của <br></br>
            học sinh sau 1,5 - 3 năm <br></br>
            tốt nghiệp từ Stem4kids
          </div>
        </button>

        <button className="flex flex-col gap-5  items-center justify-center bg-white w-[265px] h-[364px] rounded-md mb-10 object-cover transform transition-transform hover:scale-110">
          <div className="text-5xl font-bold flex items-center flex-col gap-5">
            <GiWorld className="text-8xl  bg-red-600 text-white rounded-full" />
            <div className="text-red-600">3,5M$</div>
          </div>
          <div className="text-xl font-medium">
            Số tiền từ các quỹ <br></br>
            tư ngoại giúp Stem4kids<br></br>
            lọt top Edtech triệu đô <br></br>
            và sẵn sàng vươn ra <br></br>
            thế giới
          </div>
        </button> */}
      </div>
    </div>
  );
};

export default NumberTalk;
