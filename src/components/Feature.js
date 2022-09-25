import React from 'react';

const Feature = () => {
    return (
        <div className='min-h-[70vh] light-bg flex justify-center items-center w-full py-4'>
            <div className='lg:px-[10rem] px-4'>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center bg-red-500 p-4">
                        <div className='bg-white rounded-full h-16 w-16 items-center flex justify-center'>
                            <svg className="w-7 h-7 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="my-3 text-1xl font-bold text-white">Product Engineering</h3>
                        <div className="space-y-1 text-center text-gray-200 text-[10px] lg:text-sm leading-tight">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>

                    </div>
                    <div className="flex flex-col bg-slate-800 items-center p-4">
                        <div className='bg-white rounded-full h-16 w-16 items-center flex justify-center'>
                            <svg className="w-7 h-7 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="my-3 text-1xl font-bold text-white">Product Engineering</h3>
                        <div className="space-y-1 text-center text-gray-200 text-[10px] lg:text-sm leading-tight">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-white p-4">
                        <div className='bg-gray-100 rounded-full h-16 w-16 items-center flex justify-center'>
                            <svg className="w-7 h-7 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="my-3 text-1xl font-bold">Product Engineering</h3>
                        <div className="space-y-1 text-center text-[10px] lg:text-sm leading-tight">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                </div>
                <div className='mx-auto max-w-[40rem] mt-8'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        <a className='text-red-500 font-[500] hover:text-red-600 hover:underline' href="/contact"> Reach out.</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Feature;
