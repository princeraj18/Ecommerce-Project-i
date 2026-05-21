import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import paymentRoutes from "./routes/Payment.route.js";
import orderRoutes from "./routes/Order.route.js";
import productRoutes from "./routes/Product.route.js";
import adminRoutes from "./routes/Admin.route.js";


connectDB();

const app = express();



app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);
app.get("/", (req, res) => {
  res.send("ShopEase Backend is Running");
});

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});