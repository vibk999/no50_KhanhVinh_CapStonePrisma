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

const router = express.Router();

router.get("/", fetchAllImages);
router.get("/search", searchImages);
router.get("/:id", fetchImageDetails);
router.get("/:id/comments", fetchComments);
router.get("/check/save", checkSaved);
router.post("/comment", postComment);
router.post("/", createImage);
router.delete("/:id", removeImage);
router.get("/user/:userId", fetchUserImages);
router.get("/user/:userId/saved", fetchSavedImages);

export default router;
