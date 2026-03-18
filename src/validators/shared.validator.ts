import { z } from "zod";

// This is your "Source of Truth" for IDs
export const IdSchema = z.string().cuid();

// A reusable schema for URL params like /teams/:id
export const ParamsIdSchema = z.object({
  id: IdSchema,
});
