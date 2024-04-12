import React from "react";
import Image from "next/image";
const Testimonial = () => {
  return (
    <div>
      <div className="bg-white pb-8 pt-8">
        <div className="flex  flex-col pt-3 text-center font-kamerik font-bold text-3xl text-black capitalize items-center w-721 h-104">
          <div className="text-center font-Kamerik sm:text-4xl font-normal  ">
            <span className="text-black mr-2 ">Customer</span>
            <span className="text-blue-600">Testimonial</span>
          </div>
        </div>

        <div className="flex mb-4 flex-col text-center font-sans text-gray-400 text-[10px] md:text-[14px] lg:text-[16px] font-normal items-center pt-2 w-476 h-51 ">
          <p>Read through the valuable feedback shared by our customers.</p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 px-4 sm:px-16 gap-4 md:grid-cols-3 ">
          {/* Card 1 */}
          <div className="pt-4 rounded-lg bg-gray-200">
            <div className="flex pl-3 pt-4 text-blue-600 font-kamerik text-base font-normal">
              <Image
                src="/icons/testimonial/user.svg"
                width={55}
                height={33}
                alt="freezer1"
                className="rounded-xl"
              />
              <span className="pt-3 pl-2">Kevin</span>
            </div>

            <div className="pt-4 px-6 flex ">
              <p className="text-black font-kamerik text-base font-normal leading-7 ">
                This is the first time I have tried their service and so far the
                result was beyond expectation. The team reached on time and
                everything was packed properly. They have all the packing
                materials including kitchen boxes, cartons. Team members can
                help you with the best ideas to place your furniture and other
                items in the right place.
              </p>
            </div>

            <div className="flex  pt-5 pb-5 mx-6 gap-2">
              <Image
                src="/icons/testimonial/country1.svg"
                height={20}
                width={18}
                alt="Country"
              />
              <h1 className="flex flex-col items-center justify-center flex-shrink-0">
                Google Review
              </h1>
              <Image
                src="/icons/testimonial/star.svg"
                height={100}
                width={90}
                alt="Country"
                className="   "
              />
            </div>
          </div>

          {/* Card 2 */}

          <div className="pt-4 rounded-lg bg-gray-200">
            <div className="flex pl-3 pt-4 text-blue-600 font-kamerik text-base font-normal">
              <Image
                src="/icons/testimonial/user.svg"
                width={55}
                height={33}
                alt="freezer1"
                className="rounded-xl"
              />
              <span className="pt-3 pl-2">Joseph</span>
            </div>

            <div className="pt-4 px-6 flex ">
              <p className="text-black font-kamerik text-base font-normal leading-7 ">
                This is the first time I have tried their service and so far the
                result was beyond expectation. The team reached on time and
                everything was packed properly. They have all the packing
                materials including kitchen boxes, cartons. Team members can
                help you with the best ideas to place your furniture and other
                items in the right place.
              </p>
            </div>

            <div className="flex  pt-5 pb-5 mx-6 gap-2">
              <Image
                src="/icons/testimonial/country1.svg"
                height={20}
                width={18}
                alt="Country"
              />
              <h1 className="flex flex-col items-center justify-center flex-shrink-0">
                Google Review
              </h1>
              <Image
                src="/icons/testimonial/star.svg"
                height={100}
                width={90}
                alt="Country"
                className="   "
              />
            </div>
          </div>

          {/* Card 3 */}

          <div className="pt-4 rounded-lg bg-gray-200">
            <div className="flex pl-3 pt-4 text-blue-600 font-kamerik text-base font-normal">
              <Image
                src="/icons/testimonial/user.svg"
                width={55}
                height={33}
                alt="freezer1"
                className="rounded-xl"
              />
              <span className="pt-3 pl-2">Saba Kazi</span>
            </div>

            <div className="pt-4 px-6 flex ">
              <p className="text-black font-kamerik text-base font-normal leading-7 ">
                This is the first time I have tried their service and so far the
                result was beyond expectation. The team reached on time and
                everything was packed properly. They have all the packing
                materials including kitchen boxes, cartons. Team members can
                help you with the best ideas to place your furniture and other
                items in the right place.
              </p>
            </div>

            <div className="flex  pt-5 pb-5 mx-6 gap-2">
              <Image
                src="/icons/testimonial/country1.svg"
                height={20}
                width={18}
                alt="Country"
              />
              <h1 className="flex flex-col items-center justify-center flex-shrink-0">
                Google Review
              </h1>
              <Image
                src="/icons/testimonial/star.svg"
                height={100}
                width={90}
                alt="Country"
                className="   "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
