import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-white">
        <h1 className="text-lg  md:text-2xl lg:text-3xl xl:text-3xl  font-bold">Effortless Moving and Packing</h1>
      </div>
{/*  */}
      <div className="absolute top-1/2 left-1/4 pt-16  md:pt-28 transform -translate-y-1/2 text-white">
        <h1 className="text-lg  md:text-2xl lg:text-3xl xl:text-3xl  mt-7 lg:mt-7 font-bold">with Transformative Solutions</h1>
        <div className='transform -rotate-0'>
          <button className="inline-flex mt-3 items-center px-3 sm:px-4 py-2 sm:py-3 justify-center gap-2 rounded-lg bg-[#0073CE] text-sm sm:text-base">
            Explore More 
            <Image src="/icons/arrow.svg" width={10} height={10} />
          </button>
        </div>
      </div>

      <Image
        src="/Hero.png"
        layout="responsive"
        width={1917}
        height={1100}
        alt="hero"
      />
    </div>
  );
};

export default Hero;
