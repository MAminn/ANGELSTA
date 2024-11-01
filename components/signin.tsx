// "use client";
// import { signIn } from "next-auth/react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     if (result?.error) {
//       // Handle sign-in error
//       console.error(result.error);
//     } else {
//       router.refresh(); // Redirect on success
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className=" w-full h-full flex flex-col justify-center items-center gap-6 mt-14 text-black bg-black-2 rounded-3xl p-10"
//     >
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button
//         type="submit"
//         className=" border border-white text-white px-4 py-2"
//       >
//         Sign In
//       </button>
//     </form>
//   );
// };

// export default SignIn;
"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const router = useRouter();

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
      // Handle sign-in error
      console.error(result.error);
    } else {
      router.refresh(); // Redirect on success
    }
  };

  return (
    <div className="flex items-center justify-center h-screen-navbar bg-gradient-to-br from-[#0b1723] via-[#4d7275] to-[#d1d7d7] p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 mt-10 relative z-10"
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
      </form>
    </div>
  );
};

export default SignIn;
