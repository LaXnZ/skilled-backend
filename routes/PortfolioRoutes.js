import { Router } from "express";

import { verifyToken } from "../middlewares/AuthMiddleware.js";
import {
    storePortfolio,
    viewPortfolio,
} from "../controllers/PortfolioController.js";

export const portfolioRoutes = Router();

portfolioRoutes.post("/", storePortfolio);
portfolioRoutes.get("/portfolio/user", verifyToken, viewPortfolio);
