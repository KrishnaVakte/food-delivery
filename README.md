Food Delivery App
=================

Table of Contents
-----------------

-   [Introduction](#introduction)
-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API Documentation](#api-documentation)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)

Introduction
------------

Food Delivery App is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to browse through a variety of food items, place orders, and get their favorite meals delivered to their doorstep.

Features
--------

-   User Authentication (Sign up, Login, Logout)
-   Browse and Search for Food Items
-   Add to Cart and Place Orders
-   Order Tracking
-   Admin Dashboard for Managing Food Items and Orders
-   Responsive Design

Tech Stack
----------

-   Frontend: React.js, Redux, Tailwind
-   Backend: Node.js, Express.js
-   Database: MongoDB
-   Authentication: JWT (JSON Web Tokens), bcrypt
-   Hosting: Vercel (Frontend), Render (Backend)

Installation
------------

### Prerequisites

-   Node.js
-   MongoDB

### Clone the Repository

bash

Copy code

`git clone https://github.com/your-username/food-delivery-app.git
cd food-delivery-app`

### Backend Setup

1.  Navigate to the backend directory:

    bash

    Copy code

    `cd backend`

2.  Install the dependencies:

    bash

    Copy code

    `npm install`

3.  Create a `.env` file in the backend directory and add the following environment variables:

    plaintext

    Copy code

    `PORT = 8000

DB_URL = mongodb+srv://krish:krish123@cluster0.co9b7n0.mongodb.net/food-del

FRONTEND_URL = https://food-del-frontend.vercel.app

JWT_SECRET = "YOUR_SECRET"

STRIPE_SECRET_KEY = "YOUR_API_KEY"

BASE_URL = http://localhost:5173

HOST = smtp.gmail.com

SERVICE = gmail

EMAIL_PORT = 587

SECURE = true,

USER = YOUR_EMAIL

PASS = YOUR_PASSWORD`

4.  Start the backend server:

    bash

    Copy code

    `npm start`

### Frontend Setup

1.  Navigate to the frontend directory:

    bash

    Copy code

    `cd ../frontend`

2.  Install the dependencies:

    bash

    Copy code

    `npm install`

3.  Create a `.env` file in the frontend directory and add the following environment variables:

    plaintext

    Copy code

    `VITE_BACKEND_URL = YOUR_BACKEND_URL`

4.  Start the frontend development server:

    bash

    Copy code

    `npm start`

The application should now be running on http://localhost:5173 for the frontend and http://localhost:5000 for the backend.
You Should have to make some changes in code like change the url to your localhost url etc. 

Usage
-----

1.  Register a new account or log in with an existing account.
2.  Email Verifaction at the time of Registration.
3.  Browse through the available food items.
4.  Category wise Food Itmes.
5.  Add items to your cart.
6.  Place an order and wait for delivery.
7.  Track the order status.
8.  Admins can log in to the admin dashboard to manage food items and orders.


API Documentation
-----------------

The backend server exposes a RESTful API for interacting with the application. Below is a summary of the main endpoints:

-   Auth Routes

    -   `POST /api/user/register` - Register a new user
    -   `POST /api/user/login` - Log in an existing user
-   User Routes

    -   `GET /api/users/me` - Get the logged-in user's details
-   Food Routes

    -   `GET /api/food/list` - Get all food items
    -   `POST /api/food/add` - Add a new food item (Admin only)
    -   `DELETE /api/food/remove` - Delete a food item (Admin only)
-   Cart Routes
    
    -   `POST /api/cart/add` - Add Item to cart

    -   `POST /api/cart/remove` - Remove Item from Cart

    -   `GET /api/cart/get` - Get Cart Items
-   Order Routes

    -   `POST /api/order/verify` - Verify the payment
    -   `GET /api/order/userorders` - Get all orders of a user
    -   `GET /api/order/list` - Get All Order list (Admin Only)
    -   `PUT /api/order/status` - Change the status of a order (Admin only)




Contact
-------

If you have any questions, feel free to reach out:

-   GitHub: [KrishnaVakte](https://github.com/KrsihnaVakte)Food Delivery App
-   LinkedIn: [Krishna Vakte](https://www.linkedin.com/in/krishnavakte/)
=================

