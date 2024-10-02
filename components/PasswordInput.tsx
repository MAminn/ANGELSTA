"use client";
import React, { useEffect } from "react";

const PasswordInput: React.FC = () => {
  useEffect(() => {
    const passwordInput = document.getElementById(
      "password-input"
    ) as HTMLInputElement;
    const requirements = document.getElementById(
      "password-requirements"
    ) as HTMLDivElement;
    const container = document.getElementById(
      "password-container"
    ) as HTMLDivElement;

    const handleFocus = () => {
      requirements.classList.remove("invisible", "opacity-0", "scale-95");
      requirements.classList.add("opacity-100", "scale-100");
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (container && !container.contains(event.target as Node)) {
        requirements.classList.remove("opacity-100", "scale-100");
        requirements.classList.add("opacity-0", "scale-95", "invisible");
      }
    };

    passwordInput.addEventListener("focus", handleFocus);
    document.addEventListener("click", handleClickOutside);

    return () => {
      passwordInput.removeEventListener("focus", handleFocus);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" id="password-container">
      <input
        type="password"
        placeholder="Enter password"
        className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
        id="password-input"
      />

      <div
        id="password-requirements"
        className="absolute top-full mt-2 w-full p-4 bg-gray-100 border rounded-md opacity-0 transform invisible  scale-95 transition-all duration-300 ease-in-out"
      >
        <p className="text-gray-700">Password must include:</p>
        <ul className="list-disc list-inside text-sm text-gray-600">
          <li>At least 8 characters</li>
          <li>At least one uppercase letter</li>
          <li>At least one lowercase letter</li>
          <li>At least one number</li>
          <li>At least one special character</li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordInput;
