// import React from 'react';

// const SoftwareEngineer = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
//       {/* Main Title */}
//       <div className="mb-12 text-center">
//         <h1 className="text-5xl font-bold text-green-500">Software Engineering Courses</h1>
//       </div>

//       {/* Courses List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
//         {/* Course 1: Web Development */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-blue-400 mb-4">Web Development</h2>
//           <p className="text-gray-300">Master the skills to build websites and applications using HTML, CSS, JavaScript, and frameworks like React and Node.js.</p>
//         </div>

//         {/* Course 2: Cyber Security */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-red-400 mb-4">Cyber Security</h2>
//           <p className="text-gray-300">Learn how to protect applications and data from security threats through encryption, penetration testing, and ethical hacking.</p>
//         </div>

//         {/* Course 3: Blockchain */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-purple-400 mb-4">Blockchain</h2>
//           <p className="text-gray-300">Dive into blockchain technology, smart contracts, and decentralized applications to build secure, transparent systems.</p>
//         </div>

//         {/* Course 4: AI/ML */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-yellow-400 mb-4">AI/ML</h2>
//           <p className="text-gray-300">Explore artificial intelligence and machine learning, learning how to build and train models to make intelligent systems.</p>
//         </div>

//         {/* Course 5: Data Science */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-teal-400 mb-4">Data Science</h2>
//           <p className="text-gray-300">Gain skills in data analysis, statistics, and machine learning to work with large datasets and derive valuable insights.</p>
//         </div>

//         {/* Course 6: Cloud Computing */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-indigo-400 mb-4">Cloud Computing</h2>
//           <p className="text-gray-300">Learn how to use cloud platforms like AWS and Azure for scalable computing resources, storage, and networking.</p>
//         </div>

//         {/* Course 7: DevOps */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-pink-400 mb-4">DevOps</h2>
//           <p className="text-gray-300">Understand the DevOps lifecycle and learn to automate infrastructure and deployment to increase collaboration and efficiency.</p>
//         </div>

//         {/* Course 8: Mobile App Development */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-orange-400 mb-4">Mobile App Development</h2>
//           <p className="text-gray-300">Learn how to build mobile applications for iOS and Android using frameworks like React Native or Flutter.</p>
//         </div>

//         {/* Course 9: Game Development */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-blue-500 mb-4">Game Development</h2>
//           <p className="text-gray-300">Learn to create interactive and immersive games using Unity, C#, and other game development tools.</p>
//         </div>

//         {/* Course 10: UI/UX Design */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-lime-400 mb-4">UI/UX Design</h2>
//           <p className="text-gray-300">Learn to design user-friendly interfaces and create amazing user experiences using tools like Figma and Adobe XD.</p>
//         </div>

//         {/* Course 11: Embedded Systems */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-amber-400 mb-4">Embedded Systems</h2>
//           <p className="text-gray-300">Understand how to build embedded systems and work with microcontrollers, sensors, and real-time operating systems (RTOS).</p>
//         </div>

//         {/* Course 12: IoT */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-indigo-500 mb-4">IoT</h2>
//           <p className="text-gray-300">Learn how to develop Internet of Things (IoT) applications that connect devices to the cloud for smarter solutions.</p>
//         </div>

//         {/* Course 13: Data Analysis */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-sky-400 mb-4">Data Analysis</h2>
//           <p className="text-gray-300">Learn how to collect, clean, and analyze data using tools like Excel, Python, and SQL to inform business decisions.</p>
//         </div>

//         {/* Course 14: AR/VR */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-cyan-400 mb-4">AR/VR</h2>
//           <p className="text-gray-300">Explore Augmented Reality (AR) and Virtual Reality (VR) development to build immersive experiences.</p>
//         </div>

//         {/* Course 15: Software Testing */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-teal-500 mb-4">Software Testing</h2>
//           <p className="text-gray-300">Learn the methods and best practices to test software and ensure that applications are reliable and error-free.</p>
//         </div>

//         {/* Course 16: Ethical Hacking */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Ethical Hacking</h2>
//           <p className="text-gray-300">Understand how to test systems and networks for vulnerabilities to prevent security breaches and data theft.</p>
//         </div>

//         {/* Course 17: Full Stack Development */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-pink-500 mb-4">Full Stack Development</h2>
//           <p className="text-gray-300">Learn how to build both front-end and back-end applications, using frameworks like React, Node.js, and MongoDB.</p>
//         </div>

