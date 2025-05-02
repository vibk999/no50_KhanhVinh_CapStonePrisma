import prisma from "../common/prismaClient.js";

export const getUserInfo = async (nguoi_dung_id) =>
  prisma.nguoi_dung.findUnique({ where: { nguoi_dung_id } });

export const updateUserInfo = async (nguoi_dung_id, data) =>
  prisma.nguoi_dung.update({
    where: { nguoi_dung_id },
    data,
  });
