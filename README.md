# User_Management_API

This project is a RESTful API built for managing user data using standard CRUD operations — Create, Read, Update, and Delete.

The API is developed using Node.js with TypeScript, Express.js as the web framework, TypeORM for object-relational mapping, and MySQL as the database.

---

## Setup Instructions

Follow the steps below to get the project running locally:

1. Clone the repository
```bash
    git clone https://github.com/Lopezjane/User_Management_API.git
    cd User_Management_API

2. Install dependencies
    npm install
    npm install typeorm mysql2
    npm install --save-dev typescript ts-node @types/node


3. Configure the database

4. Run the application

API Endpoints
Here are some example routes:
    GET /users – Get all users
    GET /users/:id – Get a specific user
    POST /users – Create a new user
    PUT /users/:id – Update user data
    DELETE /users/:id – Delete a user

