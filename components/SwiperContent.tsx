"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import card from "@/public/images/card.jpg";
import remac from "@/public/images/renmac-logo-black.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import Image from "next/image";

const SwiperContent = () => {
  return (
    <div className=' h-[250px] w-[1270px] flex justify-center items-center max-lg:flex-col max-lg:justify-center max-lg:items-center'>
      <Swiper
        className='h-[250px] w-[1270px] flex justify-center items-center mx-auto'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}

        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide className='w-[860px] h-[250px] flex bg-[#fff] [box-shadow:0_0_40px_rgba(0,_0,_0,_.05)] mx-[32px] my-[0]'>
          <Link
            href=''
            className=' flex justify-center items-center max-lg:flex-col max-lg:justify-center max-lg:items-center'>
            <div className=' flex justify-center items-center w-full gap-8 max-lg:flex-col'>
              <div>
                <Image
                  src={card}
                  alt=''
                  width={250}
                  height={250}
                  // className=" w-[250px] h-[250px]"
                />
              </div>
              <div className=' flex-col justify-center items-center w-[50%] '>
                <div className=' mb-6'>
                  <Image src={remac} alt='logo' width={120} height={25} />
                </div>
                <div className=' flex-col justify-center items-center gap-8'>
                  <p className=' italic text-[#0e1318] mb-[16px]'>
                    “This analyst likens the way AlphaSense automates his equity
                    research process to how Google automated the process of
                    going to the library.”
                  </p>
                  <h3 className=' font-bold uppercase mb-0'>Michael Otto </h3>
                  <p>Director of Investor Relations and Sustainability</p>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='w-[860px] h-[250px] flex bg-[#fff] [box-shadow:0_0_40px_rgba(0,_0,_0,_.05)] flex-wrap mx-[32px] my-[0]'>
          <Link href='' className=' flex justify-center items-center'>
            <div className=' flex justify-center items-center w-full h-full gap-8'>
              <div>
                <Image
                  src={card}
                  alt=''
                  width={250}
                  height={250}
                  // className=" w-[250px] h-[250px]"
                />
              </div>
              <div className=' flex-col justify-center items-center w-[50%] h-full'>
                <div className=' mb-6'>
                  <Image
                    src={remac}
                    alt='logo'
                    width={120}
                    height={25}
                  />
                </div>
                <div className=' flex-col justify-center items-center gap-8'>
                  <p className=' italic text-[#0e1318] mb-[16px]'>
                    “This analyst likens the way AlphaSense automates his equity
                    research process to how Google automated the process of
                    going to the library.”
                  </p>
                  <h3 className=' font-bold uppercase mb-0'>Michael Otto </h3>
                  <p>Director of Investor Relations and Sustainability</p>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperContent;
