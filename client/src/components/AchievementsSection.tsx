import { achievementsContent } from "../data/content";

export default function AchievementsSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievementsContent.stats.map((stat, idx) => (
            <div key={stat.label} className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="mb-3 inline-block">
                <p className="text-3xl md:text-4xl font-bold text-white font-heading drop-shadow-lg">
                  {stat.value}
                </p>
              </div>
              <p className="text-white/90 mt-2 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
