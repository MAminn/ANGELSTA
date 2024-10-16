"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SignupProps {
  role: "investor" | "startup";
}

const SignupForm: React.FC<SignupProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role: props.role }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "An error occurred");
      }

      const data = await response.json();
      console.log(data.message); // Handle success (e.g., redirect to login)
      // Redirect to the sign-in page after successful signup
      router.replace("/auth/signin"); // Change to the path of your sign-in page
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full h-full flex flex-col justify-center items-center gap-6 mt-14 text-black bg-black-2 rounded-3xl p-10"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button
        type="submit"
        className=" border border-white text-white px-4 py-2"
      >
        Sign Up
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default SignupForm;
