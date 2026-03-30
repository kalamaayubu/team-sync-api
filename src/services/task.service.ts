import { TASK_STATUS, VALID_TRANSITIONS } from "../lib/constants.js";
import { eventEmitter, EVENTS } from "../lib/events.js";
import { prisma } from "../lib/prisma.js";
import { ensureIsAdmin, ensureMembership } from "../utils/guards.js";

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
    select: {
      title: true,
      description: true,
      project: {
        select: { teamId: true },
      },
    },
  });

  // Emit task update event
  eventEmitter.emit(EVENTS.TASK.UPDATED, {
    task: updatedTask,
    teamId: updatedTask.project.teamId,
    action: `${EVENTS.TASK.UPDATED}`,
  });

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

export const assignTask = async (
  taskId: string,
  teamId: string,
  assigneeId: string,
  actorId: string,
  overwrite: boolean = false,
) => {
  await ensureIsAdmin(teamId, actorId);

  // Check if task already has an assignee
  const existingTask = await prisma.task.findUnique({
    where: { id: taskId },
    select: {
      assigneeId: true,
      assignee: { select: { name: true } },
    },
  });

  if (!existingTask) throw new Error("Task not found");

  // If it's already assigned and we aren't told to overwrite
  if (
    existingTask.assigneeId &&
    existingTask.assigneeId !== assigneeId &&
    !overwrite
  ) {
    throw new Error(
      `Task is already assigned to ${existingTask.assignee?.name}. Confirm overwrite.`,
    );
  }

  try {
    await ensureMembership(teamId, assigneeId);
  } catch (error) {
    // Adjust error to be specific to assignment
    throw new Error(
      "Target user is not a member of this team and cannot be assigned tasks.",
    );
  }

  // Perform update
  const updatedTask = await prisma.task.update({
    where: { id: taskId },
    data: { assigneeId },
    select: {
      id: true,
      title: true,
      description: true,
      status: true,
      project: { select: { name: true } },
      assignee: { select: { name: true, email: true } },
    },
  });

  // TODO: Notification later
  eventEmitter.emit(EVENTS.TASK.UPDATED, {
    task: updatedTask,
    action: "ASSIGNED",
    actorId,
  });

  return updatedTask;
};

export const updateTaskStatus = async (
  taskId: string,
  newStatus: keyof typeof TASK_STATUS,
  userId: string,
) => {
  // Fetch Task with Project/Team context
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    include: { project: { select: { teamId: true } } },
  });

  if (!task) throw new Error("Task not found");
  await ensureMembership(task.project.teamId, userId);

  // Prevent moving to the same status
  if (task.status === newStatus) {
    throw new Error(`Task is already in ${newStatus} status.`);
  }

  // Check if the move is allowed
  const allowedMoves = VALID_TRANSITIONS[task.status];
  if (!allowedMoves.includes(newStatus)) {
    throw new Error(
      `Invalid transition: Cannot move task from ${task.status} to ${newStatus}`,
    );
  }

  const updatedTask = await prisma.task.update({
    where: { id: taskId },
    data: { status: newStatus },
    include: {
      assignee: { select: { name: true } },
      project: { select: { name: true } },
    },
  });

  eventEmitter.emit(EVENTS.TASK.UPDATED, {
    task: updatedTask,
    action: "STATUS_CHANGE",
    actorId: userId,
    oldStatus: task.status,
    newStatus: updatedTask.status,
  });

  return updatedTask;
};
