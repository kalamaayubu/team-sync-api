import { TASK_STATUS } from "../lib/constants.js";
export declare const createTask: (data: {
    title: string;
    description: string;
    projectId: string;
    creatorId: string;
}) => Promise<{
    id: string;
    title: string;
    creator: {
        name: string;
    };
}>;
export declare const getTeamTasks: (projectId: string, userId: string) => Promise<{
    id: string;
    description: string;
    createdAt: Date;
    title: string;
    status: string;
    creator: {
        name: string;
        email: string;
    };
}[]>;
export declare const updateTask: (taskId: string, userId: string, data: any) => Promise<{
    description: string;
    project: {
        teamId: string;
    };
    title: string;
}>;
export declare const deleteTask: (taskId: string, userId: string) => Promise<void>;
export declare const assignTask: (taskId: string, teamId: string, assigneeId: string, actorId: string, overwrite?: boolean) => Promise<{
    id: string;
    description: string;
    project: {
        name: string;
    };
    title: string;
    status: string;
    assignee: {
        name: string;
        email: string;
    } | null;
}>;
export declare const updateTaskStatus: (taskId: string, newStatus: keyof typeof TASK_STATUS, userId: string) => Promise<{
    project: {
        name: string;
    };
    assignee: {
        name: string;
    } | null;
} & {
    id: string;
    description: string;
    createdAt: Date;
    projectId: string;
    title: string;
    status: string;
    creatorId: string;
    assigneeId: string | null;
}>;
