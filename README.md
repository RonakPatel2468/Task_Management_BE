# Task Management App

## Objective
Develop a Role-Based Task Management application with roles and permissions. Admin users can manage all tasks and users, while regular users can only manage their own tasks.

## Features
- **User Authentication & Role Management**: 
  - Implement user registration and login with JWT.
  - Create roles for Admin and User APIs.

- **Task Management API**: 
  - Create endpoints for users to create, update, delete, and view their tasks.
  - Admins can manage tasks for all users.

- **Role-Based Authorization**: 
  - Implement middleware to ensure role-based access.

- **Database**: 
  - Use MongoDB to store users, roles, tasks, and categories.

- **Task Due Dates**: 
  - Implement a due date field for each task and ensure tasks past their due date are marked as "Overdue."

- **Advanced Querying**: 
  - Implement advanced filtering and sorting for tasks via query parameters (e.g., `/tasks?status=completed&sortBy=dueDate`).

- **User Task Limit**: 
  - Restrict regular users to creating a maximum of 10 tasks.

- **Password Reset**: 
  - Add a password reset feature with email notifications using NodeMailer or a similar service.

- **Comprehensive Testing**: 
  - Write at least 5 unit tests using Jest for API endpoints (user login, task creation, category creation, role creation, etc.).

- **Rate Limiting and Security**: 
  - Implement rate limiting for login attempts to prevent brute-force attacks.
  - Use Helmet.js for added security headers in Express.

## Folder Structure
