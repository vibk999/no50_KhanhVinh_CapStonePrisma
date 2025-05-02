import {
  getAllImages,
  searchImagesByName,
  getImageDetails,
  getCommentsByImageId,
  checkImageSaved,
  createComment,
  addImage,
  deleteImage,
  getImagesByUserId,
  getSavedImagesByUserId,
} from "../services/image.service.js";

export const fetchAllImages = async (req, res) => {
  const images = await getAllImages();
  res.json(images);
};

export const searchImages = async (req, res) => {
  const { name } = req.query;
  const images = await searchImagesByName(name);
  res.json(images);
};

export const fetchImageDetails = async (req, res) => {
  const { id } = req.params;
  const details = await getImageDetails(parseInt(id));
  res.json(details);
};

export const fetchComments = async (req, res) => {
  const { id } = req.params;
  const comments = await getCommentsByImageId(parseInt(id));
  res.json(comments);
};

export const checkSaved = async (req, res) => {
  const { userId, imageId } = req.query;
  const saved = await checkImageSaved(parseInt(userId), parseInt(imageId));
  res.json({ saved });
};

export const postComment = async (req, res) => {
  const { userId, imageId, noi_dung } = req.body;
  const comment = await createComment({ userId, imageId, noi_dung });
  res.json(comment);
};

export const createImage = async (req, res) => {
  const { ten_hinh, duong_dan, mo_ta, nguoi_dung_id } = req.body;
  const image = await addImage({ ten_hinh, duong_dan, mo_ta, nguoi_dung_id });
  res.json(image);
};

export const removeImage = async (req, res) => {
  const { id } = req.params;
  await deleteImage(parseInt(id));
  res.json({ message: "Deleted successfully" });
};

export const fetchUserImages = async (req, res) => {
  const { userId } = req.params;
  const images = await getImagesByUserId(parseInt(userId));
  res.json(images);
};

export const fetchSavedImages = async (req, res) => {
  const { userId } = req.params;
  const images = await getSavedImagesByUserId(parseInt(userId));
  res.json(images);
};
