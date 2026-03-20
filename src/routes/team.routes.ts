import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import * as TeamCtrl from "../controllers/team.controller.js";
import * as TaskCtrl from "../controllers/task.controller.js";
import * as InviteCtrl from "../controllers/invitation.controller.js";

const router = Router();

// Team operations
router.post("", authenticate, TeamCtrl.createTeam);
router.post("/:teamId/members", authenticate, TeamCtrl.addMember);
router.get("/:teamId", authenticate, TeamCtrl.getTeam);

// Invitations
router.post("/:teamId/invite", authenticate, InviteCtrl.sendInvite);
router.post("/accept", authenticate, InviteCtrl.acceptInvite);

// Task operations
router.post("/:teamId/tasks", authenticate, TaskCtrl.createTask);
router.get("/:teamId/tasks", authenticate, TaskCtrl.getTasks);
router.patch("/:teamId/tasks/:taskId", authenticate, TaskCtrl.updateTask);
router.delete("/:teamId/tasks/:taskId", authenticate, TaskCtrl.deleteTask);

export default router;
