import { useState } from "react";
import { IoSend } from "react-icons/io5";

export default function ChatInput({
    username,
    sendMessage,
}) {

    const [text, setText] = useState("");

    const handleSend = () => {

        if (!text.trim()) return;

        sendMessage(username, text);

        setText("");

    };

    return (

        <div className="p-5 border-t border-slate-800">

            <div className="flex gap-3">

                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {

                        if (e.key === "Enter") {

                            handleSend();

                        }

                    }}
                    placeholder="Type a message..."
                    className="flex-1 bg-slate-800 rounded-xl px-5 py-4 text-white outline-none border border-slate-700 focus:border-indigo-500"
                />

                <button
                    onClick={handleSend}
                    className="bg-indigo-600 hover:bg-indigo-500 transition rounded-xl px-6"
                >

                    <IoSend className="text-white text-xl" />

                </button>

            </div>

        </div>

    );

}