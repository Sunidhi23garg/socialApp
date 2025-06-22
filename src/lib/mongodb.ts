import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

export const connectToDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "socialapp",
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
