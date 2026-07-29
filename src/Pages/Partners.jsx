import images from "../assets/Images/img";
import { Link } from "react-router-dom";
import React from "react";
import { PartnerData2 } from "../data";
const Partners = () => {
  return (
    <div className="">
      <div>
        <div className=" 2xl:px-[150px] lg:px-15 sm:px-8 px-6 relative overflow-hidden md:py-18 py-8 bg-[#FFFAF2] ">
          <img
            src={images.bottomcontactdesign}
            alt=""
            className="-left-7  -bottom-4 absolute -z-0 2xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[600px] w-[550px]"
          />
          <div className=" grid lg:grid-cols-2 grid-cols-1 z-20 gap-10 ">
            <div className="flex flex-col 2xl:gap-8 md:gap-5 gap-3 ">
              <h2 className="text-secondary roboto-serif-font font-medium xl:text-2xl lg:text-lg text-base relative items-center leading-[170%]">
                <img
                  src={images.contactyellowpatti}
                  className="absolute -left-2 top-0 -z-0 max-w-[165px] lg:max-w-[180px] xl:max-w-[300px] "
                  alt=""
                />
                <span className="text-white font-bold relative z-10">
                  Past Partnerships
                </span>{" "}
                and Training Highlights Overview
              </h2>
              <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl roboto-serif-font font-semibold text-primary">
                Some Previous Partnerships, Collaborations and Training
                Assignments Conducted
              </h1>
              <div>
                <Link to="/contact">
                  <button className="px-7 py-2 text-white bg-category rounded-lg text-xl font-semibold cursor-pointer">
                    {" "}
                    Inquiry With Us
                  </button>
                </Link>
              </div>
              <div className="grid grid-cols-4 gap-5 mt-10 items-center ">
                <img src={images.logo3} alt="" className="flex mx-auto" />
                <img src={images.logo4} alt="" className="flex mx-auto" />
                <img src={images.logo5} alt="" className="flex mx-auto" />
                <img src={images.logo11} alt="" className="flex mx-auto" />
                <img src={images.logo12} alt="" className="flex mx-auto" />
                <img src={images.logo17} alt="" className="flex mx-auto" />
                <img src={images.logo9} alt="" className="flex mx-auto" />
                <img src={images.logo18} alt="" className="flex mx-auto" />
              </div>
            </div>
            <div className="z-20 relative flex justify-content-center">
              <img src={images.seminarimg} alt="" className="mx-auto z-20" />
              <img
                src={images.yellowdot}
                alt=""
                className=" hidden lg:flex absolute 2xl:-right-0 2xl:-bottom-6 -z-0 xl:-right-6 xl:-bottom-8 lg:bottom-9 lg:-right-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-3">
        {/* Partner Logos Grid for sm and larger */}
        <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-9.5 md:gap-y-12.5 gap-y-8 pb-35 pt-15">
          {PartnerData2.map((data, index) => (
            <React.Fragment key={index}>
              <div className="w-[120px] sm:w-[140px] md:w-[135px] lg:w-[160px] group">
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <img src={data.img} alt="" className="max-w-full h-auto" />
                  <h4 className="text-[12px] roboto-serif-font min-h-[40px] clamp-2-lines">
                    {data.title}
                  </h4>
                </div>
              </div>

              {/* Add dashed yellow border after every 18 logos (2 rows of 9) */}
              {(index + 1) % 18 === 0 && (
                <div className="hidden md:flex w-full border-t-2 border-dashed border-yellow-400 "></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
