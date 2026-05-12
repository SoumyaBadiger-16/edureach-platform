import React, { createContext, useContext, useState, useEffect } from "react";

export type Interest = "AI" | "Coding" | "MBA" | "Robotics";

interface InterestContextType {
  selectedInterest: Interest | null;
  setSelectedInterest: (interest: Interest) => void;
  clearInterest: () => void;
}

const InterestContext = createContext<InterestContextType | undefined>(undefined);

export function InterestProvider({ children }: { children: React.ReactNode }) {
  const [selectedInterest, setSelectedInterestState] = useState<Interest | null>(null);

  // Load interest from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("selectedInterest") as Interest | null;
    if (saved && ["AI", "Coding", "MBA", "Robotics"].includes(saved)) {
      setSelectedInterestState(saved);
    }
  }, []);

  const setSelectedInterest = (interest: Interest) => {
    setSelectedInterestState(interest);
    localStorage.setItem("selectedInterest", interest);
  };

  const clearInterest = () => {
    setSelectedInterestState(null);
    localStorage.removeItem("selectedInterest");
  };

  return (
    <InterestContext.Provider value={{ selectedInterest, setSelectedInterest, clearInterest }}>
      {children}
    </InterestContext.Provider>
  );
}

export function useInterest() {
  const context = useContext(InterestContext);
  if (!context) {
    throw new Error("useInterest must be used within InterestProvider");
  }
  return context;
}
