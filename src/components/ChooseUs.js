import React from 'react'

const ChooseUs = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-12 lg:px-44">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block mt-8 px-3 py-px mb-4 text-base font-bold tracking-wider text-red-600">
            Why Choose Us
          </p>
        </div>
        <h2 className="max-w-lg mb-6 text-2xl font-bold leading-none tracking-tight text-gray-600 sm:text-3xl md:mx-auto">
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
            <span className="relative">Get</span>
          </span>{" "}
          Most Advantage Solution For Your Business
        </h2>
      </div>
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-start">
          <div className="max-w-xl mb-6">
            <p className="text-sm tracking-tight text-start mb-4 text-gray-800 md:text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <p className="text-sm tracking-tight text-start text-gray-800 md:text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          {/* <p className="mb-4 text-sm font-bold tracking-widest uppercase">
            Features
          </p> */}
          <div className="grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-2 sm:space-y-0">
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div className="lg:-ml-32 sm:-ml-16 w-80">
              <h6 className="mb-2 font-bold text-left leading-5">
                Our Resources
              </h6>
              <p className="text-sm mb-4 text-start text-gray-900">
                A slice of heaven. O for awesome, this chocka full cuzzie is as
                rip-off as a cracker.
              </p>
              <h6 className="mb-2 text-left font-bold leading-5">
                Our Philosophy
              </h6>
              <p className="text-sm text-start text-gray-900">
                Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly got in a gaum
                Powrtland stove up dooryahd
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:flex-row lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              {/* <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                The quick, brown fox
              </h5> */}
              <div className="relative mr-4">
                <p className="text-xs sm:text-xs font-bold text-start text-gray-700 md:text-xs">
                  Get intringued about our service pricing?
                </p>
              </div>
            </div>
            <div className="flex justify-start lg:justify-end">
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center sm:text-xs text-xs font-bold transition-colors duration-200 text-red-500 hover:text-red-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs