"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      // Handle sign-in error
      console.error(result.error);
    } else {
      router.refresh(); // Redirect on success
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full h-full flex flex-col justify-center items-center gap-6 mt-14 text-black bg-black-2 rounded-3xl p-10"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className=" border border-white text-white px-4 py-2"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
