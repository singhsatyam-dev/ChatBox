//socket id => username
const users = new Map();

export const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

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
