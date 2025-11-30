import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import coursesData from "../assets/data"; 
import { FcAbout } from "react-icons/fc";
import { FaBars } from "react-icons/fa"; // Added for mobile menu
// NEW IMPORT FOR THE LOGO
import logoLearn from "../../src/assets/logoLearn.jpg";

// Placeholder Icons (Replace with actual imports like react-icons)


// FIX: Added 'props' to accept and spread className
const HomeIcon = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
);
// FIX: Added 'props' to accept and spread className
const SettingsIcon = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.38-1.09-.7-1.71-.94l-.35-2.52c-.04-.2-.22-.35-.42-.35h-4c-.2 0-.37.15-.42.35l-.35 2.52c-.62.24-1.19.56-1.71.94l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.38 1.09.7 1.71.94l.35 2.52c.05.2.23.35.43.35h4c.2 0 .37-.15.42-.35l.35-2.52c.62-.24 1.19-.56 1.71-.94l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" /></svg>
);

// Redirect Symbol (Arrow)
const RedirectIcon = () => (
    <svg className="w-4 h-4 ml-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
);

// Navigation Arrow Icon (Re-used for Course Grid Navigation)
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

// Carousel Arrow Icon (Smaller, used inside the Featured Section)
const CarouselArrowIcon = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-indigo-600/70 transition duration-150 z-30" // Increased z-index
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
    // FIX 1: Ensure sidebar is fixed, hidden off-screen by default, and visible on md: screens.
    // Added 'h-full' and 'w-64' for mobile size. Added 'md:block' to ensure it's always block on desktop.
    <div className={`fixed inset-y-0 left-0 z-50 transform 
      ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'} 
      md:relative md:translate-x-0 md:w-20 md:block 
      bg-gray-900 h-full flex flex-col items-center py-6 border-r border-gray-800 transition-all duration-300 ease-in-out`}>
    
    {/* Logo Area - REPLACED 'H' WITH IMAGE */}
    <div className="mb-10 p-2">
      <img 
        src={logoLearn} 
        alt="Learn Peak Logo" 
        className="w-12 h-12 object-cover rounded-full border border-indigo-400"
      />
    </div>
    
    {/* Navigation Icons */}
    <nav className="space-y-6">
      {/* Active Item: Home */}
      <Link to="/" className="p-3 rounded-xl bg-indigo-700 text-white shadow-lg shadow-indigo-700/50 cursor-pointer block">
        <HomeIcon className="w-6 h-6" />
        
      </Link>
      
      {/* Other Items (Red and Green) */}
      

      {/* NEW: About Link (Blue) */}
      <Link 
        to="/about"
        className="p-3 rounded-xl text-gray-500 hover:text-blue-400 cursor-pointer block"
        style={{ boxShadow: `0 0 10px #3B82F61A`, border: `1px solid #3B82F633` }}
      >
        <FcAbout className="w-6 h-6"/>
      </Link>


      {/* Bottom Envelope Icon (Menu) */}
      <div className="p-3 rounded-xl text-gray-500 mt-16 hover:text-pink-400 cursor-pointer border border-pink-400/50">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg>
      </div>
    </nav>

    {/* Footer Icons */}
{/*     <div className="mt-auto space-y-4">
        <div className="text-gray-500 hover:text-white cursor-pointer">Profile</div> 
        <div className="text-gray-500 hover:text-white cursor-pointer">Guest</div>  
    </div> */}
  </div>
);