//         {/* Course 18: Python */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-purple-500 mb-4">Python</h2>
//           <p className="text-gray-300">Master Python programming, from basic syntax to advanced topics like web development, machine learning, and more.</p>
//         </div>

//         {/* Course 19: Java */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-blue-600 mb-4">Java</h2>
//           <p className="text-gray-300">Learn Java programming to build powerful, efficient, and scalable applications for various platforms.</p>
//         </div>

//         {/* Course 20: Software Engineering */}
//         <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
//           <h2 className="text-3xl font-semibold text-orange-500 mb-4">Software Engineering</h2>
//           <p className="text-gray-300">Understand the principles of software engineering, including design patterns, algorithms, and software architecture.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SoftwareEngineer;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import software from "../assets/softwarelearnpeakimg.jpeg";

const courses = [
  "Web Development",
  "Cyber Security",
  "Blockchain",
  "AI/ML",
  "Data Science",
  "Cloud Computing",
  "DevOps",
  "Mobile App Development",
  "Game Development",
  "UI/UX Design",
  "Embedded Systems",
  "IoT",
  "Data Analysis",
  "AR/VR",
  "Software Testing",
  "Ethical Hacking",
  "Full Stack Development",
  "Python",
  "Java",
  "Software Engineering"
];

const SoftwareEngineer = () => {
  const navigate = useNavigate();
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setToday(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const monthName = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Software Engineering | LearnPeak</title>
        <meta
          name="description"
          content="Explore Software Engineering courses at LearnPeak. Learn web development, AI, Cybersecurity, data science, and more with hands-on projects and interview preparation."
        />
        <meta
          name="keywords"
          content="Software Engineering, LearnPeak, Web Development, Cyber Security, AI, Data Science, Programming, Interview Prep"
        />
        <link rel="canonical" href="https://elearning-platform-zksp.vercel.app/software-engineering" />
      </Helmet>

      <div className="min-h-screen w-full bg-[#0b0320] text-white px-10 py-10">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-300">Learn Peak</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search everything..."
              className="bg-transparent border border-gray-700 rounded-lg py-2 px-4 text-sm w-64 focus:border-purple-500 outline-none"
            />
            <div className="w-8 h-8 bg-gray-700 rounded-full" />
            <div className="w-8 h-8 bg-gray-700 rounded-full" />
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-14">
          {/* SOFTWARE ENGINEER IMAGE BOX */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-white/10
              h-[450px] sm:h-[520px] md:h-[600px] bg-black">
            <img
              src={software}
              alt="Software Engineering"
              className="absolute w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-center bg-black/40">
              <span className="text-sm font-semibold text-blue-300 border border-blue-400 py-1 px-3 rounded-full mb-4 inline-flex w-fit">
                Software Engineering Program
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                Software Engineering
              </h1>
              <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-xl">
                Explore a wide range of software engineering courses and hands-on projects.
              </p>
              <div className="flex space-x-4">
                {/* <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-lg shadow-lg">
                  Preview
                </button>
                <button className="bg-white/20 border border-white/30 px-6 py-3 rounded-lg">
                  Review
                </button> */}
              </div>
            </div>
          </div>

          {/* CALENDAR BOX */}
          <div className="w-full bg-[#11072d] rounded-2xl p-6 border border-white/10 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-sm text-gray-400">Calendar</div>
                <div className="text-lg font-semibold">{monthName} {year}</div>
              </div>
              <div className="text-xs text-gray-400">{today.toLocaleDateString()}</div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-400 mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <div key={d} className="py-1">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-sm text-center">
              {cells.map((val, idx) => {
                const isToday = val === today.getDate();
                return (
                  <div
                    key={idx}
                    className={`py-2 rounded-md ${
                      val ? (isToday ? "bg-indigo-600 text-white shadow-md" : "text-gray-300") : "bg-transparent"
                    }`}
                  >
                    {val || ""}
                  </div>
                );
              })}
            </div>

            <button className="mt-4 w-full bg-indigo-600 py-2 rounded-lg text-sm shadow-md">
              View Schedule
            </button>
          </div>
        </div>

        {/* COURSES LIST */}
        <h3 className="text-xl text-gray-300 mb-6">All Software Engineering Courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-400/30 to-purple-500/30 backdrop-blur-md border border-white/20 shadow-xl cursor-pointer hover:scale-105 transition"
              
            >
              <h2 className="text-xl font-bold mb-2 text-white drop-shadow">{course}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SoftwareEngineer;
