"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa'; 
import { IoClose } from 'react-icons/io5'; 

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className='flex justify-between text-white items-center h-[65px] w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700'>
        <div className='pl-10'>
          <Image
            src="/logo.png"
            width={70}
            height={70}
            alt="logo"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className='block pr-6 md:hidden'>
          {isMobileMenuOpen ? (
            <IoClose onClick={toggleMobileMenu} className= 'text-2xl cursor-pointer' />
          ) : (
            <FaBars onClick={toggleMobileMenu} className=' text-2xl cursor-pointer' />
          )}
        </div>

        {/* Main Menu */}
        <ul className={`absolute text-bl top-[65px] left-0 md:relative md:top-auto md:left-auto md:flex md:space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <li className='py-2 text-white'>Home</li>
          <li className='py-2 text-white'>Services</li>
          <li className='py-2 text-white'>About Us</li>
          <li className='py-2 text-white'>Contact Us</li>
        </ul>

        {/* Social Icons */}
        <div className='hidden md:flex pr-10 gap-4'>
          {/* Add your social icons here */}
          <img src="/icons/linkedin.svg" alt="menu" className='h-5 w-6 cursor-pointer'/>
          <img src="/icons/facebook.svg" alt="menu" className='h-5 w-6 cursor-pointer'/>
          <img src="/icons/x.svg" alt="menu" className='h-5 w-6 cursor-pointer'/>
        </div>
      </nav>
    </>
  );
};

export default Home;
