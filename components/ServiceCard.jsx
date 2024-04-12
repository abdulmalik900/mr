import React from 'react'
import Image from 'next/image'
const ServiceCard = () => {
  return (
   <>
       <section className='bg-gray-200 pt-5    '>
       <div className="text-center font-Kamerik text-4xl font-normal  ">
    <span className="text-black mr-2">Our</span>
    <span className="text-blue-600">Services</span>
</div>

  <div className=' lg:px-14 md:px-16 px-8 lg:ml-5  pt-4 justify-start items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
  {/* 1 */}

  <div className='flex w-full flex-col items-center md:w-72 lg:w-80 h-64 lg:h-64  md:h-64 rounded-3xl border-2 border-gray-300 py-4'>
  <Image
    src="/icons/services/trunk.svg"
    alt="menu"
    width={140}
    height={132}
    className=" "
  />
  <div className="text-center ">
    <h1 className="text-black font-kamerik  font-normal leading-54 tracking-wider">Truck Rentals</h1>
  </div>
</div>
{/* 2 */}
<div className='flex w-full flex-col items-center md:w-72 lg:w-80 h-64 lg:h-64  md:h-64 rounded-3xl border-2 border-gray-300 py-4'>
  <Image
    src="/icons/services/local.svg"
    alt="menu"
    width={145}
    height={166}
    className="pt-5 "
  />
  <div className="text-center mt-6">
    <h1 className="text-black font-kamerik  font-normal leading-54 tracking-wider">Local Moving</h1>
  </div>
</div>

{/* 3 */}
<div className='flex w-full flex-col items-center md:w-72 lg:w-80 h-64 lg:h-64  md:h-64 rounded-3xl border-2 border-gray-300 py-4'>
  <Image
    src="/icons/services/storage.svg"
    alt="menu"
    width={111}
    height={132}
    className="pt-2"
  />
  <div className="text-center mt-4">
    <h1 className="text-black font-kamerik  font-normal leading-54 tracking-wider">Storage Solutions</h1>
  </div>
</div>

{/* 4 */}
<div className='flex w-full flex-col items-center md:w-72 lg:w-80 h-64 lg:h-64  md:h-64 rounded-3xl border-2 border-gray-300 py-4'>
  <Image
    src="/icons/services/office.svg"
    alt="Office Moving Services"
    width={131}
    height={132}
    className=" py-3 "
  />
  <div className="text-center mt-4">
    <h1 className="text-black font-kamerik  font-normal leading-54 tracking-wider">Office Moving</h1>
  </div>
</div>

{/* 5 */}
<div className='flex w-full flex-col items-center md:w-72 lg:w-80 h-64 lg:h-64  md:h-64 rounded-3xl border-2 border-gray-300 py-4'>
  <Image
    src="/icons/services/packing.svg"
    alt="menu"
    width={131}
    height={132}
    className="pt-2 flex-shrink-0"
  />
  <div className="text-center mt-4">
    <h1 className="text-black font-kamerik  font-normal leading-54 tracking-wider">Packing</h1>
  </div>
</div>

{/* 6 */}
<div className='flex w-full flex-col items-center md:w-72 lg:w-80 h-64 lg:h-64  md:h-64 rounded-3xl border-2 border-gray-300 py-4'>
  <Image
    src="/icons/services/furniture.svg"
    alt="menu"
    width={131}
    height={132}
    className="pt-2 flex-shrink-0"
  />
  <div className="text-center mt-4">
    <h1 className="text-black font-kamerik  font-normal leading-54 tracking-wider">Furniture Moving</h1>
  </div>
</div>
  </div>
</section>
</>
  )
}

export default ServiceCard
