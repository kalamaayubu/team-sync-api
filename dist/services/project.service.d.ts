import { TeamUser } from "../types/index.js";
interface ProjectProps {
    name: string;
    description: string;
    teamId: string;
    authorId: string;
}
export declare const createProject: ({ name, description, teamId, authorId, }: ProjectProps) => Promise<{
    id: string;
    name: string;
}>;
export declare const getTeamProjects: ({ teamId, userId }: TeamUser) => Promise<{
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    isActive: boolean;
    author: {
        name: string;
        email: string;
    };
}[]>;
export declare const getProjectById: (teamId: string, userId: string, projectId: string) => Promise<{
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    isActive: boolean;
    author: {
        name: string;
    };
} | null>;
export declare const deleteProjectById: (projectId: string, userId: string, teamId: string) => Promise<{
    id: string;
    deleted: boolean;
}>;
export {};
