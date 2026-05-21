import express from "express";

import {
  createPayment,
  getUserPayments,
  getSinglePayment,
  updatePaymentStatus,
} from "../controllers/payment.controller.js";

import { protect } from "../middleware/auth.middlewar.js";

const router = express.Router();

router.post("/createPayments", protect, createPayment);

router.get("/userPayments", protect, getUserPayments);

router.get("/singlePayment/:id", protect, getSinglePayment);

router.put("/updatePaymentStatus/:id", protect, updatePaymentStatus);

export default router;