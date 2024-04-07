
import Explore from "@/components/Explore";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Home from "@/components/Home";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import Vehicle from "@/components/Vehicle";

export default function HomePage() {
  return (
    <>
    <Home />
    <Hero/>
    <ServiceCard/>
    <Explore/>
    <Vehicle/>
    <Testimonial/>
    <Faq/>
    </>
  );
}
