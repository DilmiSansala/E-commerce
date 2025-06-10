E-commerce REST API
A complete RESTful API built with Node.js, Express.js, and MongoDB for managing users and products in an e-commerce application.


User Management

User registration with password hashing
User login authentication
Get all users


Product Management

Create, Read, Update, Delete (CRUD) operations
Product validation
Inventory management


Security

Password hashing with bcrypt
Input validation
Error handling


API Design

RESTful endpoints
JSON responses
Proper HTTP status codes
CORS enabled



🛠️ Tech Stack

Backend: Node.js, Express.js
Database: MongoDB with Mongoose ODM
Security: bcryptjs for password hashing
Others: CORS, dotenv

📁 Project Structure
E-commerce/
├── controllers/
│   ├── userController.js      # User business logic
│   └── productController.js   # Product business logic
├── models/
│   ├── User.js               # User data model
│   └── Product.js            # Product data model
├── routes/
│   ├── userRoutes.js         # User API endpoints
│   └── productRoutes.js      # Product API endpoints
├── server.js                 # Main server file
├── package.json             # Project dependencies
├── .env                     # Environment variables
├── .gitignore              # Git ignore file
└── README.md               # Project documentation
🚦 Getting Started
Prerequisites

Node.js (v14 or higher)
MongoDB (local installation or MongoDB Atlas)
npm or yarn package manager

Installation

Clone the repository
bashgit clone <your-repo-url>
cd E-commerce

Install dependencies
bashnpm install

Create environment file

PORT=3000
JWT_SECRET=your_super_secret_jwt_key_here

Run the application

npm run dev

# Production mode
npm start