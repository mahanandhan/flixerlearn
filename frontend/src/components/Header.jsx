import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import coursesData from "../assets/data"; 
import { FcAbout } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import logoLearn from "../../src/assets/logoLearn.jpg";

const HomeIcon = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
);

const SettingsIcon = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.38-1.09-.7-1.71-.94l-.35-2.52c-.04-.2-.22-.35-.42-.35h-4c-.2 0-.37.15-.42.35l-.35 2.52c-.62.24-1.19.56-1.71.94l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.38 1.09.7 1.71.94l.35 2.52c.05.2.23.35.43.35h4c.2 0 .37-.15.42-.35l.35-2.52c.62-.24 1.19-.56 1.71-.94l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" /></svg>
);

const RedirectIcon = () => (
    <svg className="w-4 h-4 ml-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
);

const NavArrowIcon = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className="p-1 rounded-full text-gray-500 hover:text-white hover:bg-gray-700 transition duration-150"
    >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {direction === 'left' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            )}
        </svg>
    </button>
);

const CarouselArrowIcon = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-indigo-600/70 transition duration-150 z-30"
    >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {direction === 'left' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            )}
        </svg>
    </button>
);

const Sidebar = ({ isOpen, toggleSidebar }) => (
    <div className={`fixed inset-y-0 left-0 z-50 transform 
        ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'} 
        md:relative md:translate-x-0 md:w-20 md:block 
        bg-gray-900 h-full flex flex-col items-center py-6 border-r border-gray-800 transition-all duration-300 ease-in-out`}>
        
        <div className="mb-10 p-2">
            <img 
                src={logoLearn} 
                alt="Learn Peak Logo" 
                className="w-12 h-12 object-cover rounded-full border border-indigo-400"
            />
        </div>
        
        <nav className="space-y-6">
            <Link to="/" className="p-3 rounded-xl bg-indigo-700 text-white shadow-lg shadow-indigo-700/50 cursor-pointer block">
                <HomeIcon className="w-6 h-6" />
            </Link>
            
            <Link 
                to="/about"
                className="p-3 rounded-xl text-gray-500 hover:text-blue-400 cursor-pointer block"
                style={{ boxShadow: `0 0 10px #3B82F61A`, border: `1px solid #3B82F633` }}
            >
                <FcAbout className="w-6 h-6"/>
            </Link>

            <div className="p-3 rounded-xl text-gray-500 mt-16 hover:text-pink-400 cursor-pointer border border-pink-400/50">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg>
            </div>
        </nav>
    </div>
);

