# Simple Task Manager API

This is a simple Task Manager API built with Express, MongoDB, and custom error handlers. The API supports the following operations:

- **GET**: Fetch all tasks or a specific task by ID
- **POST**: Create a new task
- **PATCH**: Update an existing task
- **DELETE**: Delete a task

## Features

- CRUD operations for tasks (Create, Read, Update, Delete)
- Custom error handling with a custom error class `CustomError`
- Async wrappers to handle asynchronous route handlers and prevent repetitive error handling code
- MongoDB for data storage

## Endpoints

### 1. **Get All Tasks**
- **Endpoint**: `GET /api/v1/tasks`
- **Description**: Fetch all tasks from the database.
- **Response**: JSON array of tasks.

### 2. **Get Single Task**
- **Endpoint**: `GET /api/v1/tasks/:id`
- **Description**: Fetch a single task by its `id`.
- **Response**: JSON object representing a task.

### 3. **Create Task**
- **Endpoint**: `POST /api/v1/tasks`
- **Description**: Create a new task.
- **Request Body**:
    ```json
    {
        "task": "Your task description",
        "completed": false
    }
    ```
- **Response**: JSON object with the created task.

### 4. **Update Task**
- **Endpoint**: `PATCH /api/v1/tasks/:id`
- **Description**: Update an existing task by its `id`.
- **Request Body**:
    ```json
    {
        "task": "Updated task description",
        "completed": true
    }
    ```
- **Response**: JSON object with the updated task.

### 5. **Delete Task**
- **Endpoint**: `DELETE /api/v1/tasks/:id`
- **Description**: Delete a task by its `id`.
- **Response**: JSON object with a success message.

## Error Handling

This API uses a **custom error handler** that catches errors such as:

- Task not found
- Bad request or invalid inputs
- Server-side errors

Errors are caught and returned with appropriate status codes and messages.

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/task-manager-api.git
cd task-manager-api
