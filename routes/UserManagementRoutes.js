import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
} from "../controllers/UserControllers.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { isAdmin } from "../middlewares/AdminMiddleware.js";

const userManagementRoutes = Router();

userManagementRoutes.get("/get-all-users", verifyToken, isAdmin, getAllUsers);
userManagementRoutes.get("/get-user/:userId", verifyToken, getUserById);
userManagementRoutes.post("/create-user", verifyToken, isAdmin, createUser);
userManagementRoutes.put("/edit-user/:userId", verifyToken, isAdmin, editUser);
userManagementRoutes.delete("/delete-user/:userId", verifyToken, isAdmin, deleteUser);

export default userManagementRoutes;
