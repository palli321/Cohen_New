import { useState, useEffect } from "react";
import { Pdfdata, CallCenterData } from "../PdfData";
import images from "../assets/Images/img";
import { Link } from "react-router-dom";

const CallCenter = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="roboto 2xl:px-[130px] lg:px-15 sm:px-8 px-6 py-10 relative">
      <div className="flex gap-8">
        {/* Left Column (Scrollable) */}
        <div className="w-[430px] lg:flex hidden flex-col">
          <ul className="">
            <li className="bg-primary text-white lg:text-2xl sm:text-lg text-base px-9 py-5 roboto-serif-font  top-0 z-10">
              Training Courses That You Should Attend Urgently
            </li>
            {Pdfdata.slice(0, 58).map((data, index) => (
              <li
                key={index}
                className="flex items-center gap-4 px-9 py-5 bg-[#F2F9FF] cursor-pointer hover:bg-blue-100 transition"
                onClick={() => window.open(data.pdf, "_blank")}
              >
                <img src={images.pdf} alt="PDF Icon" className="w-11 h-11" />
                <div className="text-blacklight sm:text-lg text-sm font-semibold">
                  <h4 className="inline">
                    {data.id} - {data.title}
                  </h4>
                  <span className="text-gray-600 sm:text-base text-xs pl-1">
                    {data.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column (Scrollable) */}
        <div className="flex-1">
          <div className="flex flex-col  sm:gap-5 gap-3">
            <h2 className="lg:text-[32px] sm:text-2xl text-xl roboto-serif-font font-semibold text-primary text-left pt-4">
              Call Center and Customer Service Management Testimonials
            </h2>
            <h3 className="text-primary sm:text-xl text-sm font-semibold roboto-serif-font">
              With Proven Results
            </h3>
          </div>
          <ul className="flex flex-col lg:gap-[50px] gap-8 mt-10">
            {CallCenterData.slice(0, 43).map((data, index) => (
              <li key={index} className="flex bg-white">
                <Link to="/callinner" className="lg:text-xl sm:text-lg text-sm roboto-serif-font text-blacklight">
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

       {/* Scroll-to-Top Button */}
       {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary hover:bg-white hover:text-primary hover:border-[1px] border-gray-400 text-white w-8 h-8 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition duration-300 md:text-3xl"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default CallCenter;
