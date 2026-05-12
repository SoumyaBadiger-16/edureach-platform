import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, GraduationCap, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="font-heading text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">EduReach</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm font-medium">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop auth */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="text-sm text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200">
                My Dashboard
              </Link>
              <span className="text-sm text-gray-400">Hi, {user.name.split(" ")[0]}</span>
              <button onClick={handleLogout}
                className="flex items-center gap-1 text-sm bg-red-600/20 text-red-400 px-3 py-1.5 rounded-lg hover:bg-red-600/30 transition-colors duration-200">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-sm text-gray-300 font-medium hover:text-blue-400 transition-colors duration-200">Login</Link>
              <Link to="/signup" className="text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200">Sign Up</Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-300 hover:text-blue-400 transition-colors">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">{link.label}</a>
          ))}
          <div className="pt-3 border-t border-gray-800">
            {user ? (
              <div className="space-y-3">
                <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="block text-blue-400 font-medium">
                  My Dashboard
                </Link>
                <button onClick={handleLogout} className="w-full flex items-center gap-2 text-red-400 font-medium hover:text-red-300 transition-colors">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link to="/login" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-blue-400 font-medium transition-colors">Login</Link>
                <Link to="/signup" onClick={() => setMenuOpen(false)} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
