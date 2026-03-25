import { Request, Response } from "express";
import * as taskService from "../services/task.service.js";
import { ParamsIdSchema } from "../validators/shared.validator.js";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { projectId } = ParamsIdSchema.parse(req.params);
    const { title, description } = req.body;

    const task = await taskService.createTask({
      title,
      description,
      projectId: projectId as string,
      creatorId: req.user!.id,
    });

    res.status(201).json(task);
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({
        error: `A task with the title "${req.body.title}" already exists in this project.`,
      });
    }
    const status = error.message.includes("Unauthorized") ? 403 : 400;
    res.status(status).json({ error: error.message });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    console.log("Team ID from URL:", req.params.teamId);
    console.log("User ID from Token:", req.user?.id);

    // Validate teamId
    const { projectId } = ParamsIdSchema.parse(req.params);

    const tasks = await taskService.getTeamTasks(
      projectId as string,
      req.user!.id,
    );
    res.status(200).json({ success: true, data: tasks });
  } catch (error: any) {
    res
      .status(error.message === "Unauthorized" ? 403 : 400)
      .json({ error: error.message });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    // Validate both teamId and taskId
    const { teamId, taskId } = ParamsIdSchema.parse(req.params);

    const task = await taskService.updateTask(
      taskId as string,
      req.user!.id,
      req.body,
    );
    res.status(200).json(task);
  } catch (error: any) {
    res
      .status(error.message === "Unauthorized" ? 403 : 400)
      .json({ error: error.message });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { taskId } = ParamsIdSchema.parse(req.params);

    const deletedTask = await taskService.deleteTask(
      taskId as string,
      req.user!.id,
    );
    res.status(204).json(deletedTask);
  } catch (error: any) {
    res
      .status(error.message === "Unauthorized" ? 403 : 400)
      .json({ error: error.message });
  }
};

export const assignTask = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const { assigneeId } = req.body; // Validated via Zod usually

  const task = await taskService.assignTask(
    taskId as string,
    assigneeId,
    req.user!.id,
  );

  res.status(200).json({
    message: `Task assigned to ${task.assignee?.name}`,
    task,
  });
};
