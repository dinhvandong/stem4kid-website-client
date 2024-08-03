import React from "react";
import { SiScratch } from "react-icons/si";
import { GrGamepad } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { SiCreatereactapp } from "react-icons/si";
import { LiaHandshakeSolid } from "react-icons/lia";

const Content3 = () => {
  return (
    <div className="flex flex-col md:flex-col gap-8 bg-white items-center mt-12">
      <div className="text-red-600 font-bold md:text-3xl text-5xl">
        CÁC KHÓA HỌC LẬP TRÌNH TẠI MINDX KIDS
      </div>

      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-row gap-14">
          <button className="w-[300px] h-[75px] flex flex-col border-[3px]  justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
            <div className="flex flex-row gap-4 items-center">
              <SiScratch className=" text-5xl border text-white items-center border-red-600 rounded-full bg-red-600" />
              <div className="items-end">
                <div className="font-bold">Lộ trình Scratch</div>
                <div className="text-lg">8-11 tuổi</div>
              </div>
            </div>
          </button>

          <button className="w-[300px] h-[75px] flex flex-col border-[3px]  justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
            <div className="flex flex-row gap-4 items-center">
              <GrGamepad className=" text-5xl border text-white items-center border-red-600 rounded-full bg-red-600" />
              <div className="items-end">
                <div className="font-bold">Lộ trình Game</div>
                <div className="text-lg">9-11 tuổi</div>
              </div>
            </div>
          </button>

          <button className="w-[300px] h-[75px] flex flex-col border-[3px]  justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
            <div className="flex flex-row gap-4 items-center">
              <MdPhoneIphone className=" text-5xl border items-center text-white border-red-600 rounded-full bg-red-600" />
              <div className="items-end">
                <div className="font-bold">Lộ trình Mobie App</div>
                <div className="text-lg">Học sinh THCS</div>
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-row gap-14">
          <button className="w-[300px] h-[75px] flex flex-col border-[3px]  justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
            <div className="flex flex-row gap-4 items-center">
              <TbWorldWww className=" text-5xl border text-white items-center border-red-600 rounded-full bg-red-600" />
              <div className="items-end">
                <div className="font-bold">Lộ trình Web</div>
                <div className="text-lg">Từ 14 tuổi</div>
              </div>
            </div>
          </button>

          <button className="w-[300px] h-[75px] flex flex-col border-[3px]  justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
            <div className="flex flex-row gap-4 items-center">
              <RiComputerLine className=" text-5xl border text-white items-center border-red-600 rounded-full bg-red-600" />
              <div className="items-end">
                <div className="font-bold">Computer Science</div>
                <div className="text-lg">Từ 14 tuổi</div>
              </div>
            </div>
          </button>

          <button className="w-[300px] h-[75px] flex flex-col border-[3px] bg-red-700 justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
            <div className="flex flex-row gap-4 items-center">
              <LiaHandshakeSolid className=" text-5xl border items-center text-red-700 border-white rounded-full bg-white" />
              <div className="items-end text-white ">
                <div className="font-bold">Lộ trình bảo trợ việc làm</div>
                <div className="text-lg">Từ 8 tuổi</div>
              </div>
            </div>
          </button>

          <button className="w-[300px] h-[75px] flex flex-col border-[3px]  justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
            <div className="flex flex-row gap-4 items-center">
              <SiCreatereactapp className=" text-5xl border items-center text-white border-red-600 rounded-full bg-red-600" />
              <div className="items-end">
                <div className="font-bold">Chương trình NextGen</div>
                <div className="text-lg">Học sinh THCS</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content3;
