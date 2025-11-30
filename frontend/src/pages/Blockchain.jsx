// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet'; // Import Helmet

// const Blockchain = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* Helmet block for SEO */}
//       <Helmet>
//         <title>Blockchain Technology - FlixerLearn</title>
//         <meta
//           name="description"
//           content="Learn Blockchain Technology through visual learning and theoretical preparation. Start your blockchain journey today on FlixerLearn."
//         />
//         <meta
//           name="keywords"
//           content="Blockchain, Blockchain Learning, Blockchain Course, FlixerLearn, Crypto, Decentralization, Blockchain Interview, Web3"
//         />
//         <link rel="canonical" href="https://elearning-platform-zksp.vercel.app/blockchain" />
//       </Helmet>

//       <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-gray-800 flex flex-col items-center justify-center px-6 py-12">
//         {/* Main Title */}
//         <div className="mb-12 text-center">
//           <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 mb-4">
//             Blockchain Technology
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-600 mb-8">
//             Discover the world of blockchain with hands-on learning and theoretical insights.
//           </p>
//         </div>

//         {/* Sections */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
//           {/* Visual Learning Section */}
//           <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105 border border-gray-200">
//             <h2 className="text-3xl sm:text-4xl font-semibold text-teal-600 mb-4">Visual Learning</h2>
//             <p className="text-gray-600 text-lg mb-6">
//               Dive deep into blockchain concepts through interactive visuals, real-world case studies, and engaging simulations.
//             </p>
//             <button
//               onClick={() => navigate('/blockchainvl')}
//               className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg mt-4 transition duration-300 transform hover:scale-105"
//             >
//               Start Learning
//             </button>
//           </div>

//           {/* Interview Preparation Section */}
//           <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105 border border-gray-200">
//             <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-600 mb-4">Interview Preparation</h2>
//             <p className="text-gray-600 text-lg mb-6">
//               Prepare for blockchain interviews with in-depth theoretical knowledge, practical scenarios, and coding challenges.
//             </p>
//             <button
//               onClick={() => navigate('/blockchainiq')}
//               className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg mt-4 transition duration-300 transform hover:scale-105"
//             >
//               Start Learning
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Blockchain;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import BlockChain from "../assets/blockchainlearnpeakimg.jpg";

const Blockchain = () => {
  const navigate = useNavigate();
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setToday(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const monthName = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <>
      <Helmet>
        <title>Blockchain Technology - FlixerLearn</title>
        <meta
          name="description"
          content="Learn Blockchain Technology through visual learning and theoretical preparation. Start your blockchain journey today on FlixerLearn."
        />
        <meta
          name="keywords"
          content="Blockchain, Blockchain Learning, Blockchain Course, FlixerLearn, Crypto, Decentralization, Blockchain Interview, Web3"
        />
        <link rel="canonical" href="https://elearning-platform-zksp.vercel.app/blockchain" />
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
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-purple-500" />
              {/* <span className="text-sm">Venator</span>
              <span>▼</span> */}
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-14">

          {/* BLOCKCHAIN IMAGE BOX — PERFECT FIT */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-white/10 
              h-[450px] sm:h-[520px] md:h-[600px] bg-black">

            <img
              src={BlockChain}
              alt="Blockchain"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            {/* OVERLAY TEXT */}
            <div className="absolute inset-0 p-10 flex flex-col justify-center bg-black/40">

              <span className="text-sm font-semibold text-teal-300 border border-teal-400 py-1 px-3 rounded-full mb-4 inline-flex w-fit">
                Render Stable
              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                Blockchain Course.
              </h1>

              <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-xl">
                Online foundational course for beginners.
              </p>

              <div className="flex space-x-4">
                {/* <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg shadow-lg">
                  Preview
                </button>
                <button className="bg-white/20 border border-white/30 px-6 py-3 rounded-lg">
                  Review
                </button> */}
              </div>

            </div>
          </div>

          {/* CALENDAR BOX */}
          <div className="w-full bg-[#11072d] rounded-2xl p-6 border border-white/10 shadow-lg">

            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-sm text-gray-400">Calendar</div>
                <div className="text-lg font-semibold">
                  {monthName} {year}
                </div>
              </div>
              <div className="text-xs text-gray-400">
                {today.toLocaleDateString()}
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-400 mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={i} className="py-1">{d}</div>
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
                          ? "bg-fuchsia-600 text-white shadow-md"
                          : "text-gray-300"
                        : "bg-transparent"
                    }`}
                  >
                    {val || ""}
                  </div>
                );
              })}
            </div>

            <button className="mt-4 w-full bg-fuchsia-600 py-2 rounded-lg text-sm shadow-md">
              View Schedule
            </button>
          </div>
        </div>

        {/* CARDS SECTION */}
        <h3 className="text-xl text-gray-300 mb-6">Online Giglis</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="p-6 rounded-2xl bg-linear-to-br from-blue-400 to-cyan-400 text-black">
            <h2 className="text-xl font-bold mb-1">Start Visual</h2>
            <p className="text-sm text-black/80 mb-4">Interactive concepts</p>
            <button
              onClick={() => navigate("/blockchainvl")}
              className="bg-black/30 text-white px-4 py-2 rounded-lg"
            >
              Access
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-linear-to-br from-pink-400 to-purple-500 text-white">
            <h2 className="text-xl font-bold mb-1">Interview Learning</h2>
            <p className="text-sm mb-4">Theoretical learning</p>
            <button
              onClick={() => navigate("/blockchainiq")}
              className="bg-white/20 px-4 py-2 rounded-lg"
            >
              Access
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Blockchain;
