import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

//connect database
connectDB();

//dotenv config
dotenv.config();

const app = express();
app.use(express.json());

//Creating API for user
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

//Express js listen method to run project on http://localhost:5000
app.listen(
  PORT,
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
