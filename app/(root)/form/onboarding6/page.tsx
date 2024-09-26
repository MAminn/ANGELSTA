import Form from "@/components/Form";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Form
        question="How much money do you plan to put into your startup over the next 6 months?"
        answers={["$0", "< $1k", "> $1k", "I don't know"]}
      />
      <div className=" flex justify-center items-center w-full shadow-upwards rounded-xl  h-[80px] absolute bottom-0  ">
        <div className=" flex justify-center items-center w-[40px] h-[67px] text-center font-semibold leading-[16px] tracking-[1.66666667px] max-lg:ml-3 text-[#1983CA] lg:ml-[40px] ">
          Back
        </div>
        <div className=" flex justify-center items-center w-full max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:mr-14">
          Already have an account?
          <span className=" text-[#1983CA] underline cursor-pointer ml-3">
            Sign in.
          </span>
        </div>
        <div className=" flex justify-end items-center w-[40px] h-[67px]">
          <Link href="/form/onboarding7">
            <button className=" h-full text-[#fefefe] no-underline font-semibold bg-[#4f46e5] rounded-[4px] pl-8 pr-8 py-4 mr-0 uppercase max-lg:pl-6 max-lg:pr-6 max-lg:py-3">
              save & continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
