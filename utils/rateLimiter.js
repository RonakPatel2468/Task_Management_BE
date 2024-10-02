const rateLimit = require('express-rate-limit');

// Rate limiter middleware for login requests
const loginRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes window
    max: 5, // Limit each IP to 5 requests per windowMs
    message: 'Too many login attempts from this IP, please try again after 15 minutes',
    headers: true, // Send rate limit info in headers
});

// General rate limiter for other requests
const generalRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes window
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes',
    headers: true,
});

module.exports = {
    loginRateLimiter,
    generalRateLimiter
};
