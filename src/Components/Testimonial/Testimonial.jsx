import React from "react";
import images from "../../assets/Images/img";
import icons from "../../assets/icons/icon.js";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import CoursePdf from "../../assets/CourcesPDF/CoursePdf.js";
import { FaYoutube } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div className="roboto pb-[0px] bg-[#FFFAF2] mx-auto">
      <div className="z-10">
        <div className="px-4 sm:px-6 lg:px-12">
         
          {/* <div className="font-serif lg:text-[25px] sm:text-2xl text-base text-center text-[#e86a8c] font-semibold mb-8">
  Do you have a Sharp Increase in Delinquent Accounts?
</div> */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left column */}
            <div className="flex flex-col sm:gap-6 gap-3 lg:items-left items-left ">
              {/* <div className=" flex gap-3 cursor-pointer bg-white border-[2px] rounded-[10px] border-[#f8c67b] items-center max-w-[660px] border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
                <Link
                  to="#"
                  className="text-[#021326] sm:text-[20px] text-xs tracking-[0.02em] "
                  onClick={() =>
                    window.open(CoursePdf.debtcolltraining, "_blank")
                  }
                >
                  Debt Collection and revenue management training testimonials
                  for banks and other financial institutions
                </Link>
                <IoIosLink className="text-[#039EFF] h-7 w-7 cursor-pointer" />
              </div> */}
              {/* <div className=" flex gap-3 items-center bg-white border-[2px] rounded-[10px] border-[#f8c67b] max-w-[660px] border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
                <Link
                  to="/debtcollinner"
                  className="text-[#021326] sm:text-[20px] text-xs tracking-[0.02em] "
                >
                  Inspiring Debt Collection and Revenue Management Training
                  Testimonials from Our Satisfied Clients
                </Link>
                <IoIosLink className="text-[#039EFF] h-7 w-7 cursor-pointer" />
              </div> */}
            </div>

            {/* Right column */}
            <div className="flex flex-col sm:gap-6 gap-3 ml-auto max-w-[660px]">
              {/* <div className="  flex gap-3 items-center max-w-[660px] bg-white border-[2px] rounded-[10px] border-[#f8c67b] border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
                <Link
                  to="/callinner"
                  className="text-[#021326] sm:text-[20px] text-xs tracking-[0.02em]"
                >
                  Authentic Call Center and Customer Service Training
                  Testimonials from Our Valued Clients
                </Link>
                <IoIosLink className="text-[#039EFF] h-7 w-7 cursor-pointer" />
              </div> */}

              {/* <div className="  flex gap-3 items-center max-w-[660px] bg-white border-[2px] rounded-[10px] border-[#f8c67b] border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
                <Link
                  to="#"
                  className="text-[#021326] sm:text-[20px] text-xs tracking-[0.02em] "
                  onClick={() =>
                    window.open(CoursePdf.Testimonials131412032026, "_blank")
                  }
                >
                  Debt Collections and Revenue Management Regional Training
                  Testimonials from our Valued Clients
                </Link>
                <IoIosLink className="text-[#039EFF] h-7 w-7 cursor-pointer" />
              </div> */}
            </div>
          </div>
        </div>
      </div>

     
      
    </div>
  );
};

export default Testimonial;