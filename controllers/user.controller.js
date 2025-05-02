import { getUserInfo, updateUserInfo } from "../services/user.service.js";

export const fetchUserInfo = async (req, res) => {
  const { userId } = req.params;
  const user = await getUserInfo(parseInt(userId));
  res.json(user);
};

export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const updated = await updateUserInfo(parseInt(userId), req.body);
  res.json(updated);
};
