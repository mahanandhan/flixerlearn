// import React from 'react';

// const BlockchainVl = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-teal-50 via-teal-100 to-teal-200 text-gray-800 px-6 py-12">
//       {/* Main Title */}
//       <div className="mb-12 text-center">
//         <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-4">
//           Blockchain Project-Based Learning
//         </h1>
//         <p className="text-lg sm:text-xl text-gray-600">
//           Explore various hands-on learning projects to understand blockchain technology in depth.
//         </p>
//       </div>

//       {/* Project-Based Learning Sections */}
//       <div className="space-y-12">

//         {/* Song Application Section */}
//         <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6">
//           <h2 className="text-3xl font-semibold text-teal-600 mb-6 text-center">Song Application Using Blockchain</h2>
//           <p className="text-gray-600 text-center mb-6">
//             Gain a better understanding of blockchain integration by building a decentralized song application.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//               <iframe
//                 className="w-full h-64 sm:h-80 rounded-lg"
//                 src="https://www.youtube.com/embed/rp83FIpXyEY"
//                 title="YouTube video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </div>

//         {/* Web3 for Beginners Section */}
//         <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6">
//           <h2 className="text-3xl font-semibold text-indigo-600 mb-6 text-center">Web3 for Beginners to Advanced</h2>
//           <p className="text-gray-600 text-center mb-6">
//             A complete guide to understanding Web3 from the basics to advanced concepts.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//               <iframe
//                 className="w-full h-64 sm:h-80 rounded-lg"
//                 src="https://www.youtube.com/embed/wx0Hdgfpku0"
//                 title="YouTube video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </div>

//         {/* Solidity, Blockchain, and Smart Contract Course */}
//         <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6">
//           <h2 className="text-3xl font-semibold text-purple-600 mb-6 text-center">Solidity, Blockchain, and Smart Contract Course</h2>
//           <p className="text-gray-600 text-center mb-6">
//             Learn Solidity and smart contracts from beginner to expert level in this comprehensive course.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//               <iframe
//                 className="w-full h-64 sm:h-80 rounded-lg"
//                 src="https://www.youtube.com/embed/M576WGiDBdQ"
//                 title="YouTube video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </div>

//         {/* NFT Marketplace Section */}
//         <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6">
//           <h2 className="text-3xl font-semibold text-teal-500 mb-6 text-center">NFT Marketplace on Ethereum with React JS</h2>
//           <p className="text-gray-600 text-center mb-6">
//             Learn how to build an NFT marketplace on Ethereum using React JS in this project-based course.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//               <iframe
//                 className="w-full h-64 sm:h-80 rounded-lg"
//                 src="https://www.youtube.com/embed/S3jJtGYI18E"
//                 title="YouTube video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default BlockchainVl;


import React, { useState, useEffect } from 'react';

// --- Data for all courses, using real YouTube Thumbnail URLs ---

// Original Video IDs (from your projects)
// rp83FIpXyEY (Song Application)
// wx0Hdgfpku0 (Web3 Full Course)
// M576WGiDBdQ (Solidity & Smart Contracts)
// S3jJtGYI18E (NFT Marketplace)

const originalProjectData = [
  { 
    title: "Song Application (dApp)", 
    videoID: "rp83FIpXyEY",
    url: "https://www.youtube.com/embed/rp83FIpXyEY" 
  },
  { 
    title: "Web3 Full Course", 
    videoID: "wx0Hdgfpku0",
    url: "https://www.youtube.com/embed/wx0Hdgfpku0" 
  },
  { 
    title: "Solidity & Smart Contracts", 
    videoID: "M576WGiDBdQ",
    url: "https://www.youtube.com/embed/M576WGiDBdQ" 
  },
  { 
    title: "NFT Marketplace with React", 
    videoID: "S3jJtGYI18E",
    url: "https://www.youtube.com/embed/S3jJtGYI18E" 
  },
];

// Mapping to the AimlVl's expected 'courseData' structure
const courseData = originalProjectData.map(p => ({
    title: p.title,
    // Using the video ID to generate the thumbnail URL
    imageUrl: `https://img.youtube.com/vi/${p.videoID}/hq720.jpg`,
    url: p.url
}));

