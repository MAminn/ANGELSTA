"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const FollowingPage = () => {
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
    <div className=" w-full h-full flex justify-center items-center bg-[#E3E8EC]">
      <div className=" w-full h-full  flex-col justify-center items-center">
        <div className=" h-[510px] bg-white flex justify-center items-center my-[50px] w-full  ">
          <div className=" flex-col justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-center">
              <h1 className=" text-center mb-6 text-[1.75rem] font-semibold max-lg:text-xl max-md:text-lg">
                Follow your first company here:
              </h1>
              <button onClick={toggleMenu} className="btn-custom ">
                Follow Company
              </button>
            </div>

            {/* Overlay that appears when the menu is open */}
            {isOpen && (
              <div className="fixed inset-0 bg-black opacity-50 z-30 max-lg:hidden "></div>
            )}
            {/* pop up form */}

            <div
              ref={menuRef}
              className={`fixed top-[40%] left-1/2 max-lg:top-[400px] h-[280px] max-lg:h-[330px] w-[800px] bg-white shadow-lg transform transition-all duration-500 ease-in-out max-lg:w-full max-lg:max-w-[430px] ${
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

              <h2 className="text-[25px] bg-[#f2f4f6] h-[70px] p-4 font-semibold leading-[2.75rem] mb-3 max-lg:text-black max-lg:text-[20px] max-lg:mb-0">
                Follow Company
              </h2>
              <div className="px-[40px] pt-4 ">
                <form>
                  {/* Email input */}
                  <div className="mb-8 max-lg:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Add Company to follow
                    </label>

                    <select
                      name=""
                      id=""
                      className="w-full px-4 py-2 bg-[#F2F4F6] border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 max-lg:text-black"
                    >
                      <option value="">Dummy1</option>
                      <option value="">Dummy2</option>
                      <option value="">Dummy3</option>
                      <option value="">Dummy4</option>
                    </select>
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
                    <button>Follow Company</button>
                  </Link>
                </div> */}
                <div className=" right-[30px] mt-4 max-lg:mt-[30px] max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-0 max-md:mt-4">
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

export default FollowingPage;
