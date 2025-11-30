import React from 'react';

const SoftwareTesting = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Main Title */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-blue-500">Software Testing</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Visual Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-orange-400 mb-4">Visual Learning</h1>
          <p className="text-gray-300">
            Learn through real-world examples and interactive tools for software testing practices, including automation, UI testing, and more.
          </p>
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
          </button>
        </div>

        {/* Theoretical Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-teal-400 mb-4">Theoretical Learning</h1>
          <p className="text-gray-300">
            Understand the principles of software testing, quality assurance, and the importance of test-driven development in software projects.
          </p>
          <button className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareTesting;
