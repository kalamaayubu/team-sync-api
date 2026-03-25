import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import * as TaskCtrl from "../controllers/task.controller.js";

const router = Router();

router.post("/:projectId/tasks", authenticate, TaskCtrl.createTask);
router.get("/:projectId/tasks", authenticate, TaskCtrl.getTasks);
router.patch("/tasks/:taskId", authenticate, TaskCtrl.updateTask);
router.patch("/tasks/:taskId/assign", authenticate, TaskCtrl.assignTask);
router.delete("/tasks/:taskId", authenticate, TaskCtrl.deleteTask);

export default router;
