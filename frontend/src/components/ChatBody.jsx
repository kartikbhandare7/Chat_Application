import MessageBubble from "./MessageBubble";


const messages = [
    {
        username: "Kartik",
        text: "Hello, how are you?",
        timestamp: new Date()
    },
    {
        username: "Rahul",
        text: "I'm good, thanks! How about you?",
        timestamp: new Date()
    },
    {
        username: "shreya",
        text: "I'm doing well too. What are you up to?",
        timestamp: new Date()
    }
];

export default function ChatBody(){
    return (
        <div className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col gap-4">
                {messages.map((message, index) => (
                    <MessageBubble
                        key={index}
                        message={message}
                    />
                ))}
            </div>
        </div>
    );
}