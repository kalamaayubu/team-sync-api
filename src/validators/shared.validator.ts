import { z } from "zod";

// This is your "Source of Truth" for IDs
export const IdSchema = z.cuid();

// A reusable schema for URL params like /teams/:id
export const ParamsIdSchema = z.object({
  id: z.string().optional(),
  teamId: z.string().optional(),
  taskId: z.string().optional(),
  fileId: z.string().optional(),
});
