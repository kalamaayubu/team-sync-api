import { Router } from "express";
import * as FileCtrl from "../controllers/file.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

// All file routes are protected
router.post("/tasks/:taskId/files", authenticate, FileCtrl.handleFileUpload);

router.get("/tasks/:taskId/files", authenticate, FileCtrl.getFiles);
router.delete("/files/:fileId", authenticate, FileCtrl.removeFile);

export default router;
