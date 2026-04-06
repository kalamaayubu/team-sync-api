import { z } from "zod";
// Reusable parts for cleaner code
const emailSchema = z.email("Invalid email address");
const passwordSchema = z
    .string()
    .min(6, "Password must be at least 6 characters");
export const registerSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: emailSchema,
    password: passwordSchema,
});
export const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});
export const updateUserSchema = z.object({
    name: z.string().min(1).optional(),
    email: emailSchema.optional(),
    password: passwordSchema.optional(),
});
//# sourceMappingURL=user.validator.js.map