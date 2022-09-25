import React from 'react'

const OurServices = () => {
    return (
        <div className="bg-teal-50 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-12 lg:px-44">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block mt-8 px-3 py-px mb-4 text-base font-bold tracking-wider text-red-600">
                Our Services
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
        </div>
    );
}

export default OurServices