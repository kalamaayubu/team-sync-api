import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import * as TeamCtrl from "../controllers/team.controller.js";
import * as InviteCtrl from "../controllers/invitation.controller.js";

const router = Router();

// Team operations
router.post("", authenticate, TeamCtrl.createTeam);
router.post("/:teamId/members", authenticate, TeamCtrl.addMember);
router.get("/:teamId", authenticate, TeamCtrl.getTeam);
router.delete("/:teamId", authenticate, TeamCtrl.deleteTeam);

// Invitations
router.post("/:teamId/invite", authenticate, InviteCtrl.sendInvite);
router.post("/accept", authenticate, InviteCtrl.acceptInvite);

export default router;
