import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Sparkles } from "lucide-react";
import { useAuth } from "../context/AuthContext.tsx";
import ChatDrawer from "./ChatDrawer.tsx";

export default function FloatingChatButton() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (user) {
      setChatOpen(!chatOpen);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {/* Chat drawer popup */}
      <ChatDrawer open={chatOpen} onClose={() => setChatOpen(false)} />

      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Glow effect background */}
        <div className={`absolute inset-0 w-16 h-16 -m-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300 ${chatOpen ? "opacity-100" : ""}`}></div>
        
        {/* Main button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 ${
            chatOpen 
              ? "bg-gradient-to-br from-blue-500 to-purple-600 shadow-blue-500/50" 
              : "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400"
          }`}
          title={user ? "Chat with EduReach Bot" : "Login to chat"}
        >
          {/* Animated background */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 transition-all duration-300 ${hovered ? "border-white/50" : ""}`}></div>
          
          {/* Icon */}
          <div className="relative z-10 flex items-center justify-center">
            {chatOpen ? (
              <MessageCircle className="w-6 h-6 text-white animate-pulse" />
            ) : (
              <div className="relative">
                <MessageCircle className="w-6 h-6 text-white" />
                {!user && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                )}
              </div>
            )}
          </div>

          {/* Badge */}
          {!chatOpen && user && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border border-white/50">
              {1}
            </div>
          )}
        </button>

        {/* Tooltip */}
        {hovered && (
          <div className="absolute bottom-16 right-0 bg-black/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap animate-fade-in border border-white/20">
            {user ? "Chat with AI Bot" : "Login to chat"}
            <div className="absolute top-full right-2 w-2 h-2 bg-black/80 rounded-sm transform rotate-45 -mt-1"></div>
          </div>
        )}
      </div>
    </>
  );
}
