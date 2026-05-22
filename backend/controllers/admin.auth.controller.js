import jwt from "jsonwebtoken";
import Admin from "../models/Admin.model.js";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    if (!admin.isActive) {
      return res.status(403).json({ message: "Admin account is disabled" });
    }

    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      permissions: admin.permissions,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
