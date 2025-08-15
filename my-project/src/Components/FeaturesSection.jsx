import React from "react";
import { ShoppingCart, Settings, User, LogOut, Clock, Mail, Lock } from 'lucide-react';
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock />,
      title: 'Real-Time Bidding',
      description: 'Experience the thrill of live auctions with instant updates on bids and remaining time.'
    },
    {
      icon: <Mail />,
      title: 'Email Notifications',
      description: 'Stay updated with email alerts for bid status, outbids, and winning announcements.'
    },
    {
      icon: <Lock />,
      title: 'Secure Transactions',
      description: 'Bid with confidence through our secure and encrypted payment gateways.'
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-950 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-4">
          Why Choose Our Auction Platform?
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeaturesSection;