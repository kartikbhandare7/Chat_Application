import {BsChatDotsFill} from "react-icons/bs";

export default function ChatHeader(){
    return(
        <div className = "flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900">
            <div className = "flex items-center gap-3">
                <div className = "bg-indigo-600 p-3 rounded-xl">
                    <BsChatDotsFill className = "text-white text-xl" />

                </div>
            
                <div>
                    <h1 className = "text-white text-xl font-bold">
                        RealTime Chat Application
                    </h1>
                    <p className = "text-slate-400 text-sm">
                        Socket.io + MongoDB
                    </p>
                </div>    
            </div>
            <div className = "flex items-center gap-2">
                <span className = "w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className = "text-green-400">Connected</span>
            </div>
        </div>
    );
}