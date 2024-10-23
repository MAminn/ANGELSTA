'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";


// Import Swiper styles (these must be imported globally in your _app.tsx file)
import "swiper/css";
import "swiper/css/navigation";

import personImage from "@/public/images/person1.jpg"; // Replace with your image

const TestimonialsCarousel: React.FC = () => {
  return (
    <section className='bg-gray-100 py-16'>
      <div className='container mx-auto px-6 lg:px-12 text-center'>
        <h2 className='text-4xl font-bold text-gray-900 mb-12'>
          What Our Clients Say
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1} // Show one slide at a time
          pagination={{ clickable: true }}
          navigation={ true } // Add navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[ Navigation]}
          >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className='bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto'>
              <Image
                src={personImage}
                width={100}
                height={100}
                alt='Client'
                className='rounded-full mx-auto mb-4'
              />
              <p className='text-lg italic'>
                &quot;ANGELSTA helped me find the right investors and grow my
                startup faster than I imagined!&quot;
              </p>
              <h4 className='mt-4 font-semibold text-gray-800'>Jane Doe</h4>
              <span className='text-sm text-gray-500'>
                Founder, Tech Startup
              </span>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className='bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto'>
              <Image
                src={personImage}
                width={100}
                height={100}
                alt='Client'
                className='rounded-full mx-auto mb-4'
              />
              <p className='text-lg italic'>
                &quot;Investing in startups has never been easier. ANGELSTA
                provided me with the right tools to build a diversified
                portfolio.&quot;
              </p>
              <h4 className='mt-4 font-semibold text-gray-800'>John Smith</h4>
              <span className='text-sm text-gray-500'>Investor</span>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className='bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto'>
              <Image
                src={personImage}
                width={100}
                height={100}
                alt='Client'
                className='rounded-full mx-auto mb-4'
              />
              <p className='text-lg italic'>
                &quot;As an incubator manager, ANGELSTA&apos;s platform has
                been an invaluable resource for managing startups and
                accelerating their growth.&quot;
              </p>
              <h4 className='mt-4 font-semibold text-gray-800'>Sarah Lee</h4>
              <span className='text-sm text-gray-500'>Incubator Manager</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
