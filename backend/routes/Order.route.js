import express from "express";

import {
  createOrder,
  getUserOrders,
  getSingleOrder,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/Order.controller.js";

import { protect } from "../middleware/auth.middlewar.js";

const router = express.Router();

router.post("/createOrder", protect, createOrder);

router.get("/userOrders", protect, getUserOrders);

router.get("/singleOrder/:id", protect, getSingleOrder);

router.put("/updateOrderStatus/:id", protect, updateOrderStatus);

router.delete("/deleteOrder/:id", protect, deleteOrder);

export default router;