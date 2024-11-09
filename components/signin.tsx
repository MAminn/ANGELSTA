"use client";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const router = useRouter();
  const [showCard, setShowCard] = useState(false);
  const [message, setMessage] = useState(""); // New state for messages

  useEffect(() => {
    setTimeout(() => setShowCard(true), 100);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when form is submitted
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false); // Set loading state to false after sign-in attempt

    if (result?.error) {
      setMessage("Please make sure to verify your Email"); // Customize based on error content
    } else {
      setMessage(`Login successful, Welcome ${email}`);
      router.refresh(); // Optional: redirect or refresh
    }
  };

  return (
    <div className="flex items-center justify-center h-navbar-height bg-gradient-to-br from-[#0b1723] via-[#4d7275] to-[#d1d7d7] p-4">
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 mt-10 relative z-10 transition-transform duration-700 ${
          showCard ? "scale-100" : "scale-0"
        }`}
      >
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-500 transition duration-200"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-500 transition duration-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#0b272d] to-[#4d7275] text-white rounded-lg px-4 py-2 transition duration-300 hover:bg-gradient-to-l hover:from-[#4d7275] hover:to-[#0b272d]"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Signing In..." : "Sign In"} {/* Dynamic button text */}
        </button>

        {message && (
          <p
            className={`text-sm mt-4 text-center ${
              message.includes("successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default SignIn;
