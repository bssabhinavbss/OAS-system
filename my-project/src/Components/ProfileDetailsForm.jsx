import React from "react";
import { ShoppingCart, Settings, User, LogOut, Clock, Mail, Lock } from 'lucide-react';

const ProfileDetailsForm = () => {
  return (
    <div className="p-6 md:p-8 bg-gray-800 rounded-xl shadow-lg mt-8">
      <h3 className="text-2xl font-bold mb-6 text-white">Profile Details</h3>
      <div className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-gray-400 mb-1">Username</label>
          <input
            type="text"
            id="username"
            defaultValue="Awesome User"
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
          <input
            type="email"
            id="email"
            defaultValue="user@gmail.com"
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-400 mb-1">Address</label>
          <input
            type="text"
            id="address"
            defaultValue="IIT Kandi"
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label htmlFor="mobile" className="block text-gray-400 mb-1">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            defaultValue="9876543211"
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
      </div>
      <button className="mt-8 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-blue-600 to-indigo-700">
        Update Profile
      </button>
    </div>
  );
};

export default ProfileDetailsForm;
