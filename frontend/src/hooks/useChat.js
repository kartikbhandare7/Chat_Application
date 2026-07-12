import { useEffect, useRef, useState } from "react";
import socket from "../socket/socket";
import { getMessages } from "../api/messageApi";

export default function useChat() {

    const [messages, setMessages] = useState([]);

    const messagesEndRef = useRef(null);

    useEffect(() => {

        loadMessages();

        socket.on("receive_message", (message) => {

            setMessages((prev) => [...prev, message]);

        });

        return () => {

            socket.off("receive_message");

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
    };
}