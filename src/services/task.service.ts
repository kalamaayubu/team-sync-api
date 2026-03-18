import { prisma } from "../lib/prisma.js";
import { ensureMembership } from "../utils/guards.js";

export const createTask = async (data: {
  title: string;
  description: string;
  teamId: string;
  creatorId: string;
}) => {
  await ensureMembership(data.teamId, data.creatorId);

  // Create task
  return await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
      teamId: data.teamId,
      creatorId: data.creatorId,
    },
  });
};

export const getTeamTasks = async (teamId: string, userId: string) => {
  await ensureMembership(teamId, userId);

  return await prisma.task.findMany({
    where: { teamId },
    include: { creator: { select: { name: true, email: true } } },
  });
};

export const updateTask = async (taskId: string, userId: string, data: any) => {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });
  if (!task) throw new Error("Task not found");

  await ensureMembership(task.teamId, userId);

  return await prisma.task.update({
    where: { id: taskId },
    data,
  });
};

export const deleteTask = async (taskId: string, userId: string) => {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!task) throw new Error("Task not found");

  await ensureMembership(task.teamId, userId);

  return await prisma.task.delete({ where: { id: taskId } });
};
