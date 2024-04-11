
import Explore from "@/components/Explore";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HomeHero from "@/components/Hero";

import Navbar from "@/components/Navbar";
import Pic from "@/components/Pic";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import Vehicle from "@/components/Vehicle";

export default function HomePage() {
  return (
    <>
   
    <HomeHero/>
    <ServiceCard/>
    <Explore/>
    <Vehicle/>
    <Testimonial/>
    {/* <Faq/> */}
    <Pic/>
    
    </>
  );
}