const DashboardLayout = () => {
  const [courses, setCourses] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date()); 
  const courseGridRef = useRef(null); 
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0); 
    // NEW: State for mobile sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

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
        setCurrentFeatureIndex(prevIndex => 
          (prevIndex + 1) % courses.length
        );
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
      // Adjusted scroll amount for mobile screen width
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

  // Helper to toggle sidebar state
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);


  return (
    // Main Container: Flex on desktop, block on mobile. Reduced padding.
    <div className="flex md:flex-row flex-col bg-black text-white min-h-screen p-2 md:p-4 overflow-hidden">
      
      {/* 1. Fixed Sidebar (Left) - Added toggleSidebar and isOpen prop */}
      {/* FIX: Used 'toggleSidebar' helper function */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* FIX 2: Mobile Overlay for Sidebar */}
      {/* This element will cover the main content when the sidebar is open on small screens */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleSidebar}></div>}

      {/* 2. Main Content Area - Full width on mobile, taking remaining space on desktop */}
      <div className="flex-1 flex flex-col bg-[#141416] rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/50">
        
        {/* 2a. Top Navigation Bar - Added Mobile Menu Button */}
        <header className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
          <div className="flex items-center space-x-4">
            {/* FIX 3: Mobile Menu Button to open the sidebar. Hidden on desktop (md:hidden) */}
            <button 
                onClick={toggleSidebar}
                className="text-gray-400 md:hidden hover:text-white"
            >
                <FaBars className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold text-gray-300">FlixerLearn</h1> 
            
            {/* Search Bar - Hidden on small screens */}
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search anything" 
                className="bg-gray-800 text-gray-300 p-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 text-sm"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
            </div>
          </div>
          
          {/* User & Icons */}
          <div className="flex items-center space-x-4">
{/*             <div className="text-gray-400 hover:text-white cursor-pointer hidden sm:block">🔔</div>
            <div className="text-gray-400 hover:text-white cursor-pointer hidden sm:block">⚙️</div> */}
            {/* User Avatar only on smaller screens */}
            <div className="flex items-center space-x-2 bg-gray-800 p-1 rounded-full cursor-pointer">
{/*               <img src="https://i.pravatar.cc/32?img=1" alt="User" className="w-8 h-8 rounded-full" />
              <span className="text-sm font-medium text-gray-300 pr-2 hidden sm:block">Vinsez</span>  */}
            </div>
          </div>
        </header>

        {/* 2b. Main Content Scroll Area - Reduced padding on mobile */}
        <main className="p-4 md:p-6 flex-1 overflow-y-auto">
          
          {/* Top Row: Hero Banner and Calendar Widget - Stacks vertically on mobile */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-8">
            
            {/* Hero Banner (Featured Course Carousel) - Full width on mobile */}
            <div className="w-full md:w-2/3 relative bg-gray-900 rounded-xl p-6 md:p-8 shadow-inner shadow-indigo-900/30 overflow-hidden border border-gray-800">
              
              {/* *** Full-Spread Image Background *** */}
              {featuredCourse && featuredCourse.image && (
                <img 
                  key={featuredCourse.name} 
                  src={featuredCourse.image} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-700" 
                />
              )}

              {/* Overlay to enforce contrast and readability */}
              <div className="absolute inset-0 bg-black/60 z-10"></div>
              <div className="absolute inset-0 bg-linear-to-r from-pink-500/10 via-indigo-500/10 to-cyan-500/10 z-10"></div>
              
              {/* Carousel Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30"> 
                  <CarouselArrowIcon direction="left" onClick={() => navigateFeature('left')} />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30"> 
                  <CarouselArrowIcon direction="right" onClick={() => navigateFeature('right')} />
              </div>
              
              {/* Content Area */}
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
                          className="bg-transparent border border-gray-200  text-gray-100 px-4 py-2 md:px-6 md:py-3 text-sm rounded-xl font-semibold hover:bg-gray-200 hover:text-gray-900 transition duration-300 shadow-lg shadow-gray-900/30 flex items-center"
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

            {/* Calendar Widget - Full width on mobile, top margin to separate from hero */}
            <div className="w-full md:w-1/3 bg-gray-900 rounded-xl p-4 shadow-inner shadow-indigo-900/30 border border-gray-800 mt-4 md:mt-0">
              <h3 className="text-xl font-semibold text-gray-300 mb-4 border-b border-gray-800 pb-2">Calendar</h3> 
              
              {/* Current Date and Time Display */}
              <div className="mb-6 bg-gray-800 p-3 rounded-lg border border-indigo-700/50">
                 <div className="text-white font-medium text-xl md:text-2xl mb-1">{formattedTime}</div>
                 <div className="text-indigo-400 text-sm">{formattedDate}</div>
              </div>

              {/* Month and Year Display */}
              <div className="text-center text-lg font-bold text-white mb-4">
                {currentMonth}
              </div>

              {/* Calendar Grid Placeholder */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs md:text-sm mb-4">
                {/* Day Headers */}
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => <div key={index} className="text-gray-500 font-semibold">{day}</div>)}
                
                {/* Dummy Calendar Days (Adjusted to start better and highlight today) */}
                {/* Fillers for the start of the week */}
                {Array(3).fill(0).map((_, index) => <div key={`filler-${index}`} className="p-1"></div>)}

                {Array.from({ length: 28 }, (_, i) => i + 1).map((day, index) => (
                    <div 
                        key={index} 
                        className={`p-1 rounded-lg font-medium text-gray-300 hover:bg-gray-800 
                            ${day === currentDateTime.getDate() && 'bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/50'}`} 
                    >
                        {day}
                    </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Row: Course Cards and Notification Widget - Stacks on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Course Cards - Full width on mobile, 3/4 on desktop */}
            <div className="col-span-1 md:col-span-3">
                {/* Heading and Navigation Buttons */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-300">Popular Courses</h3> 
                    <div className="flex space-x-2">
                        <NavArrowIcon direction="left" onClick={() => scrollCourses('left')} />
                        <NavArrowIcon direction="right" onClick={() => scrollCourses('right')} />
                    </div>
                </div>

                {/* Course Grid Container - Card width reduced for mobile */}
              <div 
                    ref={courseGridRef} 
                    className="flex space-x-4 md:space-x-6 overflow-x-scroll pb-4 scrollbar-hide" 
                    style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }} 
                >
                {courses.map((course, index) => (
                  <Link
                    key={index}
                    to={`/${course.name.toLowerCase().replace(/\s+/g, '')}`}
                    state={course}
                    // Fixed width for horizontal scrolling - reduced from w-80 to w-64 on mobile
                    className="shrink-0 w-64 md:w-80 relative bg-gray-900 rounded-xl shadow-xl transform transition duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden border border-gray-800 block" 
                  >
                    {/* Glowing Border Effect for Cards */}
                    <div className={`absolute inset-0 -m-px rounded-xl bg-linear-to-r ${getCardGradient(index)} opacity-30 blur-sm`}></div>
                    
                    <div className="relative p-4 md:p-5 z-10">
                      {/* Course Image Integration */}
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
                      
                      {/* Footer with Home Icon and Redirect Symbol */}
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
              </div>
            </div>

            {/* Notification Widget - Full width on mobile, 1/4 on desktop */}
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