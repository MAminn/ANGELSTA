"use client";
import { useState } from "react";

import { servicesData } from "@/server/constants";
import Link from "next/link";

const ProductsAndServices: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className='bg-gradient-to-br from-[#0a1622] to-[#0a272b] py-16 text-[#d1d7d7]'>
      <div className='container mx-auto px-6 lg:px-12'>
        <h2 className='text-4xl font-bold text-center text-[#87bab3] mb-12'>
          Our Products & Services
        </h2>

        <div className='flex flex-col md:flex-row md:space-x-12'>
          {/* Service List */}
          <div className='flex-1 space-y-6'>
            {servicesData.map((service) => (
              <div
                key={service.id}
                onClick={() =>
                  setActiveService(
                    service.id === activeService ? null : service.id
                  )
                }
                className={`cursor-pointer p-6 rounded-lg shadow-lg transition-all duration-300 ${
                  activeService === service.id
                    ? "bg-[#4d7374]/70"
                    : "bg-[#0a272b]/70"
                } hover:bg-[#4d7374]/80`}>
                <h3 className='text-2xl font-semibold text-[#87bab3]'>
                  {service.title}
                </h3>
                <p className='text-[#d1d7d7] mt-2'>{service.description}</p>
              </div>
            ))}
          </div>

          {/* Service Details */}
          <div className='flex-1 mt-8 md:mt-0 bg-[#0a272b]/50 p-8 rounded-lg shadow-lg'>
            {activeService !== null ? (
              <div>
                <h3 className='text-3xl font-semibold text-[#4d7374] mb-4'>
                  {
                    servicesData.find((service) => service.id === activeService)
                      ?.title
                  }
                </h3>
                <p className='text-lg text-[#d1d7d7] leading-relaxed mb-6'>
                  {
                    servicesData.find((service) => service.id === activeService)
                      ?.details
                  }
                </p>
                <button className='bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform'>
                  <Link
                    href={
                      servicesData.find(
                        (service) => service.id === activeService
                      )?.link || "#"
                    }>
                    Learn More
                  </Link>
                </button>
              </div>
            ) : (
              <p className='text-lg text-[#d1d7d7] italic'>
                Select a product or service to view details.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsAndServices;
