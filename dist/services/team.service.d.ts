export declare const createTeam: (name: string, ownerId: string) => Promise<{
    membership: {
        id: string;
        userId: string;
        teamId: string;
        role: string;
    }[];
} & {
    id: string;
    name: string;
    createdAt: Date;
}>;
export declare const getTeamById: (teamId: string, requestingUserId: string) => Promise<({
    membership: ({
        user: {
            id: string;
            name: string;
            email: string;
        };
    } & {
        id: string;
        userId: string;
        teamId: string;
        role: string;
    })[];
} & {
    id: string;
    name: string;
    createdAt: Date;
}) | null>;
export declare const addMemberToTeam: (teamId: string, adminId: string, inviteeEmail: string) => Promise<{
    id: string;
    role: string;
    user: {
        name: string;
        email: string;
    };
}>;
