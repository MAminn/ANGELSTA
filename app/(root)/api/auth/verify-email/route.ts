import { NextResponse } from "next/server";
import UserInfo from "@/server/models/User"; // Ensure this path is correct
import Token from "@/server/models/Token"; // Ensure this path is correct
import connectToDB from "@/server/lib/mongodb";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Token is missing" }, { status: 400 });
  }

  // Connect to the database
  await connectToDB();

  try {
    // Find the token record in the database
    const tokenRecord = await Token.findOne({ token });

    if (!tokenRecord) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // Find the user associated with the token
    const user = await UserInfo.findOne({ email: tokenRecord.email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.isVerified) {
      return NextResponse.json(
        { error: "User already verified" },
        { status: 400 }
      );
    }

    // Mark the user as verified
    await user.updateOne({ isVerified: true });

    // Optionally, you can delete the token record after verification
    await tokenRecord.deleteOne();
    console.log("Token Record: ", tokenRecord);
    console.log("User: ", user);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred during verification" },
      { status: 500 }
    );
  }
  return redirect("/auth/signin"); // Redirect to the sign-in page after successful verification
}
