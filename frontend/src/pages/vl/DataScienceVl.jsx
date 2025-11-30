// import React from 'react';

// const DataScienceVl = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-200 via-teal-200 to-green-100 text-white px-6 py-12">
      
//       {/* Main Title */}
//       <div className="mb-10 text-center">
//         <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-4">
//           Data Science Full Course
//         </h1>
//         <p className="text-lg text-gray-800 mt-2 font-medium">Master Data Science, ML & Deep Learning from scratch</p>
//       </div>

//       {/* Video Section */}
//       <div className="bg-gradient-to-r from-green-300 to-blue-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8 max-w-5xl mx-auto">
//         <h2 className="text-2xl sm:text-3xl font-semibold text-purple-600 text-center mb-4">Visual Learning</h2>
//         <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//           <iframe
//             className="w-full h-64 sm:h-96 rounded-lg"
//             src="https://www.youtube.com/embed/lfyeni0euT4"
//             title="Data Science Full Course"
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default DataScienceVl;


import React, { useState, useEffect } from 'react';

// --- Project Data ---
const courseData = [
  // 1. Main Data Science Course
  { 
    title: "Data Science Full Course (2024)", 
    videoID: "lfyeni0euT4",
    url: "https://www.youtube.com/embed/lfyeni0euT4" 
  },
  // 2. Core Programming (Python)
  { 
    title: "Python for Data Science", 
    videoID: "rfscVS0vtbw", // Placeholder ID
    url: "https://www.youtube.com/embed/rfscVS0vtbw" 
  },
  { title: "Deep Learning Foundations", videoID: "rfscVS0vtbw", url: "https://www.youtube.com/embed/rfscVS0vtbw" },
  // 3. Data Manipulation (Pandas)
  // { 
  //   title: "Pandas & NumPy Essentials", 
  //   videoID: "rfnr0b6rU-o", // Placeholder ID
  //   url: "https://www.youtube.com/embed/rfnr0b6rU-o" 
  // },
  // 4. Statistics & Probability
  // { 
  //   title: "Statistics for Machine Learning", 
  //   videoID: "t3W8ufz027M", // Placeholder ID
  //   url: "https://www.youtube.com/embed/t3W8ufz027M" 
  // },
  // 5. Data Visualization (Matplotlib/Seaborn)
  // { 
  //   title: "Data Visualization Masterclass", 
  //   videoID: "a0QG17_9o1Y", // Placeholder ID
  //   url: "https://www.youtube.com/embed/a0QG17_9o1Y" 
  // },
  // Adding placeholders to fill the grid:
  { title: "SQL for Data Analysts", videoID: "lfyeni0euT4", url: "https://www.youtube.com/embed/lfyeni0euT4" }
   
  // { title: "Feature Engineering Guide", videoID: "rfnr0b6rU-o", url: "https://www.youtube.com/embed/rfnr0b6rU-o" },
  // { title: "NLP Basics", videoID: "t3W8ufz027M", url: "https://www.youtube.com/embed/t3W8ufz027M" },
];

const getThumbnailUrl = (videoID) => 
    `https://img.youtube.com/vi/${videoID}/hq720.jpg`;

// --- Functional Components (Copied from Dashboard Template) ---

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
    <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-purple-700/30 shadow-xl shadow-purple-500/10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">{year}</h3>
        <h3 className="text-lg font-semibold text-gray-200">Data Science Roadmap</h3>
      </div>
      
      <div className="mb-4 text-center">
          <p className="text-3xl font-light text-white">{formattedTime}</p> 
          <p className="text-cyan-400 text-sm">{formattedDate}</p>
      </div>
      
      <hr className="border-t border-purple-600/50 my-4" />

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
                ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold shadow-lg shadow-purple-500/30'
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
    const title = courseData.find(c => c.url === videoUrl)?.title || "Data Science Video";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl shadow-purple-500/50" onClick={(e) => e.stopPropagation()}>
                <div className="aspect-video bg-gray-900 border-4 border-purple-500">
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

const DataScienceVl = () => {
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
                border border-purple-700/30 shadow-2xl shadow-purple-500/20 text-white relative z-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold 
                        bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 pb-2">
                        Data Science Visualization Hub 📊
                    </h1>
                    <p className="text-md text-gray-300 font-medium">Master Data Science, ML & Deep Learning from scratch</p>
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
                            Time Series Analysis Coming Soon...
                        </div>
                    </div>

                    {/* Calendar and Chart Icon Widget (span 1 column) */}
                    <div className="md:col-span-1 flex flex-col space-y-6">
                        
                        {/* Functional Calendar */}
                        <CalendarWidget />

                        {/* Glowing Chart Icon Widget */}
                        <div className="relative flex flex-col items-center justify-center p-6 rounded-xl 
                            bg-gradient-to-br from-purple-700/20 to-indigo-700/20 backdrop-blur-sm 
                            border border-purple-600/30 shadow-2xl shadow-purple-500/20 overflow-hidden">
                            {/* Glowing Chart Icon */}
                            <svg className="w-20 h-20 text-purple-400 mb-4 drop-shadow-lg shadow-purple-400/50" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 19H5V5h14v14zM16 11H8v2h8v-2zm-4 4H8v2h4v-2zm4-8H8v2h8V7z"/>
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

export default DataScienceVl;