import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import * as InviteCtrl from "../controllers/invitation.controller.js";

const router = Router();

router.post("/:teamId/invite", authenticate, InviteCtrl.sendInvite);
router.post("/accept", authenticate, InviteCtrl.acceptInvite);

export default router;
