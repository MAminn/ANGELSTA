import NextAuth, { User } from "next-auth";
import bcrypt from "bcrypt";
import UserInfo from "./server/models/User"; // Ensure this path is correct
import { AdapterUser } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";
import connectToDB from "./server/lib/mongodb";

// Extend the NextAuth User and Session types to include role and verification status
declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      role: string; // Add role property
      isVerified: boolean; // Add verification status
    } & AdapterUser; // Combine with AdapterUser
  }
  interface User {
    role: string;
    isVerified: boolean;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email?: string;
          password?: string;
        };

        if (!email || !password) {
          throw new Error("Missing email or password");
        }

        // Connect to the database
        await connectToDB();

        // Find the user in MongoDB by email
        const user = await UserInfo.findOne({ email });

        if (!user) {
          throw new Error("No user found with the given email");
        }

        // Check if the user has verified their email
        if (!user.isVerified) {
          throw new Error("Please verify your email to log in.");
        }

        // Verify password using bcrypt
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          throw new Error("Invalid credentials");
        }

        // Return the user object with email, role, and verification status
        return {
          email: user.email,
          role: user.role,
          isVerified: user.isVerified,
        } as User;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
        session.user.isVerified = token.isVerified as boolean;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as User).role;
        token.isVerified = (user as User).isVerified;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
});

export default auth;
