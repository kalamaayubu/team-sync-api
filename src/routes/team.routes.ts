import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import * as TeamCtrl from "../controllers/team.controller.js";
import * as TaskCtrl from "../controllers/task.controller.js";

const router = Router();

// Team operations
router.post("", authenticate, TeamCtrl.createTeam);
router.post("/:id/members", authenticate, TeamCtrl.addMember);
router.get("/:id", authenticate, TeamCtrl.getTeam);

// Task operations
router.post("/:id/tasks", authenticate, TaskCtrl.createTask);
router.get("/:id/tasks", authenticate, TaskCtrl.getTasks);
router.patch("/:teamId/tasks/:taskId", authenticate, TaskCtrl.updateTask);
router.delete("/:teamId/tasks/:taskId", authenticate, TaskCtrl.deleteTask);

export default router;
