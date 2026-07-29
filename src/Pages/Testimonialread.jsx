import images from "../assets/Images/img";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa6";
import { MdStar, MdStarHalf } from "react-icons/md";
import { NewsdataTest, DebtCollData, CallCenterData } from "../PdfData";
import CoursePdf from "../assets/CourcesPDF/CoursePdf";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";

const extractCKEntries = (data) => {
  const regex = /CK\s?(\d{3,4}[A-Za-z]?)/i; // Updated regex to capture 3-4 digits + optional letter
  const map = new Map();
  data.forEach((item) => {
    const match = item.title.match(regex);
    if (match) {
      const ckCode = `CK ${match[1]}`; // Include the full match (number + optional letter)
      if (!map.has(ckCode)) {
        map.set(ckCode, []);
      }
      map.get(ckCode).push(item);
    }
  });

  // Convert map to array and sort by ckCode
  return Array.from(map.entries())
    .map(([ckCode, entries]) => ({
      ckCode,
      entries,
    }))
    .sort((a, b) => {
      // Extract number and letter separately for sorting
      const matchA = a.ckCode.match(/CK\s?(\d+)([A-Za-z]?)/);
      const matchB = b.ckCode.match(/CK\s?(\d+)([A-Za-z]?)/);
      const numA = parseInt(matchA[1], 10);
      const numB = parseInt(matchB[1], 10);
      const letterA = matchA[2] || "";
      const letterB = matchB[2] || "";

      // Sort by number first, then by letter
      if (numA !== numB) {
        return numA - numB;
      }
      return letterA.localeCompare(letterB);
    });
};

