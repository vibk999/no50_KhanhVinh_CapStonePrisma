import { getUserInfo, updateUserInfo } from "../services/user.service.js";

export const fetchUserInfo = async (req, res) => {
  const userId = req.user.nguoi_dung_id;
  const user = await getUserInfo(userId);
  res.json(user);
};

export const updateUser = async (req, res) => {
  const userId = req.user.nguoi_dung_id;
  const updated = await updateUserInfo(userId, req.body);
  res.json(updated);
};
