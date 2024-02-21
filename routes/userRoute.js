import express from "express";
import {
  getAllUserController,
  createUserController,
  getSingleUserController,
  deleteUserController,
  updateUserController
} from "../controllers/userController.js";

const router = express.Router();

router.post("/create", createUserController);

router.get("/", getAllUserController);

router.get("/:userId", getSingleUserController);

router.delete("/:userId", deleteUserController);

router.put("/:userId", updateUserController);

export default router;
