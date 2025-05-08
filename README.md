# Activity Booking App Backend

## Overview

This project is a REST API backend for a basic activity booking application, similar to MeetX use cases. It allows users to register, log in, browse available activities, book activities, view their bookings, and cancel bookings. The backend is built using Node.js with Express.js, uses MongoDB for data storage, and implements JWT-based authentication.

---

## Features

- **User Authentication**: Register and login with email and password, receiving a JWT token for authorized requests.
- **Activity Listing**: Public endpoint to list available activities (e.g., cricket, movies, football matches) with details like title, description, location, date, and time.
- **Booking Management**: Authorized users can book an activity, view their bookings, and cancel bookings.
- **Postman Collection**: A Postman collection is provided for API testing.

---

## Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (via Mongoose)  
- **Authentication**: JWT (JSON Web Token)
- **Validation**: Validator 
- **API Testing**: Postman

---

## Project Structure

activity-booking-app/
├── config/
│   └── db.js              # MongoDB connection setup
├── middleware/
│   └── auth.js            # JWT authentication middleware
├── models/
│   ├── User.js            # User schema and model
│   ├── Activity.js        # Activity schema and model
│   └── Booking.js         # Booking schema and model
├── routes/
│   ├── auth.js            # Authentication routes (register, login)
│   ├── activities.js      # Activity routes (list, create)
│   └── bookings.js        # Booking routes (book, view, cancel)
├── package.json           # Project dependencies and scripts
├── index.js              # Main server entry point
├── .env                   # Environment variables (MongoDB URI, JWT secret)
├── postman_collection.json # Postman collection for API testing
└── README.md              # Project documentation

---

## Project Flow--

First Register->Login->Create Activity->Do your bookings!


---

## Testing API

###baseUrl: https://activitybooking-z65n.onrender.com/


### Import postman_collection.json into Postman.
    Set up environment variables in Postman:
    baseUrl: https://activitybooking-z65n.onrender.com/ (or local host )
    token: (leave empty, set after login)
    activityId: (set after listing activities)
    bookingId: (set after booking an activity)

API endpoints
| Method | Endpoint                    | Description             | Authorization            |
| ------ | --------------------------- | ----------------------- | ------------------------ |
| POST   | `/api/auth/register`        | Register a new user     | None                     |
| POST   | `/api/auth/login`           | Login and get JWT token | None                     |
| GET    | `/api/activities`           | List all activities     | None                     |
| POST   | `/api/activities`           | Create a new activity   | None (should be secured) |
| POST   | `/api/bookings`             | Book an activity        | Bearer Token             |
| GET    | `/api/bookings/my-bookings` | Get user's bookings     | Bearer Token             |
| DELETE | `/api/bookings/:bookingId`  | Cancel a booking        | Bearer Token             |



## Prerequisites
    - Node.js (v14 or higher)
    - MongoDB (local or MongoDB Atlas)
    - Postman

---

## Setup Instructions

### 1. Clone the Repository:

    git clone <repository-url>
    cd activity-booking-app

### 2. Install dependencies

    npm install bcryptjs mongoose validator express jsonwebtoken dotenv
    npm install nodemon -D

### 3. Configure Environment Variables:

    MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/activity_booking?retryWrites=true&w=majority
    JWT_SECRET=your_jwt_secret_key
    PORT=5000

start server - npm run dev







