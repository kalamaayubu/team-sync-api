import "dotenv/config";
import express from "express";
import path from "node:path";
import { createServer } from "http";

import userRoutes from "./routes/user.routes.js";
import fileRoutes from "./routes/file.routes.js";
import teamsRoutes from "./routes/team.routes.js";
import taskRoutes from "./routes/task.routes.js";
import projectRoutes from "./routes/project.route.js";
import activityLogRoutes from "./routes/project.route.js";

import "./subscribers/task.subscriber.js";
import "./subscribers/activity.subscriber.js";
import { initSocket } from "./lib/socket.js";
import {
  apiLimiter,
  authLimter,
} from "./middleware/rate-limiter.middleware.js";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Initialize Socket.io
initSocket(httpServer);

// Global rate limiter to all API routes
app.use("api", apiLimiter);

// Stricter limit for sensitive routes
app.use("/api/users/login", authLimter);
app.use("/api/users/register", authLimter);

// Use routes
app.use("/api/users", userRoutes);
app.use("/api", fileRoutes);
app.use("/api/teams", teamsRoutes);
app.use("/api/teams", taskRoutes);

app.use("/api", projectRoutes);
app.use("api", activityLogRoutes);

const PORT = process.env.PORT || 8081;
httpServer.listen(PORT, () => {
  console.log(`🚀 TeamSync Engine running on http://localhost:${PORT}`);
});
