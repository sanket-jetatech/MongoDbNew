import {
  getUsers,
  getUserById,
  createUser,
} from "../controllers/users.controller.js";

import express from "express";

const router = express.Router();

// express router method to create route for getting all users
router.route("/").post(createUser);

// express router method to create route for getting all users
router.route("/").get(getUsers);

// express router method to create route for getting users by id
router.route("/:id").get(getUserById);

export default router;