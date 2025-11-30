import React from 'react';

const PythonIq = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        Python & DSA Interview Questions
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Python Basics</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>What are Python’s key features and advantages?</li>
          <li>Explain differences between Python 2 and Python 3.</li>
          <li>How does Python handle memory management?</li>
          <li>What are Python decorators and generators?</li>
          <li>Explain list comprehensions and how they improve code readability.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Data Structures in Python</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>What built-in data structures does Python provide? (lists, tuples, sets, dictionaries)</li>
          <li>Explain the difference between lists and tuples.</li>
          <li>How do Python dictionaries work internally?</li>
          <li>How would you implement a stack or queue using Python data structures?</li>
          <li>What are the time complexities of common operations on lists, sets, and dictionaries?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Algorithms & Problem Solving</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>How would you reverse a linked list in Python?</li>
          <li>Explain how you would find the kth largest element in an array.</li>
          <li>Describe a Python solution to detect duplicates in a list efficiently.</li>
          <li>How do you implement common sorting algorithms like quicksort or mergesort?</li>
          <li>What approaches do you use to optimize recursive functions in Python?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Object-Oriented Programming</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>What are the four pillars of OOP and how are they implemented in Python?</li>
          <li>What are magic (dunder) methods? Give examples like <code>__init__</code>, <code>__str__</code>.</li>
          <li>Explain inheritance and polymorphism in Python.</li>
          <li>How does Python support multiple inheritance?</li>
          <li>How do you define properties and encapsulation in Python classes?</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Advanced Python Concepts</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>What is the Global Interpreter Lock (GIL) and how does it affect multithreading?</li>
          <li>Explain iterators, generators, and yield statements.</li>
          <li>How does Python’s exception handling work?</li>
          <li>What are context managers and how do you create them?</li>
          <li>Explain the difference between multiprocessing and threading in Python.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Libraries & Tools</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Which Python libraries have you used for data structures and algorithms?</li>
          <li>How do virtual environments help in Python development?</li>
          <li>What is pip and how do you manage dependencies?</li>
          <li>Have you worked with any Python testing frameworks?</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Practical / Coding Questions</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Write a Python function to check if a string is a palindrome.</li>
          <li>Implement a function to merge two sorted lists.</li>
          <li>Write code to count the frequency of words in a given text.</li>
          <li>How would you implement a binary search in a sorted list?</li>
          <li>Design a class in Python representing a linked list with insert and delete methods.</li>
          <li>Write a recursive function to find the factorial of a number.</li>
        </ul>
        <br />
        <br />
        <h2 className='text-xl font-semibold text-red-600'>!!  For good performance pratice problems on the leetcode.</h2>
      </section>
    </div>
  );
};

export default PythonIq;
