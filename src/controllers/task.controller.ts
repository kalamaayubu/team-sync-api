import { Request, Response } from "express";
import * as taskService from "../services/task.service.js";
import { ParamsIdSchema } from "../validators/shared.validator.js";
import { TASK_STATUS } from "../lib/constants.js";

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
  try {
    const { taskId, teamId } = req.params;
    const { assigneeId, overwrite } = req.body; // Validated via Zod usually

    const task = await taskService.assignTask(
      taskId as string,
      teamId as string,
      assigneeId,
      req.user!.id,
      overwrite === true,
    );

    res.status(200).json({
      message: `Task assigned to ${task.assignee?.name}`,
      task,
    });
  } catch (error: any) {
    if (error.message.includes("Confirm overwrite")) {
      return res.status(409).json({
        success: false,
        message: error.message,
        requiresConfirmation: true,
      });
    }

    res.status(500).json({ error: error.message });
  }
};

export const updateTaskStatusHandler = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;

    // Ensure the string exists in our allowed statuses
    const isValidStatus = Object.values(TASK_STATUS).includes(
      status?.toUpperCase(),
    );

    if (!isValidStatus) {
      return res.status(400).json({
        success: false,
        message: `"${status}" is not a valid status. Allowed: ${Object.values(TASK_STATUS).join(", ")}`,
      });
    }

    const task = await taskService.updateTaskStatus(
      taskId as string,
      status.toUpperCase(),
      req.user!.id,
    );

    return res.status(200).json({
      success: true,
      message: `Task moved to ${task.status}`,
      data: task,
    });
  } catch (error: any) {
    console.error("Error in updating task status:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
      error: error.message,
    });
  }
};
