export declare const TASK_STATUS: {
    readonly TODO: "TODO";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly REVIEW: "REVIEW";
    readonly DONE: "DONE";
};
export type TaskStatus = keyof typeof TASK_STATUS;
export declare const VALID_TRANSITIONS: Record<string, string[]>;
