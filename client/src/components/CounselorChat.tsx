import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Plus, Loader2 } from "lucide-react";
import AvaAvatar from "./AvaAvatar";

interface Message {
  id: string;
  type: "user" | "counselor";
  content: string;
}

const suggestedQuestions = [
  "What career path is best for me?",
  "How to improve my placement chances?",
  "Which skills should I focus on?",
  "Tell me about internship opportunities",
  "How to prepare for interviews?",
];

export default function CounselorChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "counselor",
      content: "Hey! I'm Ava, your AI counselor. I'm here to help guide you through your academic journey. What would you like to discuss today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageText: string = input) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setIsThinking(true);

    // Simulate API call
    setTimeout(() => {
      const counselorResponses = [
        `That's a great question about "${messageText.split("?")[0]}". Based on your interests and current progress, I recommend focusing on building a strong foundation in core concepts while also gaining practical experience through projects and internships.`,
        `I appreciate you asking about that. The key to success is consistent practice, staying updated with industry trends, and building a network with professionals in your field. Would you like me to provide a specific roadmap for this?`,
        `Excellent point! Let me break this down for you. First, focus on understanding the fundamentals deeply. Then, work on real-world projects that showcase your skills to potential employers.`,
        `That's something many students wonder about. The most successful approach is to combine theoretical knowledge with practical application. I can help you create a personalized learning plan if you'd like.`,
      ];

      const response = counselorResponses[Math.floor(Math.random() * counselorResponses.length)];
      const counselorMessage: Message = {
        id: Date.now().toString(),
        type: "counselor",
        content: response,
      };

      setMessages((prev) => [...prev, counselorMessage]);
      setIsLoading(false);
      setIsThinking(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full bg-black text-white">
      {/* Avatar and Header */}
      <div className="flex-shrink-0 pt-8 pb-6 border-b border-white/10">
        <AvaAvatar isThinking={isThinking} isListening={isLoading} />
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  message.type === "user"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 rounded-br-none"
                    : "bg-white/10 border border-white/20 rounded-bl-none backdrop-blur-sm"
                }`}
              >
                <p className="text-white/90 text-sm leading-relaxed">{message.content}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-2xl rounded-bl-none">
              <div className="flex gap-1">
                <motion.div
                  className="w-2 h-2 rounded-full bg-blue-400"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-purple-400"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-pink-400"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions - Show only when few messages */}
      {messages.length <= 2 && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="px-6 pb-6 space-y-2"
        >
          <p className="text-white/60 text-xs font-semibold uppercase">Suggested topics:</p>
          <div className="space-y-2">
            {suggestedQuestions.map((question) => (
              <motion.button
                key={question}
                onClick={() => handleSendMessage(question)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left px-4 py-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/80 hover:text-white rounded-lg transition-all duration-200"
              >
                {question}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Input Area */}
      <div className="flex-shrink-0 border-t border-white/10 bg-gradient-to-r from-black via-black to-black/80 p-4 backdrop-blur-xl">
        <div className="flex items-end gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Plus className="w-5 h-5 text-white/60" />
          </motion.button>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
            placeholder="Ask Ava anything..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white/15 transition-all disabled:opacity-50"
          />

          <motion.button
            onClick={() => handleSendMessage()}
            disabled={!input.trim() || isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 transition-all"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
