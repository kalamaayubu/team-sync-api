import { Router } from "express";
import * as activityController from "../controllers/activity.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

router.get(
  "/teams/:teamId/activity",
  authenticate,
  activityController.getTeamActivity,
);

export default router;
