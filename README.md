# Backend Intern Assignment

## Project Overview
This project is a scalable backend REST API built using **Node.js** and **Express.js**.  
It includes user authentication, role-based access control, and CRUD operations for a secondary entity (**Tasks**).  
A basic **React.js frontend** is included to interact with and test the APIs.

---

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Frontend:** React.js
- **API Documentation:** Swagger
- **Other Tools:** Axios, CORS

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
```text
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
```

## Setup Instructions

## Backend Setup

### Clone the repository
```bash
git clone https://github.com/aartipandita51-cell/backend-intern-assignment.git
```

#### Install dependencies

``` bash
cd backend-intern-assignment
npm install
```

#### Create a `.env` file

``` env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

#### Start the backend server

``` bash
node server.js
```

#### Swagger API Documentation

``` text
http://localhost:5000/api-docs
```

------------------------------------------------------------------------

### Frontend Setup

#### Navigate to frontend folder

``` bash
cd frontend-intern
```

#### Install dependencies

``` bash
npm install
```

#### Start frontend

``` bash
npm start
```

#### Open in browser

``` text
http://localhost:3000
```

------------------------------------------------------------------------

## API Endpoints

### Authentication

-   `POST /api/v1/auth/register`
-   `POST /api/v1/auth/login`

### Tasks (Protected)

-   `GET /api/v1/tasks`
-   `POST /api/v1/tasks`
-   `PUT /api/v1/tasks/:id`
-   `DELETE /api/v1/tasks/:id`

### Admin

-   `GET /api/v1/admin/dashboard`

------------------------------------------------------------------------

## API Documentation

Swagger UI available at:

``` text
http://localhost:5000/api-docs
```

------------------------------------------------------------------------

## Scalability Notes

-   Modular architecture enables easy feature expansion
-   JWT provides stateless authentication and supports horizontal
    scaling
-   API versioning (`v1`) ensures backward compatibility
-   Future scalability improvements:
      -  Redis caching
      -  Load balancing with NGINX
      -  Microservices architecture




