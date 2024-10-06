import ItemCard from "@/components/ItemCard";
import Image from "next/image";
import Link from "next/link";
import startup from "@/public/images/startup.png";
import startup2 from "@/public/images/startup2.png";
import startup3 from "@/public/images/startup3.png";
import React from "react";
import { AiOutlineBank } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa6";
import { FaPlantWilt } from "react-icons/fa6";

const page = () => {
  return (
    <div className=" flex flex-col justify-center items-center  h-full w-full mt-[150px]  max-lg:mx-0 max-lg:w-[430px]    ">
      <div className=" w-full h-[600px] flex justify-center items-center max-lg:w-[430px] max-lg:h-[335px] ">
        <div className="lg:bg-hero h-[600px] w-[1100px] bg-no-repeat bg-center bg-contain flex justify-center items-start max-lg:w-[430px] max-lg:h-[335px] max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:bg-heroMobile max-lg:bg-top max-lg:bg-[length:380px_70px]  ">
          <div className=" flex-col justify-center items-center mt-[150px] max-lg:mt-0 max-lg:px-[10px]">
            <h1 className=" mb-10 max-lg:mb-4 text-[3.75rem] leading-4 max-lg:text-[1.875rem] max-lg:font-semibold max-lg:leading-[.91] max-lg:text-center ">
              <span className=" text-[#87bab0]">Raise</span>
              <span className=" text-[#0b272d] ml-3 font-semibold">
                Capital
              </span>
            </h1>
            <p className=" mb-4 text-[1.3125rem] text-[#4D4D4D] leading-[1.33] font-medium">
              Raise funding with confidence and clarity
            </p>
            <Link href="/form/onboarding" className=" ml-16">
              <button className=" text-[#fefefe] no-underline font-semibold pl-4 pr-4 pt-4 pb-4 w-[250px] h-[65px] bg-[#4c7375] hover:bg-[#0b272d] rounded-lg uppercase transition-all duration-300  max-lg:py-2 max-lg:w-[180px] max-lg:h-[50px] max-lg:ml-9">
                get started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center w-full h-[600px] mt-[150px]      max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:w-[430px] max-lg:h-[650px] max-lg:mt-0  ">
        <div>
          <Image
            src={startup}
            alt=""
            width={760}
            height={600}
            className=" max-lg:w-[400px] max-lg:h-[315px]"
          />
        </div>
        <div className=" flex justify-center items-start gap-10 max-w-[565px]     max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:max-w-[400px] max-lg:max-h-[320px] max-lg:mt-[70px] ">
          <div className=" w-[55px] h-[70px] max-lg:w-[40px] max-lg:h-[50px]">
            <FaPlantWilt className="  w-full h-full" />
          </div>
          <div className=" w-[430px] h-[380px] max-lg:w-[400px] max-lg:h-[260px]">
            <h1 className=" text-[2.25rem] text-[#4d4d4d] font-semibold leading-[1.09] mb-3     max-lg:font-semibold max-lg:leading-[1.09] max-lg:text-[1.5rem] max-lg:text-center">
              Plan your Raise
            </h1>
            <hr className=" w-[30px] bg-black   max-lg:ml-[185px]" />
            <p className=" text-[1.125rem] leading-[1.44] text-[#6e6e6e] mt-3     max-lg:text-center">
              Keep a handle on your company control by exploring how different
              fundraising strategies affect your future ownership. Leverage your
              Gust Company Profile and Gust’s data to set your terms based on
              what’s best for your business.
            </p>
            <div className=" mt-[50px]">
              <Link href="/form/onboarding">
                <button className=" text-[#fefefe] no-underline font-semibold pl-4 pr-4 pt-4 pb-4 w-[250px] h-[65px] bg-[#4c7375] hover:bg-[#0b272d] rounded-lg uppercase transition-all duration-300        max-lg:py-2 max-lg:w-[180px] max-lg:h-[50px] max-lg:ml-[115px]">
                  get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center w-full h-[600px] mt-[150px]      max-lg:relative   max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:w-[430px] max-lg:h-[650px] max-lg:mt-26">
        <div className=" flex justify-center items-start gap-10 max-w-[565px]     max-lg:absolute max-lg:top-[280px]   max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:max-w-[400px] max-lg:max-h-[320px] max-lg:mt-[70px]">
          <div className=" w-[55px] h-[70px] max-lg:w-[40px] max-lg:h-[50px]">
            <FaDollarSign className="  w-full h-full font-normal " />
          </div>
          <div className=" w-[430px] h-[380px]">
            <h1 className=" text-[2.25rem] text-[#4d4d4d] font-semibold leading-[1.09] mb-3 max-lg:font-semibold max-lg:leading-[1.09] max-lg:text-[1.5rem] max-lg:text-center">
              Find your Funding
            </h1>
            <hr className=" w-[30px] bg-black max-lg:ml-[185px]" />
            <p className=" text-[1.125rem] leading-[1.44] text-[#6e6e6e] mt-3 max-lg:text-center">
              Hundreds of the world’s leading Angel Groups and VCs use Gust for
              deal flow. Leverage your Gust Company Profile to find the best
              funding sources, apply without re-entering information, and manage
              your applications in one place.
            </p>
            <div className=" mt-[50px]">
              <Link href="/form/onboarding">
                <button className=" text-[#fefefe] no-underline font-semibold pl-4 pr-4 pt-4 pb-4 w-[250px] h-[65px] bg-[#4c7375] hover:bg-[#0b272d] rounded-lg uppercase transition-all duration-300   max-lg:py-2 max-lg:w-[180px] max-lg:h-[50px] max-lg:ml-[115px]">
                  get started
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-lg:top-0 max-lg:absolute">
          <Image
            src={startup2}
            alt=""
            width={760}
            height={600}
            className=" max-lg:w-[400px] max-lg:h-[315px]"
          />
        </div>
      </div>
      <div className=" flex justify-center items-center w-full h-[600px] mt-[150px]      max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:w-[430px] max-lg:h-[650px] max-lg:mt-26 ">
        <div>
          <Image
            src={startup3}
            alt=""
            width={760}
            height={600}
            className=" max-lg:w-[400px] max-lg:h-[315px]"
          />
        </div>
        <div className=" flex justify-center items-start gap-10 max-w-[565px]    max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:max-w-[400px] max-lg:max-h-[320px] max-lg:mt-[70px] ">
          <div className=" w-[55px] h-[70px] max-lg:w-[40px] max-lg:h-[50px]">
            <AiOutlineBank className="  w-full h-full" />
          </div>
          <div className=" w-[430px] h-[380px]    max-lg:w-[400px] max-lg:h-[260px]">
            <h1 className=" text-[2.25rem] text-[#4d4d4d] font-semibold leading-[1.09] mb-3    max-lg:font-semibold max-lg:leading-[1.09] max-lg:text-[1.5rem] max-lg:text-center">
              Close your Investment
            </h1>
            <hr className=" w-[30px] bg-black   max-lg:ml-[185px]" />
            <p className=" text-[1.125rem] leading-[1.44] text-[#6e6e6e] mt-3   max-lg:text-center">
              Avoid the paper chase and unnecessary corporate cleanup costs by
              executing SAFEs and Convertible Notes digitally. We’ll make sure
              you get the proper consents from directors and shareholders,
              easily collect signatures from investors, and reflect the results
              on your cap table so you’re ready to model your next round.
            </p>
            <div className=" mt-[50px]">
              <Link href="/form/onboarding">
                <button className=" text-[#fefefe] no-underline font-semibold pl-4 pr-4 pt-4 pb-4 w-[250px] h-[65px] bg-[#4c7375] hover:bg-[#0b272d] rounded-lg uppercase transition-all duration-300     max-lg:py-2 max-lg:w-[180px] max-lg:h-[50px] max-lg:ml-[115px]">
                  get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-[150px] flex-col justify-center items-center w-full h-[705px] mt-[150px] max-lg:hidden">
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
        <div className=" flex justify-center items-center gap-6 w-full h-[470px]">
          <div className=" flex-col justify-center items-center w-full h-full">
            <ItemCard
              icon={<AiOutlineBank className=" w-[85px] h-[85px]" />}
              title="Office Hours"
              desc="Hosted by David S. Rose and the Gust team, office hours are a forum to ask questions, tackle challenges, and learn from your peers. You’ll never be more than a week away from talking to expert humans who don’t charge by the hour."
            />
          </div>
          <div className=" flex-col justify-center items-center w-full h-full">
            <ItemCard
              icon={<AiOutlineBank className=" w-[85px] h-[85px]" />}
              title="Office Hours"
              desc="Hosted by David S. Rose and the Gust team, office hours are a forum to ask questions, tackle challenges, and learn from your peers. You’ll never be more than a week away from talking to expert humans who don’t charge by the hour."
            />
          </div>
          <div className=" flex-col justify-center items-center w-full h-full">
            <ItemCard
              icon={<AiOutlineBank className=" w-[85px] h-[85px]" />}
              title="Office Hours"
              desc="Hosted by David S. Rose and the Gust team, office hours are a forum to ask questions, tackle challenges, and learn from your peers. You’ll never be more than a week away from talking to expert humans who don’t charge by the hour."
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center w-full h-[400px] mt-[50px] max-lg:w-[400px] max-lg:h-[250px] max-lg:mt-[200px] max-lg:ml-3">
        <div className=" flex justify-center items-center w-full h-[300px] bg-[#0b272d] rounded-3xl max-lg:w-[400px] max-lg:h-[220px]">
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
