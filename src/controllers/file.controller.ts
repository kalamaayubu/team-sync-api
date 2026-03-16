import { Request, Response } from "express";
import * as fileService from "../services/file.service.js";

export const handleFileUpload = async (req: Request, res: Response) => {
  try {
    const taskId = Number(req.params.taskId);
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const fileRecord = await fileService.uploadFile({
      name: req.file.originalname,
      url: `/uploads/${req.file.filename}`,
      taskId: taskId,
      uploaderId: req.user!.id,
    });

    res.status(201).json(fileRecord);
  } catch (error: any) {
    res.status(403).json({ error: error.message });
  }
};
