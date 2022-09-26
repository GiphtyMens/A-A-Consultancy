import React from 'react';
import devImage from '../assets/dev.png'
import Img2 from '../assets/img_2.png'
import { Link } from 'react-router-dom';

const WeAre = () => {
    return (
        <div className='bg-white min-h-[85vh] border-red-500 py-10 lg:px-24'>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center lg:gap-4'>
                <div className='p-2 text-left w-full'>
                    <h1 className='text-red-500 font-semibold'>Who We Are</h1>
                    <h1 className=' text-3xl font-semibold'>Excellent Audit Services</h1>
                    <h1 className='text-3xl mb-4 font-semibold'>Your Success</h1>
                    <p className='text-gray-500'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                    <div className='grid grid-cols-2 justify-between gap-2 py-4'>
                        <div className='flex justify-center lg:justify-between xl:justify-between'>
                            <img className='h-12 w-13' src={devImage} alt="Icon" />
                            <div className='text-left lg-ml-0 ml-4'>
                                <h1 className='font-semibold'>Financial Planning</h1>
                                <h1 className='font-semibold'>& Marketing Research</h1>
                            </div>
                        </div>
                        <div className='flex  justify-center lg:justify-between xl:justify-between'>
                            <img className='h-12 w-15' src={Img2} alt="Icon" />
                            <div className='text-left'>
                                <h1 className='font-semibold'>Business</h1>
                                <h1 className='font-semibold'>& Insurance Consult</h1>
                            </div>
                        </div>
                    </div>
                    <p className='text-gray-500 mb-5'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                    <Link to="/contact" className=''>
                        <button className='py-2 px-8 bg-red-500 hove:bg-red-600 font-medium text-white' type="button">Book A Consultation</button>
                    </Link>
                </div>
                <div className='border p-2'>
                    
                </div>
            </div>
        </div>
    );
}

export default WeAre;
