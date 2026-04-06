import EventEmitter from "events";
export declare const eventEmitter: EventEmitter<any>;
export declare const EVENTS: {
    readonly TASK: {
        readonly CREATED: "task:created";
        readonly DELETED: "task:deleted";
        readonly UPDATED: "task:updated";
    };
    readonly TEAM: {
        readonly MEMBER_ADDED: "team:member_added";
        readonly MEMBER_REMOVED: "team:member_removed";
    };
};
