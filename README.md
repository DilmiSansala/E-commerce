🛒 E-commerce REST API
A complete RESTful API built with Node.js, Express.js, and MongoDB for managing users and products in an e-commerce application.

✨ Features
👤 User Management
User registration with password hashing

User login with JWT authentication

Fetch all users

📦 Product Management
Full CRUD operations for products

Product data validation

Inventory management (e.g., quantity, stock)

🔐 Security
Password hashing using bcryptjs

Input validation

Centralized error handling

🔧 API Design
RESTful endpoint structure

JSON-formatted responses

Proper HTTP status codes

CORS enabled

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB with Mongoose ODM

Security: bcryptjs for password hashing

Other: CORS, dotenv

📁 Project Structure
bash
Copy
Edit
E-commerce/
├── controllers/
│   ├── userController.js         # User business logic
│   └── productController.js      # Product business logic
├── models/
│   ├── User.js                   # User data model
│   └── Product.js                # Product data model
├── routes/
│   ├── userRoutes.js             # User API endpoints
│   └── productRoutes.js          # Product API endpoints
├── middleware/
│   └── authMiddleware.js         # JWT auth and error handlers (if used)
├── server.js                     # Main server file
├── package.json                  # Project dependencies
├── .env                          # Environment variables
├── .gitignore                    # Git ignore file
└── README.md                     # Project documentation
🚦 Getting Started
✅ Prerequisites
Node.js (v14 or higher)

MongoDB (local or MongoDB Atlas)

npm or yarn

📥 Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/E-commerce.git
cd E-commerce
Install dependencies:
npm install
Create a .env file in the root directory and add:
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key_here

For production mode:
npm start
🔗 API Endpoints
User Routes (/api/users)
POST /register - Register a new user

POST /login - Authenticate user

GET / - Get all users

Product Routes (/api/products)
POST / - Create a new product

GET / - Get all products

GET /:id - Get a product by ID

PUT /:id - Update a product by ID

DELETE /:id - Delete a product by ID

