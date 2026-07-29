import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import images from "../../assets/Images/img.js";
import icons from "../../assets/icons/icon";
import { MdMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { Links } from "../../data.js"; // Ensure your navigation links contain valid paths

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current page path

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">

      <div className="roboto md:block hidden bg-footerdownclr text-white px-4 sm:px-8 md:px-10 2xl:px-15 py-1">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center mx-auto text-center md:text-left">
          <div className="mb-2 md:mb-0">
            <div className="2xl:text-[15px] sm:text-[13px] text-[11px] flex flex-col md:flex-row gap-2 md:gap-4 text-center md:text-left roboto-serif-font">
              {/* <Link to="#" className="flex items-center gap-2 ">
                <icons.MdOutlineEmail /> cohenandklein@cohenandklein.com
              </Link> */}
              <Link to="#" className="flex items-center gap-2">
                <icons.MdOutlineEmail /> <span style={{ fontWeight: 'bold' }}>training@cohenandklein.com</span>
              </Link>
              {/* <Link to="#" className="flex items-center gap-2">
                <icons.MdOutlineEmail /> collect@gate.net
              </Link> */}
            </div>
          </div>
          <div className="text-center">
            <Link className="2xl:text-[15px] sm:text-[13px] text-[11px] text-center roboto-serif-font midcontent hidden lg:flex">
              Strategic Human Capital Development Training Courses
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row roboto-serif-font font-medium justify-center md:justify-between gap-4 sm:gap-6 md:gap-5">
            <Link to="#" className="flex gap-2.5 items-center">
              <img
                src={icons.call}
                className="h-4 w-4 sm:h-[15px] sm:w-[15px]"
                alt="Call Icon"
              />
              <p className="2xl:text-[15px] sm:text-[13px] text-[11px] whitespace-nowrap">
                954-731-6340
              </p>
            </Link>
            <Link to="#" className="flex gap-2.5 items-center">
              <img
                src={icons.telephone}
                className="h-4 w-4 sm:h-[15px] sm:w-[15px]"
                alt="Telephone Icon"
              />
              <p className="2xl:text-[15px] sm:text-[13px] text-[11px] whitespace-nowrap">
                954-731-6606
              </p>
            </Link>
            <Link to="#" className="flex gap-2.5 items-center">
              <img
                src={icons.call}
                className="h-4 w-4 sm:h-[15px] sm:w-[15px]"
                alt="Call Icon"
              />
              <p className="2xl:text-[15px] sm:text-[13px] text-[11px] whitespace-nowrap">
                212-709-8026
              </p>
            </Link>
            <Link to="#" className="flex gap-2.5 items-center">
              <img
                src={icons.telephone}
                className="h-4 w-4 sm:h-[15px] sm:w-[15px]"
                alt="Telephone Icon"
              />
              <p className="2xl:text-[15px] sm:text-[13px] text-[11px] whitespace-nowrap">
                212-943-2300
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-primary w-full roboto">
        <div className="px-4 sm:px-8 padding-2xl py-2 flex items-center">
          <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={images.logo2}
              alt="Logo"
              className="logowidth w-[200px] md:w-[225px] lg:w-[240px]"
            />
          </Link>
    </div>
          <div className="hidden md:flex flex-1 items-center justify-center px-4">
            <ul className="flex flex-nowrap items-center whitespace-nowrap md:gap-2 navgap lg:gap-3 2xl:gap-8">
              {Links.map((data) => (
                <li
                  key={data.id}
                  className={`text-xs md:text-sm lg:text-base 2xl:text-lg font-medium ${
                    location.pathname === data.link
                      ? "text-hoverclr"
                      : "text-white"
                  } hover:text-hoverclr duration-200`}
                >
                  {data.pdf ? (
                    <a
                      href={data.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm lg:text-base 2xl:text-lg font-medium hover:text-hoverclr duration-200"
                    >
                      {data.name}
                    </a>
                  ) : (
                    <Link to={data.link}>{data.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <button
    className="menu-toggle ml-auto block md:hidden text-white text-2xl"
      onClick={() => setMenuOpen(true)}
    >
      <MdMenu />
    </button>
          {menuOpen && (
            <div className="fixed top-20 right-0 w-[250px] h-[450px] bg-gray-900 text-white shadow-lg z-50 px-6 pt-18 transition-transform transform translate-x-0">
              <button
                className="absolute top-4 right-4 text-2xl text-white"
                onClick={() => setMenuOpen(false)}
              >
                <FaXmark />
              </button>
              <ul className="flex flex-col items-start gap-6 overflow-hidden">
                {Links.map((data) => (
                  <li
                    key={data.id}
                    className={`text-lg font-medium ${
                      location.pathname === data.link
                        ? "text-yellow-400"
                        : "text-white"
                    } hover:text-hoverclr duration-200`}
                  >
                    <Link to={data.link} onClick={() => setMenuOpen(false)}>
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Link to="/newsinner">
                  <img
                    src={images.logo2}
                    alt="Second Logo"
                    className="max-w-[180px] rounded-[5px]"
                  />
                </Link>
              </div>
            </div>
          )}
          <div className="flex-shrink-0 hidden md:block">
            <Link to="/testimonialread">
              <img
                src={images.logo2}
                alt="Second Logo"
                className="w-[200px] md:w-[225px] lg:w-[250px] logowidth rounded-[5px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
