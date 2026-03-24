import { prisma } from "../lib/prisma.js";
import { ensureMembership } from "../utils/guards.js";
import fs from "fs/promises";
import path from "path";

export const uploadFile = async (data: {
  name: string;
  url: string;
  taskId: string;
  uploaderId: string;
}) => {
  const task = await prisma.task.findUnique({
    where: { id: data.taskId },
    include: {
      project: { select: { id: true, teamId: true } },
    },
  });

  if (!task) throw new Error("Task not found");

  await ensureMembership(task.project.teamId, data.uploaderId);

  // Save file record to DB
  return await prisma.file.create({
    data: {
      name: data.name,
      url: data.url,
      projectId: task.projectId,
      taskId: data.taskId,
      uploaderId: data.uploaderId,
    },
  });
};

export const getTaskFiles = async (taskId: string, userId: string) => {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    include: {
      project: { select: { id: true, teamId: true } },
    },
  });
  if (!task) throw new Error("Task not found");

  await ensureMembership(task.project.teamId, userId);

  return await prisma.file.findMany({
    where: { taskId },
    select: {
      id: true,
      name: true,
      url: true,
      createdAt: true,
      uploaderId: true,
    },
  });
};

export const deleteFile = async (fileId: string, userId: string) => {
  const file = await prisma.file.findUnique({
    where: { id: fileId },
    include: {
      project: {
        select: {
          teamId: true,
        },
      },
    },
  });

  if (!file) throw new Error("File not found");

  await ensureMembership(file.project.teamId, userId);
  if (file.uploaderId !== userId)
    throw new Error("Unauthorized: Only the owner can delete this file");

  // Remove from local storage
  try {
    const filePath = path.join(process.cwd(), file.url);
    await fs.unlink(filePath);
  } catch (error) {
    console.error("File already gone from disk, proceeding to DB cleanup.");
  }

  // Remove from database
  return await prisma.file.delete({ where: { id: fileId } });
};
