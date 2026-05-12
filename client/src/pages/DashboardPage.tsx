import { useAuth } from "../context/AuthContext";
import {
  BookOpen,
  Users,
  Calendar,
  TrendingUp,
  LogOut,
  FileText,
  Award,
  Brain,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  // Dashboard stats cards
  const statCards = [
    {
      icon: BookOpen,
      title: "Courses",
      count: "3",
      total: "12",
      gradient: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Award,
      title: "Certificates",
      count: "2",
      total: "12",
      gradient: "from-purple-500 to-pink-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: TrendingUp,
      title: "GPA",
      count: "3.8",
      unit: "/ 4.0",
      gradient: "from-green-500 to-emerald-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: Zap,
      title: "Streak",
      count: "15",
      unit: "days",
      gradient: "from-orange-500 to-red-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
  ];

  // Active courses
  const activeCourses = [
    {
      id: 1,
      name: "AI & Machine Learning",
      instructor: "Dr. Rajesh Kumar",
      progress: 75,
      semester: "Fall 2024",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      name: "Cloud Computing",
      instructor: "Prof. Ananya Singh",
      progress: 60,
      semester: "Fall 2024",
      color: "from-purple-500 to-pink-400",
    },
    {
      id: 3,
      name: "Data Structures",
      instructor: "Dr. Vikram Patel",
      progress: 85,
      semester: "Fall 2024",
      color: "from-green-500 to-emerald-400",
    },
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Hackathon 2024",
      date: "Dec 15-17",
      time: "24 hours",
      type: "Competition",
      icon: Brain,
    },
    {
      id: 2,
      title: "Guest Lecture: AI Trends",
      date: "Dec 10",
      time: "2:00 PM",
      type: "Workshop",
      icon: Users,
    },
    {
      id: 3,
      title: "Project Submission Deadline",
      date: "Dec 8",
      time: "11:59 PM",
      type: "Deadline",
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className="sticky top-0 z-30 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Welcome back, {user?.name?.split(" ")[0]}!</h1>
            <p className="text-white/60 text-sm mt-1">Keep grinding, success is just ahead</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-red-400 hover:text-red-300 border border-red-400/30 rounded-lg hover:bg-red-500/10 transition-all duration-200"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`group relative bg-gradient-to-br ${card.bgColor} backdrop-blur-xl border ${card.borderColor} rounded-2xl p-6 hover:border-white/30 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${card.gradient} bg-opacity-20`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/60 text-xs font-medium">{card.title}</span>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-white">{card.count}</span>
                      {card.unit && <span className="text-white/60 text-sm">{card.unit}</span>}
                      {card.total && <span className="text-white/60 text-sm">/ {card.total}</span>}
                    </div>
                  </div>
                  {card.total && (
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${card.gradient}`}
                        style={{ width: `${(parseInt(card.count) / parseInt(card.total)) * 100}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Active Courses */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Active Courses
              </h2>
              <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">View All</button>
            </div>

            {activeCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{course.name}</h3>
                      <p className="text-white/60 text-sm">{course.instructor}</p>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-white/10 rounded-lg text-white/70">{course.semester}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/60 text-sm">Course Progress</span>
                      <span className="text-white font-semibold">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${course.color} transition-all duration-300`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming
              </h2>
            </div>

            <div className="space-y-3">
              {upcomingEvents.map((event) => {
                const EventIcon = event.icon;
                return (
                  <div
                    key={event.id}
                    className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex gap-3">
                      <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors flex-shrink-0">
                        <EventIcon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-white truncate">{event.title}</h3>
                        <p className="text-white/60 text-xs mt-1">{event.date}</p>
                        <p className="text-white/50 text-xs">{event.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Stats & Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Performance Summary */}
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-green-500/10">
                <BarChart3 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Performance</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70 text-sm">Overall GPA</span>
                  <span className="text-white font-bold">3.8/4.0</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[95%] h-full bg-gradient-to-r from-green-500 to-emerald-400"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70 text-sm">Current Semester</span>
                  <span className="text-white font-bold">78%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[78%] h-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
              <BookOpen className="w-5 h-5" />
              <span>Start New Lesson</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
              <Users className="w-5 h-5" />
              <span>Schedule Mentor</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-400 hover:from-orange-600 hover:to-red-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
              <FileText className="w-5 h-5" />
              <span>Download Certificate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
