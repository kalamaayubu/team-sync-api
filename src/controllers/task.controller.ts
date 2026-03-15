import { Request, Response } from "express";
import * as taskService from "../services/task.service.js";

export const createTask = async (req: Request, res: Response) => {
  try {
    const teamId = Number(req.params.id);
    const { title, description } = req.body;

    const task = await taskService.createTask({
      title,
      description,
      teamId: Number(teamId),
      creatorId: req.user!.id,
    });

    res.status(201).json(task);
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({
        error: `A task with the title "${req.body.title}" already exists in this team.`,
      });
    }
    const status = error.message.includes("Unauthorized") ? 403 : 400;
    res.status(status).json({ error: error.message });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    console.log("Team ID from URL:", req.params.id);
    console.log("User ID from Token:", req.user?.id);

    const tasks = await taskService.getTeamTasks(
      Number(req.params.id),
      req.user!.id,
    );
    res.status(200).json(tasks);
  } catch (error: any) {
    res
      .status(error.message === "Unauthorized" ? 403 : 400)
      .json({ error: error.message });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.updateTask(
      Number(req.params.taskId),
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
    await taskService.deleteTask(Number(req.params.taskId), req.user!.id);
    res.status(204).send(); // 204 No Content for successful deletion
  } catch (error: any) {
    res
      .status(error.message === "Unauthorized" ? 403 : 400)
      .json({ error: error.message });
  }
};
