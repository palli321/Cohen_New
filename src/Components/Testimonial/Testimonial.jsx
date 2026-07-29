import React from "react";
import images from "../../assets/Images/img";
import icons from "../../assets/icons/icon.js";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import CoursePdf from "../../assets/CourcesPDF/CoursePdf.js";
import { FaYoutube } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div className="roboto pb-[80px] bg-[#FFFAF2] mx-auto">
      <div className="z-10">
        <div className="px-4 sm:px-6 lg:px-12">
          <div className="font-serif lg:text-[30px] sm:text-2xl text-base text-center text-primary font-semibold mb-8">
            Debt Collections & Revenue Management Videos Overview & Training
            Outline
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-4 w-full px-4  mb-8">
            {/* Video Card 1 */}
            <div
              className="w-full max-w-[700px] rounded-lg overflow-hidden shadow-[0_4px_40px_rgba(1,61,123,0.10)] bg-white p-4 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=vNS3Dse8lqM",
                  "_blank",
                )
              }
            >
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/IlTQvt5RPlM"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <h2 className="text-[18px] font-semibold text-primary">
                  The Gold Standard in Debt Recovery Management Training Courses: Cohen & Klein Consulting Recognition | Cohen & Klein Consulting, Inc.
                </h2>
                <p className="text-sm text-gray-600">
                  What does it take to become a top-tier debt collections and revenue management collections professional? In this video, Cohen & Klein Consulting, Inc. introduces the premier recognition and training standard by Cohen & Klein Consulting that is transforming the landscape of debt collections recovery and revenue management procedures.
                </p>
              </div>
            </div>

            <div
              className="w-full max-w-[410px] rounded-lg overflow-hidden shadow-[0_4px_40px_rgba(1,61,123,0.10)] bg-white p-4 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=vNS3Dse8lqM",
                  "_blank",
                )
              }
            >
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/vNS3Dse8lqM"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <h2 className="text-[18px] font-semibold text-primary">
                  Streamline Your Debt Collection & Revenue Department
                </h2>
                <p className="text-sm text-gray-600">
                  This video from Cohen & Klein Consulting, Inc. outlines their
                  comprehensive training courses designed to help private and
                  public sector institutions effectively handle delinquent
                  accounts. Whether you're dealing with government tax
                  collections, utility payments, or healthcare claims, this
                  training equips your staff—from new collectors to
                  management—with practical, ethical, and results-driven
                  strategies.
                </p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div
              className="w-full max-w-[410px] rounded-lg overflow-hidden shadow-[0_4px_40px_rgba(1,61,123,0.10)] bg-white p-4 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=Nbq82TIDBvw",
                  "_blank",
                )
              }
            >
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/Nbq82TIDBvw"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <h2 className="text-[18px] font-semibold text-primary">
                  Is your debt collection process proactive or reactive?
                </h2>
                <p className="text-sm text-gray-600">
                  Video 102 of our series, Cohen & Klein Consulting, Inc.
                  explores how to streamline and establish a highly effective
                  debt collections and revenue department. Uncollected accounts
                  don’t just sit idle—they grow more complex and harder to
                  resolve over time.
                </p>
              </div>
              
            </div>

            <div
              className="w-full max-w-[410px] rounded-lg overflow-hidden shadow-[0_4px_40px_rgba(1,61,123,0.10)] bg-white p-4 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=Nbq82TIDBvw",
                  "_blank",
                )
              }
            >
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/LQ6RsPs3c-A"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <h2 className="text-[18px] font-semibold text-primary">
                  Elevating Standards: National Social Insurance & Debt Collections Training | Cohen & Klein Consulting, Inc.
                </h2>
                <p className="text-sm text-gray-600">
                  Effective revenue recovery in the public sector requires more than just vague efforts—it requires specialized expertise, empathy, and strategic excellence. In this video, Cohen & Klein Consulting, takes you inside a specialized training programs hosted by Cohen & Klein Consulting, Inc.
                </p>
              </div>
              
            </div>
            
          </div>
          <div className="font-serif lg:text-[25px] sm:text-2xl text-base text-center text-[#e86a8c] font-semibold mb-8">
  Do you have a Sharp Increase in Delinquent Accounts?
</div>
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left column */}
            <div className="flex flex-col sm:gap-6 gap-3 lg:items-left items-left ">
              <div className=" flex gap-3 cursor-pointer bg-white border-[2px] rounded-[10px] border-[#f8c67b] items-center max-w-[660px] border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
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
              </div>
              <div className=" flex gap-3 items-center bg-white border-[2px] rounded-[10px] border-[#f8c67b] max-w-[660px] border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
                <Link
                  to="/debtcollinner"
                  className="text-[#021326] sm:text-[20px] text-xs tracking-[0.02em] "
                >
                  Inspiring Debt Collection and Revenue Management Training
                  Testimonials from Our Satisfied Clients
                </Link>
                <IoIosLink className="text-[#039EFF] h-7 w-7 cursor-pointer" />
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col sm:gap-6 gap-3 ml-auto max-w-[660px]">
              <div className="  flex gap-3 items-center max-w-[660px] bg-white border-[2px] rounded-[10px] border-[#f8c67b] border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
                <Link
                  to="/callinner"
                  className="text-[#021326] sm:text-[20px] text-xs tracking-[0.02em]"
                >
                  Authentic Call Center and Customer Service Training
                  Testimonials from Our Valued Clients
                </Link>
                <IoIosLink className="text-[#039EFF] h-7 w-7 cursor-pointer" />
              </div>

              <div className="  flex gap-3 items-center max-w-[660px] bg-white border-[2px] rounded-[10px] border-[#f8c67b] border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
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
              </div>
            </div>
          </div>
        </div>
      </div>

     
      
    </div>
  );
};

export default Testimonial;