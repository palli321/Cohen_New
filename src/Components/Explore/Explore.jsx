import React, { useState } from "react";
import { ExploreCardData } from "../../data";
import { FaFilePdf, FaPlay } from "react-icons/fa";

const Explore = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleCardClick = (index, url) => {
    if (index === 0) {
      // Open PDF for the first card
      // window.open(url, "_blank");
       setVideoUrl(url);
      setIsPopupOpen(true);
    } else {
      // Show YouTube popup for other cards
      setVideoUrl(url);
      setIsPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setVideoUrl("");
  };

  return (
    <div className=" pt-9 padding-2xl lg:px-15 px-5 roboto">
      <div className="mx-auto flex justify-center">
        <div>
          <h3 className="font-serif sm:text-[34px] text-xl text-center text-primary font-semibold">
           Some Additional Testimonials With Proven Results.
          </h3>
          {/* <p className="roboto-serif-font font-bold sm:text-[21px] text-xs text-secondary pt-[10px] flex justify-center">
            Gain insights into our vision and explore engaging videos.
          </p> */}
        </div>
      </div>
      <div className="py-[70px]">
        <div className="flex flex-wrap justify-center gap-6">
  {ExploreCardData.map((data, index) => (
    <div
      key={index}
      // Replaced the grid-cols widths with responsive flex width calculations
      className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(20%-1.2rem)] max-w-[410px] rounded-lg overflow-hidden drop-shadow-[0_0_40px_rgba(1,61,123,0.1)] bg-white p-[20px] cursor-pointer"
      onClick={() => handleCardClick(index, data.videoUrl)}
    >
      <div className="relative flex items-center justify-center h-[200px] bg-[#fff1f1] rounded-xl">
        <img
          src={data.image}
          className="w-[80px] h-[100px] object-contain"
          alt={data.title} // added an alt tag for best practices!
        />
      </div>
      <div className="pt-4 flex flex-col gap-3">
        <h2 className="text-[18px] font-semibold text-primary">
          {data.title}
        </h2>
        <p className="text-[#021326] text-sm">
          {data.desc}
        </p>
      </div>
    </div>
  ))}
</div>

        {isPopupOpen && (
  <div
    className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
    onClick={handleClosePopup}
  >
    <div
      className="bg-white p-4 rounded-lg relative shadow-lg w-[90%] max-w-[1200px]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 bg-black px-5 py-2 text-white text-lg rounded z-[9999]"
        onClick={handleClosePopup}
      >
        ✕ Close
      </button>
      <div className="relative w-full h-0 pb-[56.25%] z-10">
        <iframe
          className="absolute top-0 left-0 w-full h-full z-0"
          src={videoUrl}
          title="PDF Viewer"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default Explore;