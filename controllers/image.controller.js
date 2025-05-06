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
} from "../services/image.service";

export const fetchAllImages = async (req, res) => {
  const images = await getAllImages();
  res.json(images);
};
export const searchImages = async (req, res) => {
  const { name } = req.query;
  try {
    const images = await searchImagesByName(name);
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
export const fetchComments = async (req, res) => {
  const { id } = req.params;
  const comments = await getCommentsByImageId(parseInt(id));
  res.json(comments);
};
export const fetchUserImages = async (req, res) => {
  const userId = req.user.nguoi_dung_id;
  const images = await getImagesByUserId(userId);
  res.json(images);
};
export const fetchImageDetails = async (req, res) => {
  const { id } = req.params;
  const details = await getImageDetails(parseInt(id));
  res.json(details);
};
export const fetchSavedImages = async (req, res) => {
  const userId = req.user.nguoi_dung_id;
  const images = await getSavedImagesByUserId(userId);
  res.json(images);
};

export const checkSaved = async (req, res) => {
  const userId = req.user.nguoi_dung_id;
  const { imageId } = req.query;
  const saved = await checkImageSaved(userId, parseInt(imageId));
  res.json({ saved });
};

export const postComment = async (req, res) => {
  const userId = req.user.nguoi_dung_id;
  const { imageId, noi_dung } = req.body;
  const comment = await createComment({ userId, imageId, noi_dung });
  res.json(comment);
};

export const createImage = async (req, res) => {
  const userId = req.user.nguoi_dung_id;
  const { ten_hinh, duong_dan, mo_ta } = req.body;
  const image = await addImage({
    ten_hinh,
    duong_dan,
    mo_ta,
    nguoi_dung_id: userId,
  });
  res.json(image);
};

export const removeImage = async (req, res) => {
  const userId = req.user.nguoi_dung_id;
  const { id } = req.params;

  // Kiểm tra user có quyền xóa không (chỉ xóa ảnh của chính mình)
  const image = await getImageDetails(parseInt(id));
  if (!image || image.nguoi_dung_id !== userId) {
    return res.status(403).json({ error: "Not allowed to delete this image" });
  }

  await deleteImage(parseInt(id));
  res.json({ message: "Deleted successfully" });
};
