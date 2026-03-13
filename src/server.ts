import "dotenv/config";
import express from "express";
import * as UserCtrl from "./controllers/user.controller.js";
import { authenticate } from "./middleware/auth.middleware.js";

const app = express();
app.use(express.json());

app.post("/users/register", UserCtrl.registerUser);
app.post("/users/login", UserCtrl.loginUser);

app.get("/users/me", authenticate, UserCtrl.getMe);
app.patch("/users/me", authenticate, UserCtrl.updateMe);
app.delete("/users/me", authenticate, UserCtrl.deleteMe);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () =>
  console.log(`\n\n\n Server running on http://localhost:${PORT}.`),
);
