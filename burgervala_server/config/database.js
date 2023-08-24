
import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect("mongodb://localhost:27017/burgervala");

  console.log(`Database is connect with ${connection.host}`);
};