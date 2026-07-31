import React from "react";
import { Link } from "react-router-dom";
import { Onlinecourcesdata } from "../../data.js";
import { FaRegCalendarAlt } from "react-icons/fa";
import CoursePdf from "../../assets/CourcesPDF/CoursePdf.js";
import images from "../../assets/Images/img";
const CourseSchedule = () => {
  return (
    <div>
      <div className=" pt-9 padding-2xl lg:px-15 px-4 roboto">
        <Link
          to="/"
          className="text-primary font-medium roboto-serif-font text-sm sm:text-base inline-block mt-6"
        >
          ← Back to Home
        </Link>

        <h1 className="text-primary 2xl:text-4xl lg:text-3xl sm:text-2xl text-xl text-center roboto-serif-font font-semibold mt-4 mb-2">
          2026 Debt Collections and Revenue Management Training Schedule
        </h1>
        <p className="text-center text-primary roboto-serif-font 2xl:text-lg sm:text-base text-sm mb-2">
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
      </div>
    </div>
  );
};

export default CourseSchedule;
