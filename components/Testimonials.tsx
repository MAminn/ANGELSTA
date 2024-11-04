"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles globally in _app.tsx
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Replace with your images
import personImage from "@/public/images/person1.jpg";

const TestimonialsCarousel: React.FC = () => {
  return (
    <section className='py-20 bg-gradient-to-r from-[#0a1622] via-[#0a272b] to-[#4d7374] text-[#d1d7d7]'>
      <div className='container mx-auto px-6 lg:px-12'>
        <h2 className='text-4xl font-extrabold text-center mb-12 text-[#87bab3]'>
          What Our Clients Say
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          className='h-[400px]'>
          {[
            {
              image: personImage,
              feedback:
                "ANGELSTA helped me find the right investors and grow my startup faster than I imagined!",
              name: "Jane Doe",
              title: "Founder, Tech Startup",
            },
            {
              image: personImage,
              feedback:
                "Investing in startups has never been easier. ANGELSTA provided me with the right tools to build a diversified portfolio.",
              name: "John Smith",
              title: "Investor",
            },
            {
              image: personImage,
              feedback:
                "As an incubator manager, ANGELSTA's platform has been an invaluable resource for managing startups.",
              name: "Sarah Lee",
              title: "Incubator Manager",
            },
          ].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className='bg-white text-[#0a1622] p-8  rounded-lg shadow-xl max-w-lg mx-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl'>
                <Image
                  src={testimonial.image}
                  width={100}
                  height={100}
                  alt={`${testimonial.name} Image`}
                  className='rounded-full mx-auto mb-4 border-4 border-[#87bab3]'
                />
                <p className='text-lg italic mb-4 text-gray-700'>
                  &quot;{testimonial.feedback}&quot;
                </p>
                <h4 className='mt-2 font-semibold text-[#4d7374] text-lg'>
                  {testimonial.name}
                </h4>
                <span className='text-sm text-gray-500'>
                  {testimonial.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
