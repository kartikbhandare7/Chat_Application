import { useState } from "react";

export default function UsernameModal({ onJoin }) {

    const [name, setName] = useState("");

    const handleJoin = () => {
        if (!name.trim()) return;
        onJoin(name.trim());
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

            <div className="bg-slate-900 p-8 rounded-3xl w-[400px] shadow-2xl border border-slate-700">

                <h1 className="text-3xl text-white font-bold mb-2">
                    Welcome 👋
                </h1>

                <p className="text-slate-400 mb-6">
                    Enter your username to join the chat.
                </p>

                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleJoin();
                    }}
                    className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none border border-slate-700 focus:border-indigo-500"
                    placeholder="Username"
                />

                <button
                    onClick={handleJoin}
                    className="mt-5 w-full bg-indigo-600 hover:bg-indigo-500 rounded-xl py-3 text-white font-semibold transition"
                >
                    Join Chat
                </button>

            </div>

        </div>
    );
}