import { useState } from "react";

import ChatHeader from "../components/ChatHeader";
import ChatBody from "../components/ChatBody";
import ChatInput from "../components/ChatInput";

import useChat from "../hooks/useChat";

export default function ChatPage() {

    const [username] = useState("Kartik");

    const {
        messages,
        sendMessage,
        messagesEndRef,
    } = useChat();

    return (

        <div className="min-h-screen bg-slate-950 flex justify-center items-center p-6">

            <div className="w-full max-w-5xl h-[90vh] bg-slate-900 rounded-3xl flex flex-col overflow-hidden shadow-2xl">

                <ChatHeader />

                <ChatBody
                    messages={messages}
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