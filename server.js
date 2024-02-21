import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";

// app object
const app = express();

// config dotenv
dotenv.config();

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// user routes
app.use("/user", userRoute);

const PORT = process.env.PORT || 8080;

// confid db
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app running on port ${PORT}`.bgBlack.blue);
    });
  })
  .catch((error) => {
    console.log(
      `database not connected so port will not start ${error}`.bgRed.bold
    );
  });
