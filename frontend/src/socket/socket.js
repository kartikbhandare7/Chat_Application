import { io } from "socket.io-client";

const socket = io("https://chat-application-2-zaro.onrender.com", {
    autoConnect: true,
    transports: ["websocket"],
});

export default socket;
