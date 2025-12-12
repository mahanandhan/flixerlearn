// src/pages/DashboardLayout.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import coursesData from "../assets/data";
import { FcAbout } from "react-icons/fc";
import { FaBars } from "react-icons/fa";

const HomeIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const SettingsIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.38-1.09-.7-1.71-.94l-.35-2.52c-.04-.2-.22-.35-.42-.35h-4c-.2 0-.37.15-.42.35l-.35 2.52c-.62.24-1.19.56-1.71.94l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.38 1.09.7 1.71.94l.35 2.52c.05.2.23.35.43.35h4c.2 0 .37-.15.42-.35l.35-2.52c.62-.24 1.19-.56 1.71-.94l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
  </svg>
);

const RedirectIcon = () => (
  <svg
    className="w-4 h-4 ml-1 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
  </svg>
);

const NavArrowIcon = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition duration-150"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {direction === "left" ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      )}
    </svg>
  </button>
);

const CarouselArrowIcon = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-fuchsia-600/70 transition duration-150 z-30"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {direction === "left" ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      )}
    </svg>
  </button>
);

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div
    className={`fixed inset-y-0 left-0 z-50 transform ${
      isOpen ? "translate-x-0 w-60" : "-translate-x-full w-60"
    } md:relative md:translate-x-0 md:w-20 md:block
        bg-[#050816] h-full flex flex-col items-center py-6 border-r border-white/5 transition-all duration-300 ease-in-out`}
  >
    <div className="mb-10 p-2">
      <img
        src="flixerlearnlogo.jpg"
        alt="FlixerLearn Logo"
        className="w-12 h-12 object-cover rounded-full border border-fuchsia-400 shadow-md shadow-fuchsia-500/40"
      />
    </div>

    <nav className="space-y-6 text-xs text-gray-400">
      <Link
        to="/"
        className="flex flex-col items-center gap-1 px-3 py-2 rounded-2xl bg-[#111827] text-white shadow-md shadow-fuchsia-500/40"
      >
        <HomeIcon className="w-5 h-5" />
        <span>Home</span>
      </Link>

      <Link
        to="/about"
        className="flex flex-col items-center gap-1 px-3 py-2 rounded-2xl border border-white/10 hover:border-fuchsia-400/60 hover:text-fuchsia-300 transition-colors"
      >
        <FcAbout className="w-5 h-5" />
        <span>About</span>
      </Link>

      <Link
        to="/helpdesk"
        className="mt-10 flex flex-col items-center gap-1 px-3 py-2 rounded-2xl border border-pink-400/60 text-pink-300 hover:bg-pink-500/10 transition-colors"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
        </svg>
        <span>Help Desk</span>
      </Link>
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
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (courses.length > 1) {
      const carouselTimer = setInterval(
        () =>
          setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % courses.length),
        3500
      );
      return () => clearInterval(carouselTimer);
    }
  }, [courses.length]);

  const navigateFeature = (direction) => {
    if (!courses.length) return;
    setCurrentFeatureIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? courses.length - 1 : prevIndex - 1;
      }
      return (prevIndex + 1) % courses.length;
    });
  };

  const featuredCourse = courses[currentFeatureIndex];

  const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const formattedDate = currentDateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const currentMonth = currentDateTime.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const daysInMonth = new Date(
    currentDateTime.getFullYear(),
    currentDateTime.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDateTime.getFullYear(),
    currentDateTime.getMonth(),
    1
  ).getDay();
  const today = currentDateTime.getDate();

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (course.description || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCardGradient = (index) => {
    const gradients = [
      "from-pink-500 to-red-500",
      "from-purple-500 to-indigo-500",
      "from-blue-500 to-cyan-500",
      "from-teal-500 to-green-500",
    ];
    return gradients[index % gradients.length];
  };

  const scrollCourses = (direction) => {
    if (!courseGridRef.current) return;
    const scrollAmount = window.innerWidth < 768 ? 280 : 320;
    const currentScroll = courseGridRef.current.scrollLeft;
    const newScroll =
      direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount;
    courseGridRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-[#020314] text-white flex">
      {/* background glows */}
      <div className="pointer-events-none fixed -top-40 -left-32 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-40 -right-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div className="flex-1 flex flex-col bg-linear-to-br from-[#050816] via-[#050816] to-[#020617]">
        {/* top navbar */}
        <header className="flex justify-between items-center px-6 py-4 border-b border-white/5">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-400 md:hidden hover:text-white"
            >
              <FaBars className="w-6 h-6" />
            </button>
            <span className="text-sm text-gray-400">FlixerLearn</span>

            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search anything"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#020617] text-gray-200 px-3 py-2 pl-9 rounded-full focus:outline-none focus:ring-2 focus:ring-fuchsia-500/70 text-sm w-64"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3 top-2.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <button className="h-8 w-8 rounded-full bg-[#020617] flex items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
            </button>
            {/* <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-linear-to-br from-fuchsia-500 to-orange-400" />
              <span>Design</span>
            </div> */}
          </div>
        </header>

        <main className="p-5 md:p-6 flex-1 overflow-y-auto space-y-6">
          {/* hero + calendar */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* hero card with carousel + image */}
            <div className="w-full md:flex-[1.8] relative bg-[#050816] rounded-3xl p-6 md:p-7 shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/5 overflow-hidden">
              {featuredCourse && featuredCourse.image && (
                <img
                  key={featuredCourse.name}
                  src={featuredCourse.image}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-700"
                />
              )}

              <div className="absolute inset-0 bg-linear-to-r from-[#020617]/90 via-[#020617]/70 to-[#020617]/60 z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3b82f6_0,transparent_55%),radial-gradient(circle_at_bottom_right,#ec4899_0,transparent_55%)] opacity-30 z-10" />

              <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30">
                <CarouselArrowIcon direction="left" onClick={() => navigateFeature("left")} />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30">
                <CarouselArrowIcon direction="right" onClick={() => navigateFeature("right")} />
              </div>

              <div
                key={currentFeatureIndex}
                className="relative z-20 flex items-center"
              >
                <div className="w-full md:w-3/4 pr-4">
                  <span className="inline-block text-xs md:text-sm font-medium px-3 py-1 bg-fuchsia-600 text-white rounded-full mb-3 shadow-md shadow-fuchsia-500/60">
                    Featured Course #{currentFeatureIndex + 1}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                    {featuredCourse ? featuredCourse.name : "Loading..."}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base max-w-md mb-4 md:mb-6">
                    {featuredCourse?.description ||
                      "Stay ahead with modern security learning tailored for you."}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {featuredCourse && (
                      <>
                        <Link
                          to={`/${featuredCourse.name.toLowerCase().replace(/\s+/g, "")}`}
                          state={featuredCourse}
                          className="bg-fuchsia-600 text-white px-5 py-2 md:px-6 md:py-2.5 text-sm rounded-full font-semibold hover:bg-fuchsia-500 transition duration-300 shadow-lg shadow-fuchsia-600/60"
                        >
                          Welcome
                        </Link>
                        <Link
                          to={`/${featuredCourse.name.toLowerCase().replace(/\s+/g, "")}`}
                          state={featuredCourse}
                          className="bg-cyan-500 text-white px-5 py-2 md:px-6 md:py-2.5 text-sm rounded-full font-semibold hover:bg-cyan-400 transition duration-300 shadow-lg shadow-cyan-500/60 flex items-center"
                        >
                          Explore Course
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* calendar */}
            <div className="w-full md:flex-[1.1] bg-[#050816] rounded-3xl p-5 shadow-[0_24px_70px_rgba(0,0,0,0.8)] border border-white/5">
              <h3 className="text-sm font-semibold text-white mb-2">16:9 Calendar</h3>

              <div className="mb-4 bg-[#020617] px-3 py-2 rounded-2xl border border-cyan-500/40">
                <div className="text-white font-semibold text-lg mb-1">
                  {formattedTime}
                </div>
                <div className="text-cyan-300 text-xs">{formattedDate}</div>
              </div>

              <div className="text-center text-sm font-bold text-white mb-3">
                {currentMonth}
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-[11px] mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                  <div key={index} className="text-gray-500 font-semibold py-1">
                    {day}
                  </div>
                ))}

                {Array.from({ length: firstDayOfMonth }, (_, index) => (
                  <div key={`filler-${index}`} className="p-2"></div>
                ))}

                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const isToday = day === today;
                  return (
                    <div
                      key={`day-${day}`}
                      className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full font-medium text-gray-300 cursor-pointer
                        ${
                          isToday
                            ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/70 scale-110 ring-2 ring-cyan-300/70"
                            : "hover:bg-white/5 hover:scale-105 transition-all duration-150"
                        }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* popular courses + notifications */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            <div className="col-span-1 md:col-span-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-100">
                  {searchTerm
                    ? `Search Results (${filteredCourses.length})`
                    : "Popular courses"}
                </h3>
                <div className="flex space-x-2">
                  <NavArrowIcon direction="left" onClick={() => scrollCourses("left")} />
                  <NavArrowIcon direction="right" onClick={() => scrollCourses("right")} />
                </div>
              </div>

              <div
                ref={courseGridRef}
                className="flex space-x-4 md:space-x-5 overflow-x-scroll pb-3 scrollbar-hide"
                style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
              >
                {(filteredCourses.length > 0 ? filteredCourses : courses).map(
                  (course, index) => (
                    <Link
                      key={index}
                      to={`/${course.name.toLowerCase().replace(/\s+/g, "")}`}
                      state={course}
                      className="shrink-0 w-60 md:w-64 relative bg-[#050816] rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.9)] transform transition duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden border border-white/5"
                    >
                      <div
                        className={`absolute inset-0 -m-px rounded-2xl bg-linear-to-r ${getCardGradient(
                          index
                        )} opacity-25`}
                      ></div>

                      <div className="relative p-4 z-10">
                        {course.image && (
                          <img
                            src={course.image}
                            alt={course.name}
                            className="w-full h-20 object-cover rounded-xl mb-3"
                          />
                        )}

                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm md:text-base font-bold text-white leading-snug">
                            {course.name}
                          </span>
                          <button className="text-[11px] px-2 py-0.5 rounded-full font-semibold text-white bg-fuchsia-600 hover:bg-fuchsia-500 transition duration-300">
                            Enroll
                          </button>
                        </div>
                        <p className="text-gray-300 text-[11px] md:text-xs mb-4">
                          {course.description}
                        </p>

                        <div className="flex justify-between items-center text-gray-400 pt-3 border-t border-white/10">
                          <HomeIcon className="w-4 h-4" />
                          <span className="text-[11px] flex items-center text-white font-medium">
                            View Details
                            <RedirectIcon />
                          </span>
                        </div>
                      </div>
                    </Link>
                  )
                )}

                {searchTerm && filteredCourses.length === 0 && (
                  <div className="text-gray-400 text-sm flex items-center justify-center min-h-[200px] w-full bg-[#050816]/60 rounded-2xl border-2 border-dashed border-gray-600 p-8">
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 mx-auto mb-4 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <p>No courses found for "{searchTerm}"</p>
                      <p className="text-xs mt-1">Try different keywords</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-span-1 md:col-span-1">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                Notifications
              </h3>
              <div className="bg-[#050816] rounded-2xl p-5 border border-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.85)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-amber-400 to-pink-500" />
                  <div>
                    <h4 className="font-semibold text-sm text-white">
                      New Event Reminder.
                    </h4>
                    <p className="text-xs text-gray-400">Mastering AI</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  A brief summary of the notification or event happening here.
                </p>
                <button className="w-full bg-cyan-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-cyan-400 transition duration-300 shadow-lg shadow-cyan-500/60">
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
