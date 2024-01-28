import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/AuthRoutes.js";
import cookieParser from "cookie-parser";
import gigRoutes from "./routes/GigRoutes.js";
import { orderRoutes } from "./routes/OrderRoutes.js";
import { messageRoutes } from "./routes/MessageRoutes.js";
import { dashboardRoutes } from "./routes/DashboardRoutes.js";
import feedbackRoutes from './routes/FeedbackRoutes.js';
import userManagementRoutes from "./routes/UserManagementRoutes.js";
import * as paypal from "./paypal-api.js";
import { portfolioRoutes } from "./routes/PortfolioRoutes.js";

const { PORT = 3001, PUBLIC_URL } = process.env;

dotenv.config();

const app = express();

app.use(
  cors({
    origin: 'https://skilled-final.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
);


app.use("/uploads/profiles", express.static("uploads/profiles"));
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/gigs", gigRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/dashboard", dashboardRoutes);
// Importing feedback routes
app.use('/api/feedback', feedbackRoutes);
app.use('/api/users', userManagementRoutes);
app.use('/api/portfolio', portfolioRoutes);

app.post(`/my-server/create-paypal-order`, async (req, res) => {
  try {
    const order = await paypal.createOrder(req.body);
    res.json(order);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post(`/my-server/capture-paypal-transaction`, async (req, res) => {
  const { orderID } = req.body;
  try {
    const captureData = await paypal.captureOPayment(orderID);
    res.json(captureData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
