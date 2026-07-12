import dayjs from "dayjs";

export default function MessageBubble({message}){
    return (
        <div className = "bg-slate-800 rounded-2xl p-4 shadow">
            <div className = "flex justify-between mb-2">
                <h3 className = "font-semibold text-indigo-400">
                    {message.username}
                </h3>
                <span className ="text-xs text-slate-400">
                    {dayjs(message.timestamp).format("HH:mm A")}
                </span>
            </div>
            <p className = "text-white wrap-break-words">
                {message.text}
            </p>
        </div>
    );
}