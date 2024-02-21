import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`database connected with ${connection.connection.host} host`.bgCyan.bold);
    return connection;
  } catch (error) {
    console.log("error while connecting to database", error);
    throw error;
  }
};

export default connectDB;
