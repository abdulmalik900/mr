"use client";
"use client";
import { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between text-white items-center h-[65px] w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700">
        <div className="pl-10">
          <Image src="/logo.png" width={70} height={70} alt="logo" />
        </div>

        {/* Main Menu */}
        <ul
          className={`absolute text-bl gap-3 top-[65px] left-0 md:relative md:top-auto md:left-auto md:flex md:space-x-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="py-2 text-white">Home</li>
          <li className="py-2 text-white">Services</li>
          <li className="py-2 text-white">About Us</li>
          <li className="py-2 text-white">Contact Us</li>
        </ul>

        <div className="flex items-center   md:gap-x-12">
          {/* Social Icons */}
          <div className=" flex pr-10 gap-4">
            <img
              src="/icons/linkedin.svg"
              alt="menu"
              className="h-4 w-6 cursor-pointer"
            />
            
            <img
              src="/icons/x.svg"
              alt="menu"
              className="h-4 w-6 cursor-pointer"
            />
            <img
              src="/icons/facebook.svg"
              alt="menu"
              className="h-4 w-6 cursor-pointer"
            />
          </div>

          {/* Mobile Menu Icon */}
          <div className="block pr-6 md:hidden ">
            {isMobileMenuOpen ? (
              <IoClose
                onClick={toggleMobileMenu}
                className="text-2xl cursor-pointer "
              />
            ) : (
              <FaBars
                onClick={toggleMobileMenu}
                className=" text-2xl cursor-pointer "
              />
            )}
          </div>

          {/* mobile menu */}

          <ul
            className={`md:hidden font-sans absolute top-[65px] p-4 text-white left-0 transition-all ease-in 4s  w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700  ${
              isMobileMenuOpen ? "" : "translate-x-[-110%] "
            }`
           
          }
          >
            <hr/>
            <li className="py-2 ">Home</li>
            <li className="py-2">Services</li>
            <li className="py-2">About Us</li>
            <li className="py-2">Contact Us</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Home;