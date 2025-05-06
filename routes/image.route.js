import express from "express";
import {
  fetchAllImages,
  searchImages,
  fetchImageDetails,
  fetchComments,
  checkSaved,
  postComment,
  createImage,
  removeImage,
  fetchUserImages,
  fetchSavedImages,
} from "../controllers/image.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", fetchAllImages);
router.get("/search", searchImages);
router.get("/:id", fetchImageDetails);
router.get("/:id/comments", fetchComments);

router.get("/user/images", verifyToken, fetchUserImages);
router.get("/user/saved", verifyToken, fetchSavedImages);
router.get("/check/save", verifyToken, checkSaved);

router.post("/comment", verifyToken, postComment);
router.post("/", verifyToken, createImage);
router.delete("/:id", verifyToken, removeImage);

export default router;
