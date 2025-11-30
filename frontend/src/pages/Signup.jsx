import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black animate-fade-in">
      {/* Form Container with Animated Border */}
      <div className="relative w-96 p-8 rounded-2xl shadow-2xl bg-gray-900/80 backdrop-blur-lg overflow-hidden animate-slide-in">
        
        {/* Moving Animated Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-blue-500 animate-border"></div>

        {/* Title Animation */}
        <h1 className="text-3xl font-bold text-center text-white mb-6 relative z-10 animate-bounce">
          Sign Up
        </h1>

        <form className="flex flex-col gap-5 relative z-10">
          <div className="animate-fade-in">
            <label htmlFor="username" className="block text-gray-400 font-medium mb-2 hover:text-blue-500 transition-all duration-300">
              Username:
            </label>
            <input
              type="text"
              name="username"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-4 focus:ring-blue-500 focus:outline-none transition-all transform hover:scale-105"
              placeholder="Enter your username"
            />
          </div>

          <div className="animate-fade-in">
            <label htmlFor="email" className="block text-gray-400 font-medium mb-2 hover:text-blue-500 transition-all duration-300">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-4 focus:ring-blue-500 focus:outline-none transition-all transform hover:scale-105"
              placeholder="Enter your email"
            />
          </div>

          <div className="animate-fade-in">
            <label htmlFor="password" className="block text-gray-400 font-medium mb-2 hover:text-blue-500 transition-all duration-300">
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-4 focus:ring-blue-500 focus:outline-none transition-all transform hover:scale-105"
              placeholder="Enter your password"
            />
          </div>

          {/* Animated Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md shadow-blue-500/50 hover:bg-blue-600 transition-all transform hover:scale-110 active:scale-95 animate-pulse"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
