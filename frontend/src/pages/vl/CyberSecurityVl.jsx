// import React from 'react';

// const CyberSecurityVl = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-100 text-white px-6 py-12">
      
//       {/* Main Title */}
//       <div className="mb-8 text-center">
//         <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-600 mb-4">
//           Cyber Security
//         </h1>
//       </div>
//       {/* Educational Disclaimer */}
//         <div className="mt-12 text-center text-xl text-bold text-gray-800">
//         ⚠️ This content is provided solely for educational purposes. We do not encourage or support any form of illegal hacking. Please use your knowledge ethically and responsibly.
//         </div>

//       {/* Introduction Section */}
//       <div>
//         <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 text-center mb-6">Introduction</h2>
//       </div>

//       {/* Penetration Testing */}
//       <div className="bg-gradient-to-r from-red-300 to-yellow-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8">
//         <h2 className="text-2xl sm:text-3xl font-semibold text-blue-500 text-center mb-4">Penetration Testing</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//             <iframe className="w-full h-64 sm:h-80 rounded-lg" src="https://www.youtube.com/embed/wNA4CLG-OSM" title="Penetration Testing" frameBorder="0" allowFullScreen></iframe>
//           </div>
//         </div>
//       </div>

//       {/* vernalble assessment */}
//       <div className="bg-gradient-to-r from-red-300 to-yellow-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8">
//         <h2 className="text-2xl sm:text-3xl font-semibold text-green-500 text-center mb-4">vernalble assessment</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//             <iframe className="w-full h-64 sm:h-80 rounded-lg" src="https://www.youtube.com/embed/iLdsCnpMnTg" title="vernalble assessment" frameBorder="0" allowFullScreen></iframe>
//             </div>
//             </div>
//       </div>

//       {/* Kali Linux */}
//       <div className="bg-gradient-to-r from-red-300 to-yellow-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8">
//         <h2 className="text-2xl sm:text-3xl font-semibold text-red-500 text-center mb-4">Kali Linux</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//             <iframe className="w-full h-64 sm:h-80 rounded-lg" src="https://www.youtube.com/embed/T_zF1YOVo34" title="Kali Linux" frameBorder="0" allowFullScreen></iframe>
//           </div>
//         </div>
//       </div>

      
      
//     </div>
//   );
// };

// export default CyberSecurityVl;


import React, { useState, useEffect } from 'react';

// --- Project Data ---
const courseData = [
  // 1. Penetration Testing
  { 
    title: "Penetration Testing (Full Course)", 
    videoID: "wNA4CLG-OSM",
    url: "https://www.youtube.com/embed/wNA4CLG-OSM" 
  },
  // 2. Vulnerability Assessment (Fixing 'vernalble')
  { 
    title: "Vulnerability Assessment", 
    videoID: "iLdsCnpMnTg",
    url: "https://www.youtube.com/embed/iLdsCnpMnTg" 
  },
  // 3. Kali Linux
  { 
    title: "Kali Linux Tutorial (Beginner to Pro)", 
    videoID: "T_zF1YOVo34",
    url: "https://www.youtube.com/embed/T_zF1YOVo34" 
  },
  // 4. Ethical Hacking (Adding a logical fourth main topic)
  
  // Adding placeholders to fill the grid:
  // { title: "Cryptography Explained", videoID: "wNA4CLG-OSM", url: "https://www.youtube.com/embed/wNA4CLG-OSM" }, 
  // { title: "Network Security Basics", videoID: "iLdsCnpMnTg", url: "https://www.youtube.com/embed/iLdsCnpMnTg" }, 
  // { title: "Web Application Hacking", videoID: "T_zF1YOVo34", url: "https://www.youtube.com/embed/T_zF1YOVo34" },
  // { title: "OSINT Techniques", videoID: "dz2hJ1qN3jQ", url: "https://www.youtube.com/embed/dz2hJ1qN3jQ" },
];

const getThumbnailUrl = (videoID) => 
    `https://img.youtube.com/vi/${videoID}/hq720.jpg`;

// --- Functional Components (Reused from Dashboard Template) ---

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
    <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-red-700/30 shadow-xl shadow-red-500/10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">{year}</h3>
        <h3 className="text-lg font-semibold text-gray-200">Security Schedule</h3>
      </div>
      
      <div className="mb-4 text-center">
          <p className="text-3xl font-light text-white">{formattedTime}</p> 
          <p className="text-red-400 text-sm">{formattedDate}</p>
      </div>
      
      <hr className="border-t border-red-600/50 my-4" />

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
                ? 'bg-gradient-to-br from-red-500 to-orange-600 text-white font-bold shadow-lg shadow-red-500/30'
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
    className="relative h-32 rounded-lg overflow-hidden bg-gray-800 border border-gray-700
      shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    onClick={onClick}
  >
    
    {/* Background Image/Thumbnail */}
    <img 
        src={imageUrl} 
        alt={`Thumbnail for ${title}`} 
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
    />
    
    {/* Play Button Overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors">
        <svg className="w-10 h-10 text-white opacity-80 hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
        </svg>
    </div>
    
    {/* Overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    
    <div className="relative p-3 flex flex-col justify-end h-full">
      <h3 className="text-sm font-semibold text-white z-10">{title}</h3>
    </div>
  </div>
);

const VideoModal = ({ videoUrl, onClose }) => {
    if (!videoUrl) return null;

    // Find the title from the courseData for accessibility
    const title = courseData.find(c => c.url === videoUrl)?.title || "Cyber Security Video";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl shadow-red-500/50" onClick={(e) => e.stopPropagation()}>
                <div className="aspect-video bg-gray-900 border-4 border-red-500">
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
                    className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/50 p-1 rounded-full hover:bg-black/80 transition-colors"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};


// --- Main Component ---

const CyberSecurityVl = () => {
    const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

    const openVideo = (url) => {
        setSelectedVideoUrl(url);
    };

    const closeVideo = () => {
        setSelectedVideoUrl(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8 flex items-center justify-center">
            
            {/* Main Dashboard Container (Frosted Glass) */}
            <div className="w-full max-w-6xl p-6 md:p-10 rounded-3xl backdrop-blur-md bg-white/5 
                border border-red-700/30 shadow-2xl shadow-red-500/20 text-white relative z-10">

                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold 
                        bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400 pb-2">
                        Cyber Security Academy 🛡️
                    </h1>
                </div>
                
                {/* Educational Disclaimer */}
                <div className="mb-8 p-4 bg-yellow-900/40 border border-yellow-600/50 rounded-lg text-center text-sm font-medium text-yellow-300">
                    <span className="text-lg mr-2">⚠️</span>
                    This content is provided solely for **educational purposes**. We do not encourage or support any form of illegal hacking. Please use your knowledge **ethically and responsibly**.
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
                        <div className="flex. lg:block p-4 rounded-xl h-32 bg-gray-800/10 border border-gray-700/50 flex items-center justify-center text-gray-500/70 text-sm">
                            Cloud Security Coming Soon...
                        </div>
                    </div>

                    {/* Calendar and Security Icon Widget (span 1 column) */}
                    <div className="md:col-span-1 flex flex-col space-y-6">
                        
                        {/* Functional Calendar */}
                        <CalendarWidget />

                        {/* Glowing Lock Icon Widget (Security Focus) */}
                        <div className="relative flex flex-col items-center justify-center p-6 rounded-xl 
                            bg-gradient-to-br from-red-700/20 to-orange-700/20 backdrop-blur-sm 
                            border border-red-600/30 shadow-2xl shadow-red-500/20 overflow-hidden">
                            {/* Glowing Lock Icon */}
                            <svg className="w-20 h-20 text-red-400 mb-4 drop-shadow-lg shadow-red-400/50" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/>
                            </svg>
                            {/* Holographic base effect */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 rounded-full 
                                bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent blur-md"></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-6 rounded-full 
                                bg-gradient-to-r from-transparent via-red-400/60 to-transparent blur-sm"></div>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* The Modal Component (opens when a card is clicked) */}
            <VideoModal videoUrl={selectedVideoUrl} onClose={closeVideo} />
        </div>
    );
};

export default CyberSecurityVl;