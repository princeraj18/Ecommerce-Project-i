import express from "express";

import {
  registerAdmin,
  loginAdmin,
} from "../controllers/admin.controller.js";
import {
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUserRole,
} from "../controllers/admin.controller.js";

import { protect } from "../middleware/auth.middlewar.js";

import { adminOnly } from "../middleware/Admin.Auth.middleware.js";
const router = express.Router();

router.post("/register", registerAdmin);

router.post("/login", loginAdmin);


// ---------------- ADMIN USER ROUTES ----------------

// Get all users
router.get(
  "/users",
  protect,
  adminOnly,
  getAllUsers
);


// Get single user
router.get(
  "/users/:id",
  protect,
  adminOnly,
  getSingleUser
);


// Delete user
router.delete(
  "/users/:id",
  protect,
  adminOnly,
  deleteUser
);


// Update user role
router.put(
  "/users/:id/role",
  protect,
  adminOnly,
  updateUserRole
);


export default router;
