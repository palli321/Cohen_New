import React from "react";
import images from "../../assets/Images/img"
import { Link, useNavigate } from "react-router-dom";
const Testimonial = [
  {
    image: images.meeting8,
    title:
   "CK 1400 Human Resources Management Procedures For Public & Private Organizations",
    view: "Read Feedback",
  },
  {
    image: images.meeting9,
    title:
      "CK 2004: Coaching, Mentoring & Team-building Techniques For Managers & Supervisors",
    view: "Read Feedback",
  },
  {
    image: images.meeting10,
    title:
      "Florida - CK 4000 Disaster Preparedness Management ",
    view: "Read Feedback",
  },
  {
    image: images.meeting4,
    title: "CK 6254: Global Warming Management Procedures",
    view: "Read Feedback",
  },
  {
    image: images.meeting11,
    title: "Florida - CK 700 Debt Collection Strategies & Techniques",
    view: "Read Feedback",
  },
  {
    image: images.meeting12,
    title: "CK 800: Customer Service, Sales And Marketing Procedures",
    view: "Read Feedback",
  },
  {
    image: images.meeting8,
    title:
      "CK 1800: Airport Customer Service And Communication Procedures",
    view: "Read Feedback",
  },
  {
    image: images.meeting11,
    title: "CK 006: Saint Maarten, Sol Petroleum - Debt Collection and Performance",
    view: "Read Feedback",
  },
];

// Helper function to extract CK code
const getCkCode = (title) => {
  const match = title.match(/CK\s?\d{3,4}/i);
  return match ? match[0].replace(/\s+/, " ") : "";
};

const TestimonialSlider = () => {
     const navigate =useNavigate();
   const handletestimonial=()=>{
    navigate('/testimonialread')
   }
  return (
    <div className="roboto pb-[100px] padding-2xl lg:px-15 px-8 xl:mt-0 sm:mt-6 pt-18">
      <div className="mx-auto flex justify-center mb-[54px]">
        <div>
          <h3 onClick={handletestimonial} className="roboto-serif-font cursor-pointer md:text-[32px] sm:text-2xl text-xl text-center text-primary font-semibold">
            1500+ Positive Testimonials With Proven Results
          </h3>
          <p className="roboto-serif-font font-bold sm:text-[21px] text-xs text-secondary pt-[10px] flex justify-center">
            in different locations
          </p>
          <h3 className="roboto-serif-font md:text-[22px] sm:text-2xl text-xl text-center text-primary font-semibold">
            Some Additional Testimonials With Proven Results.
          </h3>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-y-11 gap-y-5 sm:gap-x-7 gap-x-5">
        {Testimonial.map((data, index) => (
          <Link
            to={`/testimonialread?ck=${getCkCode(data.title)}`}
            key={index}
            className="rounded-[15px] overflow-hidden border-1 border-[rgba(0,43,88,0.2)] bg-white p-3.5"
          >
            <div>
              <img
                src={data.image}
                alt="Card Image"
                className="w-full h-[235px] object-cover rounded-lg 2xl:mb-[35px] mb-4"
              />
              <div className="flex flex-col 2xl:gap-7 gap-3">
                <h2 className="2xl:text-xl lg:text-base font-semibold text-primary 2xl:pt-[27px] pt-3 border-t-[2px] border-[rgba(0,0,0,0.1)] roboto-serif-font">
                  {data.title}
                </h2>
                <p className="flex justify-end text-base cursor-pointer text-secondary transition-colors hover:text-hoverclr 2xl:pb-0 pb-3 roboto-serif-font">
                  {data.view}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;