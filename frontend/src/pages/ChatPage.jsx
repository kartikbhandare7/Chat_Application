import ChatHeader from "../components/ChatHeader";
import ChatBody from "../components/ChatBody";
import ChatInput from "../components/ChatInput";

export default function ChatPage() {
    return (
        <div className = "min-h-screen bg-slate-950 flex items-center justify-center p-6">
            <div className = "w-full max-w-5xl h-[90vh] bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 flex-col overflow-hidden">
                <div className="flex flex-col h-full">

                    <ChatHeader />

                    <main className="flex-1 overflow-hidden">
                        <ChatBody />
                    </main>

                    <ChatInput />

                </div>
            </div>
        </div>
    );
}