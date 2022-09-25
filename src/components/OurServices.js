import React from 'react'
import Consult from "../assets/consulting.jpg"
import business from "../assets/business.jpg"
import marketing from "../assets/Marketing.jpg";
import Portfolio from "../assets/portfolio.jpg";
import Insurance from "../assets/insurance.jpg";
import Financial from "../assets/financial.jpg";

const OurServices = () => {
    return (
      <div className="light-bg">
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-12 lg:px-44">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block mt-8 px-3 py-px mb-4 text-base font-bold tracking-wider text-red-600">
                Our Services
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-600 sm:text-3xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <rect
                    fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">We</span>
              </span>{" "}
              Are Best For Outsourced Financed Services
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img src={Consult} className="object-cover w-full h-32" alt="" />
              <div className="p-5 text-start border-t-0">
                <p className="mb-1 text-sm font-bold text-red-500 tracking-wide">
                  Consulting
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-lg font-bold text-gray-600 leading-5 transition-colors duration-200 "
                >
                  Business Consulting
                </a>
                <p className=" text-xs text-gray-700">
                  We are provide best service for high level success your
                  business
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex text-xs items-center font-bold transition-colors duration-200 text-red-500 hover:text-red-600"
                >
                  Learn more...
                </a>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src={marketing}
                className="object-cover w-full h-32"
                alt=""
              />
              <div className="p-5 text-start border-t-0">
                <p className="mb-1 text-sm font-bold text-red-500 tracking-wide">
                  Marketing
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-lg text-gray-600 font-bold leading-5 transition-colors duration-200 "
                >
                  Marketing Research
                </a>
                <p className=" text-xs text-gray-700">
                  We are provide best service for high level success your
                  business
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex text-xs items-center font-bold transition-colors duration-200 text-red-500 hover:text-red-600"
                >
                  Learn more...
                </a>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src={Financial}
                className="object-cover w-full h-32"
                alt=""
              />
              <div className="p-5 text-start border-t-0">
                <p className="mb-1 text-sm font-bold text-red-500 tracking-wide">
                  Financial
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-lg text-gray-600 font-bold leading-5 transition-colors duration-200"
                >
                  Financial Planning
                </a>
                <p className=" text-xs text-gray-700">
                  We are provide best service for high level success your
                  business
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex text-xs items-center font-bold transition-colors duration-200 text-red-500 hover:text-red-600"
                >
                  Learn more...
                </a>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src={Insurance}
                className="object-cover w-full h-32"
                alt=""
              />
              <div className="p-5 text-start border-t-0">
                <p className="mb-1 text-sm font-bold text-red-500 tracking-wide">
                  Financial
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-lg text-gray-600 font-bold leading-5 transition-colors duration-200"
                >
                  Insurance Consulting
                </a>
                <p className=" text-xs text-gray-700">
                  We are provide best service for high level success your
                  business
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex text-xs items-center font-bold transition-colors duration-200 text-red-500 hover:text-red-600"
                >
                  Learn more...
                </a>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img src={business} className="object-cover w-full h-32" alt="" />
              <div className="p-5 text-start border-t-0">
                <p className="mb-1 text-sm font-bold text-red-500 tracking-wide">
                  Business
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-gray-600 text-lg font-bold leading-5 transition-colors duration-200"
                >
                  Retirement Planning
                </a>
                <p className=" text-xs text-gray-700">
                  We are provide best service for high level success your
                  business
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex text-xs items-center font-bold transition-colors duration-200 text-red-500 hover:text-red-600"
                >
                  Learn more...
                </a>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src={Portfolio}
                className="object-cover w-full h-32"
                alt=""
              />
              <div className="p-5 text-start border-t-0">
                <p className="mb-1 text-sm font-bold text-red-500 tracking-wide">
                  Analyzing
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-lg text-gray-600 font-bold leading-5 transition-colors duration-200"
                >
                  Portfolio Management
                </a>
                <p className=" text-xs text-gray-700">
                  We are provide best service for high level success your
                  business
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex text-xs items-center font-bold transition-colors duration-200 text-red-500 hover:text-red-600"
                >
                  Learn more...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default OurServices