// Adding placeholders (using sample IDs to fill the grid space like in the AimlVl example)
// courseData.push(
//   { title: "Decentralized Exchange (DEX)", imageUrl: "https://img.youtube.com/vi/IA3WxTTPXqQ/hq720.jpg", url: "https://www.youtube.com/embed/IA3WxTTPXqQ" }, 
//   { title: "Token Standard Deep Dive (ERC-20)", imageUrl: "https://img.youtube.com/vi/mEsleV16qdo/hq720.jpg", url: "https://www.youtube.com/embed/mEsleV16qdo" }, 
//   { title: "Ethereum Protocol Fundamentals", imageUrl: "https://img.youtube.com/vi/rp83FIpXyEY/hq720.jpg", url: "https://www.youtube.com/embed/rp83FIpXyEY" },
//   { title: "Advanced Blockchain Security", imageUrl: "https://img.youtube.com/vi/wx0Hdgfpku0/hq720.jpg", url: "https://www.youtube.com/embed/wx0Hdgfpku0" },
// );


// --- Functional Components (Copied from AimlVl structure) ---

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
    <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-indigo-700/30 shadow-xl shadow-indigo-500/10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">{year}</h3>
        <h3 className="text-lg font-semibold text-gray-200">Web3 Learning Schedule</h3>
      </div>
      
      <div className="mb-4 text-center">
          <p className="text-3xl font-light text-white">{formattedTime}</p> 
          <p className="text-cyan-400 text-sm">{formattedDate}</p>
      </div>
      
      <hr className="border-t border-indigo-600/50 my-4" />

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
                ? 'bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white font-bold shadow-lg shadow-fuchsia-500/30'
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

    // Find the title from the courseData (projectData) for accessibility
    const title = courseData.find(c => c.url === videoUrl)?.title || "Course Video";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl shadow-indigo-500/50" onClick={(e) => e.stopPropagation()}>
                <div className="aspect-video bg-gray-900 border-4 border-fuchsia-500">
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


const BlockchainVl = () => {
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
                border border-indigo-700/30 shadow-2xl shadow-indigo-500/20 text-white relative z-10">

                {/* Header (CodeNexus Academy) */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold 
                        bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white pb-2">
                        Blockchain & Web3 Academy
                    </h1>
                </div>

                {/* Content Grid: 3 columns for courses, 1 for calendar/widget */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* Courses Section (span 3 columns) */}
                    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {courseData.map((course, index) => (
                            <CourseCard 
                                key={index} 
                                title={course.title} 
                                imageUrl={course.imageUrl} 
                                onClick={() => openVideo(course.url)} 
                            />
                        ))}
                        {/* Placeholder for future content to maintain grid structure */}
                        <div className="flex. lg:block p-4 rounded-xl h-32 bg-gray-800/10 border border-gray-700/50 flex items-center justify-center text-gray-500/70 text-sm">
                            Decentralized Finance (DeFi) Coming Soon...
                        </div>
                    </div>

                    {/* Calendar and Calendar Icon Widget (span 1 column) */}
                    <div className="md:col-span-1 flex flex-col space-y-6">
                        
                        {/* Functional Calendar */}
                        <CalendarWidget />

                        {/* Glowing Calendar Icon Widget */}
                        <div className="relative flex flex-col items-center justify-center p-6 rounded-xl 
                            bg-gradient-to-br from-pink-700/20 to-purple-700/20 backdrop-blur-sm 
                            border border-fuchsia-600/30 shadow-2xl shadow-fuchsia-500/20 overflow-hidden">
                            {/* Glowing Calendar Icon */}
                            <svg className="w-20 h-20 text-fuchsia-400 mb-4 drop-shadow-lg shadow-fuchsia-400/50" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z"/>
                            </svg>
                            {/* Holographic base effect */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 rounded-full 
                                bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-md"></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-6 rounded-full 
                                bg-gradient-to-r from-transparent via-purple-400/60 to-transparent blur-sm"></div>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* The Modal Component (opens when a card is clicked) */}
            <VideoModal videoUrl={selectedVideoUrl} onClose={closeVideo} />
        </div>
    );
};

export default BlockchainVl;