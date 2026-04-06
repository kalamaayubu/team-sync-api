import rateLimit from "express-rate-limit";
export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    message: {
        error: "Too many requests. Please try again after 15 minutes",
    },
    standardHeaders: true, // Return rate limit info in the 'RateLimit-*' headers
    legacyHeaders: false, // Disable the 'X-RateLimit-*' headers
});
// Stricter limits on login/register
export const authLimter = rateLimit({
    windowMs: 60 * 30 * 1000, // 30 minutes
    limit: 10, // Only 10 attempts per 30 minutes
    message: {
        error: "Too many login attempts. Try again in an the next 30 minutes.",
    },
    handler: (req, res, next, options) => {
        // Get the reset time
        const resetTime = req.rateLimit.resetTime;
        if (resetTime) {
            // Compute the difference from now
            const deltaMs = resetTime.getTime() - Date.now();
            const minutes = Math.floor(deltaMs / (1000 * 60));
            const seconds = Math.floor((deltaMs % (1000 * 60)) / 1000);
            return res.status(429).json({
                error: `Too many login attempts. Try again in the next ${minutes}m ${seconds}s.`,
                retryAfter: {
                    minutes,
                    seconds,
                    totalSeconds: Math.floor(deltaMs / 1000),
                },
            });
        }
        // Fallback if resetTime is missing
        res.status(429).json({ error: options.message });
    },
});
//# sourceMappingURL=rate-limiter.middleware.js.map