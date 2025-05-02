import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.route.js";
import imageRoutes from "./routes/image.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3069;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
