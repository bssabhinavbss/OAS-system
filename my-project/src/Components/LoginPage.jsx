import React, { useState } from 'react';
import { Mail, Lock, LogIn, User, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // This function would be replaced with your actual authentication logic.
  // For now, it's a placeholder.
  const handleAuth = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (email === 'test@example.com' && password === 'password123') {
        console.log('Login successful!');
        // In a real app, you would handle a successful login here,
        // e.g., storing a token and redirecting the user.
      } else if (!isLoginMode) {
        console.log('Sign up successful!');
        // Handle sign-up success
      } else {
        setError('Invalid email or password.');
      }
    } catch (e) {
      console.error("Authentication error:", e);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 p-4">
      <div className="flex flex-col md:flex-row bg-gray-900 rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl p-8 md:p-12 gap-8">
        
        {/* Left Section: Login Form */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">
            {isLoginMode ? 'Welcome Back' : 'Create Account'}
          </h2>
          <form onSubmit={handleAuth} className="space-y-6">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full bg-gray-800 text-gray-200 rounded-lg py-3 pl-10 pr-4 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="sr-only" htmlFor="password">Password</label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full bg-gray-800 text-gray-200 rounded-lg py-3 pl-10 pr-12 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
                <div 
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" 
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
            
            {error && (
              <p className="text-red-400 text-sm mt-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>{isLoginMode ? 'Log In' : 'Sign Up'}</span>
                </>
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-400">
            {isLoginMode ? (
              <span>
                Don't have an account?{' '}
                <button
                  onClick={() => setIsLoginMode(false)}
                  className="text-blue-500 hover:text-blue-400 font-semibold transition-colors duration-200"
                >
                  Sign Up
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <button
                  onClick={() => setIsLoginMode(true)}
                  className="text-blue-500 hover:text-blue-400 font-semibold transition-colors duration-200"
                >
                  Log In
                </button>
              </span>
            )}
          </div>
        </div>
        
        {/* Right Section: Welcome Message */}
        <div className="flex-1 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-8 md:p-12 flex flex-col justify-center items-center text-center text-white shadow-xl transform scale-100 transition-transform duration-300 hover:scale-105">
          <LogIn className="w-16 h-16 text-white mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            {isLoginMode ? 'Login to Your Account' : 'Join Our Community'}
          </h3>
          <p className="text-gray-200 text-sm md:text-base">
            {isLoginMode ? 'Experience the best auctions and deals!' : 'Create an account to save your progress and more!'}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;