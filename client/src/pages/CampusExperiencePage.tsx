import { motion } from "framer-motion";
import InterestSelector from "../components/InterestSelector";

export default function CampusExperiencePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <InterestSelector />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Campus Experience
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore student life, events, and activities at EduReach
          </p>
        </motion.div>

        <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 min-h-[600px] flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-center"
          >
            Campus Experience with 3D cards and virtual tour - Coming Soon
          </motion.p>
        </div>
      </div>
    </div>
  );
}
