import { Router } from "express";
import {
  getAllUsers,
} from "../controllers/UserController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { isAdmin } from "../middlewares/AdminMiddleware.js";

const userManagementRoutes = Router();

userManagementRoutes.get("/get-all-users",  getAllUsers);


export default userManagementRoutes;
