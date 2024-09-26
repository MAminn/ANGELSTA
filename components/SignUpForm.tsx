"use client";

import React, { useState } from "react";

const SignUpForm = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions.");
    }
  };

  return (
    <div className="flex justify-center items-center h-full mt-[150px] bg-gray-50 w-full">
      <div className="w-full max-w-md bg-white shadow-md rounded-md p-8">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Create your account
        </h1>
        <p className="text-center mb-6 text-gray-600">
          A few last details and we’ll get to work helping you build an
          investable company!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                className="block text-sm font-semibold text-gray-700"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <label
                className="block text-sm font-semibold text-gray-700"
                htmlFor="lastName"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-semibold text-gray-700"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="me@my-domain.com"
            />
          </div>

          <div>
            <label
              className="block text-sm font-semibold text-gray-700"
              htmlFor="password"
            >
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I accept the{" "}
              <a href="#" className="text-blue-500 underline">
                terms and conditions
              </a>
            </label>
          </div>

          {/* Replace with actual reCAPTCHA implementation */}
          <div className="mt-4">
            <div className="border rounded p-2 bg-gray-100 text-sm text-gray-500">
              reCAPTCHA goes here
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gray-300 text-gray-500 rounded-md shadow-sm font-semibold cursor-not-allowed"
              disabled
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
