import express from "express";

import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

import { protect } from "../middleware/auth.middlewar.js";

const router = express.Router();

// Admin actions
router.post("/", protect, createProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

// Public actions
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

export default router;