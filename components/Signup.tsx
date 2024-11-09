"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SignupProps {
  role: "investor" | "startup";
}

const SignupForm: React.FC<SignupProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const [successMessage, setSuccessMessage] = useState(""); // New success message state
  const router = useRouter();

  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowCard(true), 100);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when form is submitted

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
      setTimeout(() => {
        router.replace("/auth/signin");
      }, 3000);

      // Display the success message when email is sent successfully
      setSuccessMessage("We have sent you a verification email!");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false); // Set loading state to false after submission attempt
    }
  };

  return (
    <div className="flex items-center justify-center h-navbar-height w-full bg-gradient-to-br from-[#0b1723] via-[#4d7275] to-[#d1d7d7] p-4">
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 mt-10 relative z-10 transition-transform duration-700 ${
          showCard ? "scale-100" : "scale-0"
        }`}
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Sign Up as {props.role === "startup" ? "Startup" : "Investor"}
        </h1>

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-500 transition duration-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#0b272d] to-[#4d7275] text-white rounded-lg px-4 py-2 transition duration-300 hover:bg-gradient-to-l hover:from-[#4d7275] hover:to-[#0b272d]"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Signing Up..." : "Sign Up"} {/* Dynamic button text */}
        </button>

        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">
            There was an error signing up
          </p>
        )}

        {successMessage && (
          <p className="text-green-500 text-sm mt-4 text-center">
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default SignupForm;
