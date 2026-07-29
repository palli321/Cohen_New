import React, { useState, useEffect } from "react";
import { MeetingData } from "../../data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Training = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(8);
  const slideStep = 8;

  // Function to update cardsPerPage based on screen size
  const updateCardsPerPage = () => {
    if (window.innerWidth >= 1024) {
      setCardsPerPage(8); // Large screens (lg and above)
    } else if (window.innerWidth >= 640) {
      setCardsPerPage(8); // Small screens (sm and above)
    } else {
      setCardsPerPage(8); // Below small screens
    }
  };

  // Run updateCardsPerPage on mount & window resize
  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  // Next slide function
  const nextSlide = () => {
    if (currentIndex + slideStep < MeetingData.length) {
      setCurrentIndex(currentIndex + slideStep);
    }
  };

  // Previous slide function
  const prevSlide = () => {
    if (currentIndex - slideStep >= 0) {
      setCurrentIndex(currentIndex - slideStep);
    }
  };

  return (
    <>
      <div className="roboto 2xl:px-37.5 lg:px-15 px-4">
        <div className="flex flex-col sm:pt-[40px] justify-between sm:gap-0 gap-2">
          <h2 className="text-primary mx-auto md:text-[32px] sm:text-2xl text-xl font-semibold  roboto-serif-font pr-[20px]">
            Some Frequently Requested Training Courses.
          </h2>
          <p className="roboto-serif-font font-bold sm:text-[21px] text-xs text-secondary pt-[10px] flex justify-center">
            In-house and virtual training can be arranged for the following courses
          </p>
        </div>
      </div>

      <div className="roboto sm:pt-[70px] sm:pb-[40px] py-10 padding-2xl lg:px-15 px-4 relative">
          {/* <div style={{ minHeight: '1300px' }}> */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-11 overflow-hidden">
          {MeetingData.slice(currentIndex, currentIndex + cardsPerPage).map(
            (data, index) => (
              <div
                key={index}
               className="h-auto bg-[#F2F9FF] mx-auto"
              >
                <div>
                  <div className="relative">
                    <div className="absolute max-w-[85px] h-[75px] bg-primary left-[30px]">
                      {/* <p className="text-2xl font-bold items-center p-[8px] text-center leading-[30px] text-white">
                        {data.day}
                      </p> */}
                    </div>
                  </div>
                  <img
                    src={data.image}
                    alt="Card Image"
                    className="w-full h-[208px] object-cover"
                  />
                  <div className="p-[15px]">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        {/* <span className="text-smallclr text-[13px] font-medium">
                          {data.subtitle}
                        </span> */}
                        {/* <span className="text-smallclr text-[13px] font-medium">
                          {data.Date}
                        </span> */}
                      </div>
                      {/* <div className="flex gap-2 items-center">
                        <span className="text-smallclr text-[13px]">
                          <img src={data.locIcon} alt="" />
                        </span>
                        <span className="text-smallclr text-[13px] font-medium">
                          {data.location}
                        </span>
                      </div> */}
                    </div>

                    <div className="pt-[20px] flex flex-col gap-[15px]">
                      {/* Titles */}
                      <h2 className="text-lg font-medium roboto-serif-font text-primary">
                        {data.title}
                      </h2>
                      <h2 className="text-lg font-medium roboto-serif-font text-primary">
                        {data.title2}
                      </h2>
                      {/* Conditionally render title3 if it exists */}
                      {data.title3 && (
                        <h2 className="text-lg font-medium roboto-serif-font text-primary">
                          {data.title3}
                        </h2>
                      )}

                      {/* Clickable PDF Link */}
                      <p
                        className="text-[#ffb036] text-base cursor-pointer hover:underline"
                        onClick={() => window.open(data.PdfUrl, "_blank")}
                      >
                        {data.view}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}

          
        </div>
      </div>  
        {/* Slider Navigation Buttons */}
      {/* </div> */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between sm:relative sm:py-4 sm:px-4 gap-4 sm:gap-0">
        {/* Slider Buttons - Top on mobile, Right on desktop */}
        <div className="order-2 sm:mx-auto flex gap-3 sm:gap-4 items-center ">
          <button
            onClick={prevSlide}
            className={`p-2 sm:p-3 rounded-full ${
              currentIndex === 0
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-secondary hover:bg-hoverclr text-white"
            }`}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className={`p-2 sm:p-3 rounded-full ${
              currentIndex + cardsPerPage >= MeetingData.length
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-secondary hover:bg-hoverclr text-white"
            }`}
            disabled={currentIndex + cardsPerPage >= MeetingData.length}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* SEE MORE Button - Bottom on mobile, Centered on desktop */}
        <div className="order-1 sm:absolute sm:right-0 2xl:mr-35 lg:mr-15 sm:mr-8">
          <Link to="/training">
            <button className="btn bg-secondary px-5 py-2.5 text-base md:text-xl roboto rounded-lg text-white cursor-pointer">
              SEE MORE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Training;
