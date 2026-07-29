import images from "../assets/Images/img";
import icons from "../assets/icons/icon";
import { FaCheckCircle } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import React, { useState } from "react";


const Contact = () => {

const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  const body = new URLSearchParams();
  body.append("form_type", "contact");
  body.append("first_name", formData.firstName);
  body.append("last_name", formData.lastName);
  body.append("email", formData.email);
  body.append("company", formData.company);
  body.append("message", formData.message);

  try {
    const res = await fetch("https://cohenandklein.com/save.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    const text = await res.text();

    if (text.trim() === "saved") {
      alert("Form submitted successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    } else {
      alert("Submission failed: " + text);
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};

  return (
    <div className="roboto  mt-43">
      <div>
        <div className="2xl:px-[150px] lg:px-15 sm:px-8 px-6 relative overflow-hidden md:py-18 py-8 bg-[#FFFAF2] ">
        <img src={images.bottomcontactdesign} alt="" className="-left-7  -bottom-4 absolute -z-0 2xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[600px] w-[550px]" />
          <div className=" grid lg:grid-cols-2 grid-cols-1 z-20 gap-10 ">
            <div className="flex flex-col 2xl:gap-8 md:gap-5 gap-3 ">
              <h2 className="text-secondary roboto-serif-font font-medium xl:text-2xl lg:text-lg text-base relative items-center leading-[170%]">
                <img
                  src={images.contactyellowpatti}
                  className="absolute -left-2 top-0 -z-0 max-w-[165px] lg:max-w-[180px] xl:max-w-[300px] "
                  alt=""
                />
                <span className="text-white font-bold relative z-10">
                  Why Our Training
                </span>{" "}
                Categories of Courses is Best
              </h2>
              <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl roboto-serif-font font-semibold text-primary">
                On-site or In-house training can be arranged
              </h1>
              <p className="text-blacklight 2xl:text-lg text-sm">
                Contact Cohen & Klein and allow us to serve you better. From our
                Seminars to our Self-Study manuals, we are here to help move you
                and your organization forward.
              </p>
              <div className="flex flex-col 2xl:gap-5 gap-3 z-10">
                <h3 className="font-semibold text-xl text-primary">
                  Benefits of Our Training?
                </h3>
                <ul className="flex flex-col 2xl:gap-5 md:gap-3 gap-2 text-sm 2xl:text-base ">
                  <li className="flex flex-row gap-3 items-center text-blacklight">
                    <FaCheckCircle className="text-secondary 2xl:text-xl text-lg" />{" "}
                    <span>58 Categories of Courses</span>
                  </li>
                  <li className="flex flex-row gap-3 items-center text-blacklight">
                    <FaCheckCircle className="text-secondary 2xl:text-xl text-lg" />{" "}
                    <span>Over 1000 Customized Industry Training Courses </span>
                  </li>
                  <li className="flex flex-row gap-3 items-center text-blacklight">
                    <FaCheckCircle className="text-secondary 2xl:text-xl text-lg" />{" "}
                    <span>
                      Over 100 Professional Debt Collection Training Courses
                    </span>
                  </li>
                  <li className="flex flex-row gap-3 items-center text-blacklight">
                    <FaCheckCircle className="text-secondary 2xl:text-xl text-lg" />{" "}
                    <span>Industry Specialization</span>
                  </li>
                  <li className="flex flex-row gap-3 items-center text-blacklight">
                    <FaCheckCircle className="text-secondary 2xl:text-xl text-lg" />{" "}
                    <span>Expert Consulting Training</span>
                  </li>
                </ul>
              </div>
              
            </div>
            <div className="grid grid-cols-2 sm:gap-8 gap-2 z-20">
              <div className="flex flex-col md:gap-6 gap-3 relative">
                <img
                  src={images.aboutusimg1}
                  alt=""
                  className="z-20 w-full max-w-sm md:max-w-full rounded-tr-[70px] rounded-bl-[70px] p-2 border-[1px] border-gray-300"
                />
                <div className="bg-primary xl:rounded-tr-[70px] rounded-tr-[40px] xl:rounded-bl-[70px] rounded-bl-[40px] flex sm:gap-4 gap-2 px-4 2xl:px-11 sm:px-7 py-1.5 2xl:py-9 md:py-5 items-center justify-center">
                  <span className=" bg-white rounded-full flex justify-center items-center text-2xl md:text-3xl">
                    <LuPhoneCall className="text-primary  sm:mx-4 sm:my-4 mx-3 my-3" />
                  </span>
                  <div className="text-white flex flex-col font-semibold">
                    <p className=" text-xs sm:text-sm md:text-base whitespace-nowrap">
                      CONTACT NOW
                    </p>
                    <h4 className="text-base sm:text-lg 2xl:text-[32px] md:text-2xl  leading-8 md:leading-10 whitespace-nowrap">
                      954-731-6340
                    </h4>
                  </div>
                </div>
                <img src={images.redDot} alt="" className="lg:block hidden absolute 2xl:bottom-4.5 lg:-bottom-3.5 -left-11 -z-10 lg:w-40 w-28 "/>
              </div>
              <div className="flex flex-col md:gap-6 gap-3">
                <div className="bg-secondary xl:rounded-tr-[70px] rounded-tr-[40px] xl:rounded-bl-[70px] rounded-bl-[40px] flex sm:gap-4 gap-2 px-4 2xl:px-11 sm:px-7 py-1.5 2xl:py-9 md:py-5 items-center justify-center">
                  <span className=" bg-white rounded-full flex justify-center items-center text-2xl md:text-3xl">
                    <LuPhoneCall className="text-secondary  sm:mx-4 sm:my-4 mx-3 my-3" />
                  </span>
                  <div className="text-white flex flex-col font-semibold">
                    <p className=" text-xs sm:text-sm md:text-base whitespace-nowrap">
                      CONTACT NOW
                    </p>
                    <h4 className="text-base sm:text-lg 2xl:text-[32px] md:text-2xl  leading-8 md:leading-10 whitespace-nowrap">
                    212-709-8026
                    </h4>
                  </div>
                </div>
                <img
                  src={images.aboutusimg2}
                  alt=""
                  className="w-full max-w-sm md:max-w-full rounded-tr-[70px] rounded-bl-[70px] p-2 border-[1px] border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:px-[150px] lg:px-15 sm:px-10 px-6 pt-35 pb-16">
        <div className="flex flex-col justify-between items-center gap-12 lg:flex-row ">
          {/* Google Map Section */}
          <div className="w-full lg:w-[1000px] h-[580px] overflow-hidden order-2 lg:order-1">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3024.5078705997876!2d-74.010049!3d40.706835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1702a2ceab%3A0x7537a5035589668!2s30%20Wall%20St%2C%20New%20York%2C%20NY%2010005!5e0!3m2!1sen!2sus!4v1770231689663!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Form Section */}
          <div className="w-full max-w-[640px] lg:h-[580px] h-auto mx-auto p-6 bg-[#F2F9FF]  order-1 lg:order-2 rounded-lg">
            <h2 className="text-3xl md:text-4xl text-primary font-semibold mb-6 text-left roboto-serif-font">
              Contact Us
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg text-blacklight font-medium">
                    First Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="p-3 w-full rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Enter First Name"
                  />
                </div>
                
                <div>
                  <label className="block text-lg text-blacklight font-medium">
                    Last Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="p-3 w-full rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Enter Last Name"
                  />

                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg text-blacklight font-medium">
                    Email<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 w-full rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Enter Email"
                  />

                </div>
                <div>
                  <label className="block text-lg text-blacklight font-medium">
                    Company<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="p-3 w-full rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Enter Company"
                  />

                </div>
              </div>

              {/* Third Row */}
              <div>
                <label className="block text-lg text-blacklight font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 w-full rounded-md h-32 bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Write Message"
                />

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-hoverclr transition duration-300"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="2xl:px-[150px] lg:px-15 sm:px-10 px-6 py-18 flex justify-center flex-col">
        <h2 className="sm:text-[32px] text-xl text-primary font-semibold roboto-serif-font mx-auto text-center">
          Contact Info. Cohen & Klein Consulting
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  my-16  gap-8">
          <div className="flex justify-center flex-col items-center gap-2 bg-[#F2F9FF]  py-10 rounded-md">
            <span className="px-4 py-4 bg-primary rounded-full text-white">
              <icons.MdOutlineEmail className="h-[40px] w-[40px]" />
            </span>
            <h5 className="font-semibold text-xl text-primary">
              Email Address
            </h5>
            <div className="flex flex-col gap-1 justify-center items-center text-blacklight">
              {/* <span>cohenandklein@cohenandklein.com</span>
              <span>collect@gate.net</span> */}
              <span>training@cohenandklein.com</span>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 bg-[#FFFAF2]  py-10 rounded-md">
            <span className="px-4 py-4 bg-secondary rounded-full text-white">
              {" "}
              <icons.MdOutlineLocationOn className="h-[40px] w-[40px]" />
            </span>
            <h5 className="font-semibold text-xl text-primary">Main Office</h5>
            <div className="flex flex-col gap-1 justify-center items-center text-blacklight">
              <span>8362 Pines Boulevard,</span>
              <span>Pembroke Pines, FL 33024</span>
              <span>Telephone: 954-731-6340</span>
              <span>Fax: 954-731-6606</span>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 bg-[#E9FFF9] py-10 rounded-md">
            <span className="px-4 py-4 bg-green-600 rounded-full text-white">
              {" "}
              <icons.MdOutlineLocationOn className="h-[40px] w-[40px]"/>
            </span>
            <h5 className="font-semibold text-xl text-primary">
              Wall Street Office
            </h5>
            <div className="flex flex-col gap-1 justify-center items-center text-blacklight">
              <span>30 Wall Street, 8th Floor</span>
              <span>New York, New York 10005-2205</span>
              <span>Telephone: 212-709-8026</span>
              <span>Fax: 212-943-2300</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;