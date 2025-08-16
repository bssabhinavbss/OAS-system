import React from "react";
import { ShoppingCart, Settings, User, LogOut, Clock, Mail, Lock } from 'lucide-react';
import { useState } from "react";

import Navbar from "./Components/Navbar";
import ProfilePage from "./Components/ProfilePage";
import HeroSection from "./Components/HeroSection";
import FeaturesSection from "./Components/FeaturesSection";

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-950 font-sans text-white">
      <Navbar onNavigate={handleNavigation} />
      {/* Remove mx-auto from the main tag to allow content to span the full width */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <HeroSection />
            <FeaturesSection />
          </>
        )}
        {currentPage === 'profile' && <ProfilePage />}
      </main>
    </div>
  );
};

export default App;