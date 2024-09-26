import React from "react";

interface FlipCardText {
  title?: string;
  className?: string;
}

const FlipCard: React.FC<FlipCardText> = ({ title, className }) => {
  return (
    <div className="pt-[30px]">
      <div
        className={`w-[370px] h-[190px] bg-white shadow-xl flex justify-center items-center text-[32px] leading-[38px] mb-0 relative font-bold overflow-hidden transition-all duration-200 ease-in-out group  hover:text-white ${
          className || ""
        }`}
      >
        {/* Main title */}
        <h3 className="max-w-[240px] text-center z-10 transition-all duration-200 ease-in-out group-hover:translate-y-[-20px]">
          {title || "Default Title"}
        </h3>

        {/* Sliding Bar from the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#0160ff] transition-all duration-200 ease-in-out group-hover:h-full"></div>

        {/* Learn More Button */}
        <button className="absolute bottom-[10px] opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:bottom-[30px]  text-white px-3 py-2 text-sm rounded z-20">
          Learn More -{">"}
        </button>
      </div>
    </div>
  );
};

export default FlipCard;
