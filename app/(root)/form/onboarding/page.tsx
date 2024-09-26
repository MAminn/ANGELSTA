import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" flex-col justify-center items-center  bg-white h-full w-full">
      <div className=" flex-col justify-center items-center w-full h-full max-lg:h-[685px] ">
        <h1 className="text-center mt-[100px] text-[#1aa5ab] text-[45px]">
          Let’s get started.
        </h1>
        <p className="text-center mt-[100px] lg:max-w-[1000px] mx-auto text-[24px] leading-[32px] font-normal text-[#4a4a4a] max-lg:w-[350px]">
          So we can best help you on your startup journey, please tell us a
          little more about your company, your personal investment into your
          venture, and your access to resources. This should take no longer than
          3 minutes.
        </p>
      </div>
      <div className=" flex justify-center items-center w-full shadow-upwards rounded-xl  h-[67px] bottom-0 absolute  ">
        <div className=" flex justify-center items-center w-full">
          Already have an account?{" "}
          <span className=" text-[#1983CA] underline cursor-pointer ml-3">
            Sign in.
          </span>
        </div>
        <div className=" flex justify-end items-center w-[40px] h-[67px]">
          <Link href="/form/onboarding2">
            <button className=" h-full text-[#fefefe] no-underline font-semibold bg-[#4f46e5] rounded-[4px] pl-6 pr-6 py-5 mr-1">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
