import nodemailer from "nodemailer";
import { createTokenRecord } from "../models/Token";

const sendVerificationEmail = async (email: string) => {
  // Ensure NEXTAUTH_URL is defined
  const baseUrl = process.env.NEXTAUTH_URL;
  if (!baseUrl) {
    throw new Error(
      "NEXTAUTH_URL is not defined in the environment variables."
    );
  }

  // Create a token for verification
  const token = await createTokenRecord(email);

  // Construct the verification URL
  const verificationUrl = `${baseUrl}/api/auth/verify-email?token=${token}`;

  // Set up nodemailer transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email",
    html: `<p>Please click the following link to verify your email:</p>
           <a href="${verificationUrl}">${verificationUrl}</a>`,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};

export default sendVerificationEmail;
