import { prisma } from "../lib/prisma.js";
import { ensureMembership } from "../utils/guards.js";

export const createTask = async (data: {
  title: string;
  description: string;
  projectId: string;
  creatorId: string;
}) => {
  const project = await prisma.project.findUnique({
    where: { id: data.projectId },
    select: { teamId: true },
  });

  if (!project) throw new Error("Project not found");

  await ensureMembership(project.teamId, data.creatorId);

  // Create task
  return await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
      projectId: data.projectId,
      creatorId: data.creatorId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      status: true,
      createdAt: true,
    },
  });
};

export const getTeamTasks = async (projectId: string, userId: string) => {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: { teamId: true },
  });

  if (!project) throw new Error("Project not found");
  await ensureMembership(project.teamId, userId);

  return await prisma.task.findMany({
    where: { projectId },
    select: {
      id: true,
      title: true,
      description: true,
      status: true,
      createdAt: true,
      creator: { select: { name: true, email: true } },
    },
  });
};

export const updateTask = async (taskId: string, userId: string, data: any) => {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    include: { project: { select: { teamId: true } } },
  });

  if (!task) throw new Error("Task not found");

  await ensureMembership(task.project.teamId, userId);

  return await prisma.task.update({
    where: { id: taskId },
    data,
  });
};

export const deleteTask = async (taskId: string, userId: string) => {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    include: { project: { select: { teamId: true } } },
  });

  if (!task) throw new Error("Task not found");

  await ensureMembership(task.project.teamId, userId);

  return await prisma.task.delete({ where: { id: taskId } });
};
