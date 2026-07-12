import dayjs from "dayjs";

export default function MessageBubble({
    message,
    currentUser,
}) {

    const own = message.username === currentUser;

    return (

        <div
            className={`flex ${
                own ? "justify-end" : "justify-start"
            }`}
        >

            <div
                className={`max-w-[70%] rounded-2xl px-5 py-3 shadow-lg

                ${
                    own
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-800 text-white"
                }`}
            >

                <div className="flex justify-between gap-6 mb-2">

                    <span className="font-semibold">
                        {message.username}
                    </span>

                    <span className="text-xs opacity-70">

                        {dayjs(message.timestamp).format("hh:mm A")}

                    </span>

                </div>

                <p>{message.text}</p>

            </div>

        </div>

    );

}