const DashboardLayout = () => {
  const [courses, setCourses] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date()); 
  const courseGridRef = useRef(null); 
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCourses(coursesData); 
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (courses.length > 1) {
      const carouselTimer = setInterval(() => {
        setCurrentFeatureIndex(prevIndex => (prevIndex + 1) % courses.length);
      }, 3000); 
      return () => clearInterval(carouselTimer);
    }
  }, [courses.length]);

  const navigateFeature = (direction) => {
    if (!courses.length) return;
    setCurrentFeatureIndex(prevIndex => {
      if (direction === 'left') {
        return prevIndex === 0 ? courses.length - 1 : prevIndex - 1;
      } else {
        return (prevIndex + 1) % courses.length;
      }
    });
  };

  const featuredCourse = courses[currentFeatureIndex];
  
  const formattedTime = currentDateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  const formattedDate = currentDateTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const currentMonth = currentDateTime.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // ✅ PERFECT CALENDAR LOGIC
  const daysInMonth = new Date(currentDateTime.getFullYear(), currentDateTime.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(), 1).getDay(); // 0=Sun, 6=Sat
  const today = currentDateTime.getDate();

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (course.description || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCardGradient = (index) => {
    const gradients = [
      'from-pink-500 to-red-500',      
      'from-purple-500 to-indigo-500', 
      'from-blue-500 to-cyan-500',     
      'from-teal-500 to-green-500',    
    ];
    return gradients[index % gradients.length];
  };

  const scrollCourses = (direction) => {
    if (courseGridRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 280 : 300; 
      const currentScroll = courseGridRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      courseGridRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <div className="flex md:flex-row flex-col bg-black text-white min-h-screen p-2 md:p-4 overflow-hidden">
      
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleSidebar}></div>}

      <div className="flex-1 flex flex-col bg-[#141416] rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/50">
        
        <header className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
          <div className="flex items-center space-x-4">
            <button 
                onClick={toggleSidebar}
                className="text-gray-400 md:hidden hover:text-white"
            >
                <FaBars className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold text-gray-300">FlixerLearn</h1> 
            
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search anything" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800 text-gray-300 p-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 text-sm"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-800 p-1 rounded-full cursor-pointer">
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6 flex-1 overflow-y-auto">
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-8">
            
            <div className="w-full md:w-2/3 relative bg-gray-900 rounded-xl p-6 md:p-8 shadow-inner shadow-indigo-900/30 overflow-hidden border border-gray-800">
              
              {featuredCourse && featuredCourse.image && (
                <img 
                  key={featuredCourse.name} 
                  src={featuredCourse.image} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-700" 
                />
              )}

              <div className="absolute inset-0 bg-black/60 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-indigo-500/10 to-cyan-500/10 z-10"></div>
              
              <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30"> 
                  <CarouselArrowIcon direction="left" onClick={() => navigateFeature('left')} />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30"> 
                  <CarouselArrowIcon direction="right" onClick={() => navigateFeature('right')} />
              </div>
              
              <div 
                  key={currentFeatureIndex} 
                  className="flex items-center relative z-20 opacity-100 transition-opacity duration-700"
              >
                <div className="w-full"> 
                  {featuredCourse ? (
                    <>
                      <span className="inline-block text-xs md:text-sm font-medium px-3 py-1 bg-indigo-600 text-white rounded-full mb-3">
                        Featured Course #{currentFeatureIndex + 1}
                      </span>
                      <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                        {featuredCourse.name}
                      </h2>
                      <p className="text-gray-400 text-sm md:text-base max-w-md mb-4 md:mb-6">
                        {featuredCourse.description}
                      </p>
                      <div className="flex space-x-3">
                        <Link 
                            to={`/${featuredCourse.name.toLowerCase().replace(/\s+/g, '')}`}
                            state={featuredCourse}
                            className="bg-fuchsia-600 text-white px-4 py-2 md:px-6 md:py-3 text-sm rounded-xl font-semibold hover:bg-fuchsia-500 transition duration-300 shadow-lg shadow-fuchsia-600/50"
                        >
                          View Details
                        </Link>
                       <Link 
                            to={`/${featuredCourse.name.toLowerCase().replace(/\s+/g, '')}`}
                            state={featuredCourse}
                            className="bg-transparent border border-gray-200 text-gray-100 px-4 py-2 md:px-6 md:py-3 text-sm rounded-xl font-semibold hover:bg-gray-200 hover:text-gray-900 transition duration-300 shadow-lg shadow-gray-900/30 flex items-center"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </>
                  ) : (
                    <h2 className="text-2xl text-gray-500">Loading Featured Courses...</h2>
                  )}
                </div>
              </div>
            </div>

            {/* ✅ PERFECT CALENDAR - Exact current month layout */}
            <div className="w-full md:w-1/3 bg-gray-900 rounded-xl p-4 shadow-inner shadow-indigo-900/30 border border-gray-800 mt-4 md:mt-0">
              <h3 className="text-xl font-semibold text-gray-300 mb-4 border-b border-gray-800 pb-2">Calendar</h3> 
              
              <div className="mb-6 bg-gray-800 p-3 rounded-lg border border-indigo-700/50">
                 <div className="text-white font-medium text-xl md:text-2xl mb-1">{formattedTime}</div>
                 <div className="text-indigo-400 text-sm">{formattedDate}</div>
              </div>

              <div className="text-center text-lg font-bold text-white mb-4">
                {currentMonth}
              </div>

              {/* ✅ PERFECT CALENDAR GRID */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs md:text-sm mb-4">
                {/* Day Headers */}
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                  <div key={index} className="text-gray-500 font-semibold py-1">{day}</div>
                ))}
                
                {/* ✅ DYNAMIC FILLERS - Exact first day positioning */}
                {Array.from({ length: firstDayOfMonth }, (_, index) => (
                  <div key={`filler-${index}`} className="p-2"></div>
                ))}
                
                {/* ✅ REAL DAYS OF CURRENT MONTH */}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const isToday = day === today;
                  return (
                    <div 
                      key={`day-${day}`}
                      className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full font-medium text-gray-300 hover:bg-gray-800 transition-all duration-200 cursor-pointer p-1
                        ${isToday 
                          ? 'bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/50 scale-110 ring-2 ring-fuchsia-400/50' 
                          : 'hover:scale-105'
                        }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="col-span-1 md:col-span-3">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-300">
                        {searchTerm ? `Search Results (${filteredCourses.length})` : "Popular Courses"}
                    </h3> 
                    <div className="flex space-x-2">
                        <NavArrowIcon direction="left" onClick={() => scrollCourses('left')} />
                        <NavArrowIcon direction="right" onClick={() => scrollCourses('right')} />
                    </div>
                </div>

                <div 
                    ref={courseGridRef} 
                    className="flex space-x-4 md:space-x-6 overflow-x-scroll pb-4 scrollbar-hide" 
                    style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }} 
                >
                {(filteredCourses.length > 0 ? filteredCourses : courses).map((course, index) => (
                    <Link
                    key={index}
                    to={`/${course.name.toLowerCase().replace(/\s+/g, '')}`}
                    state={course}
                    className="shrink-0 w-64 md:w-80 relative bg-gray-900 rounded-xl shadow-xl transform transition duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden border border-gray-800 block" 
                    >
                    <div className={`absolute inset-0 -m-px rounded-xl bg-gradient-to-r ${getCardGradient(index)} opacity-30 blur-sm`}></div>
                    
                    <div className="relative p-4 md:p-5 z-10">
                        {course.image && (
                            <img 
                                src={course.image} 
                                alt={course.name} 
                                className="w-full h-16 md:h-20 object-cover rounded-md mb-3 opacity-50 transition duration-300"
                            />
                        )}

                        <div className="flex justify-between items-start mb-2">
                            <span className="text-base md:text-lg font-bold text-white leading-snug">
                                {course.name}
                            </span>
                            <button className="text-xs px-2 py-0.5 rounded-full font-semibold text-white bg-red-500 hover:bg-red-400 transition duration-300">
                                Enroll 
                            </button>
                        </div>
                        <p className="text-gray-400 text-xs md:text-sm mb-4">{course.description}</p>
                        
                        <div className="flex justify-between items-center text-gray-500 pt-3 border-t border-gray-800">
                            <HomeIcon className="w-5 h-5"/>
                            <span className="text-xs flex items-center text-white font-medium">
                                View Details
                                <RedirectIcon /> 
                            </span>
                        </div>
                    </div>
                    </Link>
                ))}
                {searchTerm && filteredCourses.length === 0 && (
                    <div className="text-gray-400 text-sm flex items-center justify-center min-h-[200px] w-full bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-700 p-8">
                        <div className="text-center">
                            <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <p>No courses found for "{searchTerm}"</p>
                            <p className="text-xs mt-1">Try different keywords</p>
                        </div>
                    </div>
                )}
                </div>
            </div>

            <div className="col-span-1 md:col-span-1">
              <h3 className="text-xl font-semibold text-gray-300 mb-4 mt-4 md:mt-0">Notifications</h3> 
              <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 shadow-inner shadow-indigo-900/30">
                <div className="text-teal-400 mb-3">
                    <h4 className="font-semibold text-lg">New Event Reminder.</h4> 
                    <p className="text-sm text-gray-400">Mastering AI</p> 
                </div>
                <p className="text-sm text-gray-400 mb-4">
                    A brief summary of the notification or event happening here.
                </p>
                <button className="w-full bg-teal-600 text-white py-2 rounded-xl font-semibold hover:bg-teal-500 transition duration-300 shadow-lg shadow-teal-600/50">
                    View Details 
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
