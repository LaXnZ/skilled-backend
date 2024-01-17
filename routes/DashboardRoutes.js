import { Router } from "express";

import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { getSellerData, getAdminDashboardData } from "../controllers/DashboardController.js";

export const dashboardRoutes = Router();

dashboardRoutes.get("/seller", verifyToken, getSellerData);
dashboardRoutes.get("/admin/analytics", getAdminDashboardData);