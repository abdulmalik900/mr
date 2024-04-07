import React from "react";
import Image from "next/image";
const Vehicle = () => {
  return (
    <>
      <div className="bg-gray-200 pt-3 pb-5">
        <div className="text-center font-Kamerik text-4xl font-normal  ">
          <span className="text-black mr-2">Top</span>
          <span className="text-blue-600">Vehicle</span>
        </div>
      </div>

    

      <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 px-12 bg-gray-200 ">
        {/* Card 1 */}
        <div className=" pt-2 border-2  rounded-lg border-[#5294C7]  w-[476] h-[484]">
          <Image
            src="/vehicles/freezer1.svg"
            width={458}
            height={256}
            alt="freezer1"
            className="  px-2 rounded-xl "
          />

          <div className="bg-[#5294C7] text-center items-start  rounded-lg   border-r-1   w-[500] py-10 h-[300] mt-3 flex-shrink-0">
            <h1 className="flex flex-col text-white font-bold pt-1  items-center w-443 h-78 flex-shrink-0">
              Mitsubishi Fuso Canter Box 3 Ton
            </h1>
            <p className="text-white font-sans text-base pt-3 leading-8">
              It is a medium-duty truck with a maximum gross weight of 6,000
              pounds (3 tons) 
            </p>
          </div>
        </div>

         {/* Card 2 */}
         <div className=" pt-2 border-2  rounded-lg border-[#5294C7]  w-[476] h-[484]">
          <Image
            src="/vehicles/freezer2.svg"
            width={458}
            height={256}
            alt="freezer1"
            className="  px-2 rounded-xl "
          />

          <div className="bg-[#5294C7] text-center items-start  rounded-lg   border-r-1   w-[500] py-10 h-[300] mt-3 flex-shrink-0">
            <h1 className="flex flex-col text-white font-bold pt-1  items-center w-443 h-78 flex-shrink-0">
              Mitsubishi Fuso Canter Box 3 Ton
            </h1>
            <p className="text-white font-sans text-base pt-3 leading-8">
              It is a medium-duty truck with a maximum gross weight of 6,000
              pounds (3 tons) 
            </p>
          </div>
        </div>
        
         {/* Card 3 */}
         <div className=" pt-2 border-2  rounded-lg border-[#5294C7]  w-[476] h-[484]">
          <Image
            src="/vehicles/freezer3.svg"
            width={458}
            height={256}
            alt="freezer1"
            className="  px-2 rounded-xl "
          />

          <div className="bg-[#5294C7] text-center items-start  rounded-lg   border-r-1   w-[500] py-10 h-[300] mt-3 flex-shrink-0">
            <h1 className="flex flex-col text-white font-bold pt-1  items-center w-443 h-78 flex-shrink-0">
              Mitsubishi Fuso Canter Box 3 Ton
            </h1>
            <p className="text-white font-sans text-base pt-3 leading-8">
              It is a medium-duty truck with a maximum gross weight of 6,000
              pounds (3 tons) 
            </p>
          </div>
        </div>

         {/* Card 4 */}
         <div className=" pt-2 border-2  rounded-lg border-[#5294C7]  w-[476] h-[484]">
          <Image
            src="/vehicles/freezer4.svg"
            width={458}
            height={256}
            alt="freezer1"
            className="  px-2 rounded-xl "
          />

          <div className="bg-[#5294C7] text-center items-start  rounded-lg   border-r-1   w-[500] py-10 h-[300] mt-3 flex-shrink-0">
            <h1 className="flex flex-col text-white font-bold pt-1  items-center w-443 h-78 flex-shrink-0">
              Mitsubishi Fuso Canter Box 3 Ton
            </h1>
            <p className="text-white font-sans text-base pt-3 leading-8">
              It is a medium-duty truck with a maximum gross weight of 6,000
              pounds (3 tons) 
            </p>
          </div>
        </div>

         {/* Card 5 */}
         <div className=" pt-2 border-2  rounded-lg border-[#5294C7]  w-[476] h-[484]">
          <Image
            src="/vehicles/freezer5.svg"
            width={458}
            height={256}
            alt="freezer1"
            className="  px-2 rounded-xl "
          />

          <div className="bg-[#5294C7] text-center items-start  rounded-lg   border-r-1   w-[500] py-10 h-[300] mt-3 flex-shrink-0">
            <h1 className="flex flex-col text-white font-bold pt-1  items-center w-443 h-78 flex-shrink-0">
              Mitsubishi Fuso Canter Box 3 Ton
            </h1>
            <p className="text-white font-sans text-base pt-3 leading-8">
              It is a medium-duty truck with a maximum gross weight of 6,000
              pounds (3 tons) 
            </p>
          </div>
        </div>

         {/* Card 6 */}
         <div className=" pt-2 border-2  rounded-lg border-[#5294C7]  w-[476] h-[484]">
          <Image
            src="/vehicles/freezer6.svg"
            width={458}
            height={256}
            alt="freezer1"
            className="  px-2 rounded-xl "
          />

          <div className="bg-[#5294C7] text-center items-start  rounded-lg   border-r-1   w-[500] py-10 h-[300] mt-3 flex-shrink-0">
            <h1 className="flex flex-col text-white font-bold pt-1  items-center w-443 h-78 flex-shrink-0">
              Mitsubishi Fuso Canter Box 3 Ton
            </h1>
            <p className="text-white font-sans text-base pt-3 leading-8">
              It is a medium-duty truck with a maximum gross weight of 6,000
              pounds (3 tons) 
            </p>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Vehicle;
