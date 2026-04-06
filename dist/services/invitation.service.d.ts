export declare const createInvitation: (email: string, teamId: string) => Promise<{
    id: string;
    teamId: string;
    role: string;
    token: string;
    email: string;
    createdAt: Date;
    expiresAt: Date;
}>;
export declare const acceptInvitation: (token: string, userId: string) => Promise<[{
    id: string;
    userId: string;
    teamId: string;
    role: string;
}, {
    id: string;
    teamId: string;
    role: string;
    token: string;
    email: string;
    createdAt: Date;
    expiresAt: Date;
}]>;
