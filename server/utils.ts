import { Session } from "next-auth";
import { redirect } from "next/navigation";
import nodemailer from "nodemailer";
import Token from "./models/Token";
import crypto from "crypto";

// export default function guardSession(
//   session?: Session | null
// ): session is Session {
//   if (!session) {
//     redirect("/auth/signin");
//   }
//   return true;
// }

export async function sendVerificationEmail(user: {
  id: string;
  email: string;
}) {
  const verificationToken = crypto.randomBytes(32).toString("hex");

  // Save token to the database (associate it with the user)
  await new Token({
    userId: user.id,
    token: verificationToken,
    createdAt: Date.now(),
  }).save();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${verificationToken}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: "Verify Your Email",
    text: `Click on the following link to verify your email: ${verificationUrl}`,
    html: `<p>Click on the following link to verify your email:</p><a href="${verificationUrl}">${verificationUrl}</a>`,
  };

  await transporter.sendMail(mailOptions);
}

export function guardVerifiedSession(session?: Session | null) {
  if (!session) {
    return;
  }
  if (session?.user.isVerified === true) {
    if (session.user.role === "startup") {
      redirect("/startup-portfolio/ai-valuation");
    }

    if (session.user.role === "investor") {
      redirect("/portfolio/investments");
    }
  }
}
