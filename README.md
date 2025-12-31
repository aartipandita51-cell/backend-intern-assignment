# Backend Intern Assignment

## Project Overview
This project is a scalable backend REST API built using Node.js and Express.js. It includes user authentication, role-based access control, and CRUD operations for a secondary entity (Tasks). A basic React frontend is included to interact with the APIs.

---

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Frontend: React.js
- API Documentation: Swagger
- Other Tools: Axios, CORS

---

## Features

### Authentication & Authorization
- User registration with password hashing
- User login with JWT authentication
- Role-based access (user and admin)
- Protected routes using JWT middleware

### Task Management (CRUD)
- Create tasks
- View user-specific tasks
- Update tasks
- Delete tasks

### Frontend
- User registration and login UI
- JWT-based protected dashboard
- Task creation, update, and deletion
- Error and success message handling

### API Documentation
- Swagger UI for API documentation and testing

---

## Project Structure

backend-intern-assignment/
│
├── controllers/
├── models/
├── routes/
├── middlewares/
├── frontend-intern/
├── swagger.js
├── server.js
├── logs.txt
├── README.md
└── package.json


---

## Setup Instructions

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/aartipandita51-cell/backend-intern-assignment.git

2. Install dependencies:
```bash
cd backend-intern-assignment
npm install

3. Create a .env file:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Start the backend server:
```bash
node server.js

5. API documentation will be available at:
```bash
http://localhost:5000/api-docs

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend-intern

2. Install dependencies:
```bash
npm install

3. Start frontend:
```bash
npm start

4. Open browser:
http://localhost:3000

**API Endpoints
**
**Authentication
**POST /api/v1/auth/register
POST /api/v1/auth/login

**Tasks** (Protected)
GET /api/v1/tasks
POST /api/v1/tasks
PUT /api/v1/tasks/:id
DELETE /api/v1/tasks/:id

**Admin
**GET /api/v1/admin/dashboard

**API Documentation
**Swagger UI:
```bash
http://localhost:5000/api-docs

**Scalability Notes
**
Modular architecture allows easy feature expansion
JWT enables stateless authentication and horizontal scaling
API versioning (v1) ensures backward compatibility
Can be scaled further using:
Redis caching
Load balancing (NGINX)
Microservices architecture

**Logs
**
Basic backend logs are included in logs.txt demonstrating successful API execution.
