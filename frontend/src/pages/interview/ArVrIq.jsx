import React from 'react';

const ArVrIq = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        AR/VR Interview Questions
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Fundamentals & Concepts</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>What is the difference between Augmented Reality (AR) and Virtual Reality (VR)?</li>
          <li>Explain the core components of an AR/VR system.</li>
          <li>What are the common types of AR (marker-based, markerless, projection-based)?</li>
          <li>How do VR headsets track head and body movements?</li>
          <li>What is spatial mapping and why is it important in AR/VR?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Hardware & Devices</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Name some popular AR and VR hardware devices and their main features.</li>
          <li>How do sensors like accelerometers and gyroscopes work in AR/VR devices?</li>
          <li>What are the challenges related to latency and frame rate in VR experiences?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Software & Development</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>What game engines or SDKs are commonly used for AR/VR development?</li>
          <li>How do you handle rendering performance optimization in VR applications?</li>
          <li>Explain how you would implement user interaction (e.g., hand tracking, gaze input) in AR/VR.</li>
          <li>What is the role of SLAM (Simultaneous Localization and Mapping) in AR?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Design & UX Challenges</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>How do you design comfortable and intuitive user experiences in VR to avoid motion sickness?</li>
          <li>What are best practices for UI design in AR environments?</li>
          <li>How do you handle depth perception and spatial audio in VR?</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Practical / Coding</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>How would you implement teleportation or smooth locomotion in a VR environment?</li>
          <li>Describe how you would anchor virtual objects in the real world in an AR app.</li>
          <li>What techniques can be used to reduce motion sickness in VR?</li>
        </ul>
      </section>
    </div>
  );
};

export default ArVrIq;
