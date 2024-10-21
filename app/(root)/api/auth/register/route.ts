import { NextResponse } from "next/server";
import UserInfo from "@/server/models/User"; // Ensure this path is correct
import bcrypt from "bcrypt";
import connectToDB from "@/server/lib/mongodb";
import sendVerificationEmail from "@/server/lib/sendVerificationEmail";

export async function POST(request: Request) {
  const { email, password, role } = await request.json();

  // Validate input
  if (!email || !password || !role) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  // Connect to the database
  await connectToDB();

  // Check if the user already exists
  const existingUser = await UserInfo.findOne({ email });
  if (existingUser) {
    return NextResponse.json(
      { error: "User already exists." },
      { status: 400 }
    );
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user with verified set to false initially
  const user = new UserInfo({
    email,
    password: hashedPassword,
    role,
    verified: false,
  });
  await user.save();

  // Send verification email
  await sendVerificationEmail(email);

  return NextResponse.json(
    {
      message:
        "User registered successfully. Please check your email to verify your account.",
    },
    { status: 201 }
  );
}
