if (process.env.NODE_ENV !== "production") {
  await import("dotenv/config");
}
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

import "./subscribers/task.subscriber.js";
import "./subscribers/activity.subscriber.js";

const app = express();
const httpServer = createServer(app);

// 1. CORS - Handshake security
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// 2. Middleware & Statics
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// 3. Real-time Engine
initSocket(httpServer);

// 4. Strict Rate Limits (Must be defined before general routes)
app.use("/v0.7/users/login", authLimter);
app.use("/v0.7/users/register", authLimter);

// 5. Centralized API Routing
app.use("/v0.7", apiLimiter, apiRoutes);

const PORT = process.env.PORT || 8081;

// Use httpServer.listen instead of app.listen to support WebSockets
httpServer.listen(PORT, () => {
  console.log(`🚀 TeamSync Engine running on http://localhost:${PORT}`);
});
