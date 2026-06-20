# 🚀 ChatterUp - Real-Time Chat Application

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Realtime-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## 📌 Overview

**ChatterUp** is a real-time chat application that enables users to communicate instantly using WebSockets. Built with **Node.js, Express, MongoDB, and Socket.IO**, the application provides a seamless chatting experience with features like online user tracking, typing indicators, chat history persistence, and live notifications.

This project was built to gain hands-on experience with **real-time communication**, **event-driven architecture**, and **Socket.IO**.

---

## 🌟 Features

### 💬 Real-Time Messaging

* Instant message delivery using Socket.IO
* Live communication without page refresh

### 👥 Online User Tracking

* Displays all currently connected users
* Updates automatically when users join or leave

### ⌨️ Typing Indicators

* Shows when a user is typing
* Improves real-time chat experience

### 📜 Chat History

* Messages are stored in MongoDB
* New users can view previous conversations

### 🔔 Join & Leave Notifications

* Real-time alerts when users enter or exit the chat

### 🎭 Dynamic Avatars

* Automatically generated avatars based on usernames

### 📱 Responsive UI

* Works across desktop and mobile devices

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Realtime Communication

* Socket.IO

---

## 📂 Project Structure

```bash
ChatterUp/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── message.model.js
│   │
│   ├── sockets/
│   │   └── socket.js
│   │
│   ├── app.js
│   └── server.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/singhsatyam-dev/ChatBox
```

### Navigate to Project

```bash
cd chatterup
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### Start Server

```bash
npm start
```

or

```bash
npm run dev
```

---

## 🧠 How It Works

1. User enters a username.
2. Socket.IO establishes a real-time connection.
3. User joins the chat room.
4. Messages are emitted to the server.
5. Server stores messages in MongoDB.
6. Messages are broadcast to all connected users.
7. Online user list updates automatically.
8. Typing events are emitted and displayed in real time.

---

## 📸 Screenshots

### Chat Interface

<img width="1851" height="957" alt="Realtime Chat" src="https://github.com/user-attachments/assets/35db1f11-d980-4f5e-9fe0-b25de3f6712e" />


### Online Users

<img width="485" height="275" alt="online users" src="https://github.com/user-attachments/assets/f34e922b-b0b9-4d7d-bb6b-202e1abfadeb" />


### Mobile Responsive View

<img width="472" height="684" alt="image" src="https://github.com/user-attachments/assets/4b6ba221-b077-4d73-bf22-d576feb71583" />


---

## 🚧 Challenges Faced

### Real-Time Synchronization

Managing multiple connected users and ensuring messages were delivered instantly without duplication.

### User Presence Tracking

Keeping the online user list accurate during connection and disconnection events.

### Chat History Persistence

Storing messages in MongoDB while maintaining real-time performance.

### Typing Indicators

Implementing a smooth typing experience without overwhelming the server with events.

---

## 🎯 Future Improvements

* 🔐 JWT Authentication
* 👤 User Profiles
* 💌 Private Messaging
* 🏠 Multiple Chat Rooms
* 📁 File & Image Sharing
* ✅ Message Read Receipts
* 🌙 Dark Mode
* 🔔 Push Notifications

---

## 📚 Key Learnings

Through this project, I gained practical experience in:

* Socket.IO Fundamentals
* WebSocket Communication
* Event-Driven Architecture
* MongoDB Integration
* User State Management
* Realtime Application Design
* Backend Development with Node.js

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

## 📧 Contact

**Satyam Kumar Singh**

LinkedIn: https://www.linkedin.com/in/satyam-kumar-singh-25087b291/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsZKdIF7VSxK1uIZ9%2FtYxNg%3D%3D

GitHub: https://github.com/singhsatyam-dev/ChatBox

---


