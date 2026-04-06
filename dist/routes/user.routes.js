import { Router } from "express";
import * as UserCtrl from "../controllers/user.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
const router = Router();
// Public routes
router.post("/register", UserCtrl.registerUser);
router.post("/login", UserCtrl.loginUser);
// Protected routes
router.get("/me", authenticate, UserCtrl.getMe);
router.patch("/me", authenticate, UserCtrl.updateMe);
router.delete("/me", authenticate, UserCtrl.deleteMe);
export default router;
//# sourceMappingURL=user.routes.js.map