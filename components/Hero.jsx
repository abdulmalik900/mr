"use client";
import "./hero.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

function HomeHero() {
  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/971568608823";
  };

  return (
    <div
      className="relative flex items-center px-[10%] w-full h-[60vh] sm:h-[70vh] md:h-[80vh] xl:h-[90vh] bg-no-repeat bg-cover bg-center "
      style={{ zIndex: "-999" }}
    >
      <div
        className="text-white flex flex-col gap-y-3 "
        style={{ zIndex: "8888" }}
      >
        <div>
          <h1 className="text-base sm:text-2xl md:text-3xl font-bold">
            Effortless Moving and Packing
          </h1>
          <h1 className="text-base mt-2 sm:text-2xl md:text-3xl font-bold">
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
      <div
        className="absolute top-0 left-0 h-[100vh]"
        style={{ zIndex: "-999" }}
      >
        <Image
          src="/assets/Hero1.png"
          className="w-full h-screen"
          width={807}
          height={602}
          alt="home"
        />
      </div>
    </div>
  );
}

export default HomeHero;
