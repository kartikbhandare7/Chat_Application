const message = require("../models/Message");
let onlineUsers = 0;
module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);
        socket.on("send_message", async (data) => {
            try{
                 const message = await Message.create({
                    username: data.username,
                    text: data.text,
                    timestamp: new Date()
                });
            onlineUsers++;

            io.emit("online_users", onlineUsers);

    io.emit("receive_message", message);
            }
            catch(error){
                console.error(error);
                socket.emit("error_message", {message: "failed to send message"});
            }
        });
        socket.on("disconnect", () => {
            onlineUsers--;
            io.emit("online_users", onlineUsers);
            console.log(`User disconnected: ${socket.id}`);
            
        });
    });
};