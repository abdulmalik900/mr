import React from 'react';
import Image from 'next/image';

const Experience = () => {
  return (
    <div className='bg-gray-200 py-8'>
      <div className='flex justify-center items-center'>
        <h1 className='text-blue-500 font-kamerik-105 text-xl px-3 md:text-2xl lg:text-3xl font-normal leading-75 text-center'>
          Experience A Rental & <span className='text-black font-kamerik-105 text-xl md:text-2xl lg:text-3xl font-normal leading-75'>Shifting Service Like Never Before</span>
        </h1>
      </div>

      <div className='grid gap-4 mx-10 lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
        <div className='pt-5'>
          <Image
            src='/assets/experience.svg'
            width={950}
            height={622}
            alt='Experience1'
          />
        </div>

        <div className='text-black pt-5 text-justify font-Kamerik mx-3 text-28 font-normal  leading-7'>
          <p>
            Experience a rental and shifting service like never before with M.R ShiftingMovers! Our team of professionals is dedicated to providing top-quality rental and shifting services that exceed your expectations. Whether you&lsquo;re moving houses, offices, or need a rental vehicle, we have you covered. With our wide range of rental options and exceptional customer service, we ensure a seamless and hassle-free experience. Contact us today to discover how M.R ShiftingMovers can fulfill all your rental and shifting needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
