import { IoSend } from "react-icons/io5";

export default function ChatInput() {

    return (

        <div className="p-5 border-t border-slate-800 bg-slate-900">

            <div className="flex gap-3">

                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 rounded-xl bg-slate-800 text-white px-5 py-4 outline-none border border-slate-700 focus:border-indigo-500"
                />

                <button
                    className="bg-indigo-600 hover:bg-indigo-500 transition px-6 rounded-xl flex items-center justify-center"
                >

                    <IoSend
                        className="text-white text-xl"
                    />

                </button>

            </div>

        </div>

    );

}