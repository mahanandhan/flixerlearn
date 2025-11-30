import React from 'react';

const CloudComputing = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Main Title */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-indigo-500">Cloud Computing</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Visual Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-pink-400 mb-4">Visual Learning</h1>
          <p className="text-gray-300">
            Understand cloud architecture and services through interactive visuals and hands-on examples.
          </p>
          <button className="bg-pink-500 hover:bg-pink-700 transfrom transition duration-300 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
          </button>
        </div>

        {/* Theoretical Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-yellow-400 mb-4">Interview Preperation</h1>
          <p className="text-gray-300">
            Prepare for cloud computing interviews with in-depth theoretical knowledge and practical scenarios.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-700 transform transition duration-300 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloudComputing;
