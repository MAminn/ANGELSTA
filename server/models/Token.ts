import { Schema, model, models } from "mongoose";
import crypto from "crypto";

const TokenSchema = new Schema({
  email: { type: String, required: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 3600 }, // Token expires in 1 hour
});

const Token = models.Token || model("Token", TokenSchema);
export default Token;

export async function createTokenRecord(email: string) {
  // Generate a secure token
  const token = crypto.randomBytes(32).toString("hex");

  // Create a new token record
  const tokenRecord = new Token({
    email,
    token,
  });

  // Save the token record in the database
  await tokenRecord.save();

  return token;
}
