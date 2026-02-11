import { Message } from "../models/message.model.js";

//socket id => username
const users = new Map();

export const socketHandler = (io) => {
  io.on("connection", async (socket) => {
    console.log("User connected:", socket.id);

    //sends chat history to new user
    const messages = await Message.find().sort({ createdAt: 1 });
    socket.emit("chat:history", messages);

    //user join with username
    socket.on("join", (username) => {
      users.set(socket.id, username);

      //notification to everyone
      socket.broadcast.emit("notification", {
        message: `${username} joined the chat`,
      });

      //send updated users list
      io.emit("users:update", Array.from(users.values()));
    });

    //handles incoming messages
    socket.on("chat:message", async (text) => {
      const username = users.get(socket.id);

      if (!username || !text.trim()) return;

      const message = await Message.create({
        username,
        text,
      });

      io.emit("chat:message", message);
    });

    // typing indicator
    socket.on("typing", () => {
      const username = users.get(socket.id);

      if (username) {
        socket.broadcast.emit("typing", username);
      }
    });

    //handle disconnect
    socket.on("disconnect", () => {
      const username = users.get(socket.id);

      if (username) {
        users.delete(socket.id);

        socket.broadcast.emit("notification", {
          message: `${username} left the chat`,
        });
        io.emit("users:update", Array.from(users.values()));
      }
      console.log("User disconnected:", socket.id);
    });
  });
};
