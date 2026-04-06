import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import * as ProjectCtrl from "../controllers/project.controller.js";
const router = Router();
router.post("/teams/:teamId/projects", authenticate, ProjectCtrl.createProjectHandler);
router.get("/teams/:teamId/projects", authenticate, ProjectCtrl.getProjectsHandler);
router.get("/:teamId/projects/:projectId", authenticate, ProjectCtrl.getProjectByIdHandler);
router.put("/projects/:projectId", authenticate);
router.delete("/:teamId/projects/:projectId", authenticate, ProjectCtrl.deleteProjectByIdHandler);
export default router;
//# sourceMappingURL=project.route.js.map