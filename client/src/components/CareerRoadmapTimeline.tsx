import { motion } from "framer-motion";
import { TrendingUp, Award, Briefcase, Target, Code2, Brain } from "lucide-react";

interface RoadmapPhase {
  phase: number;
  title: string;
  duration: string;
  skills: string[];
  milestone: string;
  salary: string;
  icon: React.ReactNode;
}

interface CareerRoadmapTimelineProps {
  interest: string | null;
}

export default function CareerRoadmapTimeline({ interest }: CareerRoadmapTimelineProps) {
  const roadmaps: Record<string, RoadmapPhase[]> = {
    AI: [
      {
        phase: 1,
        title: "Foundation (Months 1-3)",
        duration: "3 months",
        skills: ["Python", "Math & Statistics", "Data Analysis"],
        milestone: "Complete Python Fundamentals",
        salary: "$0-30K (Student)",
        icon: <Code2 className="w-6 h-6" />,
      },
      {
        phase: 2,
        title: "Core AI/ML (Months 4-8)",
        duration: "5 months",
        skills: ["Machine Learning", "TensorFlow", "Deep Learning"],
        milestone: "Build 3 ML Projects",
        salary: "$35-50K (Junior)",
        icon: <Brain className="w-6 h-6" />,
      },
      {
        phase: 3,
        title: "Advanced Specialization (Months 9-12)",
        duration: "4 months",
        skills: ["NLP", "Computer Vision", "Advanced Deep Learning"],
        milestone: "Contribute to Open Source",
        salary: "$50-75K (Mid-level)",
        icon: <TrendingUp className="w-6 h-6" />,
      },
      {
        phase: 4,
        title: "Professional (Year 2)",
        duration: "12 months",
        skills: ["System Design", "Production ML", "Research"],
        milestone: "Senior AI Engineer Role",
        salary: "$100-150K+ (Senior)",
        icon: <Briefcase className="w-6 h-6" />,
      },
    ],
    Coding: [
      {
        phase: 1,
        title: "Web Basics (Months 1-3)",
        duration: "3 months",
        skills: ["HTML/CSS", "JavaScript", "DOM Manipulation"],
        milestone: "Build 5 Static Websites",
        salary: "$0-25K (Student)",
        icon: <Code2 className="w-6 h-6" />,
      },
      {
        phase: 2,
        title: "Full Stack (Months 4-8)",
        duration: "5 months",
        skills: ["React", "Node.js", "Databases", "APIs"],
        milestone: "Complete Full Stack App",
        salary: "$30-50K (Junior)",
        icon: <Brain className="w-6 h-6" />,
      },
      {
        phase: 3,
        title: "Advanced Stack (Months 9-12)",
        duration: "4 months",
        skills: ["TypeScript", "System Design", "DevOps Basics"],
        milestone: "Production-ready Applications",
        salary: "$55-80K (Mid-level)",
        icon: <TrendingUp className="w-6 h-6" />,
      },
      {
        phase: 4,
        title: "Professional (Year 2)",
        duration: "12 months",
        skills: ["Cloud", "Scaling", "Architecture", "Leadership"],
        milestone: "Senior Developer/Tech Lead",
        salary: "$120-200K+ (Senior)",
        icon: <Briefcase className="w-6 h-6" />,
      },
    ],
    MBA: [
      {
        phase: 1,
        title: "Fundamentals (Months 1-3)",
        duration: "3 months",
        skills: ["Business Strategy", "Finance Basics", "Economics"],
        milestone: "Understanding Business Models",
        salary: "$0-35K (Fresh MBA)",
        icon: <Code2 className="w-6 h-6" />,
      },
      {
        phase: 2,
        title: "Specialization (Months 4-8)",
        duration: "5 months",
        skills: ["Finance", "Marketing", "Operations", "Leadership"],
        milestone: "First Management Role",
        salary: "$50-75K (Manager)",
        icon: <Brain className="w-6 h-6" />,
      },
      {
        phase: 3,
        title: "Advancement (Months 9-12)",
        duration: "4 months",
        skills: ["Strategic Planning", "P&L", "Team Building"],
        milestone: "Senior Manager Position",
        salary: "$80-120K (Senior Manager)",
        icon: <TrendingUp className="w-6 h-6" />,
      },
      {
        phase: 4,
        title: "Executive (Year 2+)",
        duration: "12+ months",
        skills: ["Executive Management", "Board Readiness", "Innovation"],
        milestone: "C-Suite or Director Role",
        salary: "$150K-500K+ (Executive)",
        icon: <Briefcase className="w-6 h-6" />,
      },
    ],
    Robotics: [
      {
        phase: 1,
        title: "Basics (Months 1-3)",
        duration: "3 months",
        skills: ["Electronics", "Arduino", "Mechanical Design"],
        milestone: "Build First Robot",
        salary: "$0-30K (Student)",
        icon: <Code2 className="w-6 h-6" />,
      },
      {
        phase: 2,
        title: "Advanced Robotics (Months 4-8)",
        duration: "5 months",
        skills: ["ROS", "Computer Vision", "Control Systems"],
        milestone: "Autonomous Robot Project",
        salary: "$40-65K (Junior)",
        icon: <Brain className="w-6 h-6" />,
      },
      {
        phase: 3,
        title: "Specialization (Months 9-12)",
        duration: "4 months",
        skills: ["AI Integration", "Embedded Systems", "Production"],
        milestone: "Industrial Robot Deployment",
        salary: "$65-100K (Mid-level)",
        icon: <TrendingUp className="w-6 h-6" />,
      },
      {
        phase: 4,
        title: "Expert (Year 2+)",
        duration: "12+ months",
        skills: ["AI Robotics", "System Architecture", "R&D"],
        milestone: "Lead Roboticist/Researcher",
        salary: "$120-180K+ (Senior)",
        icon: <Briefcase className="w-6 h-6" />,
      },
    ],
  };

  const phases = interest ? roadmaps[interest] : roadmaps.AI;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-400 md:transform md:-translate-x-1/2"></div>

      {/* Phases */}
      <div className="space-y-12">
        {phases.map((phase, index) => (
          <motion.div key={phase.phase} variants={itemVariants} className="relative">
            <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Content */}
              <div className="md:w-1/2 md:px-8">
                <div className={`bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 ml-12 md:ml-0 ${
                  index % 2 === 1 ? "md:ml-0" : ""
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-blue-500/20">
                      {phase.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                      <p className="text-white/60 text-sm">{phase.duration}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-white/80 text-sm font-semibold mb-2">Skills to Master:</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10">
                      <p className="text-white/80 text-sm mb-2">
                        <span className="font-semibold">Milestone:</span> {phase.milestone}
                      </p>
                      <motion.p
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-white font-bold text-sm bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                      >
                        💰 {phase.salary}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline node */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-black md:transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 shadow-lg shadow-blue-500/50 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [0.5, 1.2, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Final achievement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-16 pt-8 border-t border-white/10"
      >
        <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Career Success!</h3>
        <p className="text-white/60">Follow this roadmap, stay consistent, and you&apos;ll achieve your goals</p>
      </motion.div>
    </motion.div>
  );
}
