import React from "react";
import images from "../../assets/Images/img";
import { Onlinecourcesdata } from "../../data";
import { FaRegCalendarAlt } from "react-icons/fa";
import CoursePdf from "../../assets/CourcesPDF/CoursePdf.js";
import { Link } from "react-router-dom";
import icons from "../../assets/icons/icon.js";
const OnlineCources = () => {
  return (
    <div>
      <div className=" pt-9 padding-2xl lg:px-15 px-4 roboto">
        <h2 className="text-primary 2xl:text-5xl lg:text-4xl 2xl:leading-[53px] sm:text-3xl text-base text-center roboto-serif-font font-semibold mt-8">
          <span className="text-white relative">
            <img
              src={images.Onlineyellow}
              alt=""
              className="absolute -z-10 -left-1 -bottom-1"
            />
          </span>
        </h2>
        <h2 className=" font-serif lg:text-[32px] sm:text-2xl text-base text-center text-primary font-semibold mt-5">
        </h2>
        <div className="flex xl:flex-row flex-col mt-8 gap-10 md:px-15 justify-center">
        </div>
        <div className="mx-auto">
          <div>
            <Link
              className="font-serif lg:text-[36px] sm:text-2xl text-base text-center text-primary font-semibold"
              onClick={() => window.open(CoursePdf.pdf202612, "_blank")}
            >
              <h1 className="text-primary 2xl:text-[40px] lg:text-4xl 2xl:leading-[40px] sm:text-3xl text-base text-center roboto-serif-font font-semibold break-words">
                2026, Debt Collections and Revenue Management Virtual Training
                Schedule - Zoom Platform
              </h1>
              
            </Link>
            <p className="font-semibold text-center text-primary font-medium roboto-serif-font 2xl:text-xl lg:text-lg sm:text-base text-sm mt-3 mb-2">
              Comprehensive Operational & Procedural Manuals With All Zoom Platform Training Courses.
            </p>

            <div className="flex xl:flex-row flex-col mt-6 gap-10 md:px-15 justify-center">
              <div className="flex justify-center md:justify-end lg:justify-center ">
                <div
                  className="flex relative z-10 bg-white border-[2px] rounded-[10px] border-[#f8c67b]  p-2 gap-[15px] items-center cursor-pointer"
                  onClick={() => window.open(CoursePdf.pdf202612, "_blank")}
                >
                  <img src={images.pdf} alt="" className="max-w-12 h-12 " />
                  <div>
                    <h6 className="text-primary font-medium roboto-serif-font 2xl:text-xl sm:text-lg text-base">
                      Click here for 2026 Debt Collection Training Schedule
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-end lg:justify-center">
                <div
                  className="flex relative z-10 bg-white border-[2px] rounded-[10px] border-[#f8c67b] p-2 gap-[15px] items-center cursor-pointer"
                  onClick={() => window.open(CoursePdf.pdf2026, "_blank")}
                >
                  <img src={images.pdf} alt="" className="max-w-12 h-12 " />
                  <div>
                    <h6 className="text-primary font-medium roboto-serif-font 2xl:text-xl sm:text-lg text-base">
                      Click here for 2026 Debt Collection Training Outline
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-12.5 my-15 ">
          {Onlinecourcesdata.sort((a, b) => a.id - b.id).map((item, index) => (
            <div
              onClick={() => window.open(CoursePdf.pdf2026, "_blank")}
              key={index}
              className="bg-[#F2F9FF] p-5 relative hover:drop-shadow-[0_0_40px_rgba(1,61,123,0.1)] group hover:bg-white duration-300 transition-all cursor-pointer flex flex-col justify-between min-h-[180px]"
            >
              <div className="absolute -top-2 flex group-hover:bg-primary bg-secondary pt-0.5 pb-0.5 px-2.5 items-center text-white gap-3 rounded-[5px] text-base font-medium roboto transition-all duration-500">
                <FaRegCalendarAlt />
                {item.date}
              </div>
              <div>
                <h3 className="roboto-serif-font font-medium sm:text-xl text-base text-primary sm:pb-2.5 pb-1 ">
                  {item.title}
                </h3>
              </div>
              <div className="">
                <p className="footer-content roboto font-normal sm:text-base text-xs text-blacklight flex items-center gap-0.5 sm:pt-2.5 pt-1 whitespace-nowrap border-t-[1px] border-gray-200">
                  <span>Registration Deadline: </span>
                  <span>{item.rd}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
          <div className="font-serif lg:text-[25px] sm:text-2xl text-base text-center text-[#e86a8c] font-semibold mb-1">
          "The Most Comprehensive Debt Collections And Revenue Management Training Courses."
          </div>
        {/* New section added at the end */}
        <div className="flex xl:flex-row flex-col gap-10 md:px-15 justify-between items-start">
          <div className="flex flex-col justify-start">
            <div
              className="flex flex-col relative z-10 bg-white border-[2px] rounded-[10px] border-[#f8c67b] 2xl:p-3 lg:p-2 sm:p-4 p-2.5 gap-1 2xl:max-w-[510px] max-w-[460px] sm:mt-[99px] mt-10 lg:ml-[60px] items-center cursor-pointer"
              onClick={() => window.open(CoursePdf.debtcollectionpdf, "_blank")}
            >
              <div className="flex gap-x-2">
                <img src={images.pdf} alt="" className="max-w-15 h-13 m-auto" />
                <h6 className="text-primary leading-[23px] font-medium roboto-serif-font 2xl:text-[22px] sm:text-lg text-base">
                  100+ Debt Collection & Revenue Management Training Courses
                </h6>
              </div>
            </div>
            <div className="flex flex-col gap-4 2xl:max-w-[510px] max-w-[460px] lg:ml-[60px] mt-4 px-1">
              <div className="flex flex-col gap-0">
                <p
                  style={{
                    background: "linear-gradient(135deg, #f9608a, #f0457a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  className="2xl:text-2xl lg:text-2xl sm:text-base text-sm font-semibold roboto-serif-font text-center mx-auto leading-snug"
                >
                  "The longer your delinquent accounts go uncollected,
                </p>
                <p
                  style={{
                    background: "linear-gradient(135deg, #f9608a, #f0457a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  className="2xl:text-2xl lg:text-2xl sm:text-base text-sm font-semibold roboto-serif-font text-center mx-auto leading-snug"
                >
                  the more difficult they will be to collect or recover"
                </p>
              </div>
              <p
              style={{
                background: "linear-gradient(135deg, #4ecdc4, #45b89a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className="2xl:text-2xl lg:text-2xl sm:text-base text-sm font-semibold roboto-serif-font text-center mx-auto leading-snug"
            >
              This will be the case for private and public sector institutions.
            </p>
            </div>
          </div>

          <div className="flex justify-center w-full xl:w-1/2">
            <div className="relative z-10 mt-[79px]">
              <div
                className="relative z-10 bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]
                    max-w-[345px] h-[252px] p-[20px]
                    flex flex-col rounded-[10px]"
              >
                <div className="pb-[20px] border-b-[2px] border-[rgba(0,0,0,0.1)]">
                  <h3 className="text-primary text-[20px] font-semibold roboto-serif-font pb-[10px]">
                    Cohen & Klein Consulting
                  </h3>
                  <div className="flex items-center gap-[15px]">
                    <img
                      src={icons.many}
                      alt=""
                      className="px-[12px] py-[14px] bg-primary rounded-[10px]"
                    />
                    <img
                      src={icons.sixytythree}
                      alt=""
                      className="px-[12px] py-[14px] bg-primary rounded-[10px]"
                    />
                    <img
                      src={icons.img34}
                      alt=""
                      className="px-[12px] py-[14px] bg-primary rounded-[10px]"
                    />
                    <img
                      src={icons.thousand}
                      alt=""
                      className="px-[12px] py-[14px] bg-primary rounded-[10px]"
                    />
                  </div>
                </div>
                <div className="mt-[20px]">
                  <p className="text-[#021326]">You can Register through</p>
                  <div className="flex gap-[15px] mt-[15px]">
                    <Link to="/registration?method=email">
                      <button className="px-[50px] py-[10px] bg-secondary rounded-[5px] text-white cursor-pointer">
                        Email
                      </button>
                    </Link>
                    <Link to="/registration?method=fax">
                      <button className="px-[50px] py-[10px] bg-primary rounded-[5px] text-white cursor-pointer">
                        By Fax
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OnlineCources;