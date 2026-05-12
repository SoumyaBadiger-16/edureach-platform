import { images, siteConfig } from "../data/content";
import { Sparkles, Brain, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
          <Brain className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-semibold text-blue-400">AI-Powered Education</span>
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-center max-w-4xl mb-6 leading-tight">
          The Future is Built on <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Artificial Intelligence</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-8">
          {siteConfig.name} College trains the next generation of AI engineers, data scientists, and innovators with industry partnerships from Google, Microsoft, and Amazon.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="#courses"
            className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Explore Programs
            </span>
          </a>
          <a href="#about"
            className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white border-2 border-gray-400 rounded-full hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Learn More
            </span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 w-full max-w-2xl">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">92%</div>
            <p className="text-sm text-gray-400">Placement Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">15K+</div>
            <p className="text-sm text-gray-400">AI Models</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">5K+</div>
            <p className="text-sm text-gray-400">Alumni</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-400 uppercase tracking-widest">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
