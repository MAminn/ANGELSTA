import mongoose from "mongoose";

let isConnected = false; // track the connection

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next-auth",
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
