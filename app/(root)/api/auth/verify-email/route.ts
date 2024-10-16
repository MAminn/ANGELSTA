// app/api/auth/verify-email/route.ts

import { NextResponse } from "next/server";
import Token from "@/server/models/Token"; // Adjust the path according to your structure
import UserInfo from "@/server/models/User"; // Ensure the path is correct

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tokenValue = searchParams.get("token");

  if (!tokenValue) {
    return NextResponse.json({ error: "Token is required." }, { status: 400 });
  }

  // Verify token
  const tokenRecord = await Token.findOne({ token: tokenValue });
  if (!tokenRecord) {
    return NextResponse.json(
      { error: "Invalid or expired token." },
      { status: 400 }
    );
  }

  // Here you can update the user status to verified if needed
  const user = await UserInfo.findById(tokenRecord.userId);
  if (!user) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  // Update user as verified
  user.isVerified = true; // Assuming you have an isVerified field
  await user.save();

  // Delete the token record
  await tokenRecord.deleteOne(); // Use deleteOne() to remove the record

  return NextResponse.json(
    { message: "Email verified successfully." },
    { status: 200 }
  );
}
