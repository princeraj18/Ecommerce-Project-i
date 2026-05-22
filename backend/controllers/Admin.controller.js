import Admin from "../models/Admin.model.js";
import User from "../models/User.model.js";
import jwt from "jsonwebtoken";

export const registerAdmin = async (
  req,
  res
) => {
  try {

    const {
      name,
      email,
      password,
    } = req.body;

    // check existing admin
    const adminExists =
      await Admin.findOne({ email });

    if (adminExists) {
      return res.status(400).json({
        message: "Admin already exists",
      });
    }

    // create admin
    const admin = await Admin.create({
      name,
      email,
      password,
    });

    // generate token
    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const adminData = admin.toObject();
    delete adminData.password;

    res.status(201).json({
      success: true,
      admin: adminData,
      token,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin) {
      return res.status(400).json({
        message: "Admin not found",
      });
    }

    if (!admin.isActive) {
      return res.status(403).json({
        message: "Admin account is disabled",
      });
    }

    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
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
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
