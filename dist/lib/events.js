import EventEmitter from "events";
export const eventEmitter = new EventEmitter();
// Read only event names definition
export const EVENTS = {
    TASK: {
        CREATED: "task:created",
        DELETED: "task:deleted",
        UPDATED: "task:updated",
    },
    TEAM: {
        MEMBER_ADDED: "team:member_added",
        MEMBER_REMOVED: "team:member_removed",
    },
};
//# sourceMappingURL=events.js.map