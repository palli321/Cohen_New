import { CategoriesData, CategoriesData2 } from "../data";
import { FaCheckCircle, FaClock, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Pdfdata } from "../PdfData";
import images from "../assets/Images/img";
const Categories = () => {
  return (
    <div className="roboto">
      <div className=" 2xl:px-[150px] lg:px-15 sm:px-8 px-6  sm:py-20 py-10 bg-[#FFFAF2]">
        {/* First Banner */}

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-15">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {CategoriesData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-4 2xl:pb-8 lg:border-b-2 border-b-secondary border-dashed">
                  <h3 className="roboto-serif-font text-2xl font-bold text-primary z-20">
                    <span className="text-white relative">
                      <img
                        src={item.head1img}
                        alt=""
                        className="absolute -z-10 w-[300px] h-8"
                      />
                      {item.head1} {" "}
                    </span>
                    {item.head2}
                  </h3>
                  <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl roboto-serif-font font-semibold text-primary mb-5">
                    {item.mainheading}
                  </h1>
                  <p className="text-primary 2xl:text-xl sm:text-lg  text-base font-semibold roboto">
                    {item.desc1}
                  </p>
                  <ul className="flex flex-col 2xl:gap-3 gap-1 text-sm 2xl:text-lg text-blacklight roboto">
                    {item.list?.map((data, index) => (
                      <li key={index} className="flex flex-col text-left">
                        <h4 className=" 2xl:text-lg sm:text-base text-sm text-left">
                          {data.title}
                        </h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
            {/* Second & Third Banners */}
            {CategoriesData2.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-4 2xl:pb-8 lg:border-b-2 border-b-secondary border-dashed">
                  <h3 className="roboto-serif-font text-2xl font-bold text-primary z-20">
                    <span className="text-white relative">
                      <img
                        src={data.head1img}
                        alt=""
                        className="absolute -z-10 w-[280px] h-8"
                      />
                      {data.head1} {" "}
                    </span>
                    {data.head2}
                  </h3>
                  <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl roboto-serif-font font-semibold text-primary mb-5">
                    {data.mainheading}
                  </h1>
                  <p className="text-primary lg:text-xl text-base font-semibold roboto">
                    {data.desc1}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-2 mt-4">
                    <ul className="space-y-3">
                      {data.list1.map((item) => (
                        <li
                          key={item.id}
                          className="2xl:text-xl lg:text-base text-sm flex items-center text-gray-700 roboto"
                        >
                          <FaCheckCircle className="text-yellow-500 mr-2" />{" "}
                          {item.title}
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-3">
                      {data.list2.map((item) => (
                        <li
                          key={item.id}
                          className="2xl:text-xl lg:text-base text-sm flex items-center text-gray-700 roboto"
                        >
                          <FaCheckCircle className="text-yellow-500 mr-2" />{" "}
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-blacklight 2xl:text-xl sm:text-lg text-base font-medium roboto mt-4">
                    {data.desc2}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex lg:justify-center relative lg:mt-0 mt-12 items-center ">
            <img
              src={images.categoryimg1}
              alt=""
              className="2xl:max-w-[700px] xl:max-w-[600px] md:max-w-[750px] sm:max-w-[580px] lg:max-w-[550px] z-10"
            />
            <img src={images.yellowdot} alt="" className=" absolute 2xl:-right-10 2xl:-bottom-6 -z-0 xl:-right-6 xl:-bottom-8 lg:bottom-9 lg:-right-10" />
          </div>
        </div>
      </div>
      <div className="2xl:px-[150px] lg:px-15 sm:px-8 px-6 sm:py-20 py-10 ">
        <h2 className="lg:text-[32px] sm:text-2xl text-xl roboto-serif-font font-semibold text-primary text-left pt-4">
          The most comprehensive training programs to improve efficiency and
          increase productivity.
        </h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-15 sm:gap-10 gap-6 mt-12">
          {Pdfdata.map((item, index) => (
            <div className="p-7 bg-white drop-shadow-[0_0_40px_rgba(1,61,123,0.1)] rounded-lg" >
              <div className="flex border-b-2 border-b-gray-200 pb-4 gap-4 items-center">
                <span className="px-[10px] py-[7px] bg-[#FFB749] rounded-full text-xl text-white roboto-serif-font ">
                  {item.id}
                </span>
                <h4 className="text-blacklight sm:text-xl text-lg font-semibold roboto-serif-font">
                  {item.title}
                  <span className="sm:text-base text-sm text-blacklight  font-normal">
                    {item.desc}
                  </span>
                </h4>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-1 roboto font-medium text-base cursor-pointer">
                  <span>
                    <FaClock className="text-category text-2xl" />
                  </span>
                  <span className="roboto text-base text-blacklight pl-2">
                    Duration: 4 Days
                  </span>
                </div>
                <div className="flex items-center gap-2 roboto font-medium text-base text-category cursor-pointer border-b-[1px]" onClick={() => window.open(item.pdf, "_blank")}>
                  <span>Know Details</span>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
