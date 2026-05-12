import { coursesContent, images } from "../data/content";
import { BookOpen, Users } from "lucide-react";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">Programs</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Programs Designed for the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Era</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Master the skills that shape the future with our AI-integrated curriculum</p>
        </div>

        {/* B.Tech grid */}
        <h3 className="font-heading text-2xl font-semibold mb-6">
          B.Tech Programs (4 Years)
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {coursesContent.btech.map((course) => (
            <div
              key={course.name}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300"></div>
              <div className="relative flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{course.name}</h4>
                  <div className="flex items-center gap-3 mt-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> {course.seats} seats
                    </span>
                    <span className="text-blue-400 font-medium">{course.avg}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* M.Tech & MBA */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* M.Tech */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300"></div>
            <div className="relative">
              <h3 className="font-heading text-xl font-semibold text-white mb-4">M.Tech Programs</h3>
              <div className="space-y-2">
                {coursesContent.mtech.map((course) => (
                  <div key={course.name} className="flex justify-between text-sm py-2 border-b border-gray-700 last:border-0">
                    <span className="text-gray-300">{course.name}</span>
                    <span className="text-blue-400 font-medium">{course.seats} seats</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MBA */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300"></div>
            <div className="relative">
              <h3 className="font-heading text-xl font-semibold text-white mb-4">MBA Program</h3>
              <p className="text-gray-300 mb-4">{coursesContent.mba.name}</p>
              <div className="flex items-center gap-4 text-sm mb-2">
                <span className="text-gray-400">{coursesContent.mba.seats} seats</span>
                <span className="text-purple-400 font-medium">{coursesContent.mba.avg}</span>
              </div>
              <p className="text-gray-400 text-sm">
                Specializations in Finance, Marketing, HR, and IT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
