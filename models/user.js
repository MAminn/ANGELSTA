import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required!"],
      unique: [true, "Email already Exists!"],
    },
    // username: {
    //   type: String,
    //   required: [true, "Username is required!"],
    //   match: [
    //     /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    //     "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    //   ],
    //   image: {
    //     type: String,
    //   },
    // },
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
  },
  { timestamps: { createdAt: "createdDate", updatedAt: "updatedDate" } }
);

const User = models.User || model("User", UserSchema);

export default User;
