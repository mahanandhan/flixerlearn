import React from 'react';

const JavaIq = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        Java & DSA Interview Questions
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Java Basics</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>What are the main features of Java?</li>
          <li>Explain the Java memory model and how garbage collection works.</li>
          <li>What is the difference between JDK, JRE, and JVM?</li>
          <li>How do you manage exceptions in Java?</li>
          <li>What are Java annotations and how are they used?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Object-Oriented Programming</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>What are the four pillars of OOP and how does Java implement them?</li>
          <li>Explain method overloading vs. method overriding.</li>
          <li>What is the difference between abstract class and interface?</li>
          <li>How does Java support polymorphism?</li>
          <li>What is the role of constructors in Java?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Core Data Structures</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>What are the main data structures in the Java Collections Framework?</li>
          <li>Explain the difference between ArrayList and LinkedList.</li>
          <li>How does HashMap work internally?</li>
          <li>What are sets and how are they implemented?</li>
          <li>How would you implement a stack or queue in Java?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Algorithms & Problem Solving</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Write a Java method to reverse a linked list.</li>
          <li>How would you find the middle element of a linked list?</li>
          <li>Explain binary search and implement it in Java.</li>
          <li>Describe sorting algorithms you’ve implemented (e.g., quicksort, mergesort).</li>
          <li>How do you detect cycles in a graph or linked list?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Advanced Java Concepts</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>What is the Java Memory Model and how does the Garbage Collector work?</li>
          <li>Explain multithreading in Java and synchronization mechanisms.</li>
          <li>What are functional interfaces and how are lambdas used in Java 8+?</li>
          <li>What are streams and how do you use them?</li>
          <li>Explain the use of the volatile keyword and atomic variables.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Java Libraries & Frameworks</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Which Java libraries or frameworks have you worked with?</li>
          <li>Explain the role of the Collections Framework.</li>
          <li>How do you handle dependency management in Java projects?</li>
          <li>What is the use of JUnit and how do you write unit tests?</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Practical / Coding Questions</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Write a Java program to check if a string is a palindrome.</li>
          <li>Implement a method to merge two sorted arrays.</li>
          <li>Write code to find the first non-repeated character in a string.</li>
          <li>How would you implement a binary tree traversal (in-order, pre-order, post-order)?</li>
          <li>Write a recursive function to compute the Fibonacci sequence.</li>
        </ul>
        <br />
        <br />
        <h2 className='text-xl font-semibold text-red-600'>!! For good performance pratice problems on the leetcode</h2>
      </section>
    </div>
  );
};

export default JavaIq;