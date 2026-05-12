import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext.tsx";
import { InterestProvider } from "./context/InterestContext.tsx";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import CounselorPage from "./pages/CounselorPage.tsx";
import CareerRoadmapPage from "./pages/CareerRoadmapPage.tsx";
import PlacementSimulatorPage from "./pages/PlacementSimulatorPage.tsx";
import ScholarshipsPage from "./pages/ScholarshipsPage.tsx";
import CollegeComparisonPage from "./pages/CollegeComparisonPage.tsx";
import CampusExperiencePage from "./pages/CampusExperiencePage.tsx";
import HelpCenterPage from "./pages/HelpCenterPage.tsx";
import Navbar from "./components/Navbar.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import FloatingChatButton from "./components/FloatingChatButton.tsx";

const WithNavbar = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <InterestProvider>
          <Toaster position="top-center" />
          <Routes>
            <Route path="/" element={<WithNavbar><HomePage /></WithNavbar>} />
            <Route path="/login" element={<WithNavbar><LoginPage /></WithNavbar>} />
            <Route path="/signup" element={<WithNavbar><SignupPage /></WithNavbar>} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <WithNavbar><DashboardPage /></WithNavbar>
                </ProtectedRoute>
              }
            />
            <Route
              path="/counselor"
              element={
                <ProtectedRoute>
                  <WithNavbar><CounselorPage /></WithNavbar>
                </ProtectedRoute>
              }
            />
            <Route
              path="/career-roadmap"
              element={
                <ProtectedRoute>
                  <WithNavbar><CareerRoadmapPage /></WithNavbar>
                </ProtectedRoute>
              }
            />
            <Route
              path="/placement-simulator"
              element={
                <ProtectedRoute>
                  <WithNavbar><PlacementSimulatorPage /></WithNavbar>
                </ProtectedRoute>
              }
            />
            <Route
              path="/scholarships"
              element={
                <ProtectedRoute>
                  <WithNavbar><ScholarshipsPage /></WithNavbar>
                </ProtectedRoute>
              }
            />
            <Route
              path="/college-comparison"
              element={
                <ProtectedRoute>
                  <WithNavbar><CollegeComparisonPage /></WithNavbar>
                </ProtectedRoute>
              }
            />
            <Route
              path="/campus-experience"
              element={
                <ProtectedRoute>
                  <WithNavbar><CampusExperiencePage /></WithNavbar>
                </ProtectedRoute>
              }
            />
            <Route
              path="/help"
              element={<WithNavbar><HelpCenterPage /></WithNavbar>}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <FloatingChatButton />
        </InterestProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
