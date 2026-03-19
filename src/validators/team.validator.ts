import { z } from "zod";

export const createTeamSchema = z.object({
  name: z.string().min(3).max(50),
});

export const addMemberSchema = z.object({
  role: z.enum(["SYS_ADMIN", "ADMIN", "MEMBER"]).default("MEMBER"),
  email: z.email("Please provide a valid email address"),
});
