import { z } from "zod";
export declare const IdSchema: z.ZodCUID;
export declare const ParamsIdSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    teamId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
    taskId: z.ZodOptional<z.ZodString>;
    fileId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
