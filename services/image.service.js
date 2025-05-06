import prisma from "../common/prismaClient";

export const getAllImages = async () => prisma.hinh_anh.findMany();

export const searchImagesByName = async (name) =>
  prisma.hinh_anh.findMany({
    where: {
      ten_hinh: { contains: name },
    },
  });

export const getImageDetails = async (hinh_id) =>
  prisma.hinh_anh.findUnique({
    where: { hinh_id },
    include: { nguoi_dung: true },
  });

export const getCommentsByImageId = async (hinh_id) =>
  prisma.binh_luan.findMany({
    where: { hinh_id },
    include: { nguoi_dung: true },
  });

export const checkImageSaved = async (nguoi_dung_id, hinh_id) => {
  const saved = await prisma.luu_anh.findUnique({
    where: { nguoi_dung_id_hinh_id: { nguoi_dung_id, hinh_id } },
  });
  return Boolean(saved);
};

export const createComment = async ({ userId, imageId, noi_dung }) =>
  prisma.binh_luan.create({
    data: {
      nguoi_dung_id: userId,
      hinh_id: imageId,
      noi_dung,
      ngay_binh_luan: new Date(),
    },
  });

export const addImage = async ({ ten_hinh, duong_dan, mo_ta, nguoi_dung_id }) =>
  prisma.hinh_anh.create({
    data: { ten_hinh, duong_dan, mo_ta, nguoi_dung_id },
  });

export const deleteImage = async (hinh_id) =>
  prisma.hinh_anh.delete({ where: { hinh_id } });

export const getImagesByUserId = async (nguoi_dung_id) =>
  prisma.hinh_anh.findMany({ where: { nguoi_dung_id } });

export const getSavedImagesByUserId = async (nguoi_dung_id) =>
  prisma.luu_anh.findMany({
    where: { nguoi_dung_id },
    include: { hinh_anh: true },
  });
