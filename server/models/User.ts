// server/models/User.ts

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  isVerified: { type: Boolean, default: false }, // Field to track email verification
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const UserInfo = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserInfo;
