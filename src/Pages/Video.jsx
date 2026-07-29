import React, { useState } from "react";

const videoData = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/ppCueXBI44Y",
    title: "From Antigua to the World: The Journey of Cohen & Klein Consulting, Inc. It’s not where you start, but where you finish. ",
    desc: "In this video, Cohen & Klein & Consulting, Inc. shares its remarkable journey. This is a story of resilience, the pursuit of excellence, and a commitment to empowering organizations and individuals globally through various professional customized corporate training courses and strategic consulting services.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/IlTQvt5RPlM",
    title: "The Gold Standard in Debt Recovery Management Training Courses: Cohen & Klein Consulting Recognition | Cohen & Klein Consulting, Inc.",
    desc: "What does it take to become a top-tier debt collections and revenue management collections professional? In this video, Cohen & Klein Consulting, Inc. introduces the premier recognition and training standard by Cohen & Klein Consulting that is transforming the landscape of debt collections recovery and revenue management procedures.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/LQ6RsPs3c-A",
    title: "Elevating Standards: National Social Insurance & Debt Collections Training | Cohen & Klein Consulting, Inc.",
    desc: "Effective revenue recovery in the public sector requires more than just vague efforts—it requires specialized expertise, empathy, and strategic excellence. In this video, Cohen & Klein Consulting, takes you inside a specialized training programs hosted by Cohen & Klein Consulting, Inc.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/q-nOTrHW9V0",
    title: "Professional Debt Collections Training: Strategies for Success | Cohen & Klein Consulting, Inc.",
    desc: "Managing revenue and cash flow in any business requires a unique blend of firm recovery strategies and exceptional customer relations. In this video, Cohen & Klein Consulting, Inc., takes you inside a specialized training session focused on the high-stakes world of Revenue Recovery and Debt Collections. Discover how organizations are moving beyond traditional collection approaches to adopt a proactive, data-driven methodology that secures cash flow while maintaining strong customer relationships.",
  },
  {
  id: 5,
  videoUrl: "https://www.youtube.com/embed/UIWGiSZqytQ",
  title: "Our Vision & Mission: The Driving Force Behind Cohen & Klein Consulting, Inc. What drives a global consulting firm to achieve excellence?",
  desc: "In this video, it shows the heart and soul of Cohen & Klein Consulting—our Vision and Mission. More than just words on a wall, our mission is to bridge the skills gap, empower professionals, and provide organizations with the strategic frameworks they need to thrive in a competitive global economy. From debt collections and revenue management training to leadership and professional development, Cohen & Klein Consulting, are committed to being the catalyst for organizational transformation."
},
{
  id: 6,
  videoUrl: "https://www.youtube.com/embed/Nbq82TIDBvw",
  title: "Is your debt collection department process is proactive or reactive?",
  desc: "Video 102 of our series, Cohen & Klein Consulting, Inc. explores how to streamline and establish a highly effective debt collections and revenue department. Uncollected accounts don’t just sit idle—they grow more complex and harder to resolve over time."
},
{
  id: 7,
  videoUrl: "https://www.youtube.com/embed/qJ0Z16ps7Ls",
  title: "Transforming Professional Standards: Inside Cohen & Klein Consulting’s Training Excellence ",
  desc: "Success isn't just about what you know—it's about how you apply it. This video, takes you inside a live training session hosted by Cohen & Klein Consulting, showcasing the energy, engagement, and expertise that define our world-class professional programs."
},
{
  id: 8,
  videoUrl: "https://www.youtube.com/embed/vNS3Dse8lqM",
  title: "Streamline Your Debt Collection & Revenue Department",
  desc: "This video from Cohen & Klein Consulting, Inc. outlines their comprehensive training courses designed to help private and public sector institutions effectively handle delinquent accounts. Whether you're dealing with government tax collections, utility payments, or healthcare claims, this training equips your staff—from new collectors to management—with practical, ethical, and results-driven strategies."
}


];

const Video = () => {
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
        <h3 className="font-serif sm:text-[36px] text-xl text-center text-primary font-semibold">
          Cohen & Klein Consulting Inc Training Videos Overview
        </h3>
      </div>

      <div className="py-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">

          {videoData.map((video) => (
            <div
              key={video.id}
              className="max-w-[410px] w-full rounded-lg overflow-hidden drop-shadow-[0_0_40px_rgba(1,61,123,0.1)] bg-white p-[20px] cursor-pointer"
              onClick={() => handleOpen(video.videoUrl)}
            >
              {/* Video Thumbnail */}
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

              {/* Text Section */}
              <div className="pt-4 flex flex-col gap-3">
                <h2 className="text-[18px] font-semibold text-primary">
                  {video.title}
                </h2>
                <p className="text-[#021326] text-sm">
                  {video.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
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

export default Video;