const Testimonialread = () => {
  const [activeData, setActiveData] = useState(NewsdataTest);
  const ckEntries = extractCKEntries(activeData);
  const [showButton, setShowButton] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [tabSlideIndex, setTabSlideIndex] = useState(0);
  const [tabsPerRow, setTabsPerRow] = useState(12); // Default for large screens
  const sliderRef = useRef(null);
  const ckContainerRef = useRef(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultCk = queryParams.get("ck");
  const [selectedCkCode, setSelectedCkCode] = useState(null);

  const selectedItems =
    ckEntries.find((entry) => entry.ckCode === selectedCkCode)?.entries || [];

  // Auto Slider for Banner
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % 3);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // scrooll to top

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (window.scrollY > 400) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  // Set default CK code
  useEffect(() => {
    if (defaultCk && ckEntries.some((entry) => entry.ckCode === defaultCk)) {
      setSelectedCkCode(defaultCk);
    } else {
      setSelectedCkCode(ckEntries[0]?.ckCode || null);
    }
    setTabSlideIndex(0); // reset tab slider to first slide
  }, [defaultCk, activeData]);

  // Responsive tabsPerRow based on screen size
  useEffect(() => {
    const updateTabsPerRow = () => {
      if (window.matchMedia("(max-width: 576px)").matches) {
        setTabsPerRow(3); // Extra small screens
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        setTabsPerRow(6); // Small screens
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setTabsPerRow(8); // Medium screens
      } else {
        setTabsPerRow(12); // Large screens
      }
    };

    updateTabsPerRow(); // Initial check
    window.addEventListener("resize", updateTabsPerRow);
    return () => window.removeEventListener("resize", updateTabsPerRow);
  }, []);

  // Tab Sliding Logic
  const rowsPerSlide = 4; // Show 3 rows per slide
  const totalTabs = ckEntries.length;

  // Group tabs into rows based on tabsPerRow
  const groupedTabs = [];
  for (let i = 0; i < Math.ceil(totalTabs / tabsPerRow); i++) {
    groupedTabs.push(ckEntries.slice(i * tabsPerRow, (i + 1) * tabsPerRow));
  }

  // Pad the last row to ensure exactly tabsPerRow tabs
  const lastRow = groupedTabs[groupedTabs.length - 1];
  if (lastRow && lastRow.length < tabsPerRow) {
    const placeholders = Array(tabsPerRow - lastRow.length).fill(null);
    groupedTabs[groupedTabs.length - 1] = [...lastRow, ...placeholders];
  }

  // Calculate slides based on grouped rows
  const totalSlides = Math.ceil(groupedTabs.length / rowsPerSlide);

  // Navigation handlers
  const handleNext = () => {
    setTabSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setTabSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Bullet dot handler
  const handleDotClick = (index) => {
    setTabSlideIndex(index);
  };

  // three button data
  const Threebutton = [
    {
      id: 1,
      title: "Call Center And Customer Service Training Testimonials",
      data: CallCenterData,
    },
    {
      id: 2,
      title: "Extensive List of Positive Testimonials",
      data: NewsdataTest,
    },
    {
      id: 3,
      title: "Debt Collection And Revenue Management Training Testimonials",
      data: DebtCollData,
    },
  ];
// active top button according to the home page testimonial section links
  const activeTabFromState = location.state?.activeTab;

  useEffect(() => {
    if (activeTabFromState === "debt") {
      setActiveData(DebtCollData);
    } else if (activeTabFromState === "callcenter") {
      setActiveData(CallCenterData);
    }
  }, [activeTabFromState]);
  return (
    <div className="roboto">
      {/* 🔹 Banner Slider */}
      <div className="overflow-hidden relative w-full">
        <div
          ref={sliderRef}
          className="flex w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
        >
          <img src={images.bannerevents1} className="w-full flex-shrink-0" />
          <img src={images.bannerevents2} className="w-full flex-shrink-0" />
          <img src={images.bannerevents3} className="w-full flex-shrink-0" />
        </div>
      </div>

      <div>
        {/* 🔹 Free Button in Bottom-Right */}
        <div>
          {showButton && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 bg-primary hover:bg-blue-800 -rotate-45 text-xl text-white px-2 py-2 rounded-full shadow-lg z-50"
            >
              <CgArrowTopRight />
            </button>
          )}
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-5 pt-6 pb-4 w-full padding-2xl mx-auto">
          {Threebutton.map((btn) => (
            <button
              key={btn.id}
              className={`rounded-lg 2xl:py-2 py-2 px-2 2xl:text-xl lg:text-sm sm:text-[13px] roboto-serif-font cursor-pointer border border-primary transition-all ${
                activeData === btn.data
                  ? "bg-primary text-white"
                  : "text-primary hover:bg-primary hover:text-white"
              }`}
              onClick={() => setActiveData(btn.data)}
            >
              <span>{btn.title}</span>
            </button>
          ))}
        </div>
      </div>
      {/* 🔹 CK Code Tabs */}
      <div className="relative w-full padding-2xl lg:px-16 md:px-8 px-4 pb-6 ">
        <div className="overflow-hidden">
          <div
            ref={ckContainerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${tabSlideIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex flex-col gap-y-2 min-w-full"
              >
                {groupedTabs
                  .slice(
                    slideIndex * rowsPerSlide,
                    (slideIndex + 1) * rowsPerSlide
                  )
                  .map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-x-2 gap-y-2 w-full"
                    >
                      {row.map((entry, index) =>
                        entry ? (
                          <button
                            key={entry.ckCode}
                            className={`px-1.5 py-1 sm:px-2 sm:py-1.5 border border-primary hover:bg-primary transition-all duration-300 hover:text-white whitespace-nowrap cursor-pointer rounded-md text-xs sm:text-sm font-semibold ${
                              selectedCkCode === entry.ckCode
                                ? "bg-primary text-white"
                                : "bg-gray-200 text-black"
                            }`}
                            onClick={() => setSelectedCkCode(entry.ckCode)}
                          >
                            {entry.ckCode}
                          </button>
                        ) : (
                          <div
                            key={`placeholder-${index}`}
                            className="px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-md bg-gray-100 invisible"
                          ></div>
                        )
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
        {/* Navigation and Bullet Dots */}
        {totalSlides > 1 && (
          <div className="relative flex justify-between mt-2 sm:mt-3 items-center">
            <button
              onClick={handlePrev}
              className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-sm sm:text-base bg-primary text-white rounded-md disabled:opacity-50 z-10 min-w-[16px] sm:min-w-[20px] cursor-pointer"
              disabled={tabSlideIndex === 0}
            >
              <FaAnglesLeft />
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 cursor-pointer sm:w-3 sm:h-3 rounded-full ${
                    tabSlideIndex === index
                      ? "bg-primary"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-sm sm:text-base bg-primary text-white rounded-md disabled:opacity-50 z-10 min-w-[16px] sm:min-w-[20px] cursor-pointer"
              disabled={tabSlideIndex === totalSlides - 1}
            >
              <FaAnglesRight />
            </button>
          </div>
        )}
      </div>
      {/* 🔹 CK Data */}
      <div className="padding-2xl lg:px-16 md:px-8 px-4 pb-8">
        {selectedItems.map((item) => (
          <div key={item.id} className="mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-[32px] font-semibold text-primary text-left font-serif">
                {item.title}
              </h3>
              {item.title ===
                "CK 1400 Human Resources Management Procedures For Public & Private Organizations" ||
              item.title ===
                "CK 7060 Motor Vehicle Auto Loans & Leasing Debt Collections & Revenue Management" ? (
                <button
                  className="cursor-pointer flex flex-row gap-1 text-red-500 items-center rounded-md border-1 border-red-600 py-1 px-3 ml-4 hover:bg-red-500 hover:text-white transition-all duration-300"
                  onClick={() =>
                    window.open(
                      item.title ===
                        "CK 1400 Human Resources Management Procedures For Public & Private Organizations"
                        ? CoursePdf.sometopicpdf
                        : "https://cohenandklein.com/wp-content/uploads/2023/01/CK7060-Testimonials-1.pdf",
                      "_blank"
                    )
                  }
                >
                  <FaRegFilePdf className="text-2xl" />
                  <span className="hidden sm:inline whitespace-nowrap py-1">
                    Download Human Resources Management Testimonials
                  </span>
                </button>
              ) : null}
            </div>
            <ul className="flex flex-col sm:gap-6 gap-2 my-4">
              {item.comments?.map((comment) => (
                <li
                  key={comment.id}
                  className="border border-white hover:border-gray-300 hover:shadow-lg rounded-2xl flex flex-col sm:gap-4 gap-3 sm:px-9 px-3 sm:py-7 py-3"
                >
                  <div className="flex flex-col sm:gap-2.5 gap-1">
                    <div className="flex sm:gap-2 sm:text-2xl text-lg text-secondary">
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <MdStarHalf />
                    </div>
                    <p className="sm:text-base text-sm text-blacklight">
                      {comment.title1}
                    </p>
                    <p className="sm:text-base text-sm text-blacklight">
                      {comment.disc}
                    </p>
                  </div>
                  <div className="flex flex-col sm:gap-2 gap-1">
                    <h5 className="sm:text-base text-sm font-semibold text-black">
                      {comment.title2}
                    </h5>
                    <p className="sm:text-sm text-xs font-medium">
                      {comment.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonialread;
