import React, { useState } from "react";

const homeVideoData2 = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/XAiqxhOIOLE",
    title: "How to Use Your Phone Voice to Be a Better Debt Collector or Support Agent",
    desc: "Your Voice Is Your Best Tool on the Phone On the phone, how you say something matters as much as what you say. Your voice builds trust. It shows you know your job. It helps you connect with people. In Video 1, Cohen and Klein Consulting shows debt collectors, customer service reps, and back office staff how to use their voice to get better results.",
  },

   {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/2CSrG5ApUiY",
    title: "How to Listen Well on Consumer and Business Debt Collection Calls",
    desc: "Good Listening Brings In More MoneyGood collection work is not about talking over people. It is about listening closely. In Video 2, Cohen and Klein Consulting shows how careful listening helps you read the person, hear the real problem, and guide the call to an answer that works for both sides.",
  },

   {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/0ancoJyxb3o",
    title: "Talking Mistakes That Can Hurt a Debt Collection Call",
    desc: "Common Mistakes on Collection Calls, and How to Avoid ThemOne wrong move on a call can lead to mix ups, late payments, or broken promises. In Video 3, Cohen and Klein Consulting looks at real mistakes people make, so your collectors know what to avoid and keep every call clear.",
  },

  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/sNXzZo6pV8M",
    title: "Handling Strong Feelings on Debt Collection Calls",
    desc: "Staying Calm on Hard Calls and Protecting Your Good NameCollection calls can be stressful. People get worried, upset, or angry. The way your team handles those moments affects both how much you collect and how people see your company. In Video 4, Cohen and Klein Consulting shares simple ways to handle strong feelings in a calm, fair, and professional way.",
  },

   {
    id: 5,
    videoUrl: "https://www.youtube.com/embed/GmLmN-edUBI",
    title: "Planning the Call and Opening It the Right Way for Better Collection Results",
    desc: "The First 15 Seconds Decide the Whole CallThe first 15 seconds of a collection call set the tone for everything that follows. With no plan, calls go off track fast. In Video 5, Cohen and Klein Consulting shows how to get ready before you dial and how to open the call so you reach the right person and stay in control.",
  },

  {
    id: 6,
    videoUrl: "https://www.youtube.com/embed/B2snpSTRwLI",
    title: "Asking Clear Questions to Set Up Payment Plans That Work",
    desc: "Better Questions Get Better Answers Vague questions get vague excuses. To get a firm promise to pay, you have to ask clear, well planned questions. In Video 6, Cohen and Klein Consulting breaks down the kind of questions that move people to act and lead to payment plans they can actually keep.",
  },
  {
    id: 7,
    videoUrl: "https://www.youtube.com/embed/4zPIbKNOXVI",
    title: "Handling Stalls and Excuses So You Can Close the Call",
    desc: "Turn “Not Right Now” Into a Payment “I do not have the money.” “Send me another bill.” “I will call you back.” Sound familiar? Stalls come with the job. The best collectors treat them as a chance, not a wall. In Video 7, Cohen and Klein Consulting shares simple ways to answer stalls and move the call toward a firm payment.",
  },
   {
    id: 9,
    videoUrl: "https://www.youtube.com/embed/tSKSDZ--oS4",
    title: "A Full Step by Step Plan for Better Phone Collections",
    desc: "What Makes a Top Collector Different? Why do some collectors get average results while others beat every target? Like top athletes, the best collectors follow a plan, stay disciplined, and practice. In Video 8, Cohen and Klein Consulting puts every step together into one clear method for collecting more money on more accounts.",
  },
];

const HomeVideo2 = () => {
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
          Heading yaha likho
        </h3> */}
      </div>

      <div className="py-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {homeVideoData2.map((video) => (
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

export default HomeVideo2;