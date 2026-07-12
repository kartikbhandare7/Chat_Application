const Message = require("../models/Message");

let onlineUsers = 0;

module.exports = (io) => {

    io.on("connection", (socket) => {

        console.log(`User Connected: ${socket.id}`);

        onlineUsers++;

        io.emit("online_users", onlineUsers);

        socket.on("send_message", async (data) => {

            try {

                const savedMessage = await Message.create({
                    username: data.username,
                    text: data.text,
                    timestamp: new Date()
                });

                io.emit("receive_message", savedMessage);

            } catch (error) {

                console.error(error);

                socket.emit("error_message", {
                    message: "Failed to send message"
                });

            }

        });

        socket.on("disconnect", () => {

            onlineUsers--;

            io.emit("online_users", onlineUsers);

            console.log(`User Disconnected: ${socket.id}`);

        });

    });

};