export declare const ensureMembership: (teamId: string, userId: string) => Promise<{
    id: string;
    userId: string;
    teamId: string;
    role: string;
}>;
export declare const ensureIsAdmin: (teamId: string, userId: string) => Promise<{
    id: string;
    userId: string;
    teamId: string;
    role: string;
}>;
