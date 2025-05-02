import express from "express";
import { fetchUserInfo, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:userId", fetchUserInfo);
router.put("/:userId", updateUser);

export default router;
