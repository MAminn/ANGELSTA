import auth from "@/auth";
import SignIn from "@/components/signin";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const session = await auth();
  if (session?.user.isVerified === true) {
    redirect("/portfolio/investments");
  }
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default Page;
