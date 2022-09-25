import React from 'react'
import header from "../assets/header1.jpg"

const Hero = () => {
   return (
     <div className="relative">
       <img
         src={header}
         className="absolute inset-0 object-cover w-full h-full"
         alt=""
       />
       <div className="relative bg-gray-900 bg-opacity-75">
         <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
           <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
             <div>
               <p className="inline-block px-3 mt-8 py-px mb-4 text-base font-bold tracking-wider text-red-600">
                 Innovative Business Solution
               </p>
             </div>
             <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
               <span className="relative inline-block">
                 <svg
                   viewBox="0 0 52 24"
                   fill="currentColor"
                   className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                 >
                   <rect
                     fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                     width="52"
                     height="24"
                   />
                 </svg>
                 <span className="relative">Value</span>
               </span>{" "}
               Your People Think Advantage
             </h2>
             {/* <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p> */}
           </div>
           <div className="flex items-center sm:justify-center">
             <button
               type="submit"
               className="inline-flex items-center mb-8 justify-center h-12 px-6 mr-6 font-bold tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-700 focus:shadow-outline focus:outline-none"
             >
               View All Services
             </button>
             <button
               type="submit"
               className="inline-flex items-center mb-8 justify-center h-12 px-6 mr-6 font-bold tracking-wide text-grey-800 transition duration-200 rounded shadow-md bg-white hover:bg-white focus:shadow-outline focus:outline-none"
             >
               How We Work
             </button>
           </div>
         </div>
       </div>
     </div>
   );
}

export default Hero