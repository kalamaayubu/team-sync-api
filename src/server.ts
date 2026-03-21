import "dotenv/config";
import express from "express";
import userRoutes from "./routes/user.routes.js";
import fileRoutes from "./routes/file.routes.js";
import teamsRoutes from "./routes/team.routes.js";
import projectRoutes from "./routes/project.route.js";

import path from "node:path";

const app = express();
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Use routes
app.use("/api/users", userRoutes);
app.use("/api", fileRoutes);
app.use("/api/teams", teamsRoutes);
app.use("/api", projectRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () =>
  console.log(`\n\n Server running on http://localhost:${PORT}.`),
);
