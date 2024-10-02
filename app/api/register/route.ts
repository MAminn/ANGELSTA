import User from "@/models/user";
import connectToDB from "@/utils/database";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const POST = async (request: any) => {
  const { email, password } = await request.json();

  await connectToDB();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("User already exists", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User created successfully", { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
