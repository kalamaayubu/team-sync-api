import "dotenv/config";
import express from "express";
import * as UserCtrl from "./controllers/user.controller.js";
import * as FileCtrl from "./controllers/file.controller.js";
import invitationRoutes from "./routes/invitation.routes.js";
import teamsRoutes from "./routes/team.routes.js";

import { authenticate } from "./middleware/auth.middleware.js";
import { upload } from "./lib/multer.js";
import path from "node:path";

const app = express();
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// User management operations
app.post("/users/register", UserCtrl.registerUser);
app.post("/users/login", UserCtrl.loginUser);
app.get("/users/me", authenticate, UserCtrl.getMe);
app.patch("/users/me", authenticate, UserCtrl.updateMe);
app.delete("/users/me", authenticate, UserCtrl.deleteMe);

// File operations
app.post(
  "/tasks/:taskId/files",
  authenticate,
  upload.single("file"),
  FileCtrl.handleFileUpload,
);
app.get("/tasks/:taskId/files", authenticate, FileCtrl.getFiles);
app.delete("/files/:fileId", authenticate, FileCtrl.removeFile);

app.use("/api/invitations", invitationRoutes);
app.use("/api/teams", teamsRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () =>
  console.log(`\n\n\n Server running on http://localhost:${PORT}.`),
);
