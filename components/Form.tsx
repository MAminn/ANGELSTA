"use client";
import React, { useEffect, useState } from "react";

interface FormProps {
  question?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answers?: Array<string> | any;
}

const Form = ({ question, answers }: FormProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the visibility to trigger the animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" flex-col justify-center items-center  bg-white h-full w-full">
      <div
        className={`p-6 bg-white rounded-md transition-all duration-700 ease-in-out transform ml-[100px] max-lg:ml-[20px] ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8 hidden"
        }`}
      >
        <h1 className="text-[24px] mb-4 mt-[60px]  text-[#4d6580] font-semibold leading-tight">
          {question}
        </h1>
        <form>
          {answers.map((color: string, index: number) => (
            <div key={index} className="flex items-center mb-4">
              <input
                type="radio"
                id={color}
                name="favoriteColor"
                value={color}
                className="hidden peer" // Hide the default radio button
              />
              {/* Custom radio button style */}
              <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex justify-center items-center mr-3 cursor-pointer peer-checked:border-[#1AA5AB]  transition-colors">
                <div className="w-3 h-3  peer-checked:bg-[#1AA5AB] bg-slate-400 rounded-full border peer-checked:border-[#1AA5AB] transition-colors"></div>
              </div>
              <label
                htmlFor={color}
                className=" cursor-pointer  text-[24px] leading-[1.14em] text-[#4a4a4a] max-lg:max-w-[300px]"
              >
                {color}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Form;
