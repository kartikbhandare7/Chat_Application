

export default function ChatPage() {
    return (
        <div className = "min-h-screen bg-slate-950 flex items-center justify-center p-6">
            <div className = "w-full max-w-5xl h-[90vh] bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 flex-col overflow-hidden">
                <ChatHeader />
                <ChatBody />
                <ChatInput />
            </div>
        </div>
    );
}