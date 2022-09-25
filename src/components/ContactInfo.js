import React from 'react';

const ContactInfo = () => {
    return (
        <div>
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-12 lg:px-44">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block mt-8 px-3 py-px mb-4 text-base font-bold tracking-wider text-red-600">
                            We Are Here!
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
                            <span className="relative">Find</span>
                        </span>{" "}
                        Us On Google Map
                    </h2>
                </div>
                
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col items-center p-4">
                        <div className='bg-red-500 rounded-full h-11 w-11 items-center flex justify-center'>
                            <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                        </div>

                        <h3 className="my-3 text-1xl font-bold">Our Address</h3>
                        <div className="space-y-1 text-center text-sm leading-tight">
                            <p>Aboom Walls Street, 28th Ave</p>
                            <p>Cape Coast, Ghana</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className='bg-red-500 rounded-full h-11 w-11 items-center flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>

                        <h3 className="my-3 text-1xl font-bold">Email Address</h3>
                        <div className="space-y-1 text-center text-sm leading-tight">
                            <p>inforconslut@gmail.com</p>
                            <p>contact@consult.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className='bg-red-500 rounded-full h-11 w-11 items-center flex justify-center'>
                            <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>

                        <h3 className="my-3 text-1xl font-bold">Phone Numbers</h3>
                        <div className="space-y-1 text-center text-sm leading-tight">
                            <p>+233 3305 7836 82</p>
                            <p>+233 3305 7836 82</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className='bg-red-500 rounded-full h-11 w-11 items-center flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </div>

                        <h3 className="my-3 text-1xl font-bold">Office Hours</h3>
                        <div className="space-y-1 text-center text-sm leading-tight">
                            <p>Mon - Fri : 9am - 5pm</p>
                            <p>Saturday: <span className='text-red-600 font-medium'>Closed</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
