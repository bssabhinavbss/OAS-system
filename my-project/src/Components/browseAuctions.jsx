import React from 'react';

function BrowseAuctions() {
    return (
        // Ensure this outermost div takes up the minimum screen height (min-h-screen)
        // and has the dark background color (bg-gray-900) applied.
        // flex flex-col is good for ensuring content within is stacked vertically.
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
            {/* Header Placeholder - In a real app, this would be imported from a separate component */}
            <header className="bg-gray-800 p-4 shadow-md rounded-b-lg flex justify-between items-center px-6">
                <div className="flex items-center space-x-4">
                    {/* Auction System Logo/Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5 5 0 0010.27.24l3-1.06m-1.55 1.55L21 21m-1-1l-1 1m-1-1V9l-4-4L6 3V1h16v16h-4zm-8-3l-3 3M11 7l-4 4" />
                    </svg>
                    <span className="text-white text-xl font-semibold">Auction System</span>
                </div>
                {/* Navigation/User Actions */}
                <div className="flex items-center space-x-6">
                    <button className="flex items-center text-gray-300 hover:text-white transition duration-200 rounded-md py-2 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.608 3.292 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                    </button>
                    <button className="flex items-center text-gray-300 hover:text-white transition duration-200 rounded-md py-2 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Profile
                    </button>
                    <button className="flex items-center text-gray-300 hover:text-white transition duration-200 rounded-md py-2 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </div>
            </header>

            <main className="flex-grow p-6 md:p-10">
                {/* Top Section: Bid Information & Auction Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Bid Information Card */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                        <h2 className="text-xl font-bold mb-4 text-white">Bid Information</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-gray-300">
                                <span className="font-medium">Starting Bid:</span>
                                <span className="text-white">$20.00</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-300">
                                <span className="font-medium">Current Highest Bid:</span>
                                <span className="text-green-400 font-semibold">No bids yet</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-300">
                                <span className="font-medium">Your Current Bid:</span>
                                <span className="text-white">None</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-300">
                                <span className="font-medium">Your Automated Bid:</span>
                                <span className="text-white">None</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-300">
                                <span className="font-medium">Your Status:</span>
                                <span className="text-white">Spectator</span>
                            </div>
                        </div>
                    </div>

                    {/* Auction Details Card */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                        <h2 className="text-xl font-bold mb-4 text-white">Auction Details</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-gray-300">
                                <span className="font-medium">Seller:</span>
                                <span className="text-white">Tinkerers' Lab IITH</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-300">
                                <span className="font-medium">Start Time:</span>
                                <span className="text-white">Thu, 17 Apr 2025 22:28:00</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-300">
                                <span className="font-medium">End Time:</span>
                                <span className="text-white">Fri, 18 Apr 2025 22:28:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Place Your Bid */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-xl mb-8">
                    <h2 className="text-xl font-bold mb-4 text-white text-center">Place Your Bid</h2>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <label htmlFor="bid-amount" className="sr-only">Bid Amount ($)</label>
                        <input
                            type="number"
                            id="bid-amount"
                            placeholder="Enter your bid amount"
                            className="flex-grow w-full sm:w-auto p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            min="0.01"
                            step="0.01"
                        />
                        <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-200">
                            Place Bid
                        </button>
                    </div>
                </div>

                {/* Bottom Section: Place Automated Bid */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                    <h2 className="text-xl font-bold mb-4 text-white text-center">Place Automated Bid</h2>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <label htmlFor="max-bid-amount" className="sr-only">Maximum Bid Amount ($)</label>
                        <input
                            type="number"
                            id="max-bid-amount"
                            placeholder="Enter your maximum bid amount"
                            className="flex-grow w-full sm:w-auto p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200"
                            min="0.01"
                            step="0.01"
                        />
                        <button className="w-full sm:w-auto px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-md shadow-md transition duration-200">
                            Place Automated Bid
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BrowseAuctions;
