import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { TfiWorld } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="flexl flex-col bg-maincolor text-textmaincolor items-center mt-2">
      <div className="flex md:flex-row flex-col">
        <div className="felx flex-col m-3 ml-7">
          <div className="flex flex-col md:text-4xl text-5xl font-bold">
            STEM4KIDS
          </div>
          <div className="flex flex-col text-4xl ">---------</div>

          <div className="md:block hidden">
            <div className="flex flex-col text-4xl ">LIÊN HỆ</div>
            <div className="flex flex-row gap-5 mt-4  items-center">
              <FaPhoneAlt className="text-3xl" />{" "}
              <p className="text-xl">Hotline:</p>
            </div>
            <div className="flex ml-12 text-xl flex-col gap-4">
              <div className="flex flex-col ">
                - Khu vực Hà Nội: 024 7771 7888{" "}
              </div>
              <div className="flex flex-col ">
                - Khu vực Hồ Chí Minh: 028 7771 7789{" "}
              </div>
              <div className="flex flex-col ">
                - Khu vực các Tỉnh: 02477708666{" "}
              </div>
            </div>
            <div className="flex flex-row gap-5 mt-4 items-center">
              <HiOutlineMailOpen className="text-4xl" />{" "}
              <p className="text-xl">Email: contact@mindx.edu.vn</p>
            </div>

            <div className="flex flex-row gap-5 mt-4 items-center">
              <FaFacebookF className="text-4xl" />{" "}
              <p className="text-xl">
                Fanpage: MindX Kids - Trường Học Công Nghệ
              </p>
            </div>

            <div className="flex flex-row gap-5 mt-4 items-center">
              <TfiWorld className="text-4xl" />{" "}
              <p className="text-xl">Website: https://mindx.edu.vn/</p>
            </div>

            <div className="flex flex-row gap-5 mt-4 items-center">
              <TfiYoutube className="text-4xl" />{" "}
              <p className="text-xl">Youtube: MindX School </p>
            </div>
          </div>
          {/* <div className="flex flex-col text-4xl ">LIÊN HỆ</div>
          <div className="flex flex-row gap-5 mt-4  items-center">
            <FaPhoneAlt className="text-3xl" />{" "}
            <p className="text-xl">Hotline:</p>
          </div>
          <div className="flex ml-12 text-xl flex-col gap-4">
            <div className="flex flex-col ">
              - Khu vực Hà Nội: 024 7771 7888{" "}
            </div>
            <div className="flex flex-col ">
              - Khu vực Hồ Chí Minh: 028 7771 7789{" "}
            </div>
            <div className="flex flex-col ">
              - Khu vực các Tỉnh: 02477708666{" "}
            </div>
          </div>
          <div className="flex flex-row gap-5 mt-4 items-center">
            <HiOutlineMailOpen className="text-4xl" />{" "}
            <p className="text-xl">Email: contact@mindx.edu.vn</p>
          </div>

          <div className="flex flex-row gap-5 mt-4 items-center">
            <FaFacebookF className="text-4xl" />{" "}
            <p className="text-xl">
              Fanpage: MindX Kids - Trường Học Công Nghệ
            </p>
          </div>

          <div className="flex flex-row gap-5 mt-4 items-center">
            <TfiWorld className="text-4xl" />{" "}
            <p className="text-xl">Website: https://mindx.edu.vn/</p>
          </div>

          <div className="flex flex-row gap-5 mt-4 items-center">
            <TfiYoutube className="text-4xl" />{" "}
            <p className="text-xl">Youtube: MindX School </p>
          </div> */}
        </div>
        <div className="flex flex-col md:mt-14 gap-7 ml-10">
          <div className="text-3xl">Khu vực miền Bắc</div>
          {/* <div className="text-lg">
            - Tầng 2, 29T1 Hoàng Đạo Thuý, Phường Trung Hòa,<br></br> Quận Cầu
            Giấy, Hà Nội
          </div>

          <div className="text-lg">
            - Tầng 6, Tòa AZ Lâm Viên, 107 Nguyễn Phong Sắc,<br></br> Phường
            Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội
          </div>

          <div className="text-lg">
            - Tầng 5, 71 Nguyễn Chí Thanh, Phường Láng Hạ,<br></br> Quận Đống
            Đa, Hà Nội
          </div>

          <div className="text-lg">
            - Y-Nest Coworking Space, Tầng 4, Số 505 Minh Khai,<br></br> Phường
            Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội
          </div>

          <div className="text-lg">
            - Tòa C Tầng 12, Toà Hồ Gươm Plaza, Số 102 Trần Phú, <br></br>Phường
            Mộ Lao, Quận Hà Đông, Hà Nội
          </div>

          <div className="text-lg">
            - Tầng 3, Tòa nhà Dolphin Plaza, Số 06 Nguyễn Hoàng,<br></br> Phường
            Trần Bình, Quận Nam Từ Liêm, Hà Nội
          </div>

          <div className="text-lg">
            - Số 8, Shophouse Nguyệt Quế 25, Vinhomes Riverside,<br></br> Phường
            Phúc Đồng, Quận Long Biên, Hà Nội
          </div>

          <div className="text-lg">
            - CenX Định Công, Tầng 3, Tháp B1 Toà nhà Sky Central,<br></br> 176
            Định Công, Phường Phương Liệt, Quận Hoàng Mai,<br></br> Hà Nội
          </div>

          <div className="text-lg">
            - CenX Sun Acora, tầng 4 toà nhà Sun Plaza Ancora số <br></br>3
            Lương Yên, Phường Bạch Đằng, Quận Hai Bà Trưng,<br></br> Hà Nội
          </div>

          <div className="text-3xl">Khu vực miền Nam</div>
          <div className="text-lg">
            Lầu 2, Số 2 Song Hành, Phường An Phú, Quận 2, TP HCM
          </div>

          <div className="text-lg">
            - Số 672A28 Phan Văn Trị, Phường 10, Quận Gò Vấp, TP <br></br> HCM
          </div>

          <div className="text-lg">
            - Lầu 9, Tòa nhà International Plaza, Số 343 Phạm Ngũ Lão,<br></br>{" "}
            Quận 1, TP HCM
          </div>

          <div className="text-lg">
            - UPGen Đại học Bách khoa - 268 Lý Thường Kiệt, Phường <br></br>14,
            Quận 10, TP HCM
          </div> */}

          {/* <div className="text-lg">
            - Số 490 Phạm Thái Bường, KĐT Phú Mỹ Hưng, Phường <br></br>Tân
            Phong, Quận 7, TP HCM
          </div>
        </div>
        <div className="flex flex-col mt-16 ml-10 gap-7">
          <div className="text-lg">
            - 174 đường số 1 KĐT Tên Lửa, Phường Bình Trị Đông B,<br></br> Quận
            Bình Tân, TP HCM
          </div>

          <div className="text-lg">
            - 22-24 Ung Văn Khiêm, Phường 25, Quận Bình Thạnh,<br></br> TP HCM
          </div>

          <div className="text-lg">
            - Lầu 8, Tòa nhà Nam Giao, 261-263 Phan Xích Long,<br></br> Phường
            2, Quận Phú Nhuận, TP HCM
          </div>

          <div className="text-lg">
            - Lầu 2, (Chung cư CH garden) 20 Cộng Hòa, Phường <br></br> 12, Quận
            Tân Bình, TP HCM
          </div>

          <div className="text-lg">
            - Lầu 3&4, 414 Luỹ Bán Bích, Phường Hòa Thạnh, Quận <br></br> Tân
            Phú, TP HCM
          </div>

          <div className="text-lg">
            - 165-167 Nguyễn Thị Thập, KĐT Him Lam, Phường Tân <br></br> Hưng,
            Quận 7, TP HCM (Khai trương tháng 8)
          </div>

          <div className="text-lg">
            - Lầu 4, Toà nhà Genpacific (Cổng vào Công Viên Phần <br></br> Mềm
            Quang Trung), 1 Tô Ký, phường Tân Hưng Thuận, <br></br> Quận 12, TP
            HCM (Khai trương tháng 8)
          </div> */}

          <div className="text-lg">
            - Lầu trệt và lầu 1, 223 Nguyễn Xí, Phường 13, Quận Bình Thạnh, TP
            HCM (Khai trương tháng 8)
          </div>
        </div>

        <div className="md:hidden ml-10">
          <div className="flex flex-col text-4xl ">LIÊN HỆ</div>
          <div className="flex flex-row gap-5 mt-4  items-center">
            <FaPhoneAlt className="text-3xl" />{" "}
            <p className="text-xl">Hotline:</p>
          </div>
          <div className="flex ml-12 text-xl flex-col gap-4">
            <div className="flex flex-col ">
              - Khu vực Hà Nội: 024 7771 7888{" "}
            </div>
            <div className="flex flex-col ">
              - Khu vực Hồ Chí Minh: 028 7771 7789{" "}
            </div>
            <div className="flex flex-col ">
              - Khu vực các Tỉnh: 02477708666{" "}
            </div>
          </div>
          <div className="flex flex-row gap-5 mt-4 items-center">
            <HiOutlineMailOpen className="text-4xl" />{" "}
            <p className="text-xl">Email: contact@mindx.edu.vn</p>
          </div>

          <div className="flex flex-row gap-5 mt-4 items-center">
            <FaFacebookF className="text-4xl" />{" "}
            <p className="text-xl">
              Fanpage: MindX Kids - Trường Học Công Nghệ
            </p>
          </div>

          <div className="flex flex-row gap-5 mt-4 items-center">
            <TfiWorld className="text-4xl" />{" "}
            <p className="text-xl">Website: https://mindx.edu.vn/</p>
          </div>

          <div className="flex flex-row gap-5 mt-4 items-center">
            <TfiYoutube className="text-4xl" />{" "}
            <p className="text-xl">Youtube: MindX School </p>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full md:text-xl text-sm justify-center mt-10 font-bold">
        CÔNG TY CỔ PHẦN GIÁO DỤC CÔNG NGHỆ STEM4KIDS . Mã số thuế: 0107371744
      </div>
    </div>
  );
};

export default Footer;
