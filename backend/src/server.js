require("dotenv").config();

const http = require("http");

const app = require("./app");

const connectDB = require("./config/database");

const PORT = process.env.PORT || 5000;

const {server} = require("socket.io");

connectDB();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

require("./sockets/socket")(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});