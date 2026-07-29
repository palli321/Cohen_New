import images from "../assets/Images/img";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Registration = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const method = queryParams.get("method"); // "email" or "fax"

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const headingText =
    method === "fax"
      ? "Fax your registration form to 954-731-6606"
      : "Fill Your Contact Information";

  // auto fill details in billing address
  const [shippingData, setShippingData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    email: "",
  });
  const [copyAddress, setCopyAddress] = useState(false);

  useEffect(() => {
    if (copyAddress) {
      const companyName =
        document.getElementById("participantname")?.value || "";
      const address = document.getElementById("addressline1")?.value || "";
      const city = document.getElementById("city")?.value || "";
      const state = document.getElementById("state")?.value || "";
      const country = document.getElementById("country")?.value || "";
      const zip = document.getElementById("zip")?.value || "";
      const email = document.getElementById("email")?.value || "";

      setShippingData({
        name: companyName,
        address,
        city,
        state,
        country,
        zip,
        email,
      });
    } else {
      setShippingData({
        name: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zip: "",
        email: "",
      });
    }
  }, [copyAddress]);

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = new FormData(e.target);
  for (const key in shippingData) {
    form.append(`billing_${key}`, shippingData[key]);
  }
  form.append("form_type", "registration"); // ✅ important!

  const res = await fetch("/send.php", {
    method: "POST",
    body: form,
  });

  const text = await res.text();

  if (text.trim() === "success") {
    await fetch("/save.php", {
      method: "POST",
      body: form,
    });

    alert("Message sent successfully!");
  } else {
    alert("Failed to send message.");
  }
};


  return (
    <div>
      <div className="overflow-hidden relative w-full">
        <div
          ref={sliderRef}
          className="flex w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          <img
            src={images.bannerevents1}
            alt="Event 1"
            className="w-full flex-shrink-0"
          />
          <img
            src={images.bannerevents2}
            alt="Event 2"
            className="w-full flex-shrink-0"
          />
          <img
            src={images.bannerevents3}
            alt="Event 3"
            className="w-full flex-shrink-0"
          />
        </div>
      </div>
      <div className="roboto lg:py-25 sm:py-15 py-8 pb-[100px] 2xl:px-25 max-w-[1650px] lg:px-16 sm:px-10 mx-auto px-6">
        {/* Title Section */}
        <div className="mx-auto flex justify-start ">
          <h3 className="roboto-serif-font text-[24px] md:text-[30px] lg:text-[34px] text-primary font-semibold max-w-[800px]">
            {headingText}
          </h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-[#F2F9FF] lg:p-15 sm:p-8 p-5 rounded-md shadow-md lg:mt-15 mt-8"
        >
          <input type="hidden" name="_next" value="/thank-you" />
          {/* KEEP ALL YOUR INPUT FIELDS HERE EXACTLY AS THEY ARE */}
          <div className="flex flex-col sm:gap-9 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Name of Company<span className="text-red-600">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="Name_of_Company"
                  id="companyname"
                  placeholder="Enter Company Name"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="participantname"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Name Participant<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  id="participantname"
                  name="Name_participant"
                  placeholder="Enter your name"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="text"
                className="text-[16px] font-medium  text-blacklight "
              >
                Job Title of Participant<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="jobtitle"
                required
                name="Job_title_of_Participant"
                placeholder="Enter Job Title"
                className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Work Phone<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  id="workphone"
                  name="Work_phone"
                  placeholder="Enter Work Phone"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Ext
                </label>
                <input
                  type="text"
                  id="ext"
                  name="Ext"
                  placeholder="Enter Ext"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Home Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="Home_phone"
                  placeholder="Enter Home Phone"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Cell Phone #1<span className="text-red-600">*</span>
                </label>
                <input
                  type="phone"
                  required
                  name="cell_number_1"
                  id="cellphone1"
                  placeholder="Enter Cell Phone #1"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Cell Phone #2
                </label>
                <input
                  type="phone"
                  name="cell_number_2"
                  id="cellphone2"
                  placeholder="Enter Cell Phone #2"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Fax
                </label>
                <input
                  type="text"
                  id="phone"
                  name="fax"
                  placeholder="Enter Fax"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Other Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="other_email"
                  placeholder="Enter Other Email"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="Work_email"
                  placeholder="Enter Work Email"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="number"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  C&K Course Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="C&K_Course_Number"
                  placeholder="Enter C&K Course Number"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Course Title
                </label>
                <input
                  type="text"
                  name="course_title"
                  id="coursetitle"
                  placeholder="Enter Course Title"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="calendar"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Course Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="course_date"
                  placeholder="Enter Course Date"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Course Location (Country)
                </label>
                <input
                  type="text"
                  name="course_location(country)"
                  id="location"
                  placeholder="Enter Course Location"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="number"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  How Many Participant
                </label>
                <input
                  type="number"
                  name="how_many_participant"
                  id="participatenumber"
                  placeholder="Enter NO. of Participant"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="number"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Unit Price
                </label>
                <input
                  type="number"
                  name="Unit_price"
                  id="unitprice"
                  placeholder="Enter Unit Price"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="number"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Total Price
                </label>
                <input
                  type="number"
                  name="total_price"
                  id="totalprice"
                  placeholder="Enter Total Price"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="text"
                className="text-[16px] font-medium  text-blacklight "
              >
                Contact Person
              </label>
              <input
                type="text"
                name="contact_person"
                id="contactperson"
                placeholder="Enter Contact Person Name"
                className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Address Line 1
                </label>
                <input
                  type="text"
                  name="address_line_1"
                  id="addressline1"
                  placeholder="Enter Address Line 1"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Address Line 2
                </label>
                <input
                  type="text"
                  name="address_line-2"
                  id="addressline2"
                  placeholder="Enter Address Line 2"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter city"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Enter State"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter Country"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="number"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Zip
                </label>
                <input
                  type="text"
                  id="zip"
                  name="Zip"
                  placeholder="Enter Zip"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="block font-semibold text-blacklight">
                Billing Address:
              </label>
              <div className="grid grid-cols-3 gap-4">
                <label className="text-base font-medium text-blacklight flex items-center whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="mr-3 w-[18px] h-[18px]"
                    checked={copyAddress}
                    onChange={(e) => setCopyAddress(e.target.checked)}
                  />
                  Check if same as shipping address
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={shippingData.name}
                  onChange={(e) =>
                    setShippingData({
                      ...shippingData,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter Billing Name"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="billingaddress"
                  value={shippingData.address}
                  onChange={(e) =>
                    setShippingData({
                      ...shippingData,
                      address: e.target.value,
                    })
                  }
                  placeholder="Enter Billing Address"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="billingcity"
                  value={shippingData.city}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, city: e.target.value })
                  }
                  placeholder="Enter Billing City"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="billingstate"
                  value={shippingData.state}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, state: e.target.value })
                  }
                  placeholder="Enter Billing State"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={shippingData.country}
                  onChange={(e) =>
                    setShippingData({
                      ...shippingData,
                      country: e.target.value,
                    })
                  }
                  id="billingcountry"
                  placeholder="Enter Billing Country"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="number"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Zip
                </label>
                <input
                  type="number"
                  name="zip"
                  id="billingzip"
                  value={shippingData.zip}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, zip: e.target.value })
                  }
                  placeholder="Enter Billing Zip"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[16px] font-medium  text-blacklight "
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="billingemail"
                value={shippingData.email}
                onChange={(e) =>
                  setShippingData({ ...shippingData, email: e.target.value })
                }
                placeholder="Enter Billing Email"
                className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Credit Card Number
                </label>
                <input
                  type="number"
                  name="credit_card_number"
                  id="creditcardnumber"
                  placeholder="Enter Credit Card Number"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  id="namecard"
                  name="name_of_card"
                  placeholder="Enter Name on Card"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="calendar"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Expiration Date
                </label>
                <input
                  type="date"
                  id="expiredate"
                  name="expire_date"
                  placeholder="Enter Expiration Date"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="code"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Security Code
                </label>
                <input
                  type="number"
                  name="security_code"
                  id="securitycode"
                  placeholder="Enter Security Code"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="flex flex-col sm:gap-8 gap-4">
              <label className="block font-semibold text-blacklight">
                What factors influenced you to buy this product?
              </label>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex flex-col gap-[15px]">
                  <label className="text-base font-medium text-blacklight flex items-center">
                    <input
                      type="checkbox"
                      name="Company-reputaition"
                      className="mr-3 w-[18px] h-[18px]"
                    />{" "}
                    Company Reputation
                  </label>
                  <label className="text-base font-medium text-blacklight flex items-center">
                    <input
                      type="checkbox"
                      name="features"
                      className="mr-3 w-[18px] h-[18px]"
                    />{" "}
                    Features
                  </label>
                  <label className="text-base font-medium text-blacklight flex items-center">
                    <input
                      type="checkbox"
                      name="recommendations"
                      className="mr-3 w-[18px] h-[18px]"
                    />{" "}
                    Recommendations
                  </label>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <label className="text-base font-medium text-blacklight flex items-center">
                    <input
                      type="checkbox"
                      name="benefits_to_employee"
                      className="mr-3 w-[18px] h-[18px]"
                    />{" "}
                    Benefits to Employee
                  </label>
                  <label className="text-base font-medium text-blacklight flex items-center">
                    <input
                      type="checkbox"
                      name="others(insert_below)"
                      className="mr-3 w-[18px] h-[18px]"
                    />{" "}
                    Other (Insert Below)
                  </label>
                  <label className="text-base font-medium text-blacklight flex items-center">
                    <input
                      type="checkbox"
                      name="benefits_to_corporations"
                      className="mr-3 w-[18px] h-[18px]"
                    />{" "}
                    Benefits to Corporations
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone"
                className="text-[16px] font-medium  text-blacklight "
              >
                Comment Your Questions
              </label>
              <textarea
                name="comment"
                id="comment"
                rows={6}
                className="bg-white px-3 py-2.5 text-base"
                placeholder="Enter here..."
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-secondary text-white py-2 px-4 rounded-md hover:bg-hoverclr transition duration-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
