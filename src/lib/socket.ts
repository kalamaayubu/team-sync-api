import { Server as HttpServer } from "http";
import { Server } from "socket.io";
import { eventEmitter, EVENTS } from "./events.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { ensureMembership } from "../utils/guards.js";
import {
  clearSocketLimit,
  socketRateLimiter,
} from "../utils/socket-rate-limiter.js";

let io: Server;

export const initSocket = (server: HttpServer) => {
  // Socket initialization
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  //  AUTHENTICATION: Socket Handshake
  //   .use method lets you register middleware functions to
  // reject bad tokens before the connection even opens
  io.use((socket, next) => {
    const token =
      socket.handshake.auth?.token ||
      socket.handshake.headers["authorization"]?.split(" ")[1];
    if (!token) return next(new Error("Missing token"));

    try {
      socket.data.user = verifyToken(token); // Attaches { id, email} to socket
      next();
    } catch (error) {
      next(new Error("Invalid token"));
    }
  });

  io.on("connection", (socket) => {
    console.log(`⚡ User Connected: ${socket.id}`);

    // Rate limiter
    socket.use(socketRateLimiter(socket));

    // AUTHORIZATION: Ensure user is a team member
    socket.on("join_team", async (teamId: string) => {
      await ensureMembership(teamId, socket.data?.user.id);

      socket.join(teamId);
      console.log(`👥 User ${socket.id} joined team: ${teamId}`);
    });

    socket.on("disconnect", () => {
      console.log("🔥 User Disconnected");
      clearSocketLimit(socket.id);
    });
  });

  //  BROADCAST: send info when task is updated
  eventEmitter.on(EVENTS.TASK.UPDATED, ({ task, teamId, action }) => {
    console.log("teamIdIO:", { teamId, task, action });
    if (io && teamId) {
      io.to(teamId).emit("notification:task_updated", {
        message: `Task "${task.title}" was ${action.toLowerCase()}`,
        task,
        action,
      });
    }
  });

  return io;
};

export { io };
