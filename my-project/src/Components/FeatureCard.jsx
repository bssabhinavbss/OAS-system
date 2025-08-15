import React from "react";
import { ShoppingCart, Settings, User, LogOut, Clock, Mail, Lock } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-700">
      <div className="bg-gray-900 rounded-full p-4 mb-4">
        {React.cloneElement(icon, { size: 36, className: 'text-cyan-400' })}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};


export default FeatureCard;