import { eventEmitter, EVENTS } from "../lib/events.js";
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
  const newTask = await prisma.task.create({
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
      creator: {
        select: {
          name: true,
        },
      },
    },
  });

  // Emit task creation event
  eventEmitter.emit(EVENTS.TASK.CREATED, {
    task: newTask,
    creatorName: newTask.creator.name,
    teamId: project.teamId,
  });

  return newTask;
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
  // Fetch task to get teamId for membership checks
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    include: { project: { select: { teamId: true } } },
  });

  if (!task) throw new Error("Task not found");
  await ensureMembership(task.project.teamId, userId);

  const updatedTask = await prisma.task.update({
    where: { id: taskId },
    data,
  });

  // Emit task update event
  eventEmitter.emit(EVENTS.TASK.UPDATED, { task: updatedTask });

  return updatedTask;
};

export const deleteTask = async (taskId: string, userId: string) => {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    include: { project: { select: { teamId: true } } },
  });

  if (!task) throw new Error("Task not found");
  if (task.creatorId !== userId)
    throw new Error("Unauthorized: Only the creator can delete this task.");
  await ensureMembership(task.project.teamId, userId);

  const deletedTask = await prisma.task.delete({ where: { id: taskId } });

  eventEmitter.emit(EVENTS.TASK.DELETED, {
    task: deletedTask,
  });
};
