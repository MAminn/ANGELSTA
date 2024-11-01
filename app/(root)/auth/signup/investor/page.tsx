import SignupForm from "@/components/Signup";
import React from "react";

const Page = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full ">
      <SignupForm role="investor" />
    </div>
  );
};

export default Page;
