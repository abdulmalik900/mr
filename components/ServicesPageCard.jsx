import React from "react";
import Image from "next/image";

const ServicesPageCard = () => {
  return (
    <div className="bg-gray-200  pb-3 pt-12">
      <div className="grid lg:grid-cols-3  mb-5 px-4  sm:px-10 md:grid-cols-2 gap-7 grid-cols-1">
        {/* Card 1 */}
        <div className="flex items-center justify-center bg-white mx-auto w-full h-[320px] border border-t-8 border-r-8 border-b-8 border-b-[#5294C7] rounded-lg border-r-[#5294C7] border-t-[#5294C7] py-4">
          <div className="text-center">
            <Image
              src="/servicesdata/trunk.svg"
              width={150}
              height={129}
              className="mx-auto "
              alt="One"
            />
            <h1 className="text-black font-kamerik font-bold text-2xl">
              Trunk Rentals
            </h1>
            <p className="text-gray-600 px-6 text-justify font-kamerik pb-12 sm:pb-10 font-normal text-base leading-relaxed">
              We offer a diverse fleet of well-maintained trucks, from compact
              pickups to spacious cargo vans, to perfectly match your hauling
              needs.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white mx-auto  w-full h-[320px] border border-t-8 border-r-8 border-b-8 border-b-[#5294C7] rounded-lg border-r-[#5294C7] border-t-[#5294C7]  py-4 ">
          <div className="">
            <Image
              src="/servicesdata/local.svg"
              width={150}
              height={179}
              className="mx-auto pb-6"
              alt="Local Moving Services in UAE"
            />
          </div>
          <h1 className="text-black mx-auto pb-3 text-center font-kamerik font-bold text-2xl">
            Local Moving
          </h1>
          <p className="text-gray-600 px-6   text-justify font-kamerik font-normal text-base leading-relaxed">
            We offer a diverse fleet of well-maintained trucks, from compact
            pickups to spacious cargo vans, to perfectly match your hauling
            needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex items-center justify-center bg-white mx-auto w-full h-[320px] border border-t-8 border-r-8 border-b-8 border-b-[#5294C7] rounded-lg border-r-[#5294C7] border-t-[#5294C7] py-4">
          <div className="text-center">
            <Image
              src="/servicesdata/packing.svg"
              width={150}
              height={70}
              className="mx-auto pt-7 h-36 "
              alt="Packing Services in UAE"
            />
            <h1 className="text-black font-kamerik font-bold pt-2 text-2xl">
              Packing
            </h1>
            <p className="text-gray-600 px-6 text-justify font-kamerik pb-10 font-normal text-base leading-relaxed">
              We offer a diverse fleet of well-maintained trucks, from compact
              pickups to spacious cargo vans, to perfectly match your hauling
              needs.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white w-full h-[320px] border border-t-8 border-r-8 border-b-8 border-b-[#5294C7] rounded-lg border-r-[#5294C7] border-t-[#5294C7]  py-4 ">
          <div className="">
            <Image
              src="/servicesdata/storage.svg"
              width={150}
              height={179}
              className="mx-auto h-28 "
              alt="Storage Service in UAE"
            />
          </div>
          <h1 className="text-black mx-auto pb-3 pt-3 text-center font-kamerik font-bold text-2xl">
            Storage Solutions
          </h1>
          <p className="text-gray-600 px-6 pb-10  text-justify font-kamerik font-normal text-base leading-relaxed">
            We offer a diverse fleet of well-maintained trucks, from compact
            pickups to spacious cargo vans, to perfectly match your hauling
            needs.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white w-full h-[320px] border border-t-8 border-r-8 border-b-8 border-b-[#5294C7] rounded-lg border-r-[#5294C7] border-t-[#5294C7]  py-4 ">
          <div className="">
            <Image
              src="/servicesdata/office.svg"
              width={150}
              height={179}
              className="mx-auto pb-6 h-32"
              alt="Office Moving Services in UAE"
            />
          </div>
          <h1 className="text-black mx-auto pb-2  text-center font-kamerik font-bold text-2xl">
            Office Moving
          </h1>
          <p className="text-gray-600 px-6 mb-6  text-justify font-kamerik font-normal text-base leading-relaxed">
            We offer a diverse fleet of well-maintained trucks, from compact
            pickups to spacious cargo vans, to perfectly match your hauling
            needs.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white w-full h-[320px] border border-t-8 border-r-8 border-b-8 border-b-[#5294C7] rounded-lg border-r-[#5294C7] border-t-[#5294C7]  py-4 ">
          <div className="">
            <Image
              src="/servicesdata/furniture.svg"
              width={150}
              height={179}
              className="mx-auto h-32 pb-6"
              alt="Furniture Moving Service in UAE"
            />
          </div>
          <h1 className="text-black mx-auto pb-3 text-center font-kamerik font-bold text-2xl">
            Furniture Moving
          </h1>
          <p className="text-gray-600 px-6   text-justify font-kamerik font-normal text-base leading-relaxed">
            We offer a diverse fleet of well-maintained trucks, from compact
            pickups to spacious cargo vans, to perfectly match your hauling
            needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageCard;
