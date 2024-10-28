import ItemCard from "@/components/ItemCard";
import Image from "next/image";
import Link from "next/link";
import startup from "@/public/images/startup1.png";
import React from "react";
import startup3 from "@/public/images/startup-3.png";
const page = () => {
  return (
    <div className=" flex flex-col justify-center items-center  h-full w-full mt-[150px]  max-lg:mx-0 max-lg:w-[430px]  z-20  ">
      <div className=" w-full h-full flex justify-center items-center max-lg:w-[430px] max-lg:h-[335px] ">
        <div className=" h-[400px] w-[1100px] flex justify-center items-start max-lg:w-[430px] max-lg:h-[400px] max-lg:flex-col max-lg:justify-center max-lg:items-center   ">
          <div className=" flex-col justify-center items-center  max-lg:px-[10px] ">
            <h1 className=" mb-10 max-lg:mb-4 text-[3.75rem] leading-4 max-lg:text-[1.875rem] max-lg:font-semibold max-lg:leading-[.91] max-lg:text-center ">
              <p className=" text-[#87bab0] text-center font-semibold">
                Empower Your Financial Future
              </p>
            </h1>
            <p className=" mb-6 max-lg:ml-16 text-[1.3125rem] max-lg:text-[1rem] max-lg:max-w-[300px] text-[#4D4D4D] leading-[1.33] font-medium text-center">
              Take control of your finances with expert guidance from our
              financial consultants. Whether you&apos;re planning for
              retirement, investing for the future, or managing your wealth,
              we&apos;re here to help you every step of the way.
            </p>
            <div className=" flex max-lg:flex-col justify-center items-center gap-5">
              <Link href="/form/onboarding" className="  text-center ">
                <button className=" text-[#ffffff] no-underline font-semibold px-8 py-4  bg-[#4c7375] hover:bg-[#ffffff]  hover:border hover:border-[#4c7375] rounded-lg uppercase transition-all duration-300  max-lg:py-2 max-lg:w-[180px] max-lg:h-[50px] max-lg:ml-9">
                  get started
                </button>
              </Link>
              <Link href="/form/onboarding" className="  text-center ">
                <button className=" text-[#87bab0] no-underline font-semibold px-8 py-4  bg-[#ffffff] border border-[#4c7375] hover:bg-[#4c7375] rounded-lg uppercase transition-all duration-300  max-lg:py-2 max-lg:w-[180px] max-lg:h-[50px] max-lg:ml-9">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center w-full h-full       flex-col max-lg:justify-center max-lg:items-center max-lg:w-[430px] max-lg:h-[650px] max-lg:mt-[150px] ">
        <div>
          <Image
            src={startup}
            alt=""
            width={760}
            height={600}
            className=" max-lg:w-[400px] max-lg:h-[315px] rounded-3xl bg-[#4c7375]"
          />
        </div>
        <div className=" flex justify-center items-center gap-10 max-w-[565px]     flex-col max-lg:justify-center max-lg:items-center max-lg:max-w-[400px] max-lg:max-h-[320px] mt-[70px] ">
          {/* <div className=" w-[40px] h-[55px] max-lg:w-[40px] max-lg:h-[50px] flex justify-center items-center">
            <FaPlantWilt className="  w-full h-full" />
          </div> */}
          <div className=" w-[430px] h-[380px] max-lg:w-[400px] max-lg:h-[260px]">
            <h1 className=" text-[3rem] text-[#4d4d4d] font-semibold leading-[1.09] mb-3     max-lg:font-semibold max-lg:leading-[1.09] max-lg:text-[1.5rem] text-center">
              Plan your Raise
            </h1>
            <hr className=" w-[30px] bg-black   max-lg:ml-[185px]" />
            <p className=" text-[1.2rem] leading-[1.44] text-[#6e6e6e] mt-3     text-center">
              Keep a handle on your company control by exploring how different
              fundraising strategies affect your future ownership. Leverage your
              Gust Company Profile and Gust’s data to set your terms based on
              what’s best for your business.
            </p>
            <div className=" mt-[50px] flex justify-center items-center">
              <Link href="/form/onboarding">
                <button className=" text-[#fefefe] no-underline font-semibold pl-4 pr-4 pt-4 pb-4 w-[250px] h-[65px] bg-[#4c7375] hover:bg-[#0b272d] rounded-lg uppercase transition-all duration-300        max-lg:py-2 max-lg:w-[180px] max-lg:h-[50px] ">
                  get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center w-full h-full mt-[150px]      flex-col max-lg:justify-center max-lg:items-center max-lg:w-[430px] max-lg:h-[650px] max-lg:mt-[150px] ">
        <div>
          <Image
            src={startup3}
            alt=""
            width={760}
            height={600}
            className=" max-lg:w-[400px] max-lg:h-[315px] rounded-3xl bg-[#4c7375]"
          />
        </div>
        <div className=" flex justify-center items-center gap-10 max-w-[565px]     flex-col max-lg:justify-center max-lg:items-center max-lg:max-w-[400px] max-lg:max-h-[320px] mt-[70px] ">
          <div className=" w-full h-[380px] max-lg:w-[400px] max-lg:h-[260px]">
            <h1 className=" text-[3rem] text-[#4d4d4d] font-semibold leading-[1.09] mb-3    max-lg:font-semibold max-lg:leading-[1.09] max-lg:text-[1.5rem] text-center">
              Close Your Invesment
            </h1>
            <hr className=" w-[30px] bg-black   max-lg:ml-[185px]" />
            <p className=" text-[1.2rem] leading-[1.44] text-[#6e6e6e] mt-3     text-center">
              Keep a handle on your company control by exploring how different
              fundraising strategies affect your future ownership. Leverage your
              Gust Company Profile and Gust’s data to set your terms based on
              what’s best for your business.
            </p>
            <div className=" mt-[50px] flex justify-center items-center">
              <Link href="/form/onboarding">
                <button className=" text-[#fefefe] no-underline font-semibold pl-4 pr-4 pt-4 pb-4 w-[250px] h-[65px] bg-[#4c7375] hover:bg-[#0b272d] rounded-lg uppercase transition-all duration-300        max-lg:py-2 max-lg:w-[180px] max-lg:h-[50px] ">
                  get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-[150px] flex-col justify-center items-center w-full h-full mt-[150px] max-lg:hidden">
        <div className=" flex-col justify-center items-center w-full h-[130px] ">
          <h1 className=" text-center text-[2.25rem] text-[#4d4d4d] font-semibold leading-[1.09]">
            Your Startup Support System
          </h1>
          <p className=" text-center text-[1.125rem] text-[#6e6e6e] mt-3">
            We love technology, but Gust is more than just a set of software
            tools. Leverage the collective experience of the Gust team and
            community to level up your knowledge and grow your entrepreneurial
            support system with{" "}
            <span className=" underline text-[#1A83CA] cursor-pointer">
              Gust Mission Control.
            </span>
          </p>
        </div>
        <div className=" flex justify-center items-center gap-6 w-full h-[470px] mt-10">
          <div className=" flex-col justify-center items-center w-full h-full">
            <ItemCard
              href="/form/onboarding"
              title="Office Hours"
              desc="Hosted by David S. Rose and the Gust team, office hours are a forum to ask questions, tackle challenges, and learn from your peers. You’ll never be more than a week away from talking to expert humans who don’t charge by the hour."
            />
          </div>
          <div className=" flex-col justify-center items-center w-full h-full">
            <ItemCard
              href="/form/onboarding"
              title="Office Hours"
              desc="Hosted by David S. Rose and the Gust team, office hours are a forum to ask questions, tackle challenges, and learn from your peers. You’ll never be more than a week away from talking to expert humans who don’t charge by the hour."
            />
          </div>
          <div className=" flex-col justify-center items-center w-full h-full">
            <ItemCard
              href="/form/onboarding"
              title="Office Hours"
              desc="Hosted by David S. Rose and the Gust team, office hours are a forum to ask questions, tackle challenges, and learn from your peers. You’ll never be more than a week away from talking to expert humans who don’t charge by the hour."
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center w-full h-full   max-lg:mt-[200px] ">
        <div className=" flex justify-center items-center w-full h-[300px] bg-[#0b272d]  ">
          <div className=" flex justify-center items-center w-full h-full">
            <div className="">
              <h1 className=" text-center mb-6 text-[2.625rem] text-white   max-lg:text-[1.75rem] max-lg:font-semibold max-lg:leading-[1.33]">
                Let’s start your company.
              </h1>
              <Link href="/form/onboarding">
                <button className="  tracking-wider  no-underline font-semibold pl-4 pr-4 pt-4 pb-4 w-[260px] h-[50px] bg-[#4c7375] rounded-lg uppercase ml-[100px] transition-all duration-300 hover:bg-[#87bab0]  hover:text-white max-lg:ml-[50px]">
                  get STARTED for free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
