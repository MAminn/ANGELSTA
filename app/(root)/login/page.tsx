import { SignIn } from "@/components/loginForm";
import React from "react";
import { auth } from "@/auth";

export default async function LoginPage() {
  const session = await auth();

  return (
    <section className=" flex justify-center items-center">
      <div className=" flex justify-center items-center">
        <SignIn session={session} />
      </div>
    </section>
  );
}
