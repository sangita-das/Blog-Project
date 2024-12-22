# Blog Project: Backend Assignment

## Overview
The **Blog Project** is a backend system for a blogging platform where users can create, update, and delete their blogs. The system supports role-based access control with two roles: **Admin** and **User**. Admins have elevated privileges to manage users and their blogs, while regular users can manage their own blogs. The application features secure authentication and comprehensive error handling.

## Features
### User Roles
**Admin:**
- Created manually in the database with predefined credentials.
- Can delete any blog.
- Can block users by updating their `isBlocked` property.
- Cannot update any blog.

**User:**
- Can register and log in.
- Can create, update, and delete their own blogs.
- Cannot perform admin actions.

### Authentication & Authorization
- **Authentication:** Users must log in to perform write, update, and delete operations.
- **Authorization:** Role-based access control differentiates between Admin and User privileges.

### Blog API
- Blog API to fetch blogs, including title, content, author details, and other data.
- search, sorting, and filtering functionalities.

### Error Handling
- Comprehensive error handling for validation, authentication, authorization, and internal server issues.

## Technologies
- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB with Mongoose**

## API Endpoints

### 1. Authentication
#### Register User
**POST** `/api/auth/register`
- Request Body:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```

#### Login User
**POST** `/api/auth/login`
- Request Body:
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```

### 2. Blog Management
#### Create Blog
**POST** `/api/blogs`
- Request Header:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- Request Body:
  ```json
  {
    "title": "My First Blog",
    "content": "This is the content of my blog."
  }
  ```

#### Update Blog
**PATCH** `/api/blogs/:id`

#### Delete Blog
**DELETE** `/api/blogs/:id`

#### Get All Blogs (Public)
**GET** `/api/blogs`
- Query Parameters:
  - `search`: Search blogs by title or content.
  - `sortBy`: Sort blogs by fields like `createdAt` or `title`.
  - `sortOrder`: Sort order (`asc` or `desc`).
  - `filter`: Filter blogs by author ID.

### 3. Admin Actions
#### Block User
**PATCH** `/api/admin/users/:userId/block`

#### Delete Blog
**DELETE** `/api/admin/blogs/:id`

## Error Handling
A consistent error response format is implemented:
```json
{
  "success": false,
  "message": "Error message",
  "statusCode": 400,
  "error": { "details": "Additional error details" },
  "stack": "Error stack trace (if available)"
}
```