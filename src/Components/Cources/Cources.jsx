import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../../assets/Images/img";
import icons from "../../assets/icons/icon";
import { Pdfdata } from "../../PdfData";
import { ProfileData} from "../../data";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { TbTargetOff } from "react-icons/tb";
const PrevArrow = ({ onClick, currentSlide }) => (
  <button
    className={`absolute bottom-[-50px] right-[77px] p-3 rounded-full transition ${
      currentSlide === 0
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-secondary hover:bg-hoverclr"
    }`}
    onClick={currentSlide === 0 ? null : onClick} // Disable click if at first slide
    disabled={currentSlide === 0}
  >
    <icons.GrPrevious className=" text-white" />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick, currentSlide, slideCount }) => (
  <button
    className={`absolute bottom-[-50px] right-[13px] p-3 rounded-full transition ${
      currentSlide >= slideCount - 2
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-secondary hover:bg-hoverclr"
    }`}
    onClick={currentSlide >= slideCount - 2 ? null : onClick} // Disable click if at last slide
    disabled={currentSlide >= slideCount - 2}
  >
    <icons.GrNext className=" text-white" />
  </button>
);
const Cources = () => {
  const ITEMS_PER_COLUMN = 10;
  const columns = [];
  // Organize data into columns (each column has max 10 items)
  for (let i = 0; i < Pdfdata.length; i += ITEMS_PER_COLUMN) {
    columns.push(Pdfdata.slice(i, i + ITEMS_PER_COLUMN));
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2, // Default for large screens
    slidesToScroll: 1, // Ensure only one scrolls at a time
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Adjust for medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768, // For small screens
        settings: {
          slidesToShow: 1, // Show only 1 slide
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };
  const navigate =useNavigate();
   const handletestimonial=()=>{
    navigate('/testimonialread')
   }

  return (
    <div className="pb-[100px] roboto">
      <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-0 gap-4">
        <div className="pl-[30px] relative  cursor-pointer lg:block hidden 2xl:mx-auto 2xl:pb-0 mb-30"
        onClick={handletestimonial}
        >
          <img
            src={images.Categoryimg}
            alt=""
            className="2xl:w-full w-[90%] mt-[60px]"
          />
          <div className="p-[15px] border-1 border-[rgba(0,43,88,0.2)] shadow-[-10px_10px_0px_rgba(0,0,0,.25)] max-w-[300px] rounded-[10px] absolute bottom-[-15px] bg-white ml-[30px]">
            <h3 className="text-primary text-[20px] roboto-serif-font pb-[10px]">
              <span className="text-smallclr pr-[5px] font-bold">1500+</span>
              Positive Testimonials
            </h3>
            <div className="flex">
              {ProfileData.map((data, index) => (
                <div key={index} className={`${index !== 0 ? "-ml-6" : ""}`}>
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
        <div className="col-span-2 2xl:pr-[50px] xl:pr-20 sm:pr-10 sm:pl-[18px] sm:px-0 px-2">
          <div className="md::ml-7">
            <h2 className="cource-heading relative text-primary roboto-serif-font font-semibold 2xl:text-[32px] sm:text-2xl text-xl">
              Over <span className="text-secondary">58</span> Categories of
              Customized Industry
              <span
                className="parallelogram-bg text-white ml-3 relative px-4 py-1 inline-block"
                id="parallelogram"
              >
                Training Courses
              </span>
            </h2>

            <p className="roboto-serif-font font-bold sm:text-[21px] text-xs text-secondary pt-[10px] flex justify-center">
              Whether you're in finance, healthcare, customer service, or
              technology, are customized industry training programs cater to your specific needs.
              Upgrade your team's capabilities with our specialized training
              solutions today!
            </p>
          </div>
          {/* Displaying the first 20 categories */}
          <div className="w-full mt-[15px]">
            <Slider {...settings} className="gap-15">
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-3 sm:px-2">
                  {column.map((data, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="mt-2">
                        <span className="2xl:w-[29px] 2xl:h-[29px] w-6 h-6 flex items-center justify-center bg-[#ffb036] rounded-full border-[.5px] border-[#5e6263] text-smallclr 2xl:text-base text-xs font-semibold">
                          {data.id}
                        </span>
                      </div>
                      <div className="mt-1.5">
                        <div className="sm:mr-0 mr-6">
                          <Link to="#" onClick={()=>window.open(data.pdf, "_blank")}>
                            <p className="2xl:text-base text-xs roboto-serif-font text-smallclr hover:text-[#ffb036] whitespace-nowrap transform transition-all duration-100 cursor-pointer">
                              {data.title}
                            </p>
                          </Link>
                        </div>
                        <p className="2xl:text-xs text-[10px] roboto-serif-font font-semibold text-smallclr sm:whitespace-nowrap break-words">
                          {data.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cources;
