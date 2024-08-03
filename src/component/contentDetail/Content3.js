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
    <div className="flex flex-col gap-8 bg-white items-center mt-8">
      <div className="text-red-600 text-5xl font-bold">
        CAC KHOA HOC LAP TRINH TAI MINDX KIDS <br></br>
      </div>

      <div className="flex flex-row gap-14">
        <button className="flex flex-col border-[3px]  justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
          <div className="flex flex-row gap-4 items-center">
            <SiScratch className=" text-5xl border text-white items-center border-red-600 rounded-full bg-red-600" />
            <div className="items-end">
              <div className="font-bold">Lo trinh Scratch</div>
              <div className="text-lg">8-11 tuoi</div>
            </div>
          </div>
        </button>

        <button className="flex flex-col border-[3px]  justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
          <div className="flex flex-row gap-4 items-center">
            <GrGamepad className=" text-5xl border text-white items-center border-red-600 rounded-full bg-red-600" />
            <div className="items-end">
              <div className="font-bold">Lo trinh Game</div>
              <div className="text-lg">9-11 tuoi</div>
            </div>
          </div>
        </button>

        <button className="flex flex-col border-[3px]  justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
          <div className="flex flex-row gap-4 items-center">
            <MdPhoneIphone className=" text-5xl border items-center text-white border-red-600 rounded-full bg-red-600" />
            <div className="items-end">
              <div className="font-bold">Lo trinh Mobie App</div>
              <div className="text-lg">Hoc sinh THCS</div>
            </div>
          </div>
        </button>
      </div>

      <div>------</div>

      <div className="flex flex-row gap-14">
        <button className="flex flex-col border-[3px]  justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
          <div className="flex flex-row gap-4 items-center">
            <TbWorldWww className=" text-5xl border text-white items-center border-red-600 rounded-full bg-red-600" />
            <div className="items-end">
              <div className="font-bold">Lo trinh Web</div>
              <div className="text-lg">Tu 14 tuoi</div>
            </div>
          </div>
        </button>

        <button className="flex flex-col border-[3px]  justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
          <div className="flex flex-row gap-4 items-center">
            <RiComputerLine className=" text-5xl border text-white items-center border-red-600 rounded-full bg-red-600" />
            <div className="items-end">
              <div className="font-bold">Computer Science</div>
              <div className="text-lg">Tu 14 tuoi</div>
            </div>
          </div>
        </button>

        <button className="flex flex-col border-[3px]  justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
          <div className="flex flex-row gap-4 items-center">
            <LiaHandshakeSolid className=" text-5xl border items-center text-white border-red-600 rounded-full bg-red-600" />
            <div className="items-end">
              <div className="font-bold">Lo trinh bao tro viec lam</div>
              <div className="text-lg">Tu 8 tuoi</div>
            </div>
          </div>
        </button>

        <button className="flex flex-col border-[3px]  justify-center items-center border-red-600 pl-3 pr-3 rounded-md">
          <div className="flex flex-row gap-4 items-center">
            <SiCreatereactapp className=" text-5xl border items-center text-white border-red-600 rounded-full bg-red-600" />
            <div className="items-end">
              <div className="font-bold">Chuong trinh NextGen</div>
              <div className="text-lg">Hoc sinh THCS</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Content3;
