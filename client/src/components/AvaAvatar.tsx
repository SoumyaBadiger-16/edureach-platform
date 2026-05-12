import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AvaAvatarProps {
  isThinking?: boolean;
  isListening?: boolean;
}

export default function AvaAvatar({ isThinking = false, isListening = false }: AvaAvatarProps) {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        setEyePosition({
          x: Math.random() * 4 - 2,
          y: Math.random() * 4 - 2,
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isListening]);

  const containerVariants = {
    idle: {
      scale: 1,
    },
    thinking: {
      scale: [1, 1.02, 1],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  const breatheVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 4, repeat: Infinity },
    },
  };

  const eyeBlinkVariants = {
    idle: {
      scaleY: 1,
    },
    blink: {
      scaleY: [1, 0, 1],
      transition: { duration: 0.4, times: [0, 0.5, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      animate={isThinking ? "thinking" : "idle"}
      className="flex flex-col items-center gap-8 mb-8"
    >
      {/* Main Avatar Circle */}
      <motion.div
        variants={breatheVariants}
        animate="animate"
        className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 p-1 shadow-2xl shadow-purple-500/50"
      >
        {/* Inner container */}
        <div className="w-full h-full rounded-full bg-black/90 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
          {/* Glow effect */}
          <motion.div
            animate={{
              boxShadow: isListening
                ? [
                    "inset 0 0 20px rgba(59, 130, 246, 0)",
                    "inset 0 0 40px rgba(59, 130, 246, 0.4)",
                    "inset 0 0 20px rgba(59, 130, 246, 0)",
                  ]
                : "inset 0 0 0px rgba(59, 130, 246, 0)",
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
          />

          {/* Eyes Container */}
          <div className="relative z-10 flex gap-12">
            {/* Left Eye */}
            <motion.div
              animate={isListening ? { x: eyePosition.x, y: eyePosition.y } : { x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
            >
              <motion.div
                variants={eyeBlinkVariants}
                animate={isListening ? "idle" : "blink"}
                transition={{
                  repeatDelay: 3,
                  delay: 0,
                }}
                className="w-4 h-4 rounded-full bg-black origin-center"
              />
            </motion.div>

            {/* Right Eye */}
            <motion.div
              animate={isListening ? { x: eyePosition.x, y: eyePosition.y } : { x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
            >
              <motion.div
                variants={eyeBlinkVariants}
                animate={isListening ? "idle" : "blink"}
                transition={{
                  repeatDelay: 3,
                  delay: 0.1,
                }}
                className="w-4 h-4 rounded-full bg-black origin-center"
              />
            </motion.div>
          </div>

          {/* Mouth */}
          <motion.svg
            className="absolute bottom-8 w-12 h-6"
            viewBox="0 0 60 30"
            animate={isThinking ? { y: -5 } : { y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isThinking ? (
              <motion.path
                d="M 10 15 Q 30 25 50 15"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            ) : (
              <path
                d="M 15 20 Q 30 12 45 20"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            )}
          </motion.svg>
        </div>
      </motion.div>

      {/* Status Text */}
      <motion.div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Ava</h2>
        <motion.p
          animate={{ opacity: isThinking ? [0.5, 1, 0.5] : 1 }}
          transition={{ duration: 1.5, repeat: isThinking ? Infinity : 0 }}
          className="text-white/60 text-sm"
        >
          {isThinking ? "Thinking..." : isListening ? "Listening..." : "Ready to help"}
        </motion.p>
      </motion.div>

      {/* Animated Particles */}
      {(isThinking || isListening) && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                x: [0, Math.cos((i / 5) * Math.PI * 2) * 80],
                y: [0, Math.sin((i / 5) * Math.PI * 2) * 80],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
