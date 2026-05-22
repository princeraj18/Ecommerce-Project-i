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


// Create order
router.post("/", protect, createOrder);


// Get all logged-in user orders
router.get("/", protect, getUserOrders);


// Get single order
router.get("/:id", protect, getSingleOrder);


// Update order
router.put("/:id", protect, updateOrderStatus);


// Delete order
router.delete("/:id", protect, deleteOrder);


export default router;