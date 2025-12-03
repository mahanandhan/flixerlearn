// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet'; // Import Helmet

// const Aiml = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* Helmet block for SEO */}
//       <Helmet>
//         <title>AI & Machine Learning - LearnPeak</title>
//         <meta name="description" content="Explore AI and Machine Learning through visual lessons, theory, and real-world applications. Start learning today on LearnPeak." />
//         <meta name="keywords" content="AI, Machine Learning, LearnPeak, Artificial Intelligence, Deep Learning, ML Tutorials, Visual AI, ML Theory" />
//         <link rel="canonical" href="https://elearning-platform-zksp.vercel.app/ai-machinelearning" />
//       </Helmet>

//       <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-gray-800 flex flex-col items-center justify-center px-6 py-12">
//         {/* Main Title */}
//         <div className="mb-12 text-center">
//           <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
//             AI & Machine Learning
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-600 mb-8">
//             Explore the world of AI & ML with engaging, interactive lessons and hands-on experience.
//           </p>
//         </div>

//         {/* Sections */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
//           {/* Visual Learning Section */}
//           <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 border border-gray-300">
//             <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-600 mb-4">Visual Learning</h2>
//             <p className="text-gray-600 text-lg mb-6">
//               Learn AI and ML concepts with visualizations that make the complex ideas simpler to grasp.
//             </p>
//             <button
//               onClick={() => navigate('/aimlvl')}
//               className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg mt-4 transition duration-300 transform hover:scale-105"
//             >
//               Start Learning
//             </button>
//           </div>

//           {/* Theoretical Learning Section */}
//           <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 border border-gray-300">
//             <h2 className="text-3xl sm:text-4xl font-semibold text-yellow-600 mb-4">Theoretical Learning</h2>
//             <p className="text-gray-600 text-lg mb-6">
//               Dive deeper into the foundational principles of machine learning algorithms and AI theories.
//             </p>
//             <button
//               onClick={() => navigate('/aimliq')}
//               className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg mt-4 transition duration-300 transform hover:scale-105"
//             >
//               Start Learning
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Aiml;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

// Import your AI/ML image
import AiImage from "../assets/learnpeakAiimg.png";

const Aiml = () => {
  const navigate = useNavigate();
  const [today, setToday] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const t = setInterval(() => setToday(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const monthName = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  // Generate calendar cells
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <>
      {/* SEO with Helmet */}
      <Helmet>
        <title>AI & Machine Learning - FlixerLearn</title>
        <meta
          name="description"
          content="Explore AI & Machine Learning through visual lessons, theory, and real-world applications."
        />
        <meta
          name="keywords"
          content="AI, Machine Learning, FlixerLearn, Artificial Intelligence, Deep Learning, ML Tutorials, Visual AI, ML Theory"
        />
        <link rel="canonical" href="https://elearning-platform-zksp.vercel.app/ai-machinelearning" />
      </Helmet>

      <div className="min-h-screen w-full bg-[#0b0320] text-white px-10 py-10">
        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-300">FlixerLearn</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search everything..."
              className="bg-transparent border border-gray-700 rounded-lg py-2 px-4 text-sm w-64 focus:border-purple-500 outline-none"
            />
            <div className="w-8 h-8 bg-gray-700 rounded-full" />
            <div className="w-8 h-8 bg-gray-700 rounded-full" />
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-14">
          {/* IMAGE */}
          <div
            className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-white/10
              h-[450px] sm:h-[520px] md:h-[600px] bg-black"
          >
            <img
              src={AiImage}
              alt="AI ML"
              className="absolute w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-center bg-black/40">
              <span className="text-sm font-semibold text-blue-300 border border-blue-400 py-1 px-3 rounded-full mb-4 inline-flex w-fit">
                AI & ML Program
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                AI & Machine Learning
              </h1>
              <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-xl">
                Learn AI and ML with visual and conceptual clarity.
              </p>
              <div className="flex space-x-4">
                {/* <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-lg shadow-lg">
                  Preview
                </button>
                <button className="bg-white/20 border border-white/30 px-6 py-3 rounded-lg">
                  Review
                </button> */}
              </div>
            </div>
          </div>

          {/* CALENDAR */}
          <div className="w-full bg-[#11072d] rounded-2xl p-6 border border-white/10 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-sm text-gray-400">Calendar</div>
                <div className="text-lg font-semibold">{monthName} {year}</div>
              </div>
              <div className="text-xs text-gray-400">{today.toLocaleDateString()}</div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-400 mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={`${d}-${i}`} className="py-1">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-sm text-center">
              {cells.map((val, idx) => {
                const isToday = val === today.getDate();
                return (
                  <div
                    key={idx}
                    className={`py-2 rounded-md ${
                      val
                        ? isToday
                          ? "bg-indigo-600 text-white shadow-md"
                          : "text-gray-300"
                        : "bg-transparent"
                    }`}
                  >
                    {val || ""}
                  </div>
                );
              })}
            </div>

            <button className="mt-4 w-full bg-indigo-600 py-2 rounded-lg text-sm shadow-md">
              View Schedule
            </button>
          </div>
        </div>

        {/* CARDS SECTION */}
        <h3 className="text-xl text-gray-300 mb-6">Learning Modes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Visual Learning */}
          <div className="p-6 rounded-2xl bg-linear-to-br from-blue-400/60 to-cyan-400/60 
                          backdrop-blur-md border border-white/20 shadow-xl">
            <h2 className="text-xl font-bold mb-1 text-white drop-shadow">Visual Learning</h2>
            <p className="text-sm text-white/90 mb-4">Interactive concepts for easy learning.</p>
            <button
              onClick={() => navigate("/aimlvl")}
              className="bg-black/40 text-white px-4 py-2 rounded-lg border border-white/20"
            >
              Access
            </button>
          </div>

          {/* Theoretical Learning */}
          <div className="p-6 rounded-2xl bg-linear-to-br from-yellow-400/60 to-orange-500/60 
                          backdrop-blur-md border border-white/20 shadow-xl">
            <h2 className="text-xl font-bold mb-1 text-white drop-shadow">Theoretical Learning</h2>
            <p className="text-sm text-white/90 mb-4">Understand ML algorithms and concepts deeply.</p>
            <button
              onClick={() => navigate("/aimliq")}
              className="bg-white/20 text-white px-4 py-2 rounded-lg border border-white/30"
            >
              Access
            </button>
          </div>
          <div className="p-6 rounded-2xl bg-linear-to-br from-violet-400/60 to-violet-600/60 
                          backdrop-blur-md border border-white/20 shadow-xl">
            <h2 className="text-xl font-bold mb-1 text-white drop-shadow">AI/ML Bot Service</h2>
            <p className="text-sm text-white/90 mb-4">
              Dive into AI/ML with interactive chatbot.
            </p>
            <button
              onClick={() => navigate("/aimlbot")}
              className="bg-black/40 text-white px-4 py-2 rounded-lg border border-white/20"
            >
              Access
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aiml;
