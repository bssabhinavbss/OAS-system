import React from "react";
import { ShoppingCart, Settings, User, LogOut, Clock, Mail, Lock } from 'lucide-react';
import HeroSection from "./Components/HeroSection";
import FeaturesSection from "./Components/FeaturesSection";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 font-sans text-white">
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default App;
