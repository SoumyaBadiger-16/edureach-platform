import { motion } from "framer-motion";
import { useInterest } from "../context/InterestContext";
import InterestSelector from "../components/InterestSelector";
import CounselorChat from "../components/CounselorChat";

export default function CounselorPage() {
  const { selectedInterest } = useInterest();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <InterestSelector />

      <div className="max-w-5xl mx-auto px-4 py-8 h-[calc(100vh-200px)]">
        <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl h-full overflow-hidden flex flex-col">
          <CounselorChat />
        </div>
      </div>
    </div>
  );
}
