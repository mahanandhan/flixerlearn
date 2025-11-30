import React from "react";

const GameDevelopmentIq = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        🎮 Game Development Interview Questions - C# Focus
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">C# Basics & OOP</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Explain the differences between a class and a struct in C#.</li>
          <li>What are access modifiers and how do they affect encapsulation?</li>
          <li>How does inheritance work in C#? Can you override methods?</li>
          <li>What is the difference between abstract classes and interfaces?</li>
          <li>Explain the concept of delegates and events in C#.</li>
          <li>What are properties and how are getters and setters implemented?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Unity & Game Programming Concepts</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>How do you manage game objects and components in Unity using C#?</li>
          <li>Explain the Unity game loop and the purpose of Update(), FixedUpdate(), and LateUpdate().</li>
          <li>How would you implement collision detection and response in Unity?</li>
          <li>What is a Coroutine and when should you use it in Unity?</li>
          <li>How do you handle input controls in Unity using C# scripts?</li>
          <li>Explain ScriptableObjects and their use cases.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Performance & Optimization</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>What techniques do you use to optimize game performance in C#?</li>
          <li>Explain memory management and garbage collection in Unity.</li>
          <li>How would you avoid or fix memory leaks in a Unity game?</li>
          <li>What are object pools and why are they important?</li>
          <li>How do you optimize physics calculations and collisions?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Multithreading & Async in Game Development</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>What is multithreading and is it used in Unity?</li>
          <li>How does C# handle asynchronous programming with async/await?</li>
          <li>What are potential pitfalls when using multithreading in games?</li>
          <li>How can you run background tasks without freezing the main game thread?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Design Patterns & Architecture</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Which design patterns are commonly used in game development with C#?</li>
          <li>Explain the Singleton pattern and how it’s implemented in Unity.</li>
          <li>What is the Observer pattern and how can it be applied in games?</li>
          <li>Describe the Entity-Component-System (ECS) architecture.</li>
          <li>How do you structure code to keep it maintainable in a large game project?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Practical & Coding Questions</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Write a C# method to move a game object smoothly from point A to B.</li>
          <li>How would you implement a simple state machine for game AI?</li>
          <li>Write code to detect when two objects collide using bounding boxes.</li>
          <li>Explain how you would serialize and save game data.</li>
          <li>Write a C# script to handle player input for movement and jumping.</li>
        </ul>
      </section>

      {/* Unity Interview Questions Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          Unity Interview Questions
        </h2>
        <p className="mb-6 text-gray-800">
          Sure! Here are some common <strong>Unity interview questions</strong> you can use, covering a mix of basics, scripting, game design, optimization, and practical scenarios:
        </p>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Basics & General</h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
          <li>What is Unity and what platforms does it support?</li>
          <li>Explain the Unity Editor and its main components.</li>
          <li>What is a GameObject in Unity? How is it different from a Component?</li>
          <li>What are Prefabs and why are they useful?</li>
          <li>How does Unity’s Scene system work?</li>
          <li>Explain the difference between Update(), FixedUpdate(), and LateUpdate().</li>
        </ul>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Scripting & C# in Unity</h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
          <li>How do you attach scripts to GameObjects?</li>
          <li>What is a Coroutine and when should you use it?</li>
          <li>How does Unity handle events and delegates in C# scripts?</li>
          <li>How do you manage input from the player in Unity?</li>
          <li>Explain how you would implement animations in Unity.</li>
        </ul>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Physics & Collisions</h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
          <li>How do you implement collision detection in Unity?</li>
          <li>What is the difference between a Collider and a Rigidbody?</li>
          <li>How do triggers differ from collisions?</li>
          <li>Explain how physics materials affect object interactions.</li>
        </ul>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Performance & Optimization</h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
          <li>How do you optimize a Unity game for mobile devices?</li>
          <li>What are some common causes of memory leaks in Unity?</li>
          <li>Explain Object Pooling and how it improves performance.</li>
          <li>How do you reduce draw calls and improve rendering performance?</li>
        </ul>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">UI & UX</h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
          <li>How do you create and manage UI elements in Unity?</li>
          <li>What is the Canvas system in Unity?</li>
          <li>How do you handle UI events like button clicks?</li>
        </ul>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Advanced Concepts</h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
          <li>Explain ScriptableObjects and when to use them.</li>
          <li>How would you implement multiplayer in Unity?</li>
          <li>What are AssetBundles and how do they help with content management?</li>
          <li>How does Unity’s garbage collection work and how can you minimize its impact?</li>
        </ul>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Debugging & Tools</h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
          <li>How do you debug scripts in Unity?</li>
          <li>What are common issues you have faced and how did you solve them?</li>
        </ul>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Practical / Coding</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Write a Unity C# script to make a character jump.</li>
          <li>How would you implement a simple state machine for enemy AI?</li>
          <li>Write a script to smoothly move an object from one position to another.</li>
          <li>How would you save and load game data in Unity?</li>
        </ul>
      </section>

      {/* Unreal Engine Interview Questions Section */}
      <section>
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          Unreal Engine Interview Questions
        </h2>
        <p className="mb-6 text-gray-800">
          Here are some key <strong>Unreal Engine interview questions</strong> covering engine basics, C++ scripting, Blueprint system, rendering, optimization, and gameplay programming:
        </p>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Basics & General</h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
          <li>What is Unreal Engine and which platforms does it support?</li>
          <li>Explain the difference between Unreal Engine and Unity.</li>
          <li>What are Actors and Pawns in Unreal Engine?</li>
          <li>What is the role of the GameMode class?</li>
          <li>Describe the Unreal Engine Editor interface.</li>
          <li>What are Blueprints and how do they complement C++ coding?</li>
        </ul>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">C++ & Gameplay Programming</h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
          <li>How do you create and use custom classes in Unreal Engine using C++?</li>
          <li>Explain the UObject system and its importance.</li>
          <li>What are UPROPERTY and UFUNCTION macros and why are they used?</li>
          <li>How do you handle memory management and garbage collection in Unreal?</li>
          <li>Describe the event system and how delegates are used in Unreal C++.</li>
          <li>How would you implement character movement and input handling?</li>
        </ul>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Blueprints & Visual Scripting</h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
          <li>What are Blueprints and what types are available (e.g., Level Blueprint, Class Blueprint)?</li>
          <li>How do Blueprints communicate with C++ classes?</li>
          <li>Explain how to create custom events and functions in Blueprints.</li>
          <li>What are Blueprint Interfaces and when would you use them?</li>
          <li>How do you optimize Blueprint performance?</li>
        </ul>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Rendering & Graphics</h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
          <li>Explain Unreal Engine's rendering pipeline.</li>
          <li>What are materials and how do you create shaders in Unreal?</li>
          <li>What is the difference between static and dynamic lighting?</li>
          <li>How do you use Level of Detail (LOD) to optimize performance?</li>
        </ul>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Performance & Optimization</h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
          <li>How do you profile and debug performance issues in Unreal Engine?</li>
          <li>What are common causes of memory leaks and how can you prevent them?</li>
          <li>Explain object pooling and its use in Unreal Engine.</li>
          <li>How do you optimize physics and collision calculations?</li>
        </ul>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Multiplayer & Networking</h3>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
          <li>Explain the basics of Unreal’s networking model.</li>
          <li>What are replicated variables and functions?</li>
          <li>How do you handle client-server communication in multiplayer games?</li>
        </ul>

        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Practical / Coding</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Write a C++ function to move an Actor smoothly over time.</li>
          <li>How would you implement a simple AI state machine in Unreal Engine?</li>
          <li>Show how to set up input bindings for player controls in C++ and Blueprints.</li>
          <li>Explain how you would save and load game state in Unreal Engine.</li>
        </ul>
      </section>
    </div>
  );
};

export default GameDevelopmentIq;
