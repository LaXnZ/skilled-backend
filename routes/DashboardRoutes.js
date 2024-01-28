import { Router } from "express";

import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { getSellerData, getAdminDashboardData } from "../controllers/DashboardController.js";
import { isAdmin } from "../middlewares/AdminMiddleware.js";

export const dashboardRoutes = Router();

dashboardRoutes.get("/seller", verifyToken, isAdmin, getSellerData);
dashboardRoutes.get("/admin/analytics",  getAdminDashboardData);