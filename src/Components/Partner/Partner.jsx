import React from "react";
import { PartnerData } from "../../data";
import { Link } from "react-router-dom";

const Partner = ({
  heading,
  showButton = true,
  buttonText = "VIEW MORE",
  buttonLink = "/partners",
  underline=false,
  className = "",
  className2="", ...props 
}) => {
  return (
    <div className={`roboto ${className} lg:px-12 px-4`}>
      {/* Title Section */}
      <div className="mx-auto flex justify-center text-center">
        <h3 className="roboto-serif-font sm:text-2xl text-xl md:text-3xl lg:text-[32px] text-primary font-semibold">
          {heading}
        </h3>
      </div>

      {/* Partner Logos Grid for sm and larger */}
      <div className={`hidden sm:flex flex-wrap justify-center gap-x-4 md:gap-x-9.5 md:gap-y-12.5 ${className2}`}>
        {PartnerData.map((data, index) => (
          <div
            key={index}
            className="w-[120px] sm:w-[140px] md:w-[135px] lg:w-[160px] group"
          >
            <div className="flex flex-col justify-center items-center gap-2 text-center">
              <img src={data.img} alt="" className="max-w-full h-auto" />
              <h4 className="text-[12px] roboto-serif-font min-h-[40px] clamp-2-lines">
                {data.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

     
      {underline && (
        <div className="border-[1px] border-category border-dashed mt-10"></div>
      )

      }
      {/* Mobile slider for screens below sm */}
      <div className="sm:hidden overflow-x-auto scrollbar-hide w-full py-[40px]">
        <div
          className="flex w-max gap-4"
          style={{
            display: "grid",
            gridTemplateRows: "repeat(2, auto)",
            gridAutoFlow: "column",
          }}
        >
          {PartnerData.map((data, index) => (
            <div
              key={index}
              className="w-[140px] flex flex-col justify-center items-center gap-2 text-center"
            >
              <img
                src={data.img}
                alt=""
                className="max-w-full h-auto transform scale-100 transition-transform duration-700 group-hover:scale-115"
              />
              <h4 className="text-[12px] roboto-serif-font min-h-[40px]">
                {data.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

       {/* Conditionally Render Button */}
       {showButton && (
        <div className="flex justify-center items-center mt-10">
          <Link to={buttonLink}>
            <button className="btn bg-secondary px-5 py-2.5 text-xl roboto rounded-lg text-white cursor-pointer">
              {buttonText}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Partner;
