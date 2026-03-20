import { Request, Response } from "express";
import * as fileService from "../services/file.service.js";
import multer from "multer";
import { upload } from "../lib/multer.js";
import { ParamsIdSchema } from "../validators/shared.validator.js";

export const handleFileUpload = async (req: Request, res: Response) => {
  const { taskId } = ParamsIdSchema.parse(req.params);

  console.log("=== DEBUG ===");
  console.log("Content-Type:", req.headers["content-type"]);

  upload.single("file")(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ error: "File too large. Max is 3MB." });
      }
      console.log("Error uploading file: ", err.message);
      return res.status(400).json({ error: err.message });
    } else if (err) {
      // This catches the "Only .png, .jpg..." error from our fileFilter
      return res.status(400).json({ error: err.message });
    }

    // If multer checks pass, run the uploadFile service:
    try {
      if (!req.file) throw new Error("No file selected.");

      const fileRecord = await fileService.uploadFile({
        name: req.file.originalname,
        url: `/uploads/${req.file.filename}`,
        taskId: taskId as string,
        uploaderId: req.user!.id,
      });
      console.log("FILE RECORD: ", fileRecord);

      res.status(201).json(fileRecord);
    } catch (error: any) {
      res.status(403).json({ error: error.message });
    }
  });
};

export const getFiles = async (req: Request, res: Response) => {
  const { taskId } = ParamsIdSchema.parse(req.params);

  try {
    const files = await fileService.getTaskFiles(
      taskId as string,
      req.user!.id,
    );
    res.json(files);
  } catch (error: any) {
    res.status(403).json({ error: error.message });
  }
};

export const removeFile = async (req: Request, res: Response) => {
  const { fileId } = ParamsIdSchema.parse(req.params);

  try {
    await fileService.deleteFile(fileId as string, req.user!.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(403).json({ error: error.message });
  }
};
