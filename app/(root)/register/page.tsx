"use client";
import PasswordInput from "@/components/PasswordInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPassowrd = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");

      return;
    }
    if (!isValidPassowrd(password)) {
      setError("Password is invalid");

      return;
    }
    // if (!password || password.length < 8) {
    //   setError("Password is invalid");
    //   return;
    // }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.status === 400) {
        setError("Email already exists");
      } else if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error registering, try again.");
      console.log(error);
    }
  };
  return (
    <div className=" flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" bg-[#21212121] p-8 rounded shadow-md w-96">
        <h1 className=" text-4xl text-center font-semibold mb-8">Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className=" w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Email"
            required
          />
          <div>
            {/* <input
              type="password"
              className=" w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Password"
              required
            />
            <p>
              Is at least 8 characters long. <br /> Contains at least one
              lowercase letter. <br /> Contains at least one uppercase letter.{" "}
              <br /> Contains at least one number. <br /> Contains at least one
              special character from the set @$!%*?&.
            </p> */}
            <PasswordInput />
          </div>
          <button
            type="submit"
            className=" w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
          <p className=" text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>
        <div className=" text-center text-gray-500 mt-4">- OR -</div>

        <div className=" flex flex-col justify-center items-center mt-6 ">
          <button className="btn-custom mb-8" onClick={() => signIn("google")}>
            Sign in with Google
          </button>

          <Link href="login" className="btn-custom">
            Login with an existing account!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
