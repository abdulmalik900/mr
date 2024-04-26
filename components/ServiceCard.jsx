import React from "react";
import Image from "next/image";

const services = [
  {
    src: "/servicesdata/trunk.svg",
    alt: "Trunk Rentals Services",
    title: "Truck Rentals",
  },
  {
    src: "/servicesdata/local.svg",
    alt: "Local Moving Services",
    title: "Local Moving",
  },
  {
    src: "/servicesdata/storage.svg",
    alt: "Storage Solutions Services",
    title: "Storage Solutions",
  },
  {
    src: "/servicesdata/office.svg",
    alt: "Office Moving Services",
    title: "Office Moving",
  },
  {
    src: "/servicesdata/packing.svg",
    alt: "Packing Services",
    title: "Packing",
  },
  {
    src: "/servicesdata/furniture.svg",
    alt: "Furniture Moving Services",
    title: "Furniture Moving",
  },
];

const ServiceCard = () => {
  return (
    <>
      <section className="bg-gray-200 py-10">
        <div className="text-center font-Kamerik text-4xl font-normal">
          <span className="text-black mr-2">Our</span>
          <span className="text-blue-600">Services</span>
        </div>

        <div className="mx-10 pt-10 justify-start items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center rounded-3xl border-2 p-4 border-gray-300"
            >
              <div className="w-40 h-40">
                <Image
                  src={service.src}
                  alt={service.alt}
                  width={150}
                  height={150}
                  className="w-full h-full"
                />
              </div>
              <div className="text-center">
                <h1 className="text-black font-kamerik font-normal leading-54 tracking-wider">
                  {service.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceCard;
