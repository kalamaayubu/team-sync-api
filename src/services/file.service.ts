import { prisma } from "../lib/prisma.js";
import { ensureMembership } from "../utils/guards.js";

export const uploadFile = async (data: {
  name: string;
  url: string;
  taskId: number;
  uploaderId: number;
}) => {
  // Find the task to get the teamId
  const task = await prisma.task.findUnique({
    where: { id: Number(data.taskId) },
  });
  if (!task) throw new Error("Task not found");

  await ensureMembership(task.teamId, data.uploaderId);

  // Save file record to DB
  return await prisma.file.create({
    data: {
      name: data.name,
      url: data.url,
      taskId: data.taskId,
      uploaderId: data.uploaderId,
    },
  });
};
