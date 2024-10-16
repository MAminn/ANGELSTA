import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col gap-4 justify-center items-center mt-14 bg-black-2 rounded-3xl p-12 text-white">
      <Link
        href="/auth/signup/investor"
        className=" border border-white px-4 py-2"
      >
        Sign up as investor
      </Link>
      <Link
        href="/auth/signup/startup"
        className=" border border-white px-4 py-2"
      >
        Sign up as startup
      </Link>
    </div>
  );
};

export default page;
