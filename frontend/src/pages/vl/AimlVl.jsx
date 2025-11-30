// import React from 'react';

// const AimlVl = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-100 text-white px-6 py-12">
//       {/* Main Title */}
//       <div className="mb-8 text-center">
//         <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600 mb-4">
//           AI & ML
//         </h1>
//       </div>

//       {/* Introduction Section */}
//       <div>
//         <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 text-center mb-6">Introduction</h2>
//       </div>

//       {/* AI & ML Introduction Video */}
//       <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8">
//         <h1 className="text-2xl sm:text-3xl font-semibold text-yellow-500 text-center mb-4">AI & ML Introduction</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//             <iframe className="w-full h-64 sm:h-80 rounded-lg" src="https://www.youtube.com/embed/i_LwzRVP7bg" title="AI & ML Introduction" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//           </div>
//         </div>
//       </div>

//       {/* NLP Section */}
//       <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8">
//         <h1 className="text-2xl sm:text-3xl font-semibold text-blue-500 text-center mb-4">NLP</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//             <iframe className="w-full h-64 sm:h-80 rounded-lg" src="https://www.youtube.com/embed/dIUTsFT2MeQ" title="NLP" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//           </div>
//         </div>
//       </div>

//       {/* Deep Learning Section */}
//       <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8">
//         <h1 className="text-2xl sm:text-3xl font-semibold text-green-500 text-center mb-4">Deep Learning</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//             <iframe className="w-full h-64 sm:h-80 rounded-lg" src="https://www.youtube.com/embed/IA3WxTTPXqQ" title="Deep Learning" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//           </div>
//         </div>
//       </div>

//       {/* Generative AI Section */}
//       <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8">
//         <h1 className="text-2xl sm:text-3xl font-semibold text-orange-500 text-center mb-4">Generative AI</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//             <iframe className="w-full h-64 sm:h-80 rounded-lg" src="https://www.youtube.com/embed/mEsleV16qdo" title="Generative AI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//           </div>
//         </div>
//       </div>

//       {/* Flask Section */}
//       <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8">
//         <h1 className="text-2xl sm:text-3xl font-semibold text-red-500 text-center mb-4">Flask</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//             <iframe className="w-full h-64 sm:h-80 rounded-lg" src="https://www.youtube.com/embed/Z1RJmh_OqeA" title="Flask" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//           </div>
//         </div>
//       </div>

//       {/* Gemini Clone Section */}
//       <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8">
//         <h1 className="text-2xl sm:text-3xl font-semibold text-purple-500 text-center mb-4">Gemini Clone</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//             <iframe className="w-full h-64 sm:h-80 rounded-lg" src="https://www.youtube.com/embed/0yboGn8errU" title="Gemini Clone" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//           </div>
//         </div>
//       </div>

//       {/* OpenCV Section */}
//       <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8">
//         <h1 className="text-2xl sm:text-3xl font-semibold text-cyan-500 text-center mb-4">OpenCV</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
//             <iframe className="w-full h-64 sm:h-80 rounded-lg" src="https://www.youtube.com/embed/oXlwWbU8l2o" title="OpenCV" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AimlVl;


import React, { useState, useEffect } from 'react';

// --- Data for all courses, using real YouTube Thumbnail URLs ---
const courseData = [
  // Video IDs extracted from your URLs:
  // i_LwzRVP7bg (AI & ML Intro)
  // dIUTsFT2MeQ (NLP)
  // IA3WxTTPXqQ (Deep Learning)
  // mEsleV16qdo (Generative AI)
  // Z1RJmh_OqeA (Flask)
  // 0yboGn8errU (Gemini Clone)
  // oXlwWbU8l2o (OpenCV)

  { 
    title: "AI & ML Introduction", 
    // Using the video ID: i_LwzRVP7bg
    imageUrl: "https://img.youtube.com/vi/i_LwzRVP7bg/hq720.jpg", 
    url: "https://www.youtube.com/embed/i_LwzRVP7bg" 
  },
  { 
    title: "NLP", 
    // Using the video ID: dIUTsFT2MeQ
    imageUrl: "https://img.youtube.com/vi/dIUTsFT2MeQ/hq720.jpg", 
    url: "https://www.youtube.com/embed/dIUTsFT2MeQ" 
  },
  { 
    title: "Deep Learning (DL)", 
    // Using the video ID: IA3WxTTPXqQ
    imageUrl: "https://img.youtube.com/vi/IA3WxTTPXqQ/hq720.jpg", 
    url: "https://www.youtube.com/embed/IA3WxTTPXqQ" 
  },
  { 
    title: "Generative AI", 
    // Using the video ID: mEsleV16qdo
    imageUrl: "https://img.youtube.com/vi/mEsleV16qdo/hq720.jpg", 
    url: "https://www.youtube.com/embed/mEsleV16qdo" 
  },
  { 
    title: "Flask (Web Deployment)", 
    // Using the video ID: Z1RJmh_OqeA
    imageUrl: "https://img.youtube.com/vi/Z1RJmh_OqeA/hq720.jpg", 
    url: "https://www.youtube.com/embed/Z1RJmh_OqeA" 
  },
  { 
    title: "Gemini Clone Project", 
    // Using the video ID: 0yboGn8errU
    imageUrl: "https://img.youtube.com/vi/0yboGn8errU/hq720.jpg", 
    url: "https://www.youtube.com/embed/0yboGn8errU" 
  },
  { 
    title: "OpenCV (Computer Vision)", 
    // Using the video ID: oXlwWbU8l2o
    imageUrl: "https://img.youtube.com/vi/oXlwWbU8l2o/hq720.jpg", 
    url: "https://www.youtube.com/embed/oXlwWbU8l2o" 
  },
  // Adding placeholders with unique images to fill the grid:
  { title: "Intro to Python", imageUrl: "https://img.youtube.com/vi/i_LwzRVP7bg/hq720.jpg", url: "https://www.youtube.com/embed/i_LwzRVP7bg" }, 
  { title: "Advanced Web Development", imageUrl: "https://img.youtube.com/vi/IA3WxTTPXqQ/hq720.jpg", url: "https://www.youtube.com/embed/IA3WxTTPXqQ" }, 
  { title: "AI Fundamentals", imageUrl: "https://img.youtube.com/vi/mEsleV16qdo/hq720.jpg", url: "https://www.youtube.com/embed/mEsleV16qdo" }, 
];

// --- Functional Components (No changes needed, they use the updated courseData) ---

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
        <h3 className="text-lg font-semibold text-gray-200"></h3>
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
    
    {/* Background Image/Thumbnail (Now a real YouTube thumbnail) */}
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

    // Find the title for accessibility
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


const AimlVl = () => {
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
                        Learn Peak - AI & ML
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
                            More Lessons Coming Soon...
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

export default AimlVl;