// import React from 'react';

// const JavaVl = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
//       {/* Main Title */}
//       <div className="mb-8 text-center">
//         <h1 className="text-5xl font-bold text-blue-500 mb-4">Java Development</h1>
//       </div>

//       {/* Java Programming Section */}
//       <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
//         <h1 className="text-3xl font-semibold text-yellow-400 text-center">
//           Java Programming for Beginners
//         </h1>

//         {/* Video Section */}
//         <div className="flex justify-start">
//           <iframe
//             className="w-full md:w-[560px] h-[315px] rounded-lg shadow-md"
//             src="https://www.youtube.com/embed/xTtL8E4LzTQ"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>

//       {/* Java DSA Section */}
//       <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-8 space-y-6">
//         <h1 className="text-3xl font-semibold text-yellow-400 text-center">
//           Java DSA (Data Structures and Algorithms)
//         </h1>

//         {/* Another Video Section */}
//         <div className="flex justify-start">
//           <iframe
//             className="w-full md:w-[560px] h-[315px] rounded-lg shadow-md"
//             src="https://www.youtube.com/embed/T0u5nwSA0w0"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JavaVl;


import React, { useState, useEffect } from 'react';

// --- Project Data: Java Learning Paths (Simplified List) ---
const courseData = [
  // Core Concepts
  { title: "Java Programming for Beginners (Full Course)", videoID: "xTtL8E4LzTQ", url: "https://www.youtube.com/embed/xTtL8E4LzTQ" },
  // { title: "Object-Oriented Programming (OOP) in Java", videoID: "QdK9t6QG738", url: "https://www.youtube.com/embed/QdK9t6QG738" },
  
  // Data Structures & Algorithms
  // { title: "Data Structures and Algorithms in Java", videoID: "T0u5nwSA0w0", url: "https://www.youtube.com/embed/T0u5nwSA0w0" },
  // { title: "Java Concurrency and Multithreading", videoID: "y5tYlqR5h7A", url: "https://www.youtube.com/embed/y5tYlqR5h7A" },
  
  // // Frameworks & Backend
  // { title: "Spring Boot Masterclass for Modern Backend", videoID: "w7shW4Vv1-Q", url: "https://www.youtube.com/embed/w7shW4Vv1-Q" },
  // { title: "Building RESTful APIs with Spring", videoID: "9va_y0qM-4Q", url: "https://www.youtube.com/embed/9va_y0qM-4Q" },

  // // Additional Placeholder Content for a clean 3x3 layout
  // { title: "Testing with JUnit and Mockito", videoID: "xTtL8E4LzTQ", url: "https://www.youtube.com/embed/xTtL8E4LzTQ" },
  // { title: "Hibernate ORM Fundamentals", videoID: "QdK9t6QG738", url: "https://www.youtube.com/embed/QdK9t6QG738" },
  { title: "Microservices Architecture in Java", videoID: "T0u5nwSA0w0", url: "https://www.youtube.com/embed/T0u5nwSA0w0" },
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
    <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-blue-700/30 shadow-xl shadow-blue-500/10 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">{year}</h3>
        <h3 className="text-lg font-semibold text-gray-200">Java Coding Streak</h3>
      </div>
      
      <div className="mb-4 text-center">
        <p className="text-3xl font-light text-white">{formattedTime}</p> 
        <p className="text-cyan-400 text-sm">{formattedDate}</p>
      </div>
      
      <hr className="border-t border-blue-600/50 my-4" />

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
                ? 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white font-bold shadow-lg shadow-blue-500/30'
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

// Simplified CourseCard with fixed blue styling
const CourseCard = ({ title, imageUrl, onClick }) => (
    <div 
        className="relative h-32 rounded-lg overflow-hidden bg-gray-800 border border-gray-700
            shadow-lg shadow-gray-900/50 hover:shadow-xl hover:shadow-blue-500/20
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
                e.target.src = `https://placehold.co/720x405/0F172A/94A3B8?text=JAVA+COURSE`;
            }}
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
            {/* Play Icon (Fixed Blue) */}
            <svg className="w-10 h-10 text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
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
    const title = courseData.find(c => c.url === videoUrl)?.title || "Java Development Video";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={onClose}>
            <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl shadow-blue-500/50" onClick={(e) => e.stopPropagation()}>
                <div className="aspect-video bg-gray-900 border-4 border-blue-500">
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

const JavaVl = () => {
    const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

    const openVideo = (url) => {
        setSelectedVideoUrl(url);
    };

    const closeVideo = () => {
        setSelectedVideoUrl(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8 flex items-center justify-center font-['Inter']">
            
            {/* Main Dashboard Container */}
            <div className="w-full max-w-7xl p-6 md:p-10 rounded-3xl backdrop-blur-md bg-white/5 
                border border-blue-700/30 shadow-2xl shadow-blue-500/20 text-white relative z-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold 
                        bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 pb-2">
                        Java Development Learning Hub ☕
                    </h1>
                    <p className="text-md text-gray-300 font-medium">Mastering the JVM: Core, DSA, and Enterprise Frameworks.</p>
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

                    {/* Calendar and Coffee Icon Widget (span 1 column) */}
                    <div className="md:col-span-1 flex flex-col space-y-6">
                        
                        {/* Functional Calendar */}
                        <CalendarWidget />

                        {/* Glowing Coffee Icon Widget */}
                        <div className="relative flex flex-col items-center justify-center p-6 rounded-xl 
                            bg-gradient-to-br from-gray-700/30 to-black/30 backdrop-blur-sm 
                            border border-yellow-600/30 shadow-2xl shadow-yellow-500/20 overflow-hidden">
                            {/* Coffee Cup Icon (Placeholder SVG) */}
                            <svg className="w-20 h-20 text-yellow-400 mb-4 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 8h2v8h-2zM4 6h11a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H4zM4 14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4V14zM2 20h17v2H2z"/>
                            </svg>
                            <p className="text-sm text-gray-400 mt-2">Powered by the JVM.</p>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* The Modal Component (opens when a card is clicked) */}
            <VideoModal videoUrl={selectedVideoUrl} onClose={closeVideo} />
        </div>
    );
};

export default JavaVl;