export const TASK_STATUS = {
    TODO: "TODO",
    IN_PROGRESS: "IN_PROGRESS",
    REVIEW: "REVIEW",
    DONE: "DONE",
};
// Allowed task status moves
export const VALID_TRANSITIONS = {
    TODO: ["IN_PROGRESS"],
    IN_PROGRESS: ["REVIEW", "TODO"],
    REVIEW: ["DONE", "IN_PROGRESS"],
    DONE: ["REVIEW"],
};
//# sourceMappingURL=constants.js.map