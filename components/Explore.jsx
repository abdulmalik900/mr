import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from 'next/image'
const Explore = () => {
  return (
      <>
       {/* Col 1 */}
      <div className='bg-gray-200 pt-6 pb-3'>
    
      <div className='grid  lg:grid-cols-2 grid-cols-1 '>
        <div className='flex items-center flex-col px-7 lg:pl-9 '>
           <Image
    src="/assets/explore.png"
    alt="menu"
    width={623}
    height={300}
    className="md:h-[360px] lg:h-[400px] flex-shrink-0"
  />     
 </div>
           
           
{/* Col 2 */}
 <div className='flex flex-col leading-8 lg:leading-10 lg:pt-20  lg:items-start items-center pl-7 lg:pl-14  '>
    <div className="text-left  font-extralight  lg:text-4xl text-[26px]   ">
    <span className="text-black pb-1 flex ">Explore Our Service</span>
    <span className="text-blue-600  items-start ">Moving And Packing </span>
     </div>
  
     <p className='text-black text-sm  items-start text-wrap justify-center font-kamerik-105 text-25 font-extralight pt-4 pb-4 leading-6'>
            Our team of professionals is dedicated to providing top-quality rental and shifting services that exceed your expectations.
            </p>
            
          
            <div>

            <button className=" inline-flex text-white  items-center lg:px-2 px-2 lg:py-1 py-2 xl:py-1  rounded-lg bg-[#0073CE] text-[14px] md:text-[13px] lg:text-[15px]">
          View Our Services
          <span className="loading loading-ring loading-xs"></span>
        </button>
            </div>
            </div>
            </div>
      </div>


    
      </>
    
  )
}

export default Explore
