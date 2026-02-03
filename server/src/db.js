import mongoose from "mongoose";

export async function connectDB(mongoUri) {
  if (!mongoUri) throw new Error("MONGODB_URI is missing in .env");

  mongoose.set("strictQuery", true);

  await mongoose.connect(mongoUri);
  console.log("✅ MongoDB connected");
}