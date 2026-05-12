import { useAuth } from "../context/AuthContext";
import { BookOpen, Users, Calendar, TrendingUp, LogOut } from "lucide-react";
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

  const dashboardCards = [
    {
      icon: BookOpen,
      title: "My Courses",
      description: "Access your enrolled courses and materials",
      count: "3",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Users,
      title: "Mentors",
      description: "Connect with your academic advisors",
      count: "5",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Upcoming campus events and activities",
      count: "12",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Progress",
      description: "Your academic performance tracker",
      count: "85%",
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-maroon to-maroon-dark text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome back, {user?.name}! 👋
              </h1>
              <p className="text-white/90 text-lg mb-6">
                You&apos;re all set to explore EduReach. Access your courses, connect with mentors, and track your progress.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-maroon px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Explore Courses
                </button>
                <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Info Card */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-500 text-sm mb-2">Full Name</p>
              <p className="text-gray-900 text-lg font-semibold">{user?.name}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-2">Email</p>
              <p className="text-gray-900 text-lg font-semibold">{user?.email}</p>
            </div>
            {user?.phone && (
              <div>
                <p className="text-gray-500 text-sm mb-2">Phone</p>
                <p className="text-gray-900 text-lg font-semibold">{user.phone}</p>
              </div>
            )}
            <div>
              <p className="text-gray-500 text-sm mb-2">Account Status</p>
              <p className="text-green-600 font-semibold">Active ✓</p>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dashboardCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-gray-500 text-sm mb-1">{card.title}</p>
                <p className="text-gray-900 text-2xl font-bold mb-2">{card.count}</p>
                <p className="text-gray-500 text-xs">{card.description}</p>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-maroon text-white py-3 rounded-lg font-semibold hover:bg-maroon-dark transition-colors duration-200 flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5" />
              View Courses
            </button>
            <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Schedule Mentor Call
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
