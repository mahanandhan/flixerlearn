import React from 'react';

const MobileAppDevelopmentIq = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-100 to-blue-100 text-gray-900 p-6">
      <div className="max-w-5xl mx-auto space-y-10">

        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 text-teal-900">📱 Mobile App Development Interview Questions</h1>
          <p className="text-gray-700">Key questions to prepare for mobile app dev interviews (iOS, Android, cross-platform)</p>
        </div>

        {/* Basics */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">✅ Basics & Fundamentals</h2>
          <QuestionBlock title="General Mobile Development" questions={[
            "What are the main differences between native, hybrid, and cross-platform apps?",
            "Explain the mobile app development lifecycle.",
            "What are the key components of an Android app? And iOS app?",
            "What is the role of an Activity in Android?",
            "Explain the concept of ViewControllers in iOS.",
            "What is an intent in Android and how is it used?"
          ]} />
        </section>

        {/* Android Specific */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">🤖 Android Development</h2>
          <QuestionBlock title="Android Concepts" questions={[
            "What is the Android Manifest file?",
            "Explain the Android Activity lifecycle.",
            "What are services in Android?",
            "What is the difference between Serializable and Parcelable?",
            "How do you manage app permissions in Android?",
            "What is ViewModel and LiveData in Android Architecture Components?"
          ]} />
        </section>

        {/* iOS Specific */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">🍏 iOS Development</h2>
          <QuestionBlock title="iOS Concepts" questions={[
            "What is the difference between frame and bounds in UIView?",
            "Explain the iOS app lifecycle.",
            "What is delegation in iOS and how is it used?",
            "What is the difference between strong, weak, and unowned references in Swift?",
            "What are protocols and extensions in Swift?",
            "Explain Automatic Reference Counting (ARC)."
          ]} />
        </section>

        {/* Cross-Platform & Tools */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">⚙️ Cross-Platform & Tools</h2>
          <QuestionBlock title="Frameworks & Tools" questions={[
            "What are the advantages of React Native over native apps?",
            "Explain the Flutter architecture.",
            "How does Expo simplify React Native development?",
            "What are key differences between Xamarin and Flutter?",
            "How do you handle state management in React Native apps?",
            "What debugging tools do you use for mobile apps?"
          ]} />
        </section>

        {/* Performance & Best Practices */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">🚀 Performance & Best Practices</h2>
          <QuestionBlock title="Optimization & Security" questions={[
            "How do you optimize app performance and reduce battery usage?",
            "What are some techniques to handle memory leaks in mobile apps?",
            "How do you ensure app security and protect user data?",
            "What is lazy loading and how can it be implemented in mobile apps?",
            "How do you test and debug mobile applications?",
            "Explain app versioning and release management."
          ]} />
        </section>

        {/* Practical / Coding */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">💻 Practical & Coding Questions</h2>
          <QuestionBlock title="Hands-on Tasks" questions={[
            "Write a function to check network connectivity status in Android/iOS.",
            "How would you implement infinite scrolling in a mobile app?",
            "Explain how to handle offline data syncing.",
            "How do you implement push notifications in Android/iOS?",
            "Describe how to manage different screen sizes and orientations.",
            "Write a method to parse JSON data and display it in a list view."
          ]} />
        </section>

      </div>
    </div>
  );
};

const QuestionBlock = ({ title, questions }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-3 text-gray-900">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      {questions.map((q, i) => (
        <li key={i}>{q}</li>
      ))}
    </ul>
  </div>
);

export default MobileAppDevelopmentIq;
