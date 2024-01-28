import express from "express";
import {
  submitFeedback,
  getAllFeedbacks,
} from "../controllers/FeedbackControllers.js";

const router = express.Router();

router.post("/submit", submitFeedback);
router.get("/get-all-feedbacks", getAllFeedbacks);

export default router;
