import FlipCard from "@/components/FlipCard";
import PersonCard from "@/components/PersonCard";
import aboutUsHero from "@/public/images/aboutUsHero.jpg";
import person1 from "@/public/images/person1.jpg";
import person2 from "@/public/images/person2.jpg";
import world from "@/public/images/world.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  return (
    <div className=" flex flex-col justify-center items-center  gap-16 h-full w-full z-20">
      <div className="flex justify-between items-center  w-full h-[480px] bg-[#ebf5ff] max-lg:flex-col ">
        <div className=" flex flex-col justify-center items-start gap-6 pl-[400px] max-lg:pl-[20px] max-lg:p-10 max-lg:justify-around max-lg:gap-0 max-lg:items-start">
          <span className=" leading-4 uppercase text-[.875rem] mb-[15px] font-bold max-lg:mb-2">
            About us
          </span>
          <h1 className="text-[2.75rem] font-bold leading-[3rem] mb-[25px] max-w-[600px]">
            Helping the world’s leading companies defy doubt
          </h1>
          <p className="max-w-[550px] text-[#0e1318] max-lg:mb-6">
            Thousands of organizations use AlphaSense to make smarter decisions
            with confidence and speed.
          </p>
          <Link
            href=""
            className="btn-custom-2 px-5 max-lg:px-[120px] py-1.5 transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0b272d] max-lg:ml-[30px] "
          >
            Get Pricing
          </Link>
        </div>
        <div className=" max-h-[480px]">
          <Image
            src={aboutUsHero}
            alt=""
            width={850}
            height={480}
            className=" h-[480px] w-[850px] max-lg:w-[460px] max-lg:h-[315px]"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center w-full h-[430px] max-lg:mt-[350px] max-lg:p-8 max-lg:items-start">
        <span className=" leading-4 uppercase text-[.875rem] mb-[15px] font-bold max-lg:text-left">
          OUR STORY
        </span>
        <h1 className="text-[36px] text-[#4c7375] font-extrabold leading-[3rem] mb-[25px] max-w-[600px] max-lg:font-semibold max-lg:max-w-[380px] max-lg:text-[28px]">
          It started with CTRL+F
        </h1>
        <p className=" max-w-[1100px] text-center mb-[25px]">
          CEO and Founder,{" "}
          <span className=" font-semibold text-[#4c7375]">Jack Kokko </span>,
          felt the pain of manual research early on. He started his career as an
          investment banking analyst in Silicon Valley, spending hours CTRL+Fing
          thousands of PDFs one keyword at a time—just to find a single insight.
        </p>
        <p className=" max-w-[1100px] text-center mb-[16px]">
          Years later at The Wharton School, Jack met his co-founder and CTO,
          <span className=" font-semibold text-[#4c7375]">Raj Neervannan</span>,
          and they were both shocked to realize that the research process and
          tools available hadn’t changed after all this time. In 2011, Jack and
          Raj sought to solve this problem by launching AlphaSense, a new type
          of search engine that leverages machine learning and natural language
          processing technology to enable professionals to cut through the noise
          and easily extract insights from thousands of sources and billions of
          data points.
        </p>
      </div>
      <div className=" flex justify-between items-center  w-full h-[480px] bg-[#eff3f5] max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:mt-[70px] max-lg:h-full ">
        <div className=" max-h-[480px]">
          <Image
            src={aboutUsHero}
            alt=""
            width={850}
            height={480}
            className=" h-[480px] w-[850px] max-lg:h-[250px] max-lg:w-[430px]"
          />
        </div>
        <div className=" flex flex-col justify-center items-start gap-6 p-8 pr-[300px] max-lg:pr-0 max-lg:p-8 max-lg:gap-0">
          <span className=" leading-4 uppercase text-[.875rem] mb-[15px] font-bold max-lg:text-[12px]">
            OUR MISSION
          </span>
          <h1 className="text-[2.75rem] text-[#4c7375] font-bold leading-[3rem] mb-[25px] max-w-[600px] max-lg:text-[28px] max-lg:leading-[32px]">
            Empower professionals to make smarter business decisions with
            confidence and speed
          </h1>

          <Link
            href=""
            className="btn-custom-2 px-5 py-1.5 transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0b272d] "
          >
            Get a quick overview
          </Link>
        </div>
      </div>
      <div className=" flex flex-col justify-start items-center w-full h-full my-[50px]">
        <p className=" text-[36px] font-bold mb-[20px] text-[#4c7375]">
          Meet our Team
        </p>
        <div className=" flex flex-col justify-center items-center gap-4">
          <p className="  text-[24px] font-semibold border-b-[#0b272d] border-b-4 ">
            Leadership
          </p>
          <div className=" flex flex-col justify-center items-center">
            <div className=" flex justify-center items-center gap-10  max-lg:flex-col max-lg:pt-6">
              <PersonCard
                image={person1}
                title="Jack Kokko"
                desc="Chief Executive Officer & Founder"
              />
              <PersonCard
                image={person1}
                title="Jack Kokko"
                desc="Chief Executive Officer & Founder"
              />
              <PersonCard
                image={person1}
                title="Jack Kokko"
                desc="Chief Executive Officer & Founder"
              />
            </div>
            <div className=" flex justify-center items-center gap-10 max-lg:flex-col max-lg:pt-6">
              <PersonCard
                image={person2}
                title="Heather Zynczak"
                desc="Chief Marketing Officer"
              />
              <PersonCard
                image={person2}
                title="Heather Zynczak"
                desc="Chief Marketing Officer"
              />
              <PersonCard
                image={person2}
                title="Heather Zynczak"
                desc="Chief Marketing Officer"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" flex flex-col justify-start items-center gap-2 bg-[#334252] w-full h-full">
        <div className=" mt-[70px]">
          <p className=" leading-4 uppercase text-[.875rem] mb-[15px] font-bold text-center text-white">
            Timeline
          </p>
          <h1 className="text-[36px] font-extrabold leading-[3rem] mb-[25px] max-w-[600px] text-white">
            Go back in time
          </h1>
        </div>
        <AboutCarousel />
      </div> */}
      <div className=" w-full h-[350px] bg-[#d1d6d6] shadow-lg  flex justify-center items-center gap-14 max-lg:flex-col max-lg:bg-[#FFFFFF] max-lg:pb-10 max-lg:gap-0 max-lg:mt-[150px]">
        <FlipCard title="Enterprize Intelligence" />
        <FlipCard title="Expert Insights" />
        <FlipCard title="Wall Street Insights" />
      </div>
      <div className=" flex justify-center items-center gap-6 w-full h-[570px] pl-[200px] max-lg:flex-col max-lg:mt-[100px] max-lg:justify-start max-lg:items-start max-lg:pl-8 max-lg:p-8">
        <div className=" flex flex-col justify-start items-center gap-6 max-lg:items-start">
          <h1 className="text-[2.25rem] font-bold leading-[2.75rem] max-lg:text-[28px]">
            A Global Company
          </h1>
          <p className=" text-[1rem] leading-[22px] max-w-[360px]">
            While our headquarters are in the heart of New York City, we have
            employees around the world with offices in London, Helsinki, Pune,
            Mumbai, New Delhi, Bengaluru, and Singapore.
          </p>
        </div>
        <div>
          <Image
            src={world}
            alt=""
            width={1100}
            height={500}
            className=" max-lg:w-[450px] max-lg:h-[215px]"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center gap-6 items-center w-full h-[380px] bg-[#0b272d]">
        <h1 className=" text-white text-[2.25rem] font-bold leading-[2.75rem] max-w-[970px] text-center max-lg:text-[28px]">
          AlphaSense is removing uncertainty from decision making—join us
        </h1>
        <p className=" text-white max-w-[970px] text-center max-lg:text-[16px] max-lg:max-w-[370px]">
          With market intelligence and search built on proven AI, our customers
          get the answers they need to defy doubt. That’s why we continue to
          grow.{" "}
          <span className=" underline">
            Jumpstart your career with AlphaSense today.
          </span>
        </p>
        <Link
          href=""
          className=" px-5 py-1.5 transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0a1623] text-[15px] text-center leading-[24px] border-[2px] border-[solid] border-[#87bab0] bg-[#87bab0] text-[#fff] rounded-[50rem] font-bold "
        >
          See our open roles
        </Link>
      </div>
    </div>
  );
};

export default Page;
