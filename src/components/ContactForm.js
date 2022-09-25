import React from 'react';

const ContactForm = () => {
    return (
        <div className='light-bg min-h-[70vh] lg:py-4 py-2 px-2 lg:px-4 lg:pb-10'>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block mt-8 px-3 py-px mb-4 text-base font-bold tracking-wider text-red-600">
                        Have Any Question?
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
                        <span className="relative">Feel</span>
                    </span>{" "}
                    Free To Contact With Us.
                </h2>
            </div>
            <form className='flex justify-center'>
                <div className='lg:w-[56rem] xl:w-[50rem] w-full lg:px-0 px-4'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 py-3'>
                        <input className='block border border-gray-200 bg-white outline-none text-sm h-10 px-3' type="text" name="name" placeholder='Your Name' />
                        <input className='block border border-gray-200 bg-white outline-none text-sm h-10 px-3' type="email" name="email" placeholder='Your Email' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 py-3'>
                        <input className='block border text-gray-700 border-gray-200 bg-white outline-none text-sm h-10 px-3' type="number" name="name" placeholder='Phone Number' />
                        <select name='service' className="block text-gray-700 text-sm py-2 px-3 border border-gray-200 bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                            <option value="">
                                Choose A Service
                            </option>
                            <option value="hamster">
                                Hamster
                            </option>
                            <option value="parrot">
                                Parrot
                            </option>
                            <option value="spider">
                                Spider
                            </option>
                            <option value="goldfish">
                                Goldfish
                            </option>
                        </select>
                    </div>

                    <div className='flex justify-center py-3'>
                        <textarea name='message' className='h-[30vh] w-full text-sm block border border-gray-200 bg-white outline-none p-4' placeholder='Enter Your Message'></textarea>
                    </div>
                    
                    <div className='flex justify-center py-3'>
                        <button type="submit" className=' py-3 px-10 font-medium bg-red-500 hover:bg-red-600 text-white'>Submit Now</button>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default ContactForm;
