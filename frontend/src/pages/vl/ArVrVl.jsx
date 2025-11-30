// import React from 'react';

// const ArVrVl = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-200 via-yellow-100 to-pink-200 px-4 py-12 flex flex-col items-center space-y-16">
//       {/* AR Section */}
//       <div className="w-full max-w-4xl">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Augmented Reality (AR)</h1>
//         <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
//           <iframe
//             width="100%"
//             height="100%"
//             src="https://www.youtube.com/embed/WzfDo2Wpxks?si=4PyeU-ZeEjoyXNBp"
//             title="AR Visual Learning"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="w-full h-full"
//           ></iframe>
//         </div>
//       </div>

//       {/* VR Section */}
//       <div className="w-full max-w-4xl">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Virtual Reality (VR)</h1>
//         <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
//           <iframe
//             width="100%"
//             height="100%"
//             src="https://www.youtube.com/embed/YBQ_ps6e71k?si=wZunJDDMwx-UBmxN"
//             title="VR Visual Learning"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="w-full h-full"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArVrVl;


import React, { useState, useEffect } from 'react';

// Helper function to render a dynamic calendar month matching the current date
const CalendarWidget = () => {
  // Initialize state with the current time/date
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Use useEffect to update the time every second (for the seconds display)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

  const formattedDate = currentDateTime.toLocaleDateString('en-US', dateOptions);
  const formattedTime = currentDateTime.toLocaleTimeString('en-US', timeOptions);

  const year = currentDateTime.getFullYear();
  const month = currentDateTime.getMonth(); // 0-indexed
  const today = currentDateTime.getDate();

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  
  const monthName = currentDateTime.toLocaleDateString('en-US', { month: 'long' });

  const days = [];
  // Fill leading empty days
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  // Fill actual days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="p-4 rounded-xl backdrop-blur-md bg-white/5 border border-indigo-700/30 shadow-2xl shadow-indigo-500/20">
      <div className="text-sm">
        {/* Time and Date Display with live seconds update */}
        <div className="mb-4 text-center">
          {/* Time with seconds */}
          <p className="text-3xl font-light text-white">{formattedTime}</p>
          {/* Date */}
          <p className="text-cyan-400">{formattedDate}</p>
        </div>
        
        <hr className="border-t border-indigo-600/50 my-4" />

        {/* Month Title */}
        <h3 className="text-2xl font-bold text-center mb-4 text-white">
          {monthName} {year}
        </h3>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 text-center font-medium">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div key={index} className="text-gray-400">{day}</div>
          ))}
          {days.map((day, index) => (
            <div 
              key={index} 
              className={`p-1 rounded-md ${day === null ? 'invisible' : ''} ${
                day === today // Highlight TODAY's date dynamically
                  ? 'bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white font-bold shadow-lg shadow-fuchsia-500/30 transform scale-105'
                  : 'text-gray-300 hover:bg-white/10 transition-colors'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ArVrVl = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 flex flex-col items-center">
      
      {/* Main Dashboard Container */}
      <div className="w-full max-w-6xl p-6 md:p-10 rounded-3xl backdrop-blur-md bg-white/5 
          border border-indigo-700/30 shadow-2xl shadow-indigo-500/20 relative z-10">
        
        {/* Header/Title */}
        <div className="flex justify-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold 
            bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400">
            Immersive Learning Hub
          </h1>
        </div>

        {/* Content Grid: 2/3 for Videos, 1/3 for Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Videos Section (Span 2 columns) */}
          <div className="lg:col-span-2 flex flex-col space-y-8">
            
            {/* AR Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Augmented Reality (AR)</h2>
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl 
                border-2 border-fuchsia-600/50 hover:border-fuchsia-400 transition duration-300 bg-gray-900/50">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/WzfDo2Wpxks?si=4PyeU-ZeEjoyXNBp"
                  title="AR Visual Learning"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* VR Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Virtual Reality (VR)</h2>
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl 
                border-2 border-indigo-600/50 hover:border-indigo-400 transition duration-300 bg-gray-900/50">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YBQ_ps6e71k?si=wZunJDDMwx-UBmxN"
                  title="VR Visual Learning"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Calendar Section (Span 1 column) */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-4 text-fuchsia-400">Current Date & Time</h2>
            <CalendarWidget />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ArVrVl;