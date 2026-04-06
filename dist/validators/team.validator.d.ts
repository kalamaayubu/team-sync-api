import { z } from "zod";
export declare const createTeamSchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export declare const addMemberSchema: z.ZodObject<{
    role: z.ZodDefault<z.ZodEnum<{
        ADMIN: "ADMIN";
        MEMBER: "MEMBER";
        SYS_ADMIN: "SYS_ADMIN";
    }>>;
    email: z.ZodEmail;
}, z.core.$strip>;
