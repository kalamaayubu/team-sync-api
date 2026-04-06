import { Socket } from "socket.io";
export declare const socketRateLimiter: (socket: Socket) => ([event]: [string, ...any[]], nextMiddleware: (err?: Error) => void) => void;
export declare const clearSocketLimit: (socketId: string) => void;
