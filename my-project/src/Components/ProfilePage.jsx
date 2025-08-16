import React, { useState } from 'react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile-details');

  const [user, setUser] = useState({
    username: 'Awesome User',
    email: 'user@gmail.com',
    address: 'IIT Kandi',
    mobileNumber: '9876543211',
  });

  const [biddingHistory, setBiddingHistory] = useState([
    { id: 1, item: 'Vintage Watch', bidAmount: 1500, status: 'Outbid' },
    { id: 2, item: 'Rare Comic Book', bidAmount: 300, status: 'Winning' },
  ]);

  const [boughtItems, setBoughtItems] = useState([
    { id: 1, item: 'Antique Chair', finalPrice: 750 },
    { id: 2, item: 'Old Vinyl Record', finalPrice: 50 },
  ]);

  const [soldItems, setSoldItems] = useState([
    { id: 1, item: 'Silver Locket', finalPrice: 120 },
  ]);

  const [yourAuctions, setYourAuctions] = useState([
    { id: 1, item: 'Classic Car', currentBid: 25000, status: 'Active' },
  ]);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    console.log('Updating profile with new data:', user);
    alert('Profile updated successfully!');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile-details':
        return (
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Profile Details</h3>
            <form onSubmit={handleUpdateProfile}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
                <input
                  type="text"
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
                <input
                  type="text"
                  value={user.address}
                  onChange={(e) => setUser({ ...user, address: e.target.value })}
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-1">Mobile Number</label>
                <input
                  type="text"
                  value={user.mobileNumber}
                  onChange={(e) => setUser({ ...user, mobileNumber: e.target.value })}
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
              >
                Update Profile
              </button>
            </form>
          </div>
        );
      case 'bidding-history':
        return (
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Bidding History</h3>
            <ul className="space-y-4">
              {biddingHistory.map(bid => (
                <li key={bid.id} className="bg-gray-700 p-4 rounded-lg">
                  <span className="font-bold">Item:</span> {bid.item} - <span className="font-bold">Bid:</span> ${bid.bidAmount} - <span className="font-bold">Status:</span> {bid.status}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'bought-items':
        return (
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Bought Items</h3>
            <ul className="space-y-4">
              {boughtItems.map(item => (
                <li key={item.id} className="bg-gray-700 p-4 rounded-lg">
                  <span className="font-bold">Item:</span> {item.item} - <span className="font-bold">Final Price:</span> ${item.finalPrice}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'sold-items':
        return (
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Sold Items</h3>
            <ul className="space-y-4">
              {soldItems.map(item => (
                <li key={item.id} className="bg-gray-700 p-4 rounded-lg">
                  <span className="font-bold">Item:</span> {item.item} - <span className="font-bold">Final Price:</span> ${item.finalPrice}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'your-auctions':
        return (
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Your Auctions</h3>
            <ul className="space-y-4">
              {yourAuctions.map(auction => (
                <li key={auction.id} className="bg-gray-700 p-4 rounded-lg">
                  <span className="font-bold">Item:</span> {auction.item} - <span className="font-bold">Current Bid:</span> ${auction.currentBid} - <span className="font-bold">Status:</span> {auction.status}
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      {/* Container below is removed to allow content to span full width */}
      {/* <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8"> */}
      <div className="bg-gray-800 rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-700 pb-4">My Profile</h2>
        <div className="flex flex-wrap space-x-4 mb-6 border-b border-gray-700">
          <button
            className={`px-4 py-2 font-medium text-lg transition-colors duration-200 ${
              activeTab === 'profile-details'
                ? 'text-indigo-400 border-b-2 border-indigo-500'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('profile-details')}
          >
            Profile Details
          </button>
          <button
            className={`px-4 py-2 font-medium text-lg transition-colors duration-200 ${
              activeTab === 'bidding-history'
                ? 'text-indigo-400 border-b-2 border-indigo-500'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('bidding-history')}
          >
            Bidding History
          </button>
          <button
            className={`px-4 py-2 font-medium text-lg transition-colors duration-200 ${
              activeTab === 'bought-items'
                ? 'text-indigo-400 border-b-2 border-indigo-500'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('bought-items')}
          >
            Bought Items
          </button>
          <button
            className={`px-4 py-2 font-medium text-lg transition-colors duration-200 ${
              activeTab === 'sold-items'
                ? 'text-indigo-400 border-b-2 border-indigo-500'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('sold-items')}
          >
            Sold Items
          </button>
          <button
            className={`px-4 py-2 font-medium text-lg transition-colors duration-200 ${
              activeTab === 'your-auctions'
                ? 'text-indigo-400 border-b-2 border-indigo-500'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('your-auctions')}
          >
            Your Auctions
          </button>
        </div>
        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;