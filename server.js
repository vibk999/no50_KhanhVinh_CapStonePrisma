import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import imageRoutes from "./routes/image.route.js";
import userRoutes from "./routes/user.route.js";
import { verifyToken } from "./middlewares/auth.middleware.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (public)
app.use("/api/auth", authRoutes);
app.use("/api/images", verifyToken, imageRoutes);
app.use("/api/users", verifyToken, userRoutes);

// Default route
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Server start
const PORT = process.env.PORT || 3069;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
