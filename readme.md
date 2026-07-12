# 💬 Real-Time Chat Application

A modern real-time chat application built with **React**, **Node.js**, **Express**, **Socket.io**, and **MongoDB**. The application enables users to communicate instantly, persists chat history, and provides a clean, responsive user interface.

---

## 📌 Project Overview

This project demonstrates a full-stack real-time messaging system using WebSockets via Socket.io. It combines REST APIs for loading chat history with Socket.io for instant message delivery, ensuring a seamless user experience.

The application follows a modular architecture with a clear separation between frontend and backend, making it easy to maintain and extend.

---

# ✨ Features

### Core Features

* 🚀 Real-time messaging using Socket.io
* 💬 Send and receive messages instantly
* 📜 Persistent chat history stored in MongoDB
* 🔄 Chat history loads automatically after refresh
* 🕒 Message timestamps
* 👤 Username-based login (Dummy Authentication)
* 🌐 Online users counter
* ⌨️ Send messages using Enter key
* 📱 Responsive UI
* ⚡ Auto-scroll to latest message
* 🎨 Modern UI built with Tailwind CSS
* ❌ Graceful error handling

---

# 🏗️ Tech Stack

## Frontend

* React (Vite)
* Tailwind CSS
* Axios
* Socket.io Client
* React Icons
* Day.js

---

## Backend

* Node.js
* Express.js
* Socket.io
* MongoDB
* Mongoose
* dotenv
* CORS

---

# 📂 Project Structure

```
Chat_Application/

│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── sockets/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── socket/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# 🏛️ Architecture

```
                  React Frontend
                        │
         REST APIs + Socket.io Client
                        │
        ┌───────────────┴───────────────┐
        │                               │
   Express REST API               Socket.io Server
        │                               │
        └───────────────┬───────────────┘
                        │
                    MongoDB
```

---

# ⚙️ API Endpoints

## Get Chat History

```
GET /api/messages
```

Returns all previous messages sorted by timestamp.

---

## Send Message (REST)

```
POST /api/messages
```

Request Body

```json
{
  "username": "Kartik",
  "text": "Hello World"
}
```

Response

```json
{
  "success": true,
  "data": {
    "...": "..."
  }
}
```

> **Note:** In the frontend, real-time message sending is handled using Socket.io to avoid duplicate database writes. The REST endpoint is provided to satisfy the assignment requirement and can be used for API testing.

---

# 🔌 Socket Events

## Client → Server

```
send_message
```

Payload

```json
{
    "username":"Kartik",
    "text":"Hello"
}
```

---

## Server → Client

```
receive_message
```

Broadcasts newly saved messages to all connected users.

---

## Online Users

```
online_users
```

Broadcasts the current number of connected users whenever someone connects or disconnects.

---

# 💾 Database Schema

## Message Collection

```javascript
{
    username: String,
    text: String,
    timestamp: Date,
    createdAt: Date,
    updatedAt: Date
}
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone <repository-url>

cd Chat_Application
```

---

# Backend Setup

Navigate to backend directory

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

Run the backend

```bash
npm run dev
```

Server runs on

```
http://localhost:5000
```

---

# Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run the application

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# Environment Variables

Backend

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

No frontend environment variables are required for local development unless you move the API URL into a `.env` file.

---

# Design Decisions

* Socket.io is used for all real-time communication.
* REST API is responsible for loading chat history.
* MongoDB stores all chat messages for persistence.
* Service layer separates business logic from controllers.
* Socket.io broadcasts new messages to all connected users.
* Modular folder structure improves maintainability and scalability.
* Tailwind CSS provides a clean and responsive UI.

---

# Assumptions

* Single global chat room.
* Dummy username authentication.
* Internet connection is available.
* MongoDB is accessible.
* Every connected user receives all messages.

---

# Error Handling

* Empty messages are prevented.
* Backend request validation.
* Graceful API error responses.
* Socket connection errors handled.
* Automatic Socket.io reconnection.

---

# Future Improvements

* User authentication with JWT
* Private messaging
* Chat rooms
* Typing indicator
* Read receipts
* Delivered status
* File and image sharing
* Emoji support
* Message reactions
* Push notifications
* Docker support
* Unit and integration tests

---

# Deployment

## Backend (Render)

1. Push the backend folder to GitHub.
2. Create a new **Web Service** on Render.
3. Connect the GitHub repository.
4. Configure:

   * **Build Command**

     ```
     npm install
     ```
   * **Start Command**

     ```
     npm start
     ```
5. Add environment variables:

   * `PORT`
   * `MONGO_URI`
6. Deploy the service.
7. Copy the generated Render URL (for example: `https://your-app.onrender.com`).

---

## Frontend (Vercel)

1. Push the frontend to GitHub.
2. Import the project into Vercel.
3. Set the backend URL (if using an environment variable).
4. Deploy the application.
5. Update the Socket.io and Axios base URLs to use the deployed backend.

---

# Screenshots

> Add screenshots of:
>
> * Username Login
> * Chat Interface
> * Multiple Users Chatting
> * Responsive Mobile View

---

# Author

**Kartik Bhandare**

Backend Developer | Java | Spring Boot | MERN | MongoDB | Socket.io

GitHub: https://github.com/kartikbhandare7

LinkedIn: *(Add your LinkedIn profile here)*

---

# License

This project is developed as part of a technical assessment and is intended for educational and demonstration purposes.
