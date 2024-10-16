import mongoose, { Document, Schema, Model } from "mongoose";

// Interface for Token Document
interface TokenDocument extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  token: string;
  createdAt: Date;
}

// Define Token Schema
const TokenSchema: Schema<TokenDocument> = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User", // Reference to the User model
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    expires: 3600, // Token will automatically be deleted after 1 hour
  },
});

// Create the Token model
const Token: Model<TokenDocument> =
  mongoose.models.Token || mongoose.model<TokenDocument>("Token", TokenSchema);

export default Token;
