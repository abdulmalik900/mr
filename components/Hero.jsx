"use client";
import "./hero.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

function HomeHero() {
  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/971568608823";
  };

  return (
    <div className="relative flex items-center  w-full  bg-no-repeat bg-cover bg-center ">
      <div className="w-full h-full">
        <Image
          src="/herodata/Hero1.png"
          className="w-full h-full hidden md:block object-cover"
          width={1000}
          height={1000}
          alt="home"
        />
        <Image
          src="/herodata/HeroMobile.png"
          className="w-full h-full md:hidden object-cover"
          width={1000}
          height={1000}
          alt="home"
        />
      </div>
      <div className="absolute p-2 top-40 left-7 md:top-20 lg:top-48 glass md:p-5 rounded-lg  md:left-16  z-10">
        <div className="text-white  flex flex-col gap-y-3  ">
          <div>
            <h1 className="text-sm md:text-lg lg:text-3xl font-bold">
              Effortless Moving and Packing
            </h1>
            <h1 className="text-sm mt-2  md:text-lg lg:text-3xl font-bold">
              with Transformative Solutions
            </h1>
          </div>
          <button
            className="  w-fit inline-flex  items-center px-3 sm:px-4 py-2 sm:py-3 justify-center gap-2 rounded-lg bg-[#0073CE] text-sm sm:text-base"
            onClick={handleWhatsAppClick}
          >
            Lets Talk
            <span className="loading loading-dots loading-md"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
