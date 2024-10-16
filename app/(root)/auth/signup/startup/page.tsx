import SignupForm from "@/components/Signup";
import React from "react";

const Page = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full ">
      <h1>Sign up as startup</h1>
      <SignupForm role="startup" />
    </div>
  );
};

export default Page;
