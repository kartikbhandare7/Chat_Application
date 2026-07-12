import { useState } from "react";

import ChatHeader from "../components/ChatHeader";
import ChatBody from "../components/ChatBody";
import ChatInput from "../components/ChatInput";
import UsernameModal from "../components/UsernameModel";

import useChat from "../hooks/useChat";

export default function ChatPage() {

    const [username, setUsername] = useState(
        localStorage.getItem("username") || ""
    );

    // ✅ Always call hooks
    const {
        messages,
        sendMessage,
        messagesEndRef,
        onlineUsers,
    } = useChat();
    
    const handleJoin = (name) => {
        localStorage.setItem("username", name);
        setUsername(name);
    };
    // ✅ Then conditionally render
    if (!username) {
        return <UsernameModal onJoin={handleJoin} />;
    }

    return (
        <div className="min-h-screen bg-slate-950 flex justify-center items-center p-6">

            <div className="w-full max-w-5xl h-[90vh] bg-slate-900 rounded-3xl flex flex-col overflow-hidden">

                <ChatHeader 
                    username={username}
                    onlineUsers={onlineUsers}
                />

                <ChatBody
                    messages={messages}
                    username={username}
                    messagesEndRef={messagesEndRef}
                />

                <ChatInput
                    username={username}
                    sendMessage={sendMessage}
                />

            </div>

        </div>
    );
}