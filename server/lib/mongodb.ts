import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Declaring a type for mongoose cache
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached = (globalThis as any).mongoose;

if (!cached) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cached = (globalThis as any).mongoose = { conn: null, promise: null };
}

async function connectToDB() {
  if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable.");
  }
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = { bufferCommands: false };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose.connection;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDB;