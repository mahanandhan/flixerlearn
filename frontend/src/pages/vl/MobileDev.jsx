// import React from 'react';

// const MobileDev = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 flex flex-col items-center justify-center px-6 py-12">
//       <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-xl">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Mobile App Development - Visual Learning</h1>
//         <iframe
//           width="100%"
//           height="100%"
//           src="https://www.youtube.com/embed/KC0ddYQcnq4?si=9lWXkQAaUUYJCa7f"
//           title="Mobile App Development Visual Learning"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           className="w-full h-full"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default MobileDev;


import React, { useState, useEffect } from 'react';

// --- Project Data: Mobile Development Learning Paths ---
const courseData = [
  // Cross-Platform Frameworks
  { title: "Flutter Full Course (Dart Basics to App)", videoID: "KC0ddYQcnq4", url: "https://www.youtube.com/embed/KC0ddYQcnq4" },
  // { title: "React Native: Build iOS and Android Apps", videoID: "obH0K_t0V_E", url: "https://www.youtube.com/embed/obH0K_t0V_E" },
  
  // // Native Development
  // { title: "Kotlin for Android Development Masterclass", videoID: "eEwI75x52gM", url: "https://www.youtube.com/embed/eEwI75x52gM" },
  // { title: "Swift & SwiftUI for iOS Development", videoID: "b1FuF7D3p9Q", url: "https://www.youtube.com/embed/b1FuF7D3p9Q" },
  
  // // Essentials and Architecture
  // { title: "Mobile App Design (UI/UX Principles)", videoID: "9va_y0qM-4Q", url: "https://www.youtube.com/embed/9va_y0qM-4Q" },
  // { title: "Firebase Integration for Beginners", videoID: "rfnr0b6rU-o", url: "https://www.youtube.com/embed/rfnr0b6rU-o" },

  // // Additional Placeholder Content
  // { title: "Advanced Mobile Testing Strategies", videoID: "xTtL8E4LzTQ", url: "https://www.youtube.com/embed/xTtL8E4LzTQ" },
  // { title: "Secure Coding Practices in Mobile", videoID: "T0u5nwSA0w0", url: "https://www.youtube.com/embed/T0u5nwSA0w0" },
  // { title: "Introduction to PWA and TWA", videoID: "lfyeni0euT4", url: "https://www.youtube.com/embed/lfyeni0euT4" },
  { title: "Adding remaining"},
];

const getThumbnailUrl = (videoID) => 
    `https://img.youtube.com/vi/${videoID}/hq720.jpg`;

// --- Functional Components: Widgets and Modal ---

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
    <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-pink-700/30 shadow-xl shadow-pink-500/10 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">{year}</h3>
        <h3 className="text-lg font-semibold text-gray-200">Release Cycle Tracker</h3>
      </div>
      
      <div className="mb-4 text-center">
        <p className="text-3xl font-light text-white">{formattedTime}</p> 
        <p className="text-sky-400 text-sm">{formattedDate}</p>
      </div>
      
      <hr className="border-t border-pink-600/50 my-4" />

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
                ? 'bg-gradient-to-br from-pink-500 to-sky-600 text-white font-bold shadow-lg shadow-pink-500/30'
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
            shadow-lg shadow-gray-900/50 hover:shadow-xl hover:shadow-sky-500/20
            transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
        onClick={onClick}
    >
        
        {/* Background Image/Thumbnail */}
        <img 
            src={imageUrl} 
            alt={`Thumbnail for ${title}`} 
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80 
                transition-opacity duration-300 group-hover:opacity-100"
            onError={(e) => {
                e.target.onerror = null; 
                // Fallback to a placeholder if the thumbnail fails to load
                e.target.src = `https://placehold.co/720x405/1F2937/F9A8D4?text=MOBILE+DEV`;
            }}
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
            {/* Play Icon (Fixed Sky Blue) */}
            <svg className="w-10 h-10 text-sky-400 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 6V18L17 12L7 6Z"/>
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
    const title = courseData.find(c => c.url === videoUrl)?.title || "Mobile Development Video";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={onClose}>
            <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl shadow-pink-500/50" onClick={(e) => e.stopPropagation()}>
                <div className="aspect-video bg-gray-900 border-4 border-pink-500">
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
                    className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors z-50"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};


// --- Main Component ---

const MobileDevVl = () => {
    const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

    const openVideo = (url) => {
        setSelectedVideoUrl(url);
    };

    const closeVideo = () => {
        setSelectedVideoUrl(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8 flex items-center justify-center font-['Inter']">
            
            {/* Main Dashboard Container (Frosted Glass with Pink/Sky accents) */}
            <div className="w-full max-w-7xl p-6 md:p-10 rounded-3xl backdrop-blur-md bg-white/5 
                border border-pink-700/30 shadow-2xl shadow-pink-500/20 text-white relative z-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold 
                        bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-sky-400 pb-2">
                        Mobile Development Hub 📱
                    </h1>
                    <p className="text-md text-gray-300 font-medium">Build fast, secure, and beautiful cross-platform apps.</p>
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
                    </div>

                    {/* Calendar and Icon Widget (span 1 column) */}
                    <div className="md:col-span-1 flex flex-col space-y-6">
                        
                        {/* Functional Calendar */}
                        <CalendarWidget />

                        {/* Glowing Cross-Platform Icon Widget */}
                        <div className="relative flex flex-col items-center justify-center p-6 rounded-xl 
                            bg-gradient-to-br from-gray-700/30 to-black/30 backdrop-blur-sm 
                            border border-sky-600/30 shadow-2xl shadow-sky-500/20 overflow-hidden">
                            {/* Cross-Platform Icon (Phone and Tablet) */}
                            <svg className="w-20 h-20 text-pink-400 mb-4 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 10h-2V6h-2V4h2V0h2v4h2v2h-2v4zm-2 2H8V2h8v10zm-2-8H6v8h8V4zm-4 12v-2h-2v2h2zm-2 4h4v2H6v-2zM4 18h16v2H4z"/>
                            </svg>
                            <p className="text-sm text-gray-400 mt-2">Flutter & React Native Focus</p>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* The Modal Component (opens when a card is clicked) */}
            <VideoModal videoUrl={selectedVideoUrl} onClose={closeVideo} />
        </div>
    );
};

export default MobileDevVl;