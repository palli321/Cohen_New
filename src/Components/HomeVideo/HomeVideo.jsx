import React, { useState } from "react";

const homeVideoData = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/vvAOnonz5fI",
    title: "Mastering Debt Recovery Hear from Our CK 7135 Course Graduates",
    // desc: "Description yaha likho",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/ZL3VUBmXLEk",
    title: "Social Security & Health Insurance Debt Collection: Client Success Stories",
    // desc: "Description yaha likho",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/AhIg_ekwPoE",
    title: "Bermuda Government Testimonials: CK 6124G Debt Collection Training",
    // desc: "Description yaha likho",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/KR8P5PVr8L4",
    title: "Utility Industry Debt Collection Training: CK 700A Client Reviews",
    // desc: "Description yaha likho",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/embed/qaaA6hbHt54",
    title: "National Lotteries Control Board Testimonials: Debt Collections Strategies",
    // desc: "Description yaha likho",
  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/embed/gFezlaI9b_A",
    title: "MSME Debt Collection Strategies: Dominica Agricultural Industrial & Development Bank Reviews",
    // desc: "Description yaha likho",
  },
  {
    id: 7,
    videoUrl: "https://www.youtube.com/embed/IuNyKau8Tn0",
    title: "St. Kitts Electricity Company (SKELEC) Testimonials: CK 700A Training",
    // desc: "Description yaha likho",
  },
];

const HomeVideo = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleOpen = (url) => {
    setSelectedVideo(url);
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
    setSelectedVideo("");
  };

  return (
    <div className="pt-9 padding-2xl lg:px-15 px-4 roboto">
      <div className="mx-auto flex justify-center">
        {/* <h3 className="font-serif sm:text-[36px] text-xl text-center text-primary font-semibold">
          Cohen & Klein Consulting Inc Training Videos Overview
        </h3> */}
      </div>

      <div className="py-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {homeVideoData.map((video) => (
            <div
              key={video.id}
              className="max-w-[350px] w-full rounded-lg overflow-hidden drop-shadow-[0_0_40px_rgba(1,61,123,0.1)] bg-white p-[20px] cursor-pointer"
              onClick={() => handleOpen(video.videoUrl)}
            >
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={video.videoUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <h2 className="text-[18px] font-semibold text-primary">
                  {video.title}
                </h2>
                <p className="text-[#021326] text-sm">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {isPopupOpen && (
          <div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
            onClick={handleClose}
          >
            <div
              className="bg-white p-4 rounded-lg relative shadow-lg w-[90%] max-w-[1000px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 bg-black px-4 py-2 text-white text-lg rounded"
                onClick={handleClose}
              >
                ✕ Close
              </button>

              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={selectedVideo}
                  title="Selected Video"
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

export default HomeVideo;