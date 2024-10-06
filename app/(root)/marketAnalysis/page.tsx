"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import heroLogo from "@/public/images/heroLogo.jpg";
import { Fa3 } from "react-icons/fa6";
import FlipCard2 from "@/components/FlipCard2";
import FieldCard2 from "@/components/FieldCard2";
import SwiperContent from "@/components/SwiperContent";

const MarketAnalysis = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Ref for the menu

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect clicks outside of the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if menuRef.current is not null before using 'contains'
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <section className=" flex-col justify-around items-center gap-10 mt-4 w-full h-full">
      {/* First part of page  */}
      <div className=" flex justify-center items-center  w-full ml-auto mr-auto max-lg:flex-col  ">
        <div className=" max-w-[570px] flex-col max-lg:ml-4 ">
          <p className="leading-4 uppercase text-[.875rem] mb-[15px] font-bold max-lg:text-[10px]">
            solutions
          </p>
          <h1 className="text-[2.75rem] font-extrabold leading-[3rem] mb-[25px] max-lg:text-[28px] max-lg:leading-[36px] max-lg:mb-[15px]">
            The key perspectives you need—all in one place
          </h1>
          <p className="mb-[44px] text-left max-lg:max-w-[400px] max-lg:mb-[25px]">
            Make faster, more confident decisions with an extensive universe of
            public, private, and proprietary content sources in one easy-to-use,
            powerful platform.
          </p>
          <div className=" btn-custom-sm-screen">
            <button
              onClick={toggleMenu}
              className="btn-custom transition-all duration-300 ease-in-out hover:bg-[#4c7375] hover:text-white px-5 py-1.5 "
            >
              {isOpen ? "Start my free trial" : "Start my free trial"}
            </button>
            {/* Overlay that appears when the menu is open */}
            {isOpen && (
              <div className="fixed inset-0 bg-black opacity-50 z-30 max-lg:hidden "></div>
            )}

            {/* Sliding menu */}
            <div className=" flex ">
              <div
                ref={menuRef} // Step 1: Attach the ref to the menu div
                className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out max-lg:w-full max-lg:max-w-[430px]  ${
                  isOpen ? "translate-x-0" : "-translate-x-full "
                } w-1/3 z-40`}
              >
                <button
                  className=" text-[#0160ff]  absolute top-4 right-4 text-[30px]"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
                <div className="p-[40px]  ">
                  <h2 className="text-[2.25rem] font-extrabold leading-[2.75rem] mb-3 max-lg:text-black max-lg:text-[25px] max-lg:mb-0">
                    Start my free trial
                  </h2>
                  <p className=" mb-6 max-lg:text-black">
                    Please fill out the form below and an AlphaSense team member
                    will be in touch within 20 minutes to help set up your
                    trial.
                  </p>
                  <form>
                    {/* Email input */}
                    <div className="mb-8">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        * Business Email
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 max-lg:text-black"
                        placeholder="Enter your email"
                      />
                    </div>

                    {/* Phone input */}
                    <div className="mb-8">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        * Phone
                      </label>
                      <input
                        required
                        type="tel"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 max-lg:text-black"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* Role dropdown */}
                    <div className="mb-8">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        * Role
                      </label>
                      <select
                        required
                        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 max-lg:text-black"
                      >
                        <option>Select role</option>
                        <option>Developer</option>
                        <option>Designer</option>
                        <option>Manager</option>
                      </select>
                    </div>

                    {/* Country dropdown */}
                    <div className="mb-8">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Country
                      </label>
                      <select
                        required
                        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 max-lg:text-black"
                      >
                        <option>Select country</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="mb-8">
                      <label className="flex items-start ">
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700 max-w-[400px] text-[15px]">
                          I would like to receive regular updates and
                          communications from AlphaSense and its affiliates on
                          product releases, webinar and events, and other
                          relevant news and information.
                        </span>
                      </label>
                    </div>

                    {/* Submit button */}
                  </form>
                  <Link
                    href=""
                    type="submit"
                    className="btn-custom transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0160ff] w-[400px] px-[200px] py-3 max-lg:px-[100px] "
                  >
                    Submit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[570px]">
          <Image src={heroLogo} alt="" width={580} height={420} className="" />
        </div>
      </div>
      {/* Part 2 of the page */}
      <div className=" flex-col justify-center items-center gap-4 pt-[80px] bg-[#ebf5ff] w-full ml-0 h-[500px] max-lg:h-screen max-lg:mb-[50px]  ">
        <div className=" flex-col justify-center items-center gap-6">
          <h1 className="primary-color text-center mb-[16px] text-[2.25rem] text-[#4c7375] font-extrabold leading-[2.75rem] max-lg:text-[25px]">
            Solutions
          </h1>
          <p className=" text-center mb-[16px] primary-color max-w-[1150px] ml-auto mr-auto max-lg:max-w-[350px]">
            Whether you are looking for access to proprietary and premium market
            intelligence sources or looking for a way to scale market
            intelligence across your organization, AlphaSense helps you make
            critical market decisions with confidence and speed.
          </p>
        </div>
        <div className="flex justify-center items-center gap-14 max-lg:flex-col max-lg:bg-[#ebf5ff] max-lg:pb-10 max-lg:gap-0">
          <FlipCard2 title="Enterprize Intelligence" />
          <FlipCard2 title="Expert Insights" />
          <FlipCard2 title="Wall Street Insights" />
        </div>
      </div>
      {/* part 3 */}
      <div className=" flex-col justify-center items-center gap-4 pt-[80px] bg-white w-full ml-0 h-[600px] max-lg:mb-[200px] ">
        <div className=" flex-col justify-center items-center gap-6">
          <h1 className="primary-color text-center mb-[16px] text-[2.25rem] text-[#4c7375] font-extrabold leading-[2.75rem] max-lg:text-[25px]">
            Use cases
          </h1>
          <p className=" text-center mb-[60px] primary-color max-w-[1150px] ml-auto mr-auto max-lg:max-w-[350px]">
            Accelerate any research workflow with AI purpose-built to deliver
            answers faster. Search, discover, interrogate, and monitor an
            extensive universe of premium external content, as well as your own
            proprietary internal content.
          </p>
          <div className=" flex justify-between items-center gap-[90px] mt-[16px] max-w-[1150px] ml-auto mr-auto h-[210px] max-lg:flex-col max-lg:gap-[80px]">
            <div className=" flex-col justify-center items-center gap-4  w-[50%] h-[210px] max-lg:w-[100%] max-lg:px-[20px]  ">
              <ul className=" flex-col justify-center items-center max-w-[525px] gap-10 max-lg:max-w-[100%] ">
                <Link href="" className=" max-lg:w-full">
                  <li className="custom-li transition-transform duration-300 ease-in-out hover:bg-[#87bab0] hover:text-white hover:translate-x-3 group">
                    <div className="flex justify-between w-full items-center px-1">
                      <p className="transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        Benchmarking
                      </p>
                      <div className="pr-6 transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        {"->"}
                      </div>
                    </div>
                  </li>
                </Link>
                <Link href="" className="">
                  <li className="custom-li transition-transform duration-300 ease-in-out hover:bg-[#87bab0] hover:text-white hover:translate-x-3 group">
                    <div className="flex justify-between w-full items-center px-1">
                      <p className="transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        Business Development
                      </p>
                      <div className="pr-6 transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        {"->"}
                      </div>
                    </div>
                  </li>
                </Link>
                <Link href="" className="">
                  <li className="custom-li transition-transform duration-300 ease-in-out hover:bg-[#87bab0] hover:text-white hover:translate-x-3 group">
                    <div className="flex justify-between w-full items-center px-1">
                      <p className="transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        Competitive Intelligence
                      </p>
                      <div className="pr-6 transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        {"->"}
                      </div>
                    </div>
                  </li>
                </Link>
                <Link href="" className="">
                  <li className="custom-li transition-transform duration-300 ease-in-out hover:bg-[#87bab0] hover:text-white hover:translate-x-3 group">
                    <div className="flex justify-between w-full items-center px-1">
                      <p className="transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        Due Diligence
                      </p>
                      <div className="pr-6 transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        {"->"}
                      </div>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
            <div className=" flex-col justify-center items-center gap-4  w-[50%] h-[210px] max-lg:w-[100%] max-lg:px-[20px] ">
              <ul className=" flex-col justify-center items-center max-w-[525px] gap-10 max-lg:max-w-[100%] ">
                <Link href="" className="">
                  <li className="custom-li transition-transform duration-300 ease-in-out hover:bg-[#87bab0] hover:text-white hover:translate-x-3 group">
                    <div className="flex justify-between w-full items-center px-1">
                      <p className="transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        Earnings Analysis
                      </p>
                      <div className="pr-6 transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        {"->"}
                      </div>
                    </div>
                  </li>
                </Link>
                <Link href="" className="">
                  <li className="custom-li transition-transform duration-300 ease-in-out hover:bg-[#87bab0] hover:text-white hover:translate-x-3 group">
                    <div className="flex justify-between w-full items-center px-1">
                      <p className="transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        Fundamental Research
                      </p>
                      <div className="pr-6 transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        {"->"}
                      </div>
                    </div>
                  </li>
                </Link>
                <Link href="" className="">
                  <li className="custom-li transition-transform duration-300 ease-in-out hover:bg-[#87bab0] hover:text-white hover:translate-x-3 group">
                    <div className="flex justify-between w-full items-center px-1">
                      <p className="transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        Market Landscaping
                      </p>
                      <div className="pr-6 transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        {"->"}
                      </div>
                    </div>
                  </li>
                </Link>
                <Link href="" className="">
                  <li className="custom-li transition-transform duration-300 ease-in-out hover:bg-[#87bab0] hover:text-white hover:translate-x-3 group">
                    <div className="flex justify-between w-full items-center px-1">
                      <p className="transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        Private Market Intelligence
                      </p>
                      <div className="pr-6 transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                        {"->"}
                      </div>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-4 pt-[80px] bg-[#ebf5ff] w-full ml-0 h-[1200px] max-lg:h-[2720px] ">
        <div className="flex-col justify-center items-center gap-6 ">
          <h1 className="primary-color text-center mb-[16px] text-[2.25rem] text-[#4c7375] font-extrabold leading-[2.75rem] max-lg:text-[25px]">
            Industries
          </h1>
          <div className=" flex justify-center items-center gap-16 ml-auto mr-auto max-lg:flex-col ">
            <div>
              <FieldCard2
                icon={<Fa3 />}
                title="Consulting"
                description="Stop wasting time finding the information you need. Let our platform do the manual work for you, so you can win more business and deliver better client service."
              />
              <FieldCard2
                icon={<Fa3 />}
                title="Consulting"
                description="Stop wasting time finding the information you need. Let our platform do the manual work for you, so you can win more business and deliver better client service."
              />
              <FieldCard2
                icon={<Fa3 />}
                title="Consulting"
                description="Stop wasting time finding the information you need. Let our platform do the manual work for you, so you can win more business and deliver better client service."
              />
              <FieldCard2
                icon={<Fa3 />}
                title="Consulting"
                description="Stop wasting time finding the information you need. Let our platform do the manual work for you, so you can win more business and deliver better client service."
              />
            </div>
            <div>
              <FieldCard2
                icon={<Fa3 />}
                title="Consulting"
                description="Stop wasting time finding the information you need. Let our platform do the manual work for you, so you can win more business and deliver better client service."
              />
              <FieldCard2
                icon={<Fa3 />}
                title="Consulting"
                description="Stop wasting time finding the information you need. Let our platform do the manual work for you, so you can win more business and deliver better client service."
              />
              <FieldCard2
                icon={<Fa3 />}
                title="Consulting"
                description="Stop wasting time finding the information you need. Let our platform do the manual work for you, so you can win more business and deliver better client service."
              />
              <FieldCard2
                icon={<Fa3 />}
                title="Consulting"
                description="Stop wasting time finding the information you need. Let our platform do the manual work for you, so you can win more business and deliver better client service."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-4 pt-[80px] bg-white w-full ml-0 h-[600px] max-lg:max-w-[430px] max-lg:h-[870px] max-lg:hidden ">
        <div className="flex-col justify-center items-center gap-6  ">
          <h1 className="text-[26px] leading-[32px] mb-[40px] text-left ml-[365px] max-w-[750px] font-bold max-lg:ml-4">
            Discover how our customers make smarter decisions faster.
          </h1>
          <div className=" flex justify-center items-center max-lg:ml-4 ">
            <SwiperContent />
          </div>
        </div>
      </div>
      <div className="flex-col relative justify-center items-center gap-4 pt-[80px] bg-[#0b272d] w-full ml-0 h-[350px] max-lg:z-[-2] ">
        <div className="flex justify-center items-start h-full ">
          <div className=" bottom-0 left-0 absolute  max-lg:z-[-1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="376"
              height="302"
              viewBox="0 0 376 302"
            >
              <path
                d="M251.2 45.3999H249.8V50.1999H245V51.5999H249.8V56.3999H251.2V51.5999H256V50.1999H251.2V45.3999Z"
                fill="grey"
              ></path>
              <path
                d="M371.2 170.2V165.4H369.8V170.2H365V171.6H369.8V176.4H371.2V171.6H376V170.2H371.2Z"
                fill="grey"
              ></path>
              <path
                d="M251.2 285.4H249.8V290.2H245V291.6H249.8V296.4H251.2V291.6H256V290.2H251.2V285.4Z"
                fill="grey"
              ></path>
              <path
                d="M371.2 285.4H369.8V290.2H365V291.6H369.8V296.4H371.2V291.6H376V290.2H371.2V285.4Z"
                fill="grey"
              ></path>
              <path
                d="M11.2 45.3999H9.8V50.1999H5V51.5999H9.8V56.3999H11.2V51.5999H16V50.1999H11.2V45.3999Z"
                fill="grey"
              ></path>
              <path
                d="M131.2 45.3999H129.8V50.1999H125V51.5999H129.8V56.3999H131.2V51.5999H136V50.1999H131.2V45.3999Z"
                fill="grey"
              ></path>
              <path
                d="M11.2 165.4H9.8V170.2H5V171.6H9.8V176.4H11.2V171.6H16V170.2H11.2V165.4Z"
                fill="grey"
              ></path>
              <path
                d="M131.2 165.4H129.8V170.2H125V171.6H129.8V176.4H131.2V171.6H136V170.2H131.2V165.4Z"
                fill="grey"
              ></path>
              <path
                d="M11.2 285.4H9.8V290.2H5V291.6H9.8V296.4H11.2V291.6H16V290.2H11.2V285.4Z"
                fill="grey"
              ></path>
              <path
                d="M131.2 285.4H129.8V290.2H125V291.6H129.8V296.4H131.2V291.6H136V290.2H131.2V285.4Z"
                fill="grey"
              ></path>
              <path
                d="M249.7 170.2H245V171.6H249.7C249.5 223.8 225.5 270.5 188 301.4H190.3C227.3 270.2 251 223.6 251.2 171.6H256V170.2H251.2C250.9 76.3 174.5 0 80.5 0C51.4 0 24 7.3 0 20.2V21.9C24 8.9 51.4 1.5 80.5 1.5C173.6 1.5 249.4 77.1 249.7 170.2Z"
                fill="grey"
              ></path>
            </svg>
          </div>
          <div className=" flex-col justify-center items-start text-white">
            <h1 className="  text-[2.25rem] font-extrabold leading-[2.75rem] text-center max-lg:text-[25px] max-lg:mb-4">
              Ready to get started?
            </h1>
            <p className=" max-w-[900px]  text-center max-lg:text-[16px]">
              Every second wasted is an opportunity for your competition to gain
              an edge. Take the lead in your industry with AlphaSense, and make
              more confident, data-driven decisions. Contact sales
            </p>
            <div className=" flex mt-[50px] justify-center items-center">
              <Link
                href=""
                className=" px-5 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0b272d] text-[#fefefe] no-underline font-semibold bg-[#4c7375] rounded-[4px] "
              >
                Start my free trial
              </Link>
              <Link
                href=""
                className=" ml-10 flex group transition-all duration-200 ease-in-out max-lg:group "
              >
                Contact sales{" "}
                <div className=" ml-2 group-hover:translate-x-3 duration-200 ease-in-out">
                  -{">"}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;
