import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";


connectDB();

const app = express();



app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("ShopEase Backend is Running");
});

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});