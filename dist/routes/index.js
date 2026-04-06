import { Router } from "express";
import userRoutes from "./user.routes.js";
import fileRoutes from "./file.routes.js";
import teamsRoutes from "./team.routes.js";
import taskRoutes from "./task.routes.js";
import projectRoutes from "./project.route.js";
import activityLogRoutes from "./activity.routes.js";
const router = Router();
router.use("/users", userRoutes);
router.use("/files", fileRoutes);
router.use("/teams", teamsRoutes);
router.use("/tasks", taskRoutes);
router.use("/projects", projectRoutes);
router.use("/activity", activityLogRoutes);
export default router;
//# sourceMappingURL=index.js.map