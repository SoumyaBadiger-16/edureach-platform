import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext.tsx";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import Navbar from "./components/Navbar.tsx";
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
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<WithNavbar><HomePage /></WithNavbar>} />
            <Route path="/login" element={<WithNavbar><LoginPage /></WithNavbar>} />
            <Route path="/signup" element={<WithNavbar><SignupPage /></WithNavbar>} />
        </Routes>
        <FloatingChatButton />
      </AuthProvider>
    </BrowserRouter>
  );
}