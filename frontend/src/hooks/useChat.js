import { useEffect, useRef, useState } from "react";
import socket from "../socket/socket";
import { getMessages } from "../api/messageApi";

export default function useChat() {

    const [messages, setMessages] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState(0);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        socket.on("online_users", (count) => {
            setOnlineUsers(count);
        });

        loadMessages();

        socket.on("receive_message", (message) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {

            socket.off("receive_message");
            socket.off("online_users");

        };

    }, []);

    useEffect(() => {

        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [messages]);

    const loadMessages = async () => {

        try {

            const data = await getMessages();

            setMessages(data);

        } catch (err) {

            console.log(err);

        }

    };

    const sendMessage = (username, text) => {
        socket.emit("send_message", {
            username,
            text,
        });
    };

    return {
        messages,
        sendMessage,
        messagesEndRef,
        onlineUsers,
    };
}