import { aboutContent, images } from "../data/content";
import { Code2, Brain, Zap, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const features = [
    { icon: Brain, label: "AI Research", desc: "Cutting-edge ML research labs" },
    { icon: Code2, label: "Real Projects", desc: "Industry-level assignments" },
    { icon: Zap, label: "Fast-Track", desc: "Accelerated learning programs" },
    { icon: Lightbulb, label: "Innovation", desc: "Startup incubation hub" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-4">
              <span className="text-sm font-semibold text-purple-400">About Us</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Engineering Excellence Meets <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Artificial Intelligence</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {aboutContent.description} We combine traditional engineering rigor with AI/ML innovation to prepare students for the future of technology.
            </p>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutContent.highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{item.value}</p>
                  <p className="text-sm text-gray-400 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Images */}
          <div className="relative hidden md:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-black rounded-2xl overflow-hidden">
              <img
                src={images.collegeClassroom}
                alt="Classroom"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.label}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.label}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
