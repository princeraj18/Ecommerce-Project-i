import express from "express";

import {
  getAllUsers,
  deleteUser,
  updateUserRole,
  getSingleUser
} from "../controllers/admin.controller.js";

import { protect } from "../middleware/auth.middlewar.js";
import { adminOnly } from "../middleware/Admin.Auth.middleware.js";

const router = express.Router();

// Only admin routes (we will protect later with role check)
router.get("/users", protect,adminOnly, getAllUsers);

router.get("/users/:id", protect, adminOnly, getSingleUser);

router.delete("/users/:id", protect, adminOnly, deleteUser);

router.put("/users/:id", protect, adminOnly, updateUserRole);

export default router;