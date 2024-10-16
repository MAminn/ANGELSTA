// server/models/User.ts

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  isVerified: { type: Boolean, default: false }, // Field to track email verification
});

const UserInfo = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserInfo;
