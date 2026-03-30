import { RateLimitInfo } from "express-rate-limit";
import "express-serve-static-core";

// 1. Define your domain types here
export type CUID = string;
export type UserId = CUID;
export type TeamId = CUID;
export type TaskId = CUID;

// 2. Augment the Express Request interface
declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: UserId;
      email: string;
    };
  }
}

declare global {
  namespace Express {
    interface Request {
      rateLimit: RateLimitInfo;
    }
  }
}
