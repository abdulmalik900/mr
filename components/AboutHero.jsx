import React from 'react'
import "./hero.css";
const AboutHero = () => {
  return (
    <>
    <div
      className="hero3 flex items-center px-[10%] w-full h-[60vh] sm:h-[70vh] md:h-[80vh] xl:h-[90vh] bg-no-repeat bg-cover bg-center "
      style={{ zIndex: "-999" }}
    >
      <div className="text-white flex flex-col gap-y-3 ">
      <div className="text-white text-center items-center font-bold font-kamerik lg:text-6xl md:text-5xl text-4xl leading-10  ">
       <h1> About Us </h1> 
        </div>

      </div>
    </div>
    </>
  )
}

export default AboutHero
