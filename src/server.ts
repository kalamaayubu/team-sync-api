import "dotenv/config";
import express from "express";
import * as UserCtrl from "./controllers/user.controller.js";
import * as TeamCtrl from "./controllers/team.controller.js";
import * as TaskCtrl from "./controllers/task.controller.js";

import { authenticate } from "./middleware/auth.middleware.js";

const app = express();
app.use(express.json());

// User management operations
app.post("/users/register", UserCtrl.registerUser);
app.post("/users/login", UserCtrl.loginUser);
app.get("/users/me", authenticate, UserCtrl.getMe);
app.patch("/users/me", authenticate, UserCtrl.updateMe);
app.delete("/users/me", authenticate, UserCtrl.deleteMe);

// Team operations
app.post("/teams", authenticate, TeamCtrl.createTeam);
app.get("/teams/:id", authenticate, TeamCtrl.getTeam);
app.post("/teams/:id/members", authenticate, TeamCtrl.inviteMember);

// Task operations
app.post("/teams/:id/tasks", authenticate, TaskCtrl.createTask);
app.get("/teams/:id/tasks", authenticate, TaskCtrl.getTasks);
app.patch("/teams/:teamId/tasks/:taskId", authenticate, TaskCtrl.updateTask);
app.delete("/teams/:teamId/tasks/:taskId", authenticate, TaskCtrl.deleteTask);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () =>
  console.log(`\n\n\n Server running on http://localhost:${PORT}.`),
);
