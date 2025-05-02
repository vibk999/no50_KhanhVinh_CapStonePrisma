import prisma from "../common/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET = "my_secret_key";

export const register = async ({
  email,
  mat_khau,
  ho_ten,
  tuoi,
  anh_dai_dien,
}) => {
  const hashedPassword = await bcrypt.hash(mat_khau, 10);
  return await prisma.nguoi_dung.create({
    data: { email, mat_khau: hashedPassword, ho_ten, tuoi, anh_dai_dien },
  });
};

export const login = async ({ email, mat_khau }) => {
  const user = await prisma.nguoi_dung.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(mat_khau, user.mat_khau))) {
    throw new Error("Invalid credentials");
  }
  return jwt.sign({ nguoi_dung_id: user.nguoi_dung_id }, SECRET, {
    expiresIn: "1h",
  });
};
