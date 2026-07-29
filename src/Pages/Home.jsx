import React from "react";
import Hero from "../Components/Hero/Hero";
import Explore from "../Components/Explore/Explore";
import Partner from "../Components/Partner/Partner";
import Testimonial from "../Components/Testimonial/Testimonial";
import Training from "../Components/Training/Training";
import TestimonialSlider from "../Components/TestimonialSlider/TestimonialSlider";
import Cources from "../Components/Cources/Cources";
import OnlineCources from "../Components/OnlineCources/OnlineCources";


const Home = () => {
    return (
      <>
      <Hero />
      <Testimonial />
      {/* <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br> */}
       <OnlineCources/>  
       <Explore /> 
       <Partner heading="Some Previous Partnerships, Collaborations and Training Assignments Conducted" className="py-[30px] pb-[100px]" className2="pt-15" />
      <Training />
      <TestimonialSlider /> 
      <Cources />
      </>
    );
  };
  export default Home;