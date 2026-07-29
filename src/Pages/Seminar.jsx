import { useEffect, useState } from "react";
import images from "../assets/Images/img";
import { seminarcards, seminarbannerData, seminarbannerData2 } from "../data";

const banners = [
  {
    id: 1,
    title1: "Cohen & Klein ",
    title2:"Consulting, Inc.",
    image: images.yellowseminar,
    heading: "Seminars and In-house (on-site) Training",
    description:
      "Recognizing the growing demand for tailored education and training in the U.S. and abroad, we have launched specialized programs to enhance workforce capabilities. Our training initiatives focus on:",
    data: seminarbannerData,
  },
  {
    id: 2,
    title1: "Professional Debt ",
    title2:"Collection Training",
    image: images.yellowpro,
    heading: "Seminars and In-house (on-site) Training",
    description:
      "Professional training in debt collection will enhance your team’s skills and drive business success with our specialized debt collection training. Benefits include:",
    data: seminarbannerData2,
  },
];

const Seminar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="roboto ">
      <div className="2xl:px-[150px] lg:px-15 sm:px-8 px-6  sm:py-20 py-10 bg-[#FFFAF2]">
        <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-32 lg:gap-15">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {banners.map((banner) => (
                <div key={banner.id} className="min-w-full flex flex-col xl:gap-9 gap-4">
                  <h3 className="roboto-serif-font text-2xl font-bold text-primary z-20">
                    <span className="text-white relative">
                      <img
                        src={banner.image}
                        alt=""
                        className="absolute -z-10 w-[230px] h-8 "
                      />
                      {banner.title1}
                    </span>
                    {banner.title2}
                  </h3>
                  <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl roboto-serif-font font-semibold text-primary">
                    {banner.heading}
                  </h1>
                  <p className="text-blacklight 2xl:text-lg text-sm">{banner.description}</p>
                  <div className="flex flex-col 2xl:gap-5 gap-3 z-10">
                    <ul className="flex flex-col md:gap-3 gap-2 text-sm 2xl:text-base">
                      {banner.data.map((data, index) => (
                        <li key={index} className="flex flex-col text-left sm:gap-2.5 gap-1">
                          <div className="flex gap-3.5 items-center text-primary">
                            <span className="text-xl">{data.id}</span>
                            <h4 className="font-semibold lg:text-xl sm:text-lg text-base text-left">
                              {data.heading}
                            </h4>
                          </div>
                          <p className="text-blacklight xl:text-lg sm:text-sm text-xs ml-10">
                            {data.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center relative lg:mt-0 mt-12 items-center">
            <div className="relative">
              <img
                src={images.seminarimg}
                alt=""
                className=" relative xl:max-w-[610px] sm:max-w-[500px] rounded-[20px] drop-shadow-[0_5px_10px_rgba(38,50,56,0.15)] z-40"
              />
                <img src={images.yellowdot} alt="" className=" absolute 2xl:-right-10 2xl:-bottom-6 -z-0 xl:-right-6 xl:-bottom-8 lg:-bottom-8 lg:-right-10 sm:-bottom-10 sm:-right-8 -right-3 -bottom-3" />
            </div>
            <div className="hidden absolute bg-white max-w-[280px] pr-6 pl-4 py-4 lg:flex gap-3 items-center bottom-15 -left-15 rounded-[10px] border-[1px] border-gray-300 z-50 drop-shadow-[0_5px_10px_rgba(1,61,123,0.15)]">
              <div>
                <img src={images.aboutusicon} alt="" className="max-w-12" />
              </div>
              <h4 className="text-xl font-semibold roboto-serif-font text-primary">
                Debt Collection Courses
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className=" 2xl:px-[150px] lg:px-15 sm:px-8 px-6 sm:pt-35 sm:pb-20 py-10 flex flex-col lg:gap-13 gap-8">
        <h2 className="sm:text-[32px] text-xl roboto-serif-font font-semibold text-primary mx-auto text-center">
          In-House Consulting Services
        </h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-3 sm:gap-5 gap-8">
          {seminarcards.map((data, index) => (
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
      <div className="2xl:pl-[150px] max-w-[1100px] tracking-[2%] lg:pl-15 sm:px-8 px-6 sm:pt-20 lg:pb-35 sm:pb-20 py-10 flex flex-col gap-3">
        <h2 className="sm:text-[32px] text-xl roboto-serif-font font-semibold text-primary text-left">
          Debt Collection Courses
        </h2>
        <p className="text-left lg:text-lg sm:text-base text-sm">
          We offer the most comprehensive and state-of-the-art training programs available for various staff. Choose from a variety of locations, dates, and times.
        </p>
      </div>
    </div>
  );
};

export default Seminar;
