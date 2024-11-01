"use client";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SignupPage() {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowCards(true), 100);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:h-navbar-height max-md:min-h-screen max-xs:py-16  bg-gradient-to-br from-[#0b1723] via-[#4d7275] to-[#d1d7d7] overflow-hidden relative">
      <div
        className={`flex flex-col md:flex-row gap-6 md:gap-8 max-w-4xl w-full z-10 transition-transform duration-700 ${
          showCards ? "scale-100" : "scale-0"
        }`}
      >
        {/* Investor Card */}
        <div className="flex-1 bg-white bg-opacity-80 rounded-xl shadow-lg p-6 md:p-8 text-center transform transition-all duration-700 ease-out m-4 border border-transparent hover:border-[#4d7275] hover:shadow-2xl hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
            <span className="relative after:absolute after:content-['Exclusive'] after:bg-indigo-600 after:text-white after:text-xs after:px-2 after:py-1 after:rounded-full after:-top-12 after:right-3">
              Investor
            </span>
          </h2>
          <ul className="text-gray-700 space-y-2 mb-6 flex justify-center items-center flex-col">
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" />
              Exclusive investment opportunities
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" />
              Financial growth insights
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" />
              Financial growth insights
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" />
              Financial growth insights
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" />
              Financial growth insights
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" />
              Financial growth insights
            </li>
          </ul>
          <Link
            href="/auth/signup/investor"
            className="bg-gradient-to-r from-[#0b272d] to-[#4d7275] text-white rounded-xl px-4 py-3 mt-4 hover:from-[#4d7275] hover:to-[#86bab1]  transition-all duration-300 ease-in-out"
          >
            Sign Up as Investor
          </Link>
        </div>

        {/* Startup Card */}
        <div className="flex-1 bg-white bg-opacity-80 rounded-xl shadow-lg p-6 md:p-8 text-center transform transition-all duration-700 ease-out m-4 border border-transparent hover:border-[#86bab1] hover:shadow-2xl hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
            <span className="relative after:absolute after:content-['Growth'] after:bg-green-600 after:text-white after:text-xs after:px-2 after:py-1 after:rounded-full after:-top-12 after:right-3">
              Startup
            </span>
          </h2>
          <ul className="text-gray-700 space-y-2 mb-6 flex justify-center items-center flex-col">
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" /> Networking with
              investors
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" /> Access to startup
              resources
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" /> Access to startup
              resources
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" /> Access to startup
              resources
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" /> Access to startup
              resources
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" /> Access to startup
              resources
            </li>
          </ul>
          <Link
            href="/auth/signup/startup"
            className="bg-gradient-to-r from-[#4d7275] to-[#86bab1] text-white rounded-xl px-4 py-3 mt-4 hover:from-[#86bab1] hover:to-[#d1d7d7] transition-all duration-300"
          >
            Sign Up as Startup
          </Link>
        </div>
      </div>
    </div>
  );
}
