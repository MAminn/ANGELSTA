import Link from "next/link";
import React from "react";

interface FlipCardProps {
  title?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: Element | any;
  description?: string;
}

const FieldCard2: React.FC<FlipCardProps> = ({
  title,
  className,
  icon,
  description,
}) => {
  return (
    <div className="pt-[30px]">
      <div
        className={`w-[560px] h-[215px] bg-white flex justify-between px-8 items-start mb-0 relative  overflow-hidden max-lg:w-[390px] max-lg:h-[235px] max-lg:justify-center max-lg:overflow-visible max-lg:mb-[50px]   ${
          className || ""
        }`}
      >
        <div className="w-[50px] h-[50px] rounded-[50%] bg-[#0b272d] flex flex-wrap items-center justify-center mt-8 text-white max-lg:absolute max-lg:top-[-60px] max-lg:z-10">
          {icon}
        </div>
        <div className=" flex-col justify-start max-lg:justify-center items-center ">
          {/* Main title */}
          <h3 className="max-w-[240px] text-[18px] font-bold leading-[22px]  uppercase mt-8  max-lg:text-center max-lg:max-w-[500px] ">
            {title || "Default Title"}
          </h3>
          <p className=" max-w-[420px] max-h-[70px] text-[1rem] leading-[22px] mt-4 max-lg:text-center">
            {description}
          </p>

          {/* Learn More Button */}
          <Link
            href=""
            className="absolute bottom-[10px] flex transition-all group duration-200 ease-in-out text-[#0b272d] px-3 py-2 text-sm rounded z-20 max-lg:left-[35%]"
          >
            <div className=" flex transition-transform duration-200 ease-in-out font-bold  ">
              Learn More{" "}
              <div className=" ml-1 transition-all duration-200 ease-in-out group-hover:translate-x-3">
                -{">"}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FieldCard2;
