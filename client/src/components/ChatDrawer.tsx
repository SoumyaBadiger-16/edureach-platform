import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, Minus } from "lucide-react";
import { useAuth } from "../context/AuthContext.tsx";
import { sendMessage } from "../services/chat.service.ts";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface ChatDrawerProps {
  open: boolean;
  onClose: () => void;
}

const quickQuestions = [
  "What courses do you offer?",
  "Tell me about placements",
  "What is the fee structure?",
  "How to apply for admissions?",
];

export default function ChatDrawer({ open, onClose }: ChatDrawerProps) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Hi ${user?.name?.split(" ")[0] || "there"}! I'm EduReach Bot. Ask me anything about courses, fees, admissions, or campus life.`,
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || sending) return;

    const userMsg: Message = { id: Date.now(), text: messageText, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setSending(true);

    try {
      // sendMessage now returns { message: "answer text" }
      const data = await sendMessage(messageText);
      const botMsg: Message = { id: Date.now() + 1, text: data.message, sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: Message = { id: Date.now() + 1, text: "Sorry, something went wrong. Please try again.", sender: "bot" };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] flex flex-col overflow-hidden animate-slide-up">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl shadow-blue-500/20"></div>

      {/* Content wrapper */}
      <div className="relative flex flex-col h-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white/50 animate-pulse"></div>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">EduReach AI</h3>
              <p className="text-white/60 text-xs">Always ready to help</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="text-white/60 hover:text-white p-1.5 hover:bg-white/10 rounded-lg transition-all duration-200 backdrop-blur-sm">
              <Minus className="w-4 h-4" />
            </button>
            <button onClick={onClose} className="text-white/60 hover:text-white p-1.5 hover:bg-white/10 rounded-lg transition-all duration-200 backdrop-blur-sm">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-end gap-2 animate-message-pop ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            {msg.sender === "bot" && (
              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Bot className="w-3 h-3 text-white" />
              </div>
            )}
            <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed backdrop-blur-sm transition-all duration-300 ${
              msg.sender === "user"
                ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-br-sm shadow-lg shadow-blue-500/20 animate-message-slide-left"
                : "bg-white/10 text-white/90 border border-white/20 rounded-bl-sm shadow-lg backdrop-blur-md animate-message-slide-right"
            }`}>
              {msg.text}
            </div>
            {msg.sender === "user" && (
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <User className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
        ))}

        {sending && (
          <div className="flex items-end gap-2 animate-message-pop">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <Bot className="w-3 h-3 text-white" />
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl rounded-bl-sm shadow-lg">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick questions */}
      {messages.length === 1 && (
        <div className="px-4 py-3 border-t border-white/10 backdrop-blur-sm">
          <p className="text-xs text-white/50 font-semibold mb-2.5 uppercase tracking-wide">Quick Questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((q) => (
              <button key={q} onClick={() => handleSend(q)}
                className="text-xs px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white/80 hover:text-white rounded-full transition-all duration-200 backdrop-blur-sm hover:border-white/40">
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border-t border-white/10 p-3">
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..." 
            disabled={sending}
            className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-lg focus:outline-none focus:border-white/40 focus:bg-white/15 text-sm disabled:opacity-50 transition-all duration-200 backdrop-blur-sm" 
          />
          <button 
            onClick={() => handleSend()} 
            disabled={!input.trim() || sending}
            className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 transition-all duration-200 active:scale-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
