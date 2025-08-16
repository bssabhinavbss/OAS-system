import React from "react";
import { ShoppingCart, Settings, User, LogOut } from "lucide-react";


const Navbar = ({ onNavigate }) => {
  return (
    <nav className="flex items-center justify-between p-4 md:px-8 bg-gray-900 text-white shadow-md">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
        <ShoppingCart className="text-cyan-400" size={24} />
        <span className="text-xl font-bold tracking-tight">Auction System</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-200">
          <Settings size={18} />
          <span>Settings</span>
        </a>
        <a href="#" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-200" onClick={() => onNavigate('profile')}>
          <User size={18} />
          <span>Profile</span>
        </a>
        <a href="#" className="flex items-center space-x-1 hover:text-red-500 transition-colors duration-200">
          <LogOut size={18} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;