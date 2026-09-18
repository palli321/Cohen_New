import React from "react";

const plans = [
  {
    name: "Silver",
    price: "Contact for Pricing",
    duration: "",
    employees: "Supports 1+5 Employees",
    days: "Access to 5 Days of Training",
    accent: "#6B7280",
    badge: null,
    dark: false,
    intro:
      "Managers, Supervisors, Dept. Heads, HR Professionals, or Team Member(s), would be responsible to coordinate, register and pay for the participant(s) engagement.",
    features: [
      "Access to 5 Days of Training",
      "Access to 16 Comprehensive Videos",
      "Self-registration",
      "Payment Method: (Stripe or PayPal)",
      "Enrollment tracking",
      "Focus mode for learners",
      "Brainstorming interactions",
      "Certificate builder and achievements",
      "Automated learner notification",
      "Ratings, reviews and feedback",
    ],
  },
  {
    name: "Gold",
    price: "Contact for Pricing",
    duration: "",
    employees: "Supports 1+10 Employees",
    days: "Access to 10 Days of Training",
    accent: "#f8c67b",
    badge: "MOST POPULAR",
    dark: false,
    intro:
      "Managers, Supervisors, Dept. Heads, HR Professionals, or Team Member(s), would be responsible to coordinate, register and pay for the participant(s) engagement.",
    features: [
      "Access to 10 Days of Training",
      "Access to 16 Comprehensive Videos",
      "Self-registration",
      "Payment Methods (Stripe, PayPal, etc.)",
      "Enrollment tracking",
      "Focus mode for learners",
      "Brainstorming interactions",
      "Certificate builder and achievements",
      "Automated learner notification",
      "Ratings, reviews and feedback",
    ],
  },
  {
    name: "Platinum",
    price: "Contact for Pricing",
    duration: "",
    employees: "Supports 1+20 or more Employees",
    days: "Access to 20 Days of Training",
    accent: "#f8c67b",
    badge: null,
    dark: true,
    intro:
      "Managers, Supervisors, Dept. Heads, HR Professionals, or Team Member(s), would be responsible to coordinate, register and pay for the participant(s) engagement.",
    features: [
      "Access to 20 Days of Training",
      "Access to 16 Comprehensive Videos",
      "Self-registration",
      "Payment Methods (Stripe, PayPal, etc.)",
      "Enrollment tracking",
      "Focus mode for learners",
      "Brainstorming interactions",
      "Certificate builder and achievements",
      "Automated learner notification",
      "Ratings, reviews and feedback",
    ],
  },
];

const PremiumPlans = () => {
  return (
    <div className="py-[60px] px-4 lg:px-15 roboto">
      <h2 className="text-primary 2xl:text-4xl lg:text-3xl sm:text-2xl text-xl text-center roboto-serif-font font-semibold mb-3">
        Choose Your Online Debt Collection and Revenue Management Video Training Subscription Plan
      </h2>

      <br></br>
      <p className="text-primary text-center 2xl:text-4xl lg:text-3xl sm:text-2xl text-xl text-blue-600 roboto-serif-font font-semibold mx-auto mb-12">
        Introductory Subscription Plans
      </p>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-[1200px] mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col flex-1 rounded-[16px] p-8 transition-transform duration-300 hover:-translate-y-2 ${
              plan.dark
                ? "bg-primary text-white shadow-[0_8px_50px_rgba(1,61,123,0.35)]"
                : plan.badge
                ? "z-10 bg-white shadow-[0_10px_60px_rgba(248,198,123,0.45)] border-[3px] border-[#f8c67b] lg:scale-110"
                : "z-[5] bg-white shadow-[0_8px_50px_rgba(107,114,128,0.25)] border-[3px] border-[#9CA3AF] lg:scale-105"
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#f8c67b] text-white text-xs font-semibold roboto-serif-font tracking-wide whitespace-nowrap shadow-md">
                {plan.badge}
              </span>
            )}

            {!plan.dark && !plan.badge && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#6B7280] text-white text-xs font-semibold roboto-serif-font tracking-wide whitespace-nowrap shadow-md">
                GREAT VALUE
              </span>
            )}

            <h3
              className="text-center text-2xl font-semibold roboto-serif-font mb-1"
              style={{ color: plan.dark ? "#f8c67b" : plan.accent }}
            >
              {plan.name}
            </h3>

            <p
              className={`text-center text-sm font-medium mb-4 ${
                plan.dark ? "text-gray-200" : "text-gray-500"
              }`}
            >
              {plan.employees}
            </p>

            <div className="text-center mb-4">
              <span
                className={`text-2xl font-bold roboto-serif-font ${
                  plan.dark ? "text-white" : "text-primary"
                }`}
              >
                {plan.price}
              </span>
              {plan.duration && (
                <span
                  className={`text-sm ml-1 ${
                    plan.dark ? "text-gray-300" : "text-gray-400"
                  }`}
                >
                  {plan.duration}
                </span>
              )}
            </div>

            <p
              className={`text-xs text-center mb-6 leading-relaxed ${
                plan.dark ? "text-gray-200" : "text-gray-500"
              }`}
            >
              {plan.intro}
            </p>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2 text-sm ${
                    plan.dark ? "text-gray-100" : "text-[#021326]"
                  }`}
                >
                  <span
                    className="mt-[3px] flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center text-white text-[11px]"
                    style={{ backgroundColor: plan.dark ? "#f8c67b" : plan.accent }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-[12px] rounded-[8px] font-semibold roboto-serif-font transition-colors cursor-pointer ${
                plan.dark || plan.badge
                  ? "bg-[#f8c67b] text-white hover:bg-[#e5ac52]"
                  : !plan.dark && !plan.badge
                  ? "bg-[#6B7280] text-white hover:bg-[#4B5563]"
                  : "bg-primary text-white hover:opacity-90"
              }`}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 max-w-[800px] mx-auto mt-10 leading-relaxed">
        This is a self-managed system where an assigned member (see roles above) will enroll
        the participant(s) and make the required payment. At the end of the training program
        each enrollee must print his/her certificate of completion.
        <br />
        Questions or concerns: please contact{" "}
        <a
          href="mailto:training@cohenandklein.com"
          className="text-blue-600 font-medium underline"
        >
          training@cohenandklein.com
        </a>
      </p>
    </div>
  );
};

export default PremiumPlans;