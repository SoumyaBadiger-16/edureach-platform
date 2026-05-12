import { motion } from "framer-motion";
import { useInterest } from "../context/InterestContext";
import InterestSelector from "../components/InterestSelector";
import CareerRoadmapTimeline from "../components/CareerRoadmapTimeline";

export default function CareerRoadmapPage() {
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

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Career Roadmap
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Your personalized path to success in {selectedInterest || "your chosen"} field. Follow each phase to reach your career goals.
          </p>
        </motion.div>

        <CareerRoadmapTimeline interest={selectedInterest} />
      </div>
    </div>
  );
}
