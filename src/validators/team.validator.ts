import { z } from "zod";

export const createTeamSchema = z.object({
  name: z.string().min(3).max(50),
});

export const addMemberSchema = z.object({
  userId: z.number(),
  role: z.enum(["admin", "member"]).default("member"),
});
