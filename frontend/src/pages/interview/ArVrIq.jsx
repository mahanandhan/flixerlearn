import React from "react";

const ArVrIq = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-8 font-sans">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center tracking-wide text-white/90 mb-4">
          AR / VR Interview Questions
        </h1>
        <p className="text-center text-sm md:text-base text-white/60 mb-6">
          Fundamentals, hardware, development, UX and practical AR/VR questions
        </p>

        {/* Fundamentals & Concepts */}
        <GlowingSection accent="from-cyan-400 via-emerald-400 to-sky-400">
          <h2 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4">
            Fundamentals & Concepts
          </h2>
          <QuestionList
            questions={[
              "What is the difference between Augmented Reality (AR) and Virtual Reality (VR)?",
              "Explain the core components of an AR/VR system.",
              "What are the common types of AR (marker-based, markerless, projection-based)?",
              "How do VR headsets track head and body movements?",
              "What is spatial mapping and why is it important in AR/VR?",
            ]}
          />
        </GlowingSection>

        {/* Hardware & Devices */}
        <GlowingSection accent="from-indigo-400 via-blue-500 to-violet-500">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-300 mb-4">
            Hardware & Devices
          </h2>
          <QuestionList
            questions={[
              "Name some popular AR and VR hardware devices and their main features.",
              "How do sensors like accelerometers and gyroscopes work in AR/VR devices?",
              "What are the challenges related to latency and frame rate in VR experiences?",
            ]}
          />
        </GlowingSection>

        {/* Software & Development */}
        <GlowingSection accent="from-fuchsia-500 via-purple-500 to-blue-500">
          <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-300 mb-4">
            Software & Development
          </h2>
          <QuestionList
            questions={[
              "What game engines or SDKs are commonly used for AR/VR development?",
              "How do you handle rendering performance optimization in VR applications?",
              "Explain how you would implement user interaction (e.g., hand tracking, gaze input) in AR/VR.",
              "What is the role of SLAM (Simultaneous Localization and Mapping) in AR?",
            ]}
          />
        </GlowingSection>

        {/* Design & UX Challenges */}
        <GlowingSection accent="from-amber-400 via-orange-400 to-pink-500">
          <h2 className="text-xl md:text-2xl font-semibold text-amber-300 mb-4">
            Design & UX Challenges
          </h2>
          <QuestionList
            questions={[
              "How do you design comfortable and intuitive user experiences in VR to avoid motion sickness?",
              "What are best practices for UI design in AR environments?",
              "How do you handle depth perception and spatial audio in VR?",
            ]}
          />
        </GlowingSection>

        {/* Practical / Coding */}
        <GlowingSection accent="from-lime-400 via-emerald-400 to-teal-400">
          <h2 className="text-xl md:text-2xl font-semibold text-green-300 mb-4">
            Practical / Coding
          </h2>
          <QuestionList
            questions={[
              "How would you implement teleportation or smooth locomotion in a VR environment?",
              "Describe how you would anchor virtual objects in the real world in an AR app.",
              "What techniques can be used to reduce motion sickness in VR?",
            ]}
          />
        </GlowingSection>
      </div>
    </div>
  );
};

const GlowingSection = ({ accent, children }) => (
  <div className="relative">
    {/* outer neon glow */}
    <div
      className={`absolute inset-0 rounded-3xl bg-linear-to-r ${accent} opacity-40 blur-2xl`}
    />
    {/* inner dark card */}
    <section className="relative rounded-3xl border border-white/10 bg-linear-to-r from-[#020617] via-[#020617] to-[#05081f] p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.9)]">
      {children}
    </section>
  </div>
);

const QuestionList = ({ questions }) => (
  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-white/70">
    {questions.map((q, i) => (
      <li key={i}>{q}</li>
    ))}
  </ul>
);

export default ArVrIq;
