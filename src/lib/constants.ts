export const TASK_STATUS = {
  TODO: "TODO",
  IN_PROGRESS: "IN_PROGRESS",
  REVIEW: "REVIEW",
  DONE: "DONE",
} as const;

// This allows you to use TASK_STATUS as a TypeScript Type if needed
export type TaskStatus = keyof typeof TASK_STATUS;

// Allowed task status moves
export const VALID_TRANSITIONS: Record<string, string[]> = {
  TODO: ["IN_PROGRESS"],
  IN_PROGRESS: ["REVIEW", "TODO"],
  REVIEW: ["DONE", "IN_PROGRESS"],
  DONE: ["REVIEW"],
};
