import dotenv from "dotenv"
dotenv.config();

import http from "http"
import { Server } from "socket.io";

import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import { socketHandler } from "./src/socket/socket.js";

const PORT = process.env.PORT || 3000;

//server creation
const server = http.createServer(app)

//socket.io setup
const io = new Server(server);
socketHandler(io)

//database connection
connectDB();

server.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})