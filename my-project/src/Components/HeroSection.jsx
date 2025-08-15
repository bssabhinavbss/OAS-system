import React from "react";
import { ShoppingCart, Settings, User, LogOut, Clock, Mail, Lock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 md:py-32 bg-gray-950 text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ShoppingCart size={250} className="text-gray-800 opacity-20 animate-pulse" />
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 z-10">
        Discover Incredible Auctions
      </h1>
      <div className="w-24 h-1 bg-cyan-400 mb-6 z-10"></div>
      <p className="text-base md:text-xl text-gray-400 max-w-2xl mb-8 z-10">
        Join the buzz and explore our vast collection of unique items available for bidding. Get the best deals and start your winning journey today!
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 z-10">
        <button className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-blue-600 to-indigo-700">
          <ShoppingCart size={20} />
          <span>Browse Auctions</span>
        </button>
        <button className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-pink-500 to-red-600">
          <span>+</span>
          <span>Start Selling</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;