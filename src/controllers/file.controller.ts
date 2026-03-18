import { Request, Response } from "express";
import * as fileService from "../services/file.service.js";
import multer from "multer";
import { upload } from "../lib/multer.js";

export const handleFileUpload = async (req: Request, res: Response) => {
  upload.single("file")(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ error: "File too large. Max is 5MB." });
      }
      return res.status(400).json({ error: err.message });
    } else if (err) {
      // This catches the "Only .png, .jpg..." error from our fileFilter
      return res.status(400).json({ error: err.message });
    }

    // If we get here, Multer passed! Now run your service logic:
    try {
      if (!req.file) throw new Error("No file selected.");

      const fileRecord = await fileService.uploadFile({
        name: req.file.originalname,
        url: `/uploads/${req.file.filename}`,
        taskId: req.params.taskId,
        uploaderId: req.user!.id,
      });

      res.status(201).json(fileRecord);
    } catch (error: any) {
      res.status(403).json({ error: error.message });
    }
  });
};

export const getFiles = async (req: Request, res: Response) => {
  try {
    const files = await fileService.getTaskFiles(
      req.params.taskId,
      req.user!.id,
    );
    res.json(files);
  } catch (error: any) {
    res.status(403).json({ error: error.message });
  }
};

export const removeFile = async (req: Request, res: Response) => {
  try {
    await fileService.deleteFile(req.params.fileId, req.user!.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(403).json({ error: error.message });
  }
};
