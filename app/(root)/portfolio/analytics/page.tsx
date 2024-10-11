"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const AnalyticsPage = () => {
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
    <div className=" w-full h-full flex justify-center items-center bg-[#E3E8EC] max-md:p-[2rem] p-[5rem] ">
      <div className=" w-full h-full  flex-col justify-center items-center">
        <div className=" flex justify-center items-center bg-[#f2f4f6] h-[130px]">
          <h1 className=" uppercase text-[1.5625rem] font-semibold p-8 text-center max-lg:text-base max-md:text-[0.76rem]">
            Welcome to your startup investment portfolio on Kingscrowd.
          </h1>
        </div>
        <div className=" h-[510px] max-md:h-[450px] bg-white flex justify-center items-center  max-md:items-start max-md:p-4  ">
          <div className=" flex-col justify-center items-center gap-8">
            <p className=" max-w-[500px]  text-center mb-6 text-[1.25rem] max-lg:text-base max-lg:max-w-[250px] max-lg:pl-6 max-md:text-xs  max-md:p-4  max-md:mb-0">
              Now you can track all of your startup investments in one place
              utilizing our state-of-the-art portfolio tracker tools.
            </p>
            <div className="h-[2px] bg-gray-300 mb-6 max-md:mb-0"></div>
            <p className=" max-w-[500px] text-center mb-10 max-lg:text-base max-lg:max-w-[250px] max-lg:pl-6 max-md:text-xs max-md:p-4 max-md:mb-0">
              Whether you have invested in 1 or 100 startups online, you can
              easily add your investments to a free Kingscrowd portfolio to
              receive portfolio breakdowns and tracking.
            </p>
            <button
              onClick={toggleMenu}
              className="btn-custom ml-[170px] max-md:ml-0 max-md:w-full  max-lg:ml-[50px] max-sm:text-[10px] max-sm:py-2 max-sm:px-4 "
            >
              Create Portfolio
            </button>
            {/* Overlay that appears when the menu is open */}
            {isOpen && (
              <div className="fixed inset-0 bg-black opacity-50 z-30 max-lg:hidden "></div>
            )}
            {/* pop up form */}

            <div
              ref={menuRef}
              className={`fixed top-[50%] left-1/2 h-[600px] max-lg:h-[780px] w-[800px] bg-white shadow-lg transform transition-all duration-500 ease-in-out max-lg:w-full max-lg:max-w-[430px] ${
                isOpen
                  ? "opacity-100 scale-100 translate-x-[-50%] translate-y-[-50%]"
                  : "opacity-0 scale-50 translate-x-[-50%] translate-y-[-50%] hidden"
              } z-40`}
            >
              {/* Close button */}
              <button
                className="text-[#0160ff] absolute top-4 right-4 text-[30px]"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>

              <h2 className="text-[25px] bg-[#f2f4f6] h-[70px] p-4  font-semibold leading-[2.75rem] mb-3 max-lg:text-black max-lg:text-[25px] max-lg:mb-0">
                Create Portfolio
              </h2>
              <div className="px-[40px] pt-4 ">
                <p className="mb-6 max-lg:text-black">
                  Track all of your startup investments in one place using our
                  state-of-the-art portfolio tracker tools. Get advanced
                  portfolio analytics about your holdings, track valuations and
                  exits over time, add notes, and much more.
                </p>
                <form>
                  {/* Email input */}
                  <div className="mb-8">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Portfolio Name
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-2 bg-[#F2F4F6] border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 max-lg:text-black"
                      placeholder="Portfolio Name"
                    />
                  </div>

                  {/* Phone input */}
                  <div className="mb-8">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Portfolio Description
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-2 bg-[#F2F4F6] border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 max-lg:text-black"
                      placeholder="Portfolio Description"
                    />
                  </div>

                  {/* Role dropdown */}
                  <div className="mb-8">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Investment Max
                    </label>
                    <div className=" flex justify-center items-center">
                      <div className="px-4 py-2 bg-[#E3E8EC] rounded-sm border">
                        $
                      </div>
                      <input
                        required
                        type="tel"
                        className="w-full px-4 py-2 bg-[#F2F4F6] border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 max-lg:text-black"
                        placeholder="25000"
                      />
                    </div>
                  </div>
                </form>

                {/* Submit button */}
                {/* <div className=" right-[20px] absolute mt-4">
                  <Link
                    href=""
                    type="submit"
                    className=" border-black border   mr-4  w-[40px] px-[40px] py-3 rounded-md max-lg:px-[100px]"
                  >
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                  </Link>
                  <Link
                    href=""
                    type="submit"
                    className="btn-custom rounded-md transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0160ff] w-[400px] px-[200px] py-3 max-lg:px-[100px]"
                  >
                    <button>Create Portfolio</button>
                  </Link>
                </div> */}
                <div className=" mt-4 max-lg:mt-[10px] max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-0 max-md:mt-0">
                  <Link
                    href=""
                    type="submit"
                    className=" border-black border   mr-4  w-[40px] px-[40px] py-3 rounded-md max-lg:px-[100px] max-lg:py-[10px] max-lg:text-center max-lg:mr-0 max-lg:flex max-lg:justify-center max-lg:items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Cancel</span>
                  </Link>
                  <Link
                    href=""
                    type="submit"
                    className="btn-custom rounded-md transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0160ff] w-[400px] px-[200px] py-3 max-lg:px-[100px] max-lg:mt-[20px] max-lg:flex max-lg:justify-center max-lg:items-center max-md:mt-[15px] max-md:w-[250px]"
                  >
                    <span>Create Portfolio</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
