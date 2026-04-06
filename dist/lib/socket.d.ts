import { Server as HttpServer } from "http";
import { Server } from "socket.io";
declare let io: Server;
export declare const initSocket: (server: HttpServer) => Server<import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, any>;
export { io };
