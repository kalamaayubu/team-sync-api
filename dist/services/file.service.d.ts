export declare const uploadFile: (data: {
    name: string;
    url: string;
    taskId: string;
    uploaderId: string;
}) => Promise<{
    id: string;
    name: string;
    createdAt: Date;
    url: string;
    taskId: string | null;
    projectId: string;
    uploaderId: string;
}>;
export declare const getTaskFiles: (taskId: string, userId: string) => Promise<{
    id: string;
    name: string;
    createdAt: Date;
    url: string;
    uploaderId: string;
}[]>;
export declare const deleteFile: (fileId: string, userId: string) => Promise<{
    id: string;
    name: string;
    createdAt: Date;
    url: string;
    taskId: string | null;
    projectId: string;
    uploaderId: string;
}>;
