import MessageBubble from "./MessageBubble";

export default function ChatBody({
    messages,
    username,
    messagesEndRef
}) {

    return (

        <div className="flex-1 overflow-y-auto p-6">

            <div className="flex flex-col gap-4">

                {messages.map((message) => (

                    <MessageBubble
                        key={message._id}
                        message={message}
                        currentUser={username}
                    />

                ))}

                <div ref={messagesEndRef} />

            </div>

        </div>

    );

}