import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },

    role: {
      type: String,
      enum: ["admin"],
      default: "admin",
    },

    permissions: {
      type: [String],
      default: [
        "CREATE_PRODUCT",
        "UPDATE_PRODUCT",
        "DELETE_PRODUCT",
        "VIEW_ORDERS",
        "MANAGE_USERS",
      ],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);


// ---------------- HASH PASSWORD ----------------
adminSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


// ---------------- MATCH PASSWORD ----------------
adminSchema.methods.matchPassword = async function (
  enteredPassword
) {
  return await bcrypt.compare(
    enteredPassword,
    this.password
  );
};


const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
