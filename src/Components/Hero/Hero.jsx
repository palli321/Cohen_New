import React, { useState } from "react";
import images from "../../assets/Images/img.js";
import icons from "../../assets/icons/icon.js";
import { IoSearch } from "react-icons/io5";
import {Pdfdata} from "../../PdfData.js";
import yellowpatti from "../../assets/Images/yellow-patti.png";
import { Link } from "react-router-dom";
import CoursePdf from "../../assets/CourcesPDF/CoursePdf.js";
const Hero = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Handle category selection (Show course title in search box)
  const handleCategorySelect = (title) => {
    setSearchTerm(title);
    setShowCategories(false); // Close the panel
    setShowSearchResults(false);
  };

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    filterCourses(query);
  };

  const filterCourses = (query) => {
    const results = Pdfdata.filter((course) =>
      course.title.toLowerCase().includes(query)
    );
    setFilteredCourses(results);
    setShowSearchResults(query.length > 0);
  };

  // Handle search button click → Open PDF
  const handleSearchRedirect = () => {
    const selectedCourse = Pdfdata.find(
      (course) => course.title === searchTerm
    );
    if (selectedCourse && selectedCourse.pdf) {
      window.open(selectedCourse.pdf, "_blank"); // Open PDF in new tab
    } else {
      alert("No matching course found or PDF is missing.");
    }
  };

  return (
    <div>
      <div className="roboto flex padding-2xl lg:px-15 px-4 2xl:pt-10  pt-12 sm:pb-22.5 pb-8 gap-27.5 justify-center items-center relative">
        <div className="flex flex-col xl:gap-[50px] gap-8 justify-center items-center">
          <div className="flex justify-center items-center sm:py-8 sm:order-1 order-2">
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-9 mx-auto">
              <div className="rounded-[12px] sm:rounded-[20px] 2xl:px-8 2xl:py-8 px-3 py-3 bg-gradient-cardOne flex items-center justify-center">
                <Link
                  to="/testimonialread"
                  className={` flex flex-col text-white sm:gap-3 gap-0 items-center justify-center `}
                >
                  <h2 className="2xl:text-5xl leading-[24px] sm:text-4xl text-2xl font-bold font-serif">
                    1500+</h2>
                  <span className="2xl:text-[22px] leading-[26px] sm:text-base text-xs roboto">
                    Positive Testimonials
                  </span>
                </Link>
              </div>
              <div className="rounded-[12px] sm:rounded-[20px] 2xl:px-8 2xl:py-8 px-3 py-3 bg-gradient-cardTwo flex items-center justify-center">
                <Link
                  to="/categories"
                  className={` flex flex-col text-white sm:gap-3 gap-0 text-center items-center justify-center `}
                >
                  <h2 className="2xl:text-5xl sm:text-4xl leading-[24px] text-2xl  font-bold roboto">
                    58
                  </h2>
                  <span className="2xl:text-[22px] leading-[26px] sm:text-base text-xs roboto">
                    Categories of Customized Training Courses
                  </span>
                </Link>
              </div>
              <div className="rounded-[12px] sm:rounded-[20px] 2xl:px-8 2xl:py-8 px-3 py-3 bg-gradient-cardThree flex items-center justify-center">
                <Link
                  to="/categories"
                  className={` flex flex-col text-white text-center sm:gap-3 gap-0 items-center justify-center `}
                >
                  <h2 className=" 2xl:text-5xl leading-[24px] sm:text-4xl text-2xl  font-bold roboto">
                    1000+
                  </h2>
                  <span className="2xl:text-[22px] leading-[26px] sm:text-base text-xs roboto">
                    Customized Training Courses
                  </span>
                </Link>
              </div>
              <div className="rounded-[12px] sm:rounded-[20px] 2xl:px-8 2xl:pb-3 pt-4 pb-3 sm:px-3 py-3 bg-gradient-cardFour flex items-center justify-center">
                <Link
                  onClick={() => window.open(CoursePdf.debtcollectionpdf, "_blank")}
                  className="flex flex-col text-white sm:gap-4 gap-0 items-center text-center"
                >
                  <h2 className="2xl:text-5xl leading-[24px] sm:text-4xl text-2xl font-bold roboto">
                    100+
                  </h2>
                  <span className="2xl:text-[22px] leading-[26px] sm:text-base text-xs roboto">
                   Customized Debt Collection and Revenue Management Courses
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-col flex gap-12 sm:order-2 order-1">
            <div className=" flex flex-col md:gap-7 gap-4 items-center 2xl:mt-4.5">
              <h2 className="text-primary 2xl:text-[25px] lg:text-4xl 2xl:leading-[40px] sm:text-3xl text-base text-center roboto-serif-font font-semibold break-words">
                ⁠Strategic Corporate Training Programs As Well As Consulting Services For Private And Public Sector Institutions.
              </h2>
              <h2 className="text-primary 2xl:text-[30px] lg:text-4xl 2xl:leading-[53px] sm:text-3xl text-base text-center roboto-serif-font font-semibold break-words">
                Discover from our 1000+ Premium Courses!
              </h2>
              <p className="text-secondary 2xl:text-2xl lg:text-xl sm:text-base text-xs  font-medium roboto-serif-font xl:max-w-[800px] lg:max-w-[700px] sm:max-w-[600px] max-w-[400px] text-center relative lg:leading-10 sm:leading-8 leading-6">
                <span className="font-bold text-white pr-3 ">
                  Explore a vast collection
                </span>
                <img
                  src={yellowpatti}
                  alt=""
                  className="absolute top-0.5 sm:top-1 lg:top-1 sm:left-6  left-2 lg:-left-1 xl:-left-3 -z-10 max-w-[170px] sm:max-w-[220px] lg:max-w-[290px] 2xl:max-w-[330px] "
                />
                of customized industry training courses designed to elevate your
                skills and knowledge.
              </p>
            </div>

            {/* Search Input Section */}
            <div className="flex justify-between w-full max-w-[1154px] mx-auto -mt-6 sm:gap-12 gap-2 sm:py-[15px] py-1 sm:pl-5 pl-2 sm:pr-[15px] shadow-[0_4px_40px_rgba(1,61,123,0.10)] border border-[rgba(0,43,88,0.1)] bg-white rounded-lg relative">
              <div className="flex flex-row sm:gap-4 gap-2 items-center w-[90%]">
                {/* Categories Button */}
                <div className="relative">
                  <button
                    className="flex xl:gap-3 gap-2 items-center border-r-[2px] border-gray-300 xl:p-[15px] py-[15px] pr-3 "
                    onClick={() => setShowCategories(!showCategories)}
                  >
                    <img
                      src={icons.category}
                      alt="Category"
                      className="xl:w-6 xl:h-6 sm:w-4 sm:h-4 w-3 h-3"
                    />
                    <span className="text-primary xl:text-2xl sm:text-xl text-xs pr-2 sm:pr-0">
                      Categories
                    </span>
                  </button>

                  {/* Categories Dropdown Panel */}
                  {showCategories && (
                    <div  className="absolute sm:-left-5.5 z-40  mt-2 bg-white shadow-lg p-3 xl:w-[715px] max-h-80 sm:w-[600px] w-[350px] overflow-auto border border-gray-300 rounded-md ">
                      {Pdfdata.map((course, index) => (
                        <div
                          key={index}
                          className="flex justify-between py-2 cursor-pointer hover:bg-gray-100 sm:px-3 sm:text-base text-xs"
                          onClick={() => handleCategorySelect(course.title)}
                        >
                          <span className="text-gray-700">{course.title}</span>
                          <span className="text-gray-500">{course.desc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Box */}
                <div className="flex sm:gap-3 gap-1 items-center relative flex-1">
                  <IoSearch className="text-primary xl:w-6 xl:h-6 sm:w-5 sm:h-5" />
                  <input
                    type="text"
                    placeholder="Search over 1000+ Courses..."
                    className="placeholder-[#021326] 2xl:text-xl sm:text-base text-xs focus:outline-none flex-1 2xl:w-[90%]"
                    value={searchTerm}
                    onChange={handleSearch}
                  />

                  {/* Live Search Results Dropdown */}
                  {showSearchResults && searchTerm && (
                    <div className="absolute top-[40px] left-0 bg-white shadow-lg p-3 xl:w-[700px] sm:w-[500px] sm:max-h-[200px] w-[280px] max-h-[300px] z-40 overflow-y-auto border border-gray-300 rounded-md ">
                      {filteredCourses.length > 0 ? ( 
                        filteredCourses.map((course) => (
                          <div
                            key={course.id}
                            className="py-2 text-gray-700 cursor-pointer hover:bg-gray-100 sm:px-3 sm:text-base text-xs"
                            onClick={() => handleCategorySelect(course.title)}
                          >
                            {course.title} ({course.desc})
                          </div>
                        ))
                      ) : (
                        <div className="text-gray-500">No results found</div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Search Button */}
              <button
                className="cursor-pointer flex whitespace-nowrap items-center font-medium 2xl:px-6.5 px-3 2xl:py-5 bg-secondary text-white rounded-[7px] 2xl:text-xl sm:text-xl text-sm mr-1"
                onClick={handleSearchRedirect}
              >
                Search now
              </button>
            </div>
          </div>
        </div>
        {/* Default Multiple Circle Rings */}
        <img
          src={images.circles}
          alt=""
          className="md:block hidden max-w-[294px] absolute -bottom-30 left-0 -z-10"
        />
        {/* Default Multiple Circle gray right */}
        <img
          src={images.graycircle}
          alt=""
          className="md:block hidden absolute -top-10 right-0 -z-20"
        />
      </div>
    </div>
  );
};

export default Hero;
