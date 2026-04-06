const MAX_EVENTS_PER_WINDOW = 20;
const WINDOW_MS = 60000;
// Internal store
const socketLimits = new Map();
export const socketRateLimiter = (socket) => {
    return ([event], nextMiddleware) => {
        const now = Date.now();
        const limit = socketLimits.get(socket.id) || {
            count: 0,
            resetTime: now + WINDOW_MS,
        };
        if (now > limit.resetTime) {
            limit.count = 0;
            limit.resetTime = now + WINDOW_MS;
        }
        limit.count++;
        socketLimits.set(socket.id, limit);
        if (limit.count > MAX_EVENTS_PER_WINDOW) {
            console.warn(`🚫 Rate limit exceeded: ${socket.id} on event "${event}"`);
            socket.disconnect(); // Disconnect spamming user
            return nextMiddleware(new Error("Too many requests. Please try again later."));
        }
        nextMiddleware();
    };
};
// Cleanup
export const clearSocketLimit = (socketId) => {
    socketLimits.delete(socketId);
};
//# sourceMappingURL=socket-rate-limiter.js.map