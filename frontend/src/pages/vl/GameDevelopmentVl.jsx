// import React from 'react';

// const GameDevelopmentVl = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 px-6 py-12 flex flex-col items-center">
//       {/* Title */}
//       <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Game Development - Visual Learning</h1>

//       {/* Videos */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
//         {/* Unity Section */}
//         <div className="rounded-xl overflow-hidden shadow-lg bg-white">
//           <h2 className="text-2xl font-semibold text-center text-purple-700 p-4">Unity Game Development</h2>
//           <iframe
//             width="100%"
//             height="315"
//             src="https://www.youtube.com/embed/gB1F9G0JXOo?si=RSW5HbM-bv8jp1pe"
//             title="Unity Game Development Tutorial"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="w-full"
//           ></iframe>
//         </div>

//         {/* Unreal Engine Section */}
//         <div className="rounded-xl overflow-hidden shadow-lg bg-white">
//           <h2 className="text-2xl font-semibold text-center text-blue-700 p-4">Unreal Engine Game Development</h2>
//           <iframe
//             width="100%"
//             height="315"
//             src="https://www.youtube.com/embed/6UlU_FsicK8?si=pFSHS4k4SSDCBrTJ"
//             title="Unreal Engine Game Development Tutorial"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="w-full"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GameDevelopmentVl;


import React, { useState, useEffect } from 'react';

// --- Project Data ---
const courseData = [
  // 1. Unity Development
  { 
    title: "Unity Game Development Full Course", 
    videoID: "gB1F9G0JXOo",
    url: "https://www.youtube.com/embed/gB1F9G0JXOo" 
  },
  // 2. Unreal Engine
  { 
    title: "Unreal Engine 5 Masterclass", 
    videoID: "6UlU_FsicK8",
    url: "https://www.youtube.com/embed/6UlU_FsicK8" 
  },
  // 3. Godot Engine (Placeholder)
  // { 
  //   title: "Godot Engine 4.0 Crash Course", 
  //   videoID: "itA4B6Q1lP8", 
  //   url: "https://www.youtube.com/embed/itA4B6Q1lP8" 
  // },
  // // 4. Game Design Theory (Placeholder)
  // { 
  //   title: "The Art of Game Design Theory", 
  //   videoID: "wNA4CLG-OSM", 
  //   url: "https://www.youtube.com/embed/wNA4CLG-OSM" 
  // },
  // // 5. C# Programming for Unity (Placeholder)
  // { 
  //   title: "C# Programming for Game Dev", 
  //   videoID: "iLdsCnpMnTg", 
  //   url: "https://www.youtube.com/embed/iLdsCnpMnTg" 
  // },
  // // 6. Blender 3D Modeling (Placeholder)
  // { 
  //   title: "Blender 3D Modeling for Beginners", 
  //   videoID: "T_zF1YOVo34", 
  //   url: "https://www.youtube.com/embed/T_zF1YOVo34" 
  // },
];

const getThumbnailUrl = (videoID) => 
    `https://img.youtube.com/vi/${videoID}/hq720.jpg`;

// --- Functional Components (Widgets and Modal) ---

