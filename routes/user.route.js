import express from "express";
import { fetchUserInfo, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", verifyToken, fetchUserInfo); // user lấy chính mình
router.put("/", verifyToken, updateUser); // update chính mình

export default router;
