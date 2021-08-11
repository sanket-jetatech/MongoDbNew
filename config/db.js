import mongoose from "mongoose";
import usersModel from "./../models/users.model.js";

const connectDB = async () => {
  try {
    //database Name
    const databaseName = "SmartWorks";
    const con = await mongoose.connect(
      `mongodb://127.0.0.1:27017/${databaseName}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log(`Database connected : ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