const CalendarWidget = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

  const formattedTime = currentDateTime.toLocaleTimeString('en-US', timeOptions);
  const formattedDate = currentDateTime.toLocaleDateString('en-US', dateOptions);

  const year = currentDateTime.getFullYear();
  const month = currentDateTime.getMonth(); 
  const today = currentDateTime.getDate();

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay(); 

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  
  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-green-700/30 shadow-xl shadow-green-500/10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">{year}</h3>
        <h3 className="text-lg font-semibold text-gray-200">Level-Up Tracker</h3>
      </div>
      
      <div className="mb-4 text-center">
          <p className="text-3xl font-light text-white">{formattedTime}</p> 
          <p className="text-cyan-400 text-sm">{formattedDate}</p>
      </div>
      
      <hr className="border-t border-green-600/50 my-4" />

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="text-gray-400 font-medium">{day}</div>
        ))}
        {days.map((day, index) => (
          <div 
            key={index} 
            className={`p-1 rounded-md ${
              day === null ? 'invisible' : ''
            } ${
              day === today 
                ? 'bg-gradient-to-br from-green-500 to-cyan-600 text-white font-bold shadow-lg shadow-green-500/30'
                : 'text-gray-300 hover:bg-white/10'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

const CourseCard = ({ title, imageUrl, onClick }) => (
  <div 
    className="relative h-36 rounded-lg overflow-hidden bg-gray-800 border border-gray-700
      shadow-lg shadow-gray-900/50 hover:shadow-xl hover:shadow-green-500/20 
      transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
    onClick={onClick}
  >
    
    {/* Background Image/Thumbnail */}
    <img 
        src={imageUrl} 
        alt={`Thumbnail for ${title}`} 
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80 
          transition-opacity duration-300 group-hover:opacity-100"
    />
    
    {/* Play Button Overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
        {/* Game Controller Icon (Placeholder SVG for aesthetic) */}
        <svg className="w-12 h-12 text-green-400 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="6" width="20" height="12" rx="4" ry="4"></rect>
            <path d="M12 6v12M7 12h10"></path>
            <circle cx="9" cy="9" r="1"></circle>
            <circle cx="15" cy="15" r="1"></circle>
        </svg>
    </div>
    
    {/* Overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    
    <div className="relative p-3 flex flex-col justify-end h-full">
      <h3 className="text-sm font-bold text-white z-10">{title}</h3>
    </div>
  </div>
);

const VideoModal = ({ videoUrl, onClose }) => {
    if (!videoUrl) return null;

    // Find the title from the courseData for accessibility
    const title = courseData.find(c => c.url === videoUrl)?.title || "Game Development Video";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl shadow-green-500/50" onClick={(e) => e.stopPropagation()}>
                <div className="aspect-video bg-gray-900 border-4 border-green-500">
                    <iframe
                        width="100%"
                        height="100%"
                        src={videoUrl + "?autoplay=1"} 
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};


// --- Main Component ---

const GameDevelopmentVl = () => {
    const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

    const openVideo = (url) => {
        setSelectedVideoUrl(url);
    };

    const closeVideo = () => {
        setSelectedVideoUrl(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8 flex items-center justify-center font-['Inter']">
            
            {/* Main Dashboard Container (Frosted Glass - Gaming UI Style) */}
            <div className="w-full max-w-6xl p-6 md:p-10 rounded-3xl backdrop-blur-md bg-white/5 
                border border-green-700/30 shadow-2xl shadow-green-500/20 text-white relative z-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold 
                        bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400 pb-2">
                        Game Development Command Center 🎮
                    </h1>
                    <p className="text-md text-gray-300 font-medium">Choose your engine and start building your world!</p>
                </div>

                {/* Content Grid: 3 columns for courses, 1 for calendar/widget */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* Courses Section (span 3 columns) */}
                    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {courseData.map((course, index) => (
                            <CourseCard 
                                key={index} 
                                title={course.title} 
                                imageUrl={getThumbnailUrl(course.videoID)} 
                                onClick={() => openVideo(course.url)} 
                            />
                        ))}
                        {/* Placeholder for future content to maintain grid structure */}
                        <div className="flex. lg:block p-4 rounded-xl h-36 bg-gray-800/10 border border-gray-700/50 flex items-center justify-center text-gray-500/70 text-sm">
                            Multi-Player Networking Coming Soon...
                        </div>
                    </div>

                    {/* Calendar and Icon Widget (span 1 column) */}
                    <div className="md:col-span-1 flex flex-col space-y-6">
                        
                        {/* Functional Calendar */}
                        <CalendarWidget />

                        {/* Gaming Console Widget */}
                        <div className="relative flex flex-col items-center justify-center p-6 rounded-xl 
                            bg-gradient-to-br from-gray-700/30 to-black/30 backdrop-blur-sm 
                            border border-green-600/30 shadow-2xl shadow-green-500/20 overflow-hidden">
                            {/* Glowing Controller Icon */}
                            <svg className="w-20 h-20 text-green-400 mb-4 drop-shadow-lg shadow-green-400/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="6" width="20" height="12" rx="4" ry="4"></rect>
                                <path d="M12 6v12M7 12h10"></path>
                                <circle cx="9" cy="9" r="1"></circle>
                                <circle cx="15" cy="15" r="1"></circle>
                            </svg>
                            <p className="text-sm text-gray-400 mt-2">Ready Player One.</p>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* The Modal Component (opens when a card is clicked) */}
            <VideoModal videoUrl={selectedVideoUrl} onClose={closeVideo} />
        </div>
    );
};

export default GameDevelopmentVl;