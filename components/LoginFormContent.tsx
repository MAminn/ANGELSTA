"use client";
import React, { useEffect, useState } from "react";
import PasswordInput from "./PasswordInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";

interface LoginFormContentProps {
  action: (formData: FormData) => Promise<{
    success: boolean;
    error?: string;
    updatedSession?: Session | null;
  }>;
  session: Session | null;
}

const LoginFormContent = (props: LoginFormContentProps) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (props.session) {
      router.push("/"); // Redirect to home if already logged in
    }
  }, [props.session, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }
    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const formData = new FormData();
    formData.set("email", email);
    formData.set("password", password);

    setLoading(true);
    const response = await props.action(formData);
    setLoading(false);

    if (response.error || !response.success) {
      setError(response.error || "User is not registered");
    } else {
      // If login is successful, check and set the updated session
      if (response.updatedSession) {
        console.log("User logged in successfully, updating session...");
        // Redirect to home page after successful login
        router.push("/");
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-[#21212121] p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Email"
            required
          />
          <div>
            <PasswordInput />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>

        <div className="text-center text-gray-500 mt-4">- OR -</div>
        <div className="flex justify-center items-center mt-6">
          <Link href="/register" className="btn-custom">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginFormContent;
