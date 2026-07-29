import images from "../assets/Images/img";
import icons from "../assets/icons/icon";
import {
  aboutuscards,
  PartnerData,
  aboutbannerData,
  ProfileData,
} from "../data";
import Partner from "../Components/Partner/Partner";
import CoursePdf from "../assets/CourcesPDF/CoursePdf";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
   const navigate =useNavigate();
   const handletestimonial=()=>{
    navigate('/testimonialread')
   }
  return (
    <>
      <div>
        <div className="roboto 2xl:px-[150px] lg:px-15 sm:px-8 px-6 lg:py-30 sm:py-20 py-10 ">
          <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-32 lg:gap-15">
            <div className="flex justify-center lg:mt-0 mt-12 items-center relative lg:order-1 order-2">
              <div>
                {" "}
                <div>
                  {" "}
                  <img
                    src={images.aboutusimgbig}
                    alt=""
                    className="2xl:max-w-[610px] lg:max-w-[500px] rounded-[20px] "
                  />
                </div>
              </div>
              <div className="lg:block hidden">
                <div>
                  <img
                    src={images.contactimg2}
                    alt=""
                    className="2xl:max-w-[200px] 2xl:h-[300px] max-w-[180px] 2xl:-right-15 xl:right-2 -right-9 absolute border-10 border-gray-200 rounded-[110px]"
                  />
                </div>

                <div onClick={handletestimonial} className=" 2xl:p-[15px] cursor-pointer lg:p-2 border-1 border-[rgba(0,43,88,0.2)] shadow-[-10px_10px_0px_rgba(0,0,0,.25)] 2xl:max-w-[300px] max-w-[250px] rounded-[10px] absolute bottom-10 bg-white -left-9 ">
                  <h3 className="text-primary text-[20px] roboto-serif-font pb-[10px]">
                    <span className="text-smallclr pr-[5px] font-bold">
                      1500+
                    </span>
                    Positive Testimonials
                  </h3>
                  <div className="flex">
                    {ProfileData.map((data, index) => (
                      <div
                        key={index}
                        className={`${index !== 0 ? "-ml-6" : ""}`}
                      >
                        <img
                          src={data.Image}
                          alt=""
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                    ))}
                    <div className="w-12 h-12 -ml-6 rounded-full flex items-center justify-center bg-[#F1F1F1]">
                      <img src={icons.plus} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:gap-9 gap-4 lg:order-2 order-1">
              <h3 className="roboto-serif-font text-2xl font-bold text-primary z-20">
                <span className="text-white relative">
                  <img
                    src={images.yellowseminar}
                    alt=""
                    className="absolute -z-10 w-[240px] h-8 "
                  />{" "}
                  27 Years
                </span>{" "}
                of Experience
              </h3>
              <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl roboto-serif-font font-semibold text-primary">
                Cohen & Klein Consulting, Inc. Established in 1997
              </h1>
              <p className="text-blacklight 2xl:text-lg text-sm">
                We specialize in delivering top-tier industry training and
                consulting services with over 1000 customized courses across
                various sectors:
              </p>
              <div className="flex flex-col 2xl:gap-5 gap-3 z-10">
                <ul className="flex flex-col  md:gap-3 gap-2 text-sm 2xl:text-base ">
                  {aboutbannerData.map((data, index) => (
                    <li key={index} className="flex flex-col text-left">
                      <div className="flex gap-3.5 items-center text-primary">
                        <span className="text-xl">{data.id}</span>
                        <h4 className=" font-semibold lg:text-xl sm:text-lg text-base text-left">
                          {data.heading}
                        </h4>
                      </div>
                      {"  "}
                      <p className="text-blacklight xl:text-lg sm:text-sm text-xs ml-10">
                        {data.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="roboto bg-[#F2F9FF] 2xl:px-[150px] lg:px-15 sm:px-8 px-6 sm:py-20 py-10 flex flex-col lg:gap-13 gap-8">
          <h2 className="sm:text-[32px] text-xl roboto-serif-font font-semibold text-primary mx-auto text-center">
            Key Highlights About Us
          </h2>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-3 sm:gap-5 gap-8">
            {aboutuscards.map((data, index) => (
              <div key={index} className="sm:p-4 flex flex-col gap-4">
                <img src={data.img} alt="" />
                <div className="flex flex-col sm:gap-4 gap-1">
                  <h4 className="sm:text-xl text-base text-primary text-left font-semibold">
                    {data.title}
                  </h4>
                  <p className="text-blacklight text-left sm:text-base text-xs">
                    {data.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="roboto 2xl:px-[150px] lg:px-15 sm:px-8 px-6 py-15 sm:pb-35 pb-15 flex flex-col">
          <div className="flex justify-center items-center sm:py-8 sm:order-1 order-2">
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-9 mx-auto">
              <div className="rounded-[12px] sm:rounded-[20px] 2xl:px-8 2xl:py-8 px-3 py-3 bg-gradient-cardOne flex items-center justify-center">
                <Link
                  to="/newsinner"
                  className={` flex flex-col text-white sm:gap-3 gap-0 items-center justify-center `}
                >
                  <h2 className="2xl:text-5xl leading-[24px] sm:text-4xl text-2xl font-bold font-serif">
                    1500+</h2>
                  <span className="2xl:text-[22px] leading-[26px] sm:text-base text-xs roboto">
                    Positive Testimonials
                  </span>
                </Link>
              </div>
              <div className="rounded-[12px] sm:rounded-[20px] 2xl:px-8 2xl:py-8 px-3 py-3 bg-gradient-cardTwo flex items-center justify-center">
                <Link
                  to="/categories"
                  className={` flex flex-col text-white sm:gap-3 gap-0 text-center items-center justify-center `}
                >
                  <h2 className="2xl:text-5xl sm:text-4xl leading-[24px] text-2xl  font-bold roboto">
                    58
                  </h2>
                  <span className="2xl:text-[22px] leading-[26px] sm:text-base text-xs roboto">
                    Categories of Customized Training Courses
                  </span>
                </Link>
              </div>
              <div className="rounded-[12px] sm:rounded-[20px] 2xl:px-8 2xl:py-8 px-3 py-3 bg-gradient-cardThree flex items-center justify-center">
                <Link
                  to="/categories"
                  className={` flex flex-col text-white text-center sm:gap-3 gap-0 items-center justify-center `}
                >
                  <h2 className=" 2xl:text-5xl leading-[24px] sm:text-4xl text-2xl  font-bold roboto">
                    1000+
                  </h2>
                  <span className="2xl:text-[22px] leading-[26px] sm:text-base text-xs roboto">
                    Customized Training Courses
                  </span>
                </Link>
              </div>
              <div className="rounded-[12px] sm:rounded-[20px] 2xl:px-8 2xl:pb-3 pt-4 pb-3 sm:px-3 py-3 bg-gradient-cardFour flex items-center justify-center">
                <Link
                  onClick={() => window.open(CoursePdf.debtcollectionpdf, "_blank")}
                  className="flex flex-col text-white sm:gap-4 gap-0 items-center text-center"
                >
                  <h2 className="2xl:text-5xl leading-[24px] sm:text-4xl text-2xl font-bold roboto">
                    100+
                  </h2>
                  <span className="2xl:text-[22px] leading-[26px] sm:text-base text-xs roboto">
                   Customized Debt Collection and Revenue Management Courses
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Partner
          heading="Some Previous Partnerships, Collaborations and Training Assignments Conducted"
          className="py-[30px] pb-[100px]"
          className2="pt-15"
        />
      </div>
    </>
  );
};
export default About;
