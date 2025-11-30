// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const MobileAppDevelopment = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100 text-gray-800 flex flex-col items-center justify-center px-6 py-12">
//       {/* Main Title */}
//       <div className="mb-12">
//         <h1 className="text-5xl font-bold text-purple-600">Mobile App Development</h1>
//       </div>

//       {/* Sections */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
//         {/* Visual Learning Section */}
//         <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h1 className="text-3xl font-semibold text-pink-500 mb-4">Visual Learning</h1>
//           <p className="text-gray-700">
//             Explore mobile app development concepts through interactive visuals and app-building tutorials.
//           </p>
//           <button onClick={() => navigate('/mobiledevvl')} className="bg-pink-500 hover:bg-pink-700 transform transition duration-300 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
//             Start Learning
//           </button>
//         </div>

//         {/* Interview Prepqaration Section */}
//         <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h1 className="text-3xl font-semibold text-yellow-500 mb-4">Interview Preparation</h1>
//           <p className="text-gray-700">
//             Prepare for mobile app development interviews with in-depth theoretical knowledge and practical scenarios.
//           </p>
//           <button onClick={() => navigate('/MobileAppDevelopmentIq')} className="bg-yellow-500 hover:bg-yellow-700 transform transition duration-300 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
//             Start Learning
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileAppDevelopment;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import appdev from "../assets/mobiledevlearnpeakimg.jpeg";// replace with your image path

const MobileAppDevelopment = () => {
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
      {/* Helmet for SEO */}
      <Helmet>
        <title>Mobile App Development | FlixerLearn</title>
        <meta
          name="description"
          content="Learn Mobile App Development with FlixerLearn. Explore UI/UX, Flutter, React Native, iOS & Android development, and interview preparation."
        />
        <meta
          name="keywords"
          content="Mobile App Development, FlixerLearn, UI/UX, Flutter, React Native, iOS, Android, Interview Prep"
        />
        <link rel="canonical" href="https://elearning-platform-zksp.vercel.app/mobile-app-development" />
      </Helmet>

      <div className="min-h-screen w-full bg-[#0b0320] text-white px-10 py-10">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-300">Learn Peak</h2>
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

          {/* MOBILE APP IMAGE BOX */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-white/10
              h-[450px] sm:h-[520px] md:h-[600px] bg-black">
            <img
              src={appdev}
              alt="Mobile App Development"
              className="absolute w-full h-full object-cover opacity-80"
            />

            <div className="absolute inset-0 p-10 flex flex-col justify-center bg-black/40">
              <span className="text-sm font-semibold text-pink-300 border border-pink-400 py-1 px-3 rounded-full mb-4 inline-flex w-fit">
                Mobile App Development Program
              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                Mobile App Development
              </h1>

              <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-xl">
                Learn to build high-quality mobile apps with Flutter, React Native, iOS & Android, and master UI/UX and interview skills.
              </p>

              <div className="flex space-x-4">
                {/* <button className="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 rounded-lg shadow-lg">
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
                <div className="text-lg font-semibold">{monthName} {year}</div>
              </div>
              <div className="text-xs text-gray-400">{today.toLocaleDateString()}</div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-400 mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((d,i) => (
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
                          ? "bg-pink-600 text-white shadow-md"
                          : "text-gray-300"
                        : "bg-transparent"
                    }`}
                  >
                    {val || ""}
                  </div>
                );
              })}
            </div>

            <button className="mt-4 w-full bg-pink-600 py-2 rounded-lg text-sm shadow-md">
              View Schedule
            </button>
          </div>
        </div>

        {/* CARDS SECTION */}
        <h3 className="text-xl text-gray-300 mb-6">Learning Modes</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-linear-to-br from-pink-400/60 to-purple-400/60 
                          backdrop-blur-md border border-white/20 shadow-xl">
            <h2 className="text-xl font-bold mb-1 text-white drop-shadow">Visual Learning</h2>
            <p className="text-sm text-white/90 mb-4">
              Explore mobile app development through interactive tutorials, projects, and app-building simulations.
            </p>
            <button
              onClick={() => navigate("/mobiledevvl")}
              className="bg-black/40 text-white px-4 py-2 rounded-lg border border-white/20"
            >
              Access
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-linear-to-br from-yellow-400/60 to-orange-500/60 
                          backdrop-blur-md border border-white/20 shadow-xl">
            <h2 className="text-xl font-bold mb-1 text-white drop-shadow">Interview Preparation</h2>
            <p className="text-sm text-white/90 mb-4">
              Prepare for mobile app development interviews with theoretical knowledge and hands-on exercises.
            </p>
            <button
              onClick={() => navigate("/MobileAppDevelopmentIq")}
              className="bg-white/20 text-white px-4 py-2 rounded-lg border border-white/30"
            >
              Access
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAppDevelopment;
