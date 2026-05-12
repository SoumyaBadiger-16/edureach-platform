import { motion } from "framer-motion";
import { useInterest, type Interest } from "../context/InterestContext";
import { Brain, Code2, TrendingUp, Cpu } from "lucide-react";

const interests: { value: Interest; label: string; icon: React.ReactNode; color: string }[] = [
  { value: "AI", label: "AI & ML", icon: <Brain className="w-6 h-6" />, color: "from-blue-500 to-cyan-400" },
  { value: "Coding", label: "Coding", icon: <Code2 className="w-6 h-6" />, color: "from-purple-500 to-pink-400" },
  { value: "MBA", label: "MBA", icon: <TrendingUp className="w-6 h-6" />, color: "from-orange-500 to-red-400" },
  { value: "Robotics", label: "Robotics", icon: <Cpu className="w-6 h-6" />, color: "from-green-500 to-emerald-400" },
];

export default function InterestSelector() {
  const { selectedInterest, setSelectedInterest } = useInterest();

  return (
    <div className="w-full bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-xl border-b border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-4">Your Learning Path</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {interests.map((interest) => (
            <motion.button
              key={interest.value}
              onClick={() => setSelectedInterest(interest.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-4 rounded-xl transition-all duration-300 group overflow-hidden ${
                selectedInterest === interest.value
                  ? `bg-gradient-to-r ${interest.color} shadow-lg`
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300"></div>
              <div className="relative flex flex-col items-center gap-2 text-white">
                <div className={selectedInterest === interest.value ? "text-white" : "text-white/70 group-hover:text-white/90"}>
                  {interest.icon}
                </div>
                <span className="text-xs md:text-sm font-semibold text-center">{interest.label}</span>
              </div>
            </motion.button>
          ))}
        </div>
        {selectedInterest && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/60 text-xs mt-3"
          >
            Customizing your experience for <span className="font-semibold text-white">{selectedInterest}</span> track
          </motion.p>
        )}
      </div>
    </div>
  );
}
