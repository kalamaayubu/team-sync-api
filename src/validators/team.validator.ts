import { z } from "zod";
import { IdSchema } from "./shared.validator.js";

export const createTeamSchema = z.object({
  name: z.string().min(3).max(50),
});

export const addMemberSchema = z.object({
  userId: IdSchema,
  role: z.enum(["SYS_ADMIN", "ADMIN", "MEMBER"]).default("MEMBER"),
});
