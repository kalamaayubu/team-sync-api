import express from "express";
import cors from "cors";
import path from "node:path";
import { createServer } from "http";
import { initSocket } from "./lib/socket.js";
import apiRoutes from "./routes/index.js";

import {
  apiLimiter,
  authLimter,
} from "./middleware/rate-limiter.middleware.js";

import "./subscribers/task.subscribers.js";
import "./subscribers/activity.subscriber.js";

const app = express();

const httpServer = createServer(app);

// CORS - Handshake security
app.use(
  cors({
    origin: ["http://localhost:5173", "https://team-sync-api.up.railway.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// Middleware & Statics content
app.set("trust proxy", 1); // Railway rate limiting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Real-time Engine
initSocket(httpServer);

// Strict Rate Limits for authentication
app.use("/v0.7/users/login", authLimter);
app.use("/v0.7/users/register", authLimter);

app.use("/v0.7", apiLimiter, apiRoutes);

const PORT: number = Number(process.env.PORT) || 8081;
// Use httpServer.listen instead of app.listen to support WebSockets
httpServer.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 TeamSync Engine running on http://localhost:${PORT}`);
});
