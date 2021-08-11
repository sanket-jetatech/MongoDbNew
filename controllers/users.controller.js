import User from "../models/users.model.js";
import asyncHandler from "express-async-handler";

//createUser function to create user
export const createUser = asyncHandler(async (req, res) => {
  const userData = new User(req.body);

  const user = await userData.save();

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not Created" });
    res.status(404);
    throw new Error("User not Created");
  }
});

//getUsers function to get all users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

//getUserById function to retrieve user by id
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  //if user id match param id send user else throw error
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
    res.status(404);
    throw new Error("User not found");
  }
});
