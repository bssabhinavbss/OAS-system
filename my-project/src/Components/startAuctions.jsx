import React from 'react';
// You might need to import a date picker library like react-datepicker if you want full functionality
// For this example, we'll use a simple text input with a calendar icon.

function CreateAuction() {
    return (
        // Main container for the entire page, ensuring it takes full height and has a dark background.
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 font-inter">
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

            <main className="flex-grow flex items-center justify-center p-6 md:p-10">
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-6 text-white text-center">Create Auction</h2>

                    <form className="space-y-6">
                        {/* Title Input */}
                        <div>
                            <label htmlFor="title" className="block text-gray-300 text-sm font-medium mb-2">Title</label>
                            <input
                                type="text"
                                id="title"
                                className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Bonfire Set"
                            />
                        </div>

                        {/* Description Textarea */}
                        <div>
                            <label htmlFor="description" className="block text-gray-300 text-sm font-medium mb-2">Description</label>
                            <textarea
                                id="description"
                                rows="4"
                                className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="A traditional bonfire set: perfect for an enchanting evening under the stars."
                            ></textarea>
                        </div>

                        {/* Item Image Upload */}
                        <div>
                            <label htmlFor="itemImage" className="block text-gray-300 text-sm font-medium mb-2">Item Image (max 2MB)</label>
                            <div className="flex items-center space-x-3">
                                <input
                                    type="file"
                                    id="itemImage"
                                    accept="image/jpeg, image/png"
                                    className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4
                                               file:rounded-md file:border-0 file:text-sm file:font-semibold
                                               file:bg-blue-500 file:text-white hover:file:bg-blue-600
                                               cursor-pointer transition duration-200"
                                />
                                {/* Display uploaded file name as a placeholder */}
                                <span className="text-gray-400 text-sm">bonfire.jpg</span>
                            </div>
                            {/* Placeholder for uploaded image preview */}
                            {/* <div className="mt-4 flex justify-center items-center h-32 w-32 bg-gray-700 rounded-md overflow-hidden border border-gray-600">
                                <img
                                    src="https://placehold.co/128x128/374151/E5E7EB?text=Image" // Placeholder image for Bonfire
                                    alt="Uploaded Item"
                                    className="object-cover w-full h-full"
                                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/128x128/374151/E5E7EB?text=Error"; }}
                                />
                            </div> */}
                        </div>

                        {/* Starting Bid Input */}
                        <div>
                            <label htmlFor="startingBid" className="block text-gray-300 text-sm font-medium mb-2">Starting Bid ($)</label>
                            <input
                                type="number"
                                id="startingBid"
                                className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="0.00"
                                min="0.01"
                                step="0.01"
                            />
                        </div>

                        {/* Auction Start Time Input */}
                        <div>
                            <label htmlFor="startTime" className="block text-gray-300 text-sm font-medium mb-2">Auction Start Time</label>
                            <div className="relative">
                                <input
                                    type="datetime-local" // Using datetime-local for simplicity; a custom date picker would be better
                                    id="startTime"
                                    className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10" // pr-10 for icon
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Auction End Time Input */}
                        <div>
                            <label htmlFor="endTime" className="block text-gray-300 text-sm font-medium mb-2">Auction End Time</label>
                            <div className="relative">
                                <input
                                    type="datetime-local" // Using datetime-local for simplicity
                                    id="endTime"
                                    className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Create Auction Button */}
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg transition duration-200"
                        >
                            Create Auction
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default CreateAuction;
