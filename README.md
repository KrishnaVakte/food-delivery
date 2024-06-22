[Food Delivery App](https://food-del-frontend.vercel.app/)
=================

Table of Contents
-----------------

-   [Introduction](#introduction)
-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Screenshots](#screenshots)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API Documentation](#api-documentation)
-   [Contact](#lets-connect)

Introduction
------------

**URL** : https://food-del-frontend.vercel.app/

Food Delivery App is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to browse through a variety of food items, place orders. Only Authenticate user with email verifaction can place order.

Features
--------

-   User Authentication (Sign up, Login, Logout)
-   Email Verification
-   Browse and Search for Food Items
-   Add to Cart and Place Orders
-   Payment Integration
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
-   Payment Gateway : Stripe

Screenshots
------------

### User Dashboard

![image](https://github.com/KrishnaVakte/food-delivery/assets/86585840/36e02535-3447-4906-9cbf-68e1f15818aa)

![image](https://github.com/KrishnaVakte/food-delivery/assets/86585840/46f1dceb-9e56-4172-8bca-f5cf81d95521)

![image](https://github.com/KrishnaVakte/food-delivery/assets/86585840/bffbc68c-792a-4f36-8dcf-a9fad93e4807)

![image](https://github.com/KrishnaVakte/food-delivery/assets/86585840/ad8e1ef5-f265-449e-8248-1834edcf0f7f)

![image](https://github.com/KrishnaVakte/food-delivery/assets/86585840/8c9ec4a6-b3a4-4dce-9cd9-4f8b8e9781d8)

![image](https://github.com/KrishnaVakte/food-delivery/assets/86585840/9da8776b-ab3e-4519-bd1b-2c1062fc9318)

![image](https://github.com/KrishnaVakte/food-delivery/assets/86585840/30ef5062-74b3-4132-9a76-5d339692aad9)


### Admin Panel

![image](https://github.com/KrishnaVakte/food-delivery/assets/86585840/8dda6ae1-00f8-4617-83cb-3b714b42d80f)

![image](https://github.com/KrishnaVakte/food-delivery/assets/86585840/d8b3818f-1224-4354-a073-c2744a586be2)

![image](https://github.com/KrishnaVakte/food-delivery/assets/86585840/cd4029fd-1458-46c2-a49a-53dc9d268690)



Installation
------------

### Prerequisites

-   Node.js
-   MongoDB

### Clone the Repository

    
    git clone https://github.com/your-username/food-delivery-app.git
    cd food-delivery-app

### Backend Setup

1.  Navigate to the backend directory:

    ```bash

    cd backend

2.  Install the dependencies:

    ```bash
    npm install

3.  Create a `.env` file in the backend directory and add the following environment variables:

    ```plaintext

    PORT = 8000

    DB_URL = YOUR_MONGODB_URL

    FRONTEND_URL = YOUR_FRONTEND_URL

    JWT_SECRET = "YOUR_SECRET"

    STRIPE_SECRET_KEY = "YOUR_API_KEY"

    BASE_URL = http://localhost:5173

    HOST = smtp.gmail.com

    SERVICE = gmail

    EMAIL_PORT = 587

    SECURE = true,

    USER = YOUR_EMAIL

    PASS = YOUR_PASSWORD

4.  Start the backend server:

    ```bash

    npm start

### Frontend Setup

1.  Navigate to the frontend directory:

    ```bash
    cd ../frontend

2.  Install the dependencies:

    ```bash

     npm install

3.  Create a `.env` file in the frontend directory and add the following environment variables:


     VITE_BACKEND_URL = YOUR_BACKEND_URL


4.  Start the frontend development server:

    ```bash

    npm start

The application should now be running on http://localhost:5173 for the frontend and http://localhost:4000 for the backend.
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




## Let's Connect!

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:krishnavakte25@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/krishnavakte/)

=================

