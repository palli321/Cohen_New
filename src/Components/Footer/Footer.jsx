import React from "react";
import images from "../../assets/Images/img";
import icons from "../../assets/icons/icon";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Links } from "../../data";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="roboto-serif-font px-6 md:px-12 lg:px-24 xl:px-36 bg-primary py-15 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* First Column */}
          <div>
            <Link to="/">
              <img
                src={images.logo2}
                className="w-60 md:w-80 rounded-md"
                alt="Footer Logo"
              />
            </Link>
            <p className="pt-5 text-sm md:text-base">
              Contact Cohen & Klein Consulting Inc. and allow us to serve you
              better. From our training courses, we are here to help move you
              and your organization forward.
            </p>
            <div className="flex gap-4 pt-5 items-center">
              <Link to="https://www.youtube.com/@cohenklein8229" target="_blank">
                <FaYoutube  className="w-7 h-7 hover:text-hoverclr" />
              </Link>
              <Link to="https://www.linkedin.com/company/cohen-and-klein-consulting-inc-/" target="_blank">
              <FaLinkedin className="w-6 h-6 hover:text-hoverclr"/>
              </Link>
            </div>
          </div>
          {/* Second Column - Centered */}
          <div className="flex flex-col md:mx-auto text-centr">
            <h3 className="text-2xl font-medium font-serif">Useful Links</h3>
            <ul className="flex flex-col gap-3 pt-5">
              {Links.map((data) => (
                <li
                  key={data.id}
                  className="text-base hover:text-hoverclr duration-200"
                >
                  <Link to={data.link}>{data.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Third Column */}
          <div>
            <h3 className="text-2xl font-medium font-serif">Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
              {/* Florida Office */}
              <div>
                <div className="flex items-center gap-2 pb-2">
                  <icons.MdOutlineLocationOn className="w-6 h-6" />
                  <h4 className="text-lg font-medium">Florida Office:</h4>
                </div>
                <p className="text-base  font-light">
                  8362 Pines Boulevard, Pembroke Pines, FL 33024
                </p>
                <div className="flex flex-col gap-2 pt-2">
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-hoverclr  font-light"
                  >
                    <icons.MdOutlineAddIcCall className="w-5 h-5" />{" "}
                    954-731-6340
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-hoverclr  font-light"
                  >
                    <img
                      src={images.telephone2}
                      alt="Telephone"
                      className="w-5 h-5"
                    />{" "}
                    954-731-6606
                  </a>
                </div>
              </div>
              {/* Wall Street Office */}
              <div>
                <div className="flex items-center gap-2 pb-2">
                  <icons.MdOutlineLocationOn className="w-6 h-6" />
                  <h4 className="text-lg font-medium">Wall Street Office:</h4>
                </div>
                <p className="text-base font-light">
                  30 Wall Street, 8th Floor New York, NY 10005-2205
                </p>
                <div className="flex flex-col gap-2 pt-2">
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-hoverclr  font-light"
                  >
                    <icons.MdOutlineAddIcCall className="w-5 h-5 font-light" />{" "}
                    212-709-8026
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-hoverclr  font-light"
                  >
                    <img
                      src={images.telephone2}
                      alt="Telephone"
                      className="w-5 h-5"
                    />{" "}
                    212-943-2300
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="bg-footerdownclr roboto-serif-font text-white py-5 px-6 md:px-12 lg:px-36 flex flex-wrap md:flex-row justify-between items-center">
        <div className="text-center md:text-left sm:order-1 order-2 mt-2">
          <a href="#" alt="" className="">
            © All rights reserved cohenandklein.com
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-center md:text-left sm:order-2 order-1">
          <a href="#" className="flex items-center gap-2">
            <icons.MdOutlineEmail /> <span style={{ fontWeight: 'bold' }}>training@cohenandklein.com</span>
          </a>
          {/* <a href="#" className="flex items-center gap-2">
            <icons.MdOutlineEmail /> collect@gate.net
          </a> */}
          {/* <a href="#" className="flex items-center gap-2">
            <icons.MdOutlineEmail /> cohenandklein@cohenandklein.com
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Footer;