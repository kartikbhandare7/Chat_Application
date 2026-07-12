const message = require("../models/Message");

module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);
        socket.on("send_message", async (data) => {
            try{
                const message = await message.create({
                    username: data.username,
                    text: data.text,
                    timestamp: new Date()
                });
                io.emit("receive_message", message);
            }
            catch(error){
                console.error(error);
                socket.emit("error_message", {message: "failed to send message"});
            }
        });
        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
};