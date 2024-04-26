import React from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="grid justify-center items-center lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mx-5 py-5">
      {/* 1 */}
      <div className="text-center w-full ">
        <h4 className="text-blue-900 font-kamerik-105 text-2xl pt-2 font-bold">
          Don&apos;t hesitate to contact us
        </h4>
        <h4 className="text-blue-900 pt-3 font-kamerik-105 text-16.718 font-bold leading-20.878">
          Send Us Message
        </h4>
        <form className="flex flex-col items-center pt-3 px-4 md:px-0">
          <input
            className="rounded-lg border-3 py-3 px-4 mb-6 bg-gray-100 w-full  lg:w-[70%] "
            placeholder="Name"
            type="text"
          />
          <input
            className="rounded-lg border-3 py-3 px-4 mb-6 bg-gray-100 w-full  lg:w-[70%]"
            placeholder="Email"
            type="text"
          />
          <input
            className="rounded-lg border-3 py-3 px-4 mb-6 bg-gray-100 w-full  lg:w-[70%]"
            placeholder="Number"
            type="text"
          />
          <textarea
            className="rounded-lg border-3 py-3 px-4 h-28 mb-6 bg-gray-100 w-full  lg:w-[70%]"
            placeholder="Message"
          />
          <div className="items-start">
            <button className="rounded-lg border py-2 px-5 text-white bg-blue-400 mb-3">
              Send <span className="loading loading-ring loading-sm"></span>
            </button>
          </div>
        </form>
      </div>

      {/* 2 */}
      <div>
        <Image
         src="/map.svg" 
        width={807}
         height={602} 
        alt="Map" 
        
        />
      </div>
    </div>
  );
};

export default ContactForm;
