const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { loginRateLimiter, generalRateLimiter } = require('./utils/rateLimiter');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const roleRoutes = require('./routes/roleRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(helmet()); // Security

// Apply general rate limiter to all routes
app.use(generalRateLimiter);

// Routes
app.use('/api/auth', loginRateLimiter, authRoutes); // Apply loginRateLimiter to auth routes
app.use('/api/tasks', taskRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/roles', roleRoutes);

module.exports = app;

