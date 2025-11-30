import React from 'react';

const WebdevIq = () => {
  return (
    <div className="p-6 space-y-6">
      {/* HTML Interview Questions */}
      <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">1. Basic HTML Questions</h2>
        <ul className="space-y-2">
          <li>What is HTML, and what does it stand for?</li>
          <li>What is the difference between HTML and HTML5?</li>
          <li>What is the purpose of the <code>&lt;head&gt;</code> element in HTML?</li>
          <li>What are semantic HTML tags, and why are they important?</li>
          <li>What is the difference between <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> tags?</li>
          <li>What are block-level and inline elements in HTML? Give examples.</li>
          <li>What is the <code>&lt;meta&gt;</code> tag used for?</li>
          <li>Explain the purpose of the <code>&lt;link&gt;</code> tag in HTML.</li>
          <li>What is the <code>&lt;script&gt;</code> tag, and where should it be placed in an HTML document?</li>
          <li>What is the difference between <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, and <code>&lt;li&gt;</code> tags?</li>
          <li>What is the purpose of the <code>&lt;a&gt;</code> tag in HTML?</li>
          <li>What is the <code>&lt;img&gt;</code> tag used for? How do you optimize images for performance?</li>
          <li>How do you create a form in HTML? Explain the various form elements.</li>
          <li>What is the difference between the <code>&lt;input&gt;</code> types: <code>text</code>, <code>password</code>, and <code>email</code>?</li>
          <li>What is the <code>&lt;iframe&gt;</code> tag, and when would you use it?</li>
        </ul>
      </div>

      {/* Basic React.js Questions */}
      <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">2. Basic React.js Questions</h2>
        <ul className="space-y-2">
          <li>What is React.js, and how does it differ from other JavaScript frameworks?</li>
          <li>What are the key features of React.js?</li>
          <li>Explain the concept of Virtual DOM and how it works in React.</li>
          <li>What is JSX, and why is it used in React?</li>
          <li>How does React differ from ReactDOM?</li>
          <li>What are components in React? Differentiate between functional and class components.</li>
          <li>What is the significance of the <code>render()</code> method in React?</li>
          <li>What are props in React, and how are they used?</li>
          <li>What is state in React, and how is it different from props?</li>
          <li>What is the purpose of <code>key</code> prop in React lists?</li>
          <li>What is the difference between controlled and uncontrolled components?</li>
          <li>What are React Hooks, and why were they introduced?</li>
          <li>How does React handle events differently from vanilla JavaScript?</li>
          <li>What is the significance of <code>React.Fragment</code>?</li>
          <li>Explain the unidirectional data flow in React.</li>
        </ul>
      </div>

      {/* Intermediate React.js Questions */}
      <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">3. Intermediate React.js Questions</h2>
        <ul className="space-y-2">
          <li>What is the purpose of <code>useState</code> hook? Provide an example.</li>
          <li>Explain the <code>useEffect</code> hook and its use cases.</li>
          <li>What is the difference between <code>useEffect</code>, <code>useLayoutEffect</code>, and <code>useInsertionEffect</code>?</li>
          <li>How does the <code>useContext</code> hook work? Provide an example.</li>
          <li>What is the <code>useReducer</code> hook, and when would you use it over <code>useState</code>?</li>
          <li>How do you optimize performance in a React application?</li>
          <li>What are Pure Components in React, and how do they improve performance?</li>
          <li>Explain the concept of memoization in React. How do <code>React.memo</code>, <code>useMemo</code>, and <code>useCallback</code> work?</li>
          <li>What is the purpose of the <code>shouldComponentUpdate</code> lifecycle method?</li>
          <li>How do you handle forms in React? Explain with an example.</li>
          <li>What is prop drilling, and how can it be avoided?</li>
          <li>Explain how React Router works and its key components (e.g., <code>BrowserRouter</code>, <code>Route</code>, <code>Link</code>).</li>
          <li>What are Higher-Order Components (HOCs)? Provide an example.</li>
          <li>What are Render Props, and how do they differ from HOCs?</li>
          <li>How do you handle errors in React components using Error Boundaries?</li>
        </ul>
      </div>

      {/* Advanced React.js Questions */}
      <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">4. Advanced React.js Questions</h2>
        <ul className="space-y-2">
          <li>How does React's reconciliation process work?</li>
          <li>What is the significance of <code>React Fiber</code>?</li>
          <li>Explain the concept of code-splitting in React. How can you implement it?</li>
          <li>What is server-side rendering (SSR) in React, and how does it differ from client-side rendering (CSR)?</li>
          <li>How do you implement lazy loading in React? Provide an example using <code>React.lazy</code> and <code>Suspense</code>.</li>
          <li>What are React Portals, and when would you use them?</li>
          <li>How does the Context API work under the hood?</li>
          <li>What is the significance of the <code>useRef</code> hook? Provide use cases beyond DOM manipulation.</li>
          <li>How do you handle state management in large-scale React applications?</li>
          <li>What are the differences between Redux, MobX, and Zustand for state management?</li>
          <li>Explain how Redux works and its core principles (e.g., store, actions, reducers).</li>
          <li>What is Redux Toolkit, and how does it simplify Redux development?</li>
          <li>How do you test React components? Explain tools like Jest and React Testing Library.</li>
          <li>What is the Concurrent Rendering feature in React 18?</li>
          <li>How do you handle WebSocket connections in a React application?</li>
        </ul>
      </div>

      {/* React Performance and Optimization */}
      <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">5. React Performance and Optimization</h2>
        <ul className="space-y-2">
          <li>What are some common causes of performance issues in React applications?</li>
          <li>How can you prevent unnecessary re-renders in React?</li>
          <li>What is the purpose of <code>React.memo</code>? When should you avoid using it?</li>
          <li>How does <code>useMemo</code> differ from <code>useCallback</code>? Provide examples.</li>
          <li>What is the significance of <code>key</code> prop in optimizing lists?</li>
          <li>How do you use the React Profiler to identify performance bottlenecks?</li>
          <li>What are some strategies for optimizing large lists in React (e.g., virtualization)?</li>
          <li>How does code-splitting improve React application performance?</li>
          <li>What is tree shaking, and how does it apply to React applications?</li>
          <li>How can you optimize images in a React application?</li>
        </ul>
      </div>

      {/* React with TypeScript */}
      <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">6. React with TypeScript</h2>
        <ul className="space-y-2">
          <li>How do you set up TypeScript in a React project?</li>
          <li>What are the benefits of using TypeScript with React?</li>
          <li>How do you define types for props in a React component?</li>
          <li>How do you type a functional component with TypeScript?</li>
          <li>What is the difference between <code>interface</code> and <code>type</code> in TypeScript for React components?</li>
          <li>How do you handle event types in TypeScript with React?</li>
          <li>How do you type the <code>useState</code> and <code>useReducer</code> hooks in TypeScript?</li>
          <li>What are some common challenges when using TypeScript with React?</li>
        </ul>
      </div>

      {/* CSS Interview Questions */}
      <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
  <h2 className="text-2xl font-bold mb-4">CSS Interview Questions</h2>
  <p>
    Below is a comprehensive list of <strong>CSS interview questions</strong> covering beginner to advanced levels.
    These questions are commonly asked to evaluate a candidate’s understanding of CSS, its features, best practices,
    and application in modern web development. The questions are categorized for clarity and include topics relevant to
    styling, layouts, responsiveness, and performance.
  </p>

  <hr className="my-4" />

  <h3 className="text-xl font-semibold mb-4">1. Basic CSS Questions</h3>
  <ul className="list-disc pl-6">
    <li>What is CSS, and what does it stand for?</li>
    <li>What are the different ways to include CSS in an HTML document?</li>
    <li>Explain the difference between inline, internal, and external CSS.</li>
    <li>What is the CSS box model, and what are its components?</li>
    <li>What is the difference between `margin` and `padding`?</li>
    <li>What are CSS selectors? List some common types with examples.</li>
    <li>What is the difference between `class` and `ID` selectors?</li>
    <li>Explain the concept of specificity in CSS.</li>
    <li>What is the `!important` rule, and when should it be used?</li>
    <li>What are pseudo-classes and pseudo-elements? Provide examples.</li>
    <li>What is the difference between `relative`, `absolute`, `fixed`, and `sticky` positioning?</li>
    <li>What is the `z-index` property, and how does it work?</li>
    <li>How do you center an element horizontally and vertically in CSS?</li>
    <li>What is the difference between `display: none` and `visibility: hidden`?</li>
    <li>What are CSS units (e.g., `px`, `rem`, `em`, `vw`, `vh`), and when should you use them?</li>
  </ul>

  <hr className="my-4" />

  <h3 className="text-xl font-semibold mb-4">2. Intermediate CSS Questions</h3>
  <ul className="list-disc pl-6">
    <li>What is the CSS Flexbox model, and how does it work? Provide an example.</li>
    <li>Explain the CSS Grid layout and its key properties.</li>
    <li>What is the difference between Flexbox and Grid? When would you use each?</li>
    <li>How do you create a responsive layout using CSS?</li>
    <li>What are media queries, and how are they used for responsive design?</li>
    <li>Explain the `box-sizing` property and its values.</li>
    <li>What is the purpose of the `float` property, and how does it affect layout?</li>
    <li>How do you clear floats in CSS?</li>
    <li>What are CSS transitions, and how do you implement them?</li>
    <li>What are CSS animations, and how do they differ from transitions?</li>
    <li>How do you use the `@keyframes` rule to create animations?</li>
    <li>What is the `transform` property, and what are its common use cases?</li>
    <li>How do you style a form using CSS to make it user-friendly?</li>
    <li>What is the `calc()` function in CSS, and how is it used?</li>
    <li>How do you handle browser-specific CSS prefixes (e.g., `-webkit-`, `-moz-`)?</li>
  </ul>

  <hr className="my-4" />

  <h3 className="text-xl font-semibold mb-4">3. Advanced CSS Questions</h3>
  <ul className="list-disc pl-6">
    <li>What are CSS custom properties (variables), and how do you use them?</li>
    <li>Explain the `::before` and `::after` pseudo-elements with practical use cases.</li>
    <li>What is the Shadow DOM, and how does it affect CSS styling?</li>
    <li>How do you implement a CSS-only tooltip?</li>
    <li>What is the `will-change` property, and when should you use it?</li>
    <li>Explain the concept of CSS specificity and how to resolve conflicts.</li>
    <li>What is the `currentColor` keyword in CSS?</li>
    <li>How do you create a sticky footer using CSS?</li>
    <li>What are CSS modules, and how do they help in large-scale projects?</li>
    <li>How do you optimize CSS for performance (e.g., reducing reflows, minimizing file size)?</li>
    <li>What is the `clip-path` property, and how is it used?</li>
    <li>How do you implement a parallax scrolling effect using CSS?</li>
    <li>What is the `aspect-ratio` property in CSS, and how does it work?</li>
    <li>Explain the `object-fit` and `object-position` properties for images and videos.</li>
    <li>How do you create a CSS grid with dynamic columns?</li>
  </ul>

  <hr className="my-4" />

  <h3 className="text-xl font-semibold mb-4">4. CSS Frameworks and Preprocessors</h3>
  <ul className="list-disc pl-6">
    <li>What are CSS frameworks? Name some popular ones (e.g., Bootstrap, Tailwind CSS).</li>
    <li>What are the advantages and disadvantages of using a CSS framework?</li>
    <li>What is a CSS preprocessor, and how does it differ from vanilla CSS?</li>
    <li>Explain the key features of Sass/SCSS (e.g., variables, nesting, mixins).</li>
    <li>How do you create a reusable mixin in Sass?</li>
    <li>What is the difference between `@import` and `@use` in Sass?</li>
    <li>How do you organize SCSS files in a large project?</li>
    <li>What is PostCSS, and how is it used in modern CSS workflows?</li>
    <li>How does Tailwind CSS differ from traditional CSS frameworks like Bootstrap?</li>
    <li>What are some best practices for using CSS frameworks in production?</li>
  </ul>

  <hr className="my-4" />

  <h3 className="text-xl font-semibold mb-4">5. CSS and Responsiveness</h3>
  <ul className="list-disc pl-6">
    <li>What is responsive web design, and why is it important?</li>
    <li>How do you use relative units like `rem`, `em`, and `vw` for responsive design?</li>
    <li>What is the mobile-first approach in CSS, and how do you implement it?</li>
    <li>How do you handle responsive images in CSS?</li>
    <li>What is the `min-width` vs. `max-width` media query, and when would you use each?</li>
    <li>How do you create a responsive navigation bar using CSS?</li>
    <li>What is the role of the `viewport` meta tag in responsive design?</li>
    <li>How do you ensure cross-device compatibility in CSS?</li>
    <li>What are some common breakpoints for media queries?</li>
    <li>How do you handle responsive typography in CSS?</li>
  </ul>

  <hr className="my-4" />

  <h3 className="text-xl font-semibold mb-4">6. CSS Accessibility (a11y)</h3>
  <ul className="list-disc pl-6">
    <li>What is the role of CSS in web accessibility?</li>
    <li>How do you ensure sufficient color contrast for accessibility?</li>
    <li>What is the purpose of the `:focus` pseudo-class, and how do you style it?</li>
    <li>How do you create accessible hover effects in CSS?</li>
    <li>What is the `outline` property, and why is it important for accessibility?</li>
    <li>How do you hide content visually but keep it accessible to screen readers?</li>
    <li>What are some CSS techniques to improve readability (e.g., line height, font size)?</li>
    <li>How do you handle high-contrast mode in CSS?</li>
    <li>What is the role of `aria-hidden` in CSS-driven interfaces?</li>
    <li>How do you test CSS for accessibility compliance?</li>
  </ul>

  <hr className="my-4" />

  <h3 className="text-xl font-semibold mb-4">7. CSS Performance and Optimization</h3>
  <ul className="list-disc pl-6">
    <li>What are some common causes of CSS performance issues?</li>
    <li>How do you minimize reflows and repaints in CSS?</li>
    <li>What is the role of CSS minification in performance optimization?</li>
    <li>How do you reduce the size of a CSS file?</li>
    <li>What is critical CSS, and how do you implement it?</li>
    <li>How does the browser render CSS, and what is the CSSOM?</li>
    <li>What are some tools to analyze CSS performance (e.g., Chrome DevTools, Lighthouse)?</li>
    <li>How do you optimize CSS animations for performance?</li>
    <li>What is the impact of using too many CSS selectors on performance?</li>
    <li>How do you leverage browser caching for CSS files?</li>
  </ul>

  <hr className="my-4" />

  <h3 className="text-xl font-semibold mb-4">8. Practical and Coding Questions</h3>
  <ul className="list-disc pl-6">
    <li>Write CSS to create a card component with a hover effect.</li>
    <li>Create a responsive grid layout using CSS Grid.</li>
    <li>Write CSS to style a navigation bar with a dropdown menu.</li>
    <li>Implement a loading spinner using CSS animations.</li>
    <li>Create a CSS-only accordion component.</li>
    <li>Write CSS to center a div both horizontally and vertically in multiple ways.</li>
    <li>Style a form with validation states (e.g., error, success) using CSS.</li>
    <li>Create a responsive image gallery using Flexbox.</li>
    <li>Write CSS to implement a dark mode toggle for a website.</li>
    <li>Create a sticky header that changes style on scroll using CSS.</li>
  </ul>

  <hr className="my-4" />

  <h3 className="text-xl font-semibold mb-4">9. CSS Best Practices</h3>
  <ul className="list-disc pl-6">
    <li>What are some best practices for writing maintainable CSS?</li>
    <li>How do you organize CSS files in a large project (e.g., BEM, SMACSS)?</li>
    <li>What is the BEM (Block, Element, Modifier) methodology?</li>
    <li>How do you avoid specificity wars in CSS?</li>
    <li>What are some common CSS anti-patterns to avoid?</li>
  </ul>

  <hr className="my-4" />

  <h3 className="text-xl font-semibold mb-4">Tips for Preparation</h3>
  <ul className="list-disc pl-6">
    <li><strong>Master Core Concepts:</strong> Be clear on the box model, Flexbox, Grid, positioning, and responsive design.</li>
    <li><strong>Practice Coding:</strong> Build layouts, components, and animations to solidify your skills (e.g., on CodePen).</li>
    <li><strong>Learn Tools:</strong> Familiarize yourself with preprocessors (Sass), frameworks (Tailwind, Bootstrap), and performance tools (Lighthouse).</li>
    <li><strong>Understand Accessibility:</strong> Study WCAG guidelines and focus management for inclusive design.</li>
    <li><strong>Mock Interviews:</strong> Practice explaining CSS solutions and debugging live coding challenges.</li>
  </ul>
</div>
{/* Nodejs section */}
        <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Node.js Interview Questions</h2>
<ul className="space-y-2">
  <li>What is Node.js, and why is it used?</li>
  <li>What is the difference between Node.js and JavaScript?</li>
  <li>What is the event loop in Node.js?</li>
  <li>What is a module in Node.js, and how do you use it?</li>
  <li>What is <code>package.json</code>, and why is it important?</li>
  <li>What is the difference between synchronous and asynchronous code in Node.js?</li>
  <li>What is the purpose of the <code>require</code> function in Node.js?</li>
  <li>What are the core modules in Node.js? Provide examples.</li>
  <li>What is the difference between <code>process.nextTick</code> and <code>setImmediate</code>?</li>
  <li>How does Node.js handle asynchronous operations?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">Intermediate Node.js Questions</h2>
<ul className="space-y-2">
  <li>What is middleware in Express.js, and how does it work?</li>
  <li>How do you handle errors in Node.js applications?</li>
  <li>What is the purpose of the <code>async/await</code> syntax in Node.js?</li>
  <li>What is the difference between <code>CommonJS</code> and <code>ES Modules</code> in Node.js?</li>
  <li>How do you create a simple HTTP server using Node.js?</li>
  <li>What is the <code>fs</code> module in Node.js, and how do you use it?</li>
  <li>How do you handle environment variables in a Node.js application?</li>
  <li>What is the role of the <code>npm</code> command-line tool in Node.js?</li>
  <li>How does Node.js support scalability in web applications?</li>
  <li>What is the difference between <code>fork</code> and <code>spawn</code> in the Node.js <code>child_process</code> module?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">Advanced Node.js Questions</h2>
<ul className="space-y-2">
  <li>How does Node.js handle concurrency, and what are its limitations?</li>
  <li>What is the Cluster module in Node.js, and how does it improve performance?</li>
  <li>Explain the concept of streams in Node.js and their use cases.</li>
  <li>What is the difference between <code>Readable</code>, <code>Writable</code>, and <code>Transform</code> streams?</li>
  <li>How do you implement WebSockets in a Node.js application?</li>
  <li>What is the purpose of the <code>EventEmitter</code> class in Node.js?</li>
  <li>How do you optimize a Node.js application for performance?</li>
  <li>What is the role of the <code>libuv</code> library in Node.js?</li>
  <li>How do you handle memory leaks in a Node.js application?</li>
  <li>What is serverless architecture, and how does Node.js fit into it?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">Node.js with Express.js</h2>
<ul className="space-y-2">
  <li>What is Express.js, and how does it simplify Node.js development?</li>
  <li>How do you set up routing in an Express.js application?</li>
  <li>What are RESTful APIs, and how do you create one with Express.js?</li>
  <li>How do you handle authentication in an Express.js application?</li>
  <li>What is the purpose of the <code>body-parser</code> middleware in Express.js?</li>
  <li>How do you implement CORS in an Express.js application?</li>
  <li>What is the difference between <code>app.use</code> and <code>app.get</code> in Express.js?</li>
  <li>How do you handle file uploads in Express.js?</li>
  <li>What are some common security practices for Express.js applications?</li>
  <li>How do you integrate a database with an Express.js application?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">Node.js and Databases</h2>
<ul className="space-y-2">
  <li>How do you connect a Node.js application to a MongoDB database?</li>
  <li>What is an ORM, and how does it work with Node.js (e.g., Sequelize, TypeORM)?</li>
  <li>How do you perform CRUD operations in Node.js with a SQL database?</li>
  <li>What is the difference between MongoDB and MySQL when used with Node.js?</li>
  <li>How do you handle database connection pooling in Node.js?</li>
  <li>What is Mongoose, and how does it simplify MongoDB interactions?</li>
  <li>How do you secure database credentials in a Node.js application?</li>
  <li>What are some strategies for optimizing database queries in Node.js?</li>
  <li>How do you implement pagination in a Node.js API?</li>
  <li>What is the role of transactions in Node.js database operations?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">Node.js Performance and Optimization</h2>
<ul className="space-y-2">
  <li>What are some common causes of performance issues in Node.js applications?</li>
  <li>How do you profile a Node.js application to identify bottlenecks?</li>
  <li>What is the significance of the <code>--inspect</code> flag in Node.js?</li>
  <li>How do you use the <code>pm2</code> process manager to improve Node.js application reliability?</li>
  <li>What is load balancing, and how can it be implemented in Node.js?</li>
  <li>How do you implement caching in a Node.js application?</li>
  <li>What is the role of the <code>worker_threads</code> module in Node.js?</li>
  <li>How do you minimize CPU-intensive tasks in Node.js?</li>
  <li>What is the impact of garbage collection on Node.js performance?</li>
  <li>How do you optimize Node.js for handling high traffic?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">Node.js Security</h2>
<ul className="space-y-2">
  <li>What are common security vulnerabilities in Node.js applications?</li>
  <li>How do you prevent Cross-Site Scripting (XSS) in a Node.js app?</li>
  <li>What is the purpose of the <code>helmet</code> middleware in Express.js?</li>
  <li>How do you implement JSON Web Tokens (JWT) for authentication in Node.js?</li>
  <li>What is the difference between authentication and authorization in Node.js?</li>
  <li>How do you secure sensitive data in a Node.js application?</li>
  <li>What is rate limiting, and how do you implement it in Node.js?</li>
  <li>How do you protect against SQL injection in Node.js?</li>
  <li>What is the role of HTTPS in securing Node.js applications?</li>
  <li>How do you handle session management securely in Node.js?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">Node.js Ecosystem and Tools</h2>
<ul className="space-y-2">
  <li>What is the difference between <code>npm</code> and <code>yarn</code> in Node.js?</li>
  <li>How do you set up a Node.js project with TypeScript?</li>
  <li>What is the role of Webpack in a Node.js application?</li>
  <li>How do you use Docker with a Node.js application?</li>
  <li>What is Nodemon, and how does it improve development?</li>
  <li>How do you integrate GraphQL with a Node.js application?</li>
  <li>What is the purpose of the <code>eslint</code> tool in Node.js development?</li>
  <li>How do you use the <code>dotenv</code> package in Node.js?</li>
  <li>What are some popular testing frameworks for Node.js (e.g., Jest, Mocha)?</li>
  <li>How do you implement logging in a Node.js application?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">Practical and Coding Questions</h2>
<ul className="space-y-2">
  <li>Write a Node.js script to create a simple HTTP server.</li>
  <li>Create an Express.js route to handle GET and POST requests.</li>
  <li>Write a Node.js function to read a file asynchronously.</li>
  <li>Implement a RESTful API for a todo list using Express.js.</li>
  <li>Write a Node.js script to connect to a MongoDB database and fetch data.</li>
  <li>Create a middleware in Express.js to log request details.</li>
  <li>Write a Node.js function to handle file uploads using Multer.</li>
  <li>Implement a WebSocket server in Node.js for real-time chat.</li>
  <li>Write a test case for an Express.js route using Jest.</li>
  <li>Create a Node.js script to parse a JSON file and display its contents.</li>
</ul>

<h2 className="text-xl font-semibold mb-4">Node.js in Production</h2>
<ul className="space-y-2">
  <li>How do you deploy a Node.js application to production (e.g., AWS, Heroku)?</li>
  <li>What is the role of a reverse proxy (e.g., Nginx) in Node.js deployment?</li>
  <li>How do you monitor a Node.js application in production?</li>
  <li>What are some strategies for handling crashes in Node.js applications?</li>
  <li>How do you implement CI/CD for a Node.js project?</li>
  <li>What is the significance of environment-specific configurations in Node.js?</li>
  <li>How do you handle versioning in a Node.js API?</li>
  <li>What is the role of a service worker in a Node.js-based PWA?</li>
  <li>How do you scale a Node.js application horizontally?</li>
  <li>What are some common debugging techniques for Node.js in production?</li>
</ul>

</div>
{/* Expressjs section */}
<div className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
<h2 className="text-xl font-semibold mb-4">1. Basic Express.js Questions</h2>
<ul className="space-y-2">
  <li>What is Express.js, and how does it relate to Node.js?</li>
  <li>What are the key features of Express.js?</li>
  <li>How do you install and set up an Express.js application?</li>
  <li>What is the purpose of the app object in Express.js?</li>
  <li>How do you create a simple route in Express.js?</li>
  <li>What is the difference between app.get and app.post in Express.js?</li>
  <li>What is middleware in Express.js, and how is it used?</li>
  <li>How do you handle query parameters in an Express.js route?</li>
  <li>What is the role of the next function in Express.js middleware?</li>
  <li>How do you serve static files in Express.js?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">2. Intermediate Express.js Questions</h2>
<ul className="space-y-2">
  <li>How do you handle errors in an Express.js application?</li>
  <li>What is the purpose of the body-parser middleware in Express.js?</li>
  <li>How do you implement CORS in an Express.js application?</li>
  <li>What is the difference between app.use and app.all in Express.js?</li>
  <li>How do you create a RESTful API using Express.js?</li>
  <li>What is the role of the express.Router class, and how is it used?</li>
  <li>How do you handle file uploads in Express.js using Multer?</li>
  <li>What are route parameters, and how do you access them in Express.js?</li>
  <li>How do you validate request data in an Express.js application?</li>
  <li>What is the difference between synchronous and asynchronous middleware in Express.js?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">3. Advanced Express.js Questions</h2>
<ul className="space-y-2">
  <li>How do you implement authentication in an Express.js application?</li>
  <li>What is JSON Web Token (JWT), and how do you use it in Express.js?</li>
  <li>How do you secure an Express.js application against common vulnerabilities?</li>
  <li>What is the purpose of the helmet middleware in Express.js?</li>
  <li>How do you implement rate limiting in an Express.js application?</li>
  <li>How do you handle sessions in an Express.js application?</li>
  <li>What is the role of the express-session middleware?</li>
  <li>How do you optimize an Express.js application for performance?</li>
  <li>What is the difference between res.send, res.json, and res.render in Express.js?</li>
  <li>How do you implement WebSockets in an Express.js application?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">4. Express.js with Databases</h2>
<ul className="space-y-2">
  <li>How do you connect an Express.js application to a MongoDB database?</li>
  <li>What is Mongoose, and how does it integrate with Express.js?</li>
  <li>How do you perform CRUD operations in Express.js with a SQL database?</li>
  <li>How do you handle database errors in an Express.js application?</li>
  <li>What is an ORM, and how does it work with Express.js (e.g., Sequelize)?</li>
  <li>How do you implement pagination in an Express.js API?</li>
  <li>How do you secure database credentials in an Express.js application?</li>
  <li>What are some strategies for optimizing database queries in Express.js?</li>
  <li>How do you implement transactions in an Express.js application?</li>
  <li>How do you use connection pooling in Express.js with a SQL database?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">5. Express.js Security</h2>
<ul className="space-y-2">
  <li>What are common security vulnerabilities in Express.js applications?</li>
  <li>How do you prevent Cross-Site Scripting (XSS) in an Express.js app?</li>
  <li>What is Cross-Site Request Forgery (CSRF), and how do you protect against it in Express.js?</li>
  <li>How do you sanitize user input in an Express.js application?</li>
  <li>What is the role of HTTPS in securing Express.js applications?</li>
  <li>How do you protect against SQL injection in an Express.js application?</li>
  <li>What is the purpose of the cors middleware, and how do you configure it?</li>
  <li>How do you implement secure password hashing in Express.js?</li>
  <li>What is the role of environment variables in securing Express.js apps?</li>
  <li>How do you audit dependencies for security vulnerabilities in Express.js?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">6. Express.js Performance and Optimization</h2>
<ul className="space-y-2">
  <li>What are some common causes of performance issues in Express.js applications?</li>
  <li>How do you implement caching in an Express.js application?</li>
  <li>What is the role of compression middleware in Express.js?</li>
  <li>How do you profile an Express.js application to identify bottlenecks?</li>
  <li>What is load balancing, and how can it be implemented with Express.js?</li>
  <li>How do you minimize response times in an Express.js API?</li>
  <li>What is the impact of middleware order on Express.js performance?</li>
  <li>How do you optimize static file serving in Express.js?</li>
  <li>What is the role of clustering in improving Express.js performance?</li>
  <li>How do you use a Content Delivery Network (CDN) with Express.js?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">7. Express.js Ecosystem and Tools</h2>
<ul className="space-y-2">
  <li>What is the difference between Express.js and other Node.js frameworks like Koa or Fastify?</li>
  <li>How do you set up TypeScript in an Express.js project?</li>
  <li>What is the role of the nodemon tool in Express.js development?</li>
  <li>How do you integrate GraphQL with an Express.js application?</li>
  <li>What is the purpose of the morgan middleware in Express.js?</li>
  <li>How do you use the dotenv package in an Express.js application?</li>
  <li>What are some popular testing frameworks for Express.js (e.g., Jest, Mocha)?</li>
  <li>How do you implement logging in an Express.js application?</li>
  <li>What is the role of pm2 in managing Express.js applications?</li>
  <li>How do you use Docker with an Express.js application?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">8. Practical and Coding Questions</h2>
<ul className="space-y-2">
  <li>Write an Express.js route to handle GET and POST requests for a resource.</li>
  <li>Create a middleware in Express.js to log request details.</li>
  <li>Implement a RESTful API for a todo list using Express.js.</li>
  <li>Write an Express.js route to handle file uploads using Multer.</li>
  <li>Create an Express.js application with JWT-based authentication.</li>
  <li>Write a test case for an Express.js route using Jest or Mocha.</li>
  <li>Implement error handling middleware in an Express.js application.</li>
  <li>Create an Express.js route to serve static files with caching.</li>
  <li>Write an Express.js application to connect to MongoDB and perform CRUD operations.</li>
  <li>Implement rate limiting for an Express.js API endpoint.</li>
</ul>

<h2 className="text-xl font-semibold mb-4">9. Express.js in Production</h2>
<ul className="space-y-2">
  <li>How do you deploy an Express.js application to production (e.g., AWS, Heroku)?</li>
  <li>What is the role of a reverse proxy (e.g., Nginx) in Express.js deployment?</li>
  <li>How do you monitor an Express.js application in production?</li>
  <li>What are some strategies for handling crashes in Express.js applications?</li>
  <li>How do you implement CI/CD for an Express.js project?</li>
  <li>What is the significance of environment-specific configurations in Express.js?</li>
  <li>How do you handle versioning in an Express.js API?</li>
  <li>What is the role of a service worker in an Express.js-based PWA?</li>
  <li>How do you scale an Express.js application horizontally?</li>
  <li>What are some common debugging techniques for Express.js in production?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">10. Express.js Best Practices and Design Patterns</h2>
<ul className="space-y-2">
  <li>What are some best practices for structuring an Express.js project?</li>
  <li>How do you organize routes in a large Express.js application?</li>
  <li>What is the significance of keeping middleware lean in Express.js?</li>
  <li>How do you handle global error handling in Express.js?</li>
  <li>What are some common anti-patterns in Express.js development?</li>
  <li>How do you ensure scalability in an Express.js application?</li>
  <li>What is the role of dependency injection in Express.js?</li>
  <li>How do you manage configuration files in an Express.js project?</li>
  <li>What are some strategies for testing Express.js applications thoroughly?</li>
  <li>How do you ensure API documentation in an Express.js project?</li>
</ul>
</div>
{/* Mongodb section */}
<div className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
<h2 className="text-xl font-semibold mb-4">1. Basic MongoDB Questions</h2>
<ul className="space-y-2">
  <li>What is MongoDB, and how does it differ from traditional SQL databases?</li>
  <li>What is a NoSQL database, and why is MongoDB considered one?</li>
  <li>What are the key features of MongoDB?</li>
  <li>What is a document in MongoDB, and how does it relate to a collection?</li>
  <li>What is BSON, and how is it used in MongoDB?</li>
  <li>What are the advantages of using MongoDB over relational databases?</li>
  <li>How do you install and set up MongoDB on a local machine?</li>
  <li>What is the role of the `_id` field in MongoDB documents?</li>
  <li>What are the main differences between MongoDB and MySQL?</li>
  <li>How do you connect to a MongoDB database from a client?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">2. Intermediate MongoDB Questions</h2>
<ul className="space-y-2">
  <li>How do you perform CRUD operations in MongoDB?</li>
  <li>What is the MongoDB query language, and how does it work?</li>
  <li>What is the difference between `find()` and `findOne()` in MongoDB?</li>
  <li>How do you sort query results in MongoDB?</li>
  <li>What is an index in MongoDB, and why is it important?</li>
  <li>How do you create and drop a collection in MongoDB?</li>
  <li>What is the purpose of the `limit()` and `skip()` methods in MongoDB queries?</li>
  <li>How do you update a document in MongoDB using `updateOne()` and `updateMany()`?</li>
  <li>What are embedded documents in MongoDB, and when should you use them?</li>
  <li>How do you handle relationships between data in MongoDB (e.g., referencing vs. embedding)?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">3. Advanced MongoDB Questions</h2>
<ul className="space-y-2">
  <li>What is the Aggregation Framework in MongoDB, and how does it work?</li>
  <li>What are the stages in a MongoDB aggregation pipeline?</li>
  <li>How do you use the `$lookup` operator in MongoDB for joining collections?</li>
  <li>What is sharding in MongoDB, and how does it improve scalability?</li>
  <li>What is replication in MongoDB, and how does it ensure high availability?</li>
  <li>What is the role of the primary and secondary nodes in a MongoDB replica set?</li>
  <li>How do you implement transactions in MongoDB?</li>
  <li>What are the different types of indexes in MongoDB (e.g., compound, text, geospatial)?</li>
  <li>How do you optimize MongoDB queries for performance?</li>
  <li>What is the Write Concern in MongoDB, and how does it affect data consistency?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">4. MongoDB Schema Design</h2>
<ul className="space-y-2">
  <li>What are the best practices for designing a schema in MongoDB?</li>
  <li>How do you decide between embedding and referencing data in MongoDB?</li>
  <li>What are the challenges of schema design in a NoSQL database like MongoDB?</li>
  <li>How do you handle schema migrations in MongoDB?</li>
  <li>What is the impact of large documents on MongoDB performance?</li>
  <li>How do you model one-to-many and many-to-many relationships in MongoDB?</li>
  <li>What is the role of schema validation in MongoDB?</li>
  <li>How do you handle versioning of documents in MongoDB?</li>
  <li>What are some common anti-patterns in MongoDB schema design?</li>
  <li>How do you design a MongoDB schema for a real-time application?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">5. MongoDB with Application Integration</h2>
<ul className="space-y-2">
  <li>How do you connect a Node.js application to MongoDB?</li>
  <li>What is Mongoose, and how does it simplify MongoDB interactions?</li>
  <li>How do you perform CRUD operations using Mongoose in a Node.js application?</li>
  <li>What is the role of ODM (Object-Document Mapping) in MongoDB?</li>
  <li>How do you integrate MongoDB with a Python application using PyMongo?</li>
  <li>How do you handle connection pooling in MongoDB with a Node.js application?</li>
  <li>What is the MongoDB Driver, and how does it differ from Mongoose?</li>
  <li>How do you implement pagination in a MongoDB-backed API?</li>
  <li>How do you secure MongoDB connections in an application?</li>
  <li>What are some best practices for integrating MongoDB with RESTful APIs?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">6. MongoDB Performance and Optimization</h2>
<ul className="space-y-2">
  <li>What are some common causes of performance issues in MongoDB?</li>
  <li>How do you analyze and optimize slow queries in MongoDB?</li>
  <li>What is the role of the `explain()` method in MongoDB query optimization?</li>
  <li>How do you use indexing to improve MongoDB performance?</li>
  <li>What is the impact of unindexed queries on MongoDB performance?</li>
  <li>How do you optimize MongoDB for high read or write throughput?</li>
  <li>What is the role of caching in MongoDB performance?</li>
  <li>How do you scale MongoDB horizontally and vertically?</li>
  <li>What is the significance of the WiredTiger storage engine in MongoDB?</li>
  <li>How do you monitor MongoDB performance in production?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">7. MongoDB Security</h2>
<ul className="space-y-2">
  <li>What are common security vulnerabilities in MongoDB?</li>
  <li>How do you enable authentication in MongoDB?</li>
  <li>What is the role of role-based access control (RBAC) in MongoDB?</li>
  <li>How do you secure MongoDB connections using TLS/SSL?</li>
  <li>What are some best practices for securing MongoDB databases?</li>
  <li>How do you protect sensitive data in MongoDB?</li>
  <li>What is the purpose of the `mongod` configuration file for security?</li>
  <li>How do you audit MongoDB for security compliance?</li>
  <li>What is the impact of running MongoDB without authentication?</li>
  <li>How do you handle backups securely in MongoDB?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">8. MongoDB Administration</h2>
<ul className="space-y-2">
  <li>How do you back up and restore a MongoDB database?</li>
  <li>What is the difference between `mongod` and `mongo` in MongoDB?</li>
  <li>How do you upgrade a MongoDB instance to a newer version?</li>
  <li>What is the role of the MongoDB Atlas cloud service?</li>
  <li>How do you configure a MongoDB replica set?</li>
  <li>What are some common tools for managing MongoDB (e.g., MongoDB Compass)?</li>
  <li>How do you monitor MongoDB health and performance?</li>
  <li>What is the purpose of the `oplog` in MongoDB replication?</li>
  <li>How do you handle database migrations in MongoDB?</li>
  <li>What are some strategies for disaster recovery in MongoDB?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">9. Practical and Coding Questions</h2>
<ul className="space-y-2">
  <li>Write a MongoDB query to find all documents where a field matches a specific value.</li>
  <li>Create a MongoDB aggregation pipeline to group documents by a field and calculate the average.</li>
  <li>Write a Mongoose schema for a user collection with validation.</li>
  <li>Implement a Node.js function to insert a document into MongoDB.</li>
  <li>Write a MongoDB query to update multiple documents based on a condition.</li>
  <li>Create an index on a MongoDB collection and explain its impact.</li>
  <li>Write a Node.js script to connect to MongoDB and perform a paginated query.</li>
  <li>Implement a MongoDB query to search for documents using a text index.</li>
  <li>Write a script to back up a MongoDB collection using `mongodump`.</li>
  <li>Create a MongoDB transaction to update multiple collections atomically.</li>
</ul>

<h2 className="text-xl font-semibold mb-4">10. MongoDB in Production</h2>
<ul className="space-y-2">
  <li>How do you deploy MongoDB in a production environment?</li>
  <li>What are some best practices for scaling MongoDB in production?</li>
  <li>How do you handle failover in a MongoDB replica set?</li>
  <li>What is the role of a sharded cluster in MongoDB production?</li>
  <li>How do you monitor MongoDB performance in a production environment?</li>
  <li>What are some common challenges when running MongoDB in production?</li>
  <li>How do you implement automated backups for MongoDB in production?</li>
  <li>What is the significance of capacity planning for MongoDB?</li>
  <li>How do you handle version compatibility in MongoDB production deployments?</li>
  <li>What are some strategies for minimizing downtime in MongoDB production?</li>
</ul>

</div>
{/* javascript section */}
<div className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
<h2 className="text-xl font-semibold mb-4">1. Basic JavaScript Questions</h2>
<ul className="space-y-2">
  <li>What is JavaScript, and what are its key features?</li>
  <li>What is the difference between var, let, and const?</li>
  <li>What is the DOM, and how does JavaScript interact with it?</li>
  <li>What is the difference between null and undefined in JavaScript?</li>
  <li>What are data types in JavaScript?</li>
  <li>What is the purpose of the this keyword in JavaScript?</li>
  <li>What is a closure, and how is it used?</li>
  <li>What is the difference between == and === operators?</li>
  <li>How do you handle errors in JavaScript using try and catch?</li>
  <li>What is the role of the console object in JavaScript?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">2. Intermediate JavaScript Questions</h2>
<ul className="space-y-2">
  <li>What is the difference between synchronous and asynchronous code in JavaScript?</li>
  <li>What are promises in JavaScript, and how do they work?</li>
  <li>How does the async/await syntax simplify asynchronous code?</li>
  <li>What is the event loop in JavaScript, and how does it handle asynchronous operations?</li>
  <li>What are arrow functions, and how do they differ from regular functions?</li>
  <li>What is the purpose of the bind, call, and apply methods?</li>
  <li>How do you manipulate arrays in JavaScript (e.g., map, filter, reduce)?</li>
  <li>What is the difference between forEach and map in JavaScript?</li>
  <li>What is prototypal inheritance in JavaScript?</li>
  <li>How do you handle events in JavaScript (e.g., addEventListener)?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">3. Advanced JavaScript Questions</h2>
<ul className="space-y-2">
  <li>What is a JavaScript module, and how do import and export work?</li>
  <li>What is the difference between CommonJS and ES Modules?</li>
  <li>How does JavaScript handle memory management and garbage collection?</li>
  <li>What is the EventEmitter pattern in JavaScript?</li>
  <li>What is the difference between shallow and deep copying in JavaScript?</li>
  <li>How do you optimize JavaScript code for performance?</li>
  <li>What is a generator function in JavaScript, and how is it used?</li>
  <li>What is the purpose of the Proxy object in JavaScript?</li>
  <li>How do you implement debouncing and throttling in JavaScript?</li>
  <li>What is the role of the Symbol data type in JavaScript?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">4. JavaScript Functions and Scope</h2>
<ul className="space-y-2">
  <li>What is function hoisting in JavaScript?</li>
  <li>What is the difference between function declarations and function expressions?</li>
  <li>How does variable scope work in JavaScript?</li>
  <li>What is the difference between global, local, and block scope?</li>
  <li>What is an IIFE (Immediately Invoked Function Expression), and when is it used?</li>
  <li>How do you create a recursive function in JavaScript?</li>
  <li>What is currying in JavaScript, and how is it implemented?</li>
  <li>What is the significance of the arguments object in JavaScript?</li>
  <li>How do you handle default parameters in JavaScript functions?</li>
  <li>What is the difference between a pure function and an impure function?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">5. JavaScript Objects and Classes</h2>
<ul className="space-y-2">
  <li>How do you create an object in JavaScript?</li>
  <li>What is the difference between Object.create and the new keyword?</li>
  <li>How do you iterate over object properties in JavaScript?</li>
  <li>What are ES6 classes, and how do they work?</li>
  <li>What is the role of the constructor method in a JavaScript class?</li>
  <li>How do you implement inheritance in JavaScript using classes?</li>
  <li>What is the difference between Object.freeze and Object.seal?</li>
  <li>How do you clone an object in JavaScript?</li>
  <li>What is the purpose of get and set methods in JavaScript objects?</li>
  <li>How do you check if a property exists in an object?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">6. JavaScript Asynchronous Programming</h2>
<ul className="space-y-2">
  <li>What is a callback function, and what are its drawbacks?</li>
  <li>How do you handle promise chaining in JavaScript?</li>
  <li>What is the difference between Promise.all and Promise.race?</li>
  <li>How do you handle errors in asynchronous JavaScript code?</li>
  <li>What is the role of the setTimeout and setInterval functions?</li>
  <li>How do you cancel a setTimeout or setInterval operation?</li>
  <li>What is the fetch API, and how do you use it for HTTP requests?</li>
  <li>How do you implement a retry mechanism for failed API calls?</li>
  <li>What is the difference between microtasks and macrotasks in JavaScript?</li>
  <li>How do you use the async iterator in JavaScript?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">7. JavaScript Performance and Optimization</h2>
<ul className="space-y-2">
  <li>What are some common causes of performance issues in JavaScript?</li>
  <li>How do you minimize DOM manipulation for better performance?</li>
  <li>What is the impact of excessive event listeners on performance?</li>
  <li>How do you optimize loops in JavaScript?</li>
  <li>What is memoization, and how is it implemented in JavaScript?</li>
  <li>How do you reduce the size of JavaScript files for faster loading?</li>
  <li>What is tree shaking, and how does it apply to JavaScript?</li>
  <li>How do you profile JavaScript code to identify bottlenecks?</li>
  <li>What is the role of the requestAnimationFrame method in animations?</li>
  <li>How do you lazy-load JavaScript files?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">8. JavaScript Security</h2>
<ul className="space-y-2">
  <li>What are common security vulnerabilities in JavaScript applications?</li>
  <li>How do you prevent Cross-Site Scripting (XSS) in JavaScript?</li>
  <li>What is Cross-Site Request Forgery (CSRF), and how do you protect against it?</li>
  <li>How do you sanitize user input in JavaScript?</li>
  <li>What is the Same-Origin Policy, and how does it affect JavaScript?</li>
  <li>How do you secure JavaScript code running in the browser?</li>
  <li>What is the role of Content Security Policy (CSP) in JavaScript?</li>
  <li>How do you handle sensitive data in JavaScript?</li>
  <li>What is the significance of HTTPS in JavaScript applications?</li>
  <li>How do you prevent prototype pollution in JavaScript?</li>
</ul>

<h2 className="text-xl font-semibold mb-4">9. Practical and Coding Questions</h2>
<ul className="space-y-2">
  <li>Write a JavaScript function to reverse a string.</li>
  <li>Create a function to check if a number is prime.</li>
  <li>Implement a debounce function in JavaScript.</li>
  <li>Write a JavaScript function to flatten a nested array.</li>
  <li>Create a promise-based function to fetch data from an API.</li>
  <li>Write a JavaScript function to find the factorial of a number.</li>
  <li>Implement a simple event emitter in JavaScript.</li>
  <li>Write a function to remove duplicates from an array.</li>
  <li>Create a JavaScript class to represent a shopping cart.</li>
  <li>Write a function to parse query parameters from a URL.</li>
</ul>

<h2 className="text-xl font-semibold mb-4">10. JavaScript Ecosystem and Tools</h2>
<ul className="space-y-2">
  <li>What is the difference between Node.js and browser-based JavaScript?</li>
  <li>How do you set up a JavaScript project with TypeScript?</li>
  <li>What is the role of Webpack in JavaScript development?</li>
  <li>How do you use ESLint to enforce JavaScript coding standards?</li>
  <li>What are some popular testing frameworks for JavaScript (e.g., Jest, Mocha)?</li>
  <li>How do you use the npm package manager in JavaScript projects?</li>
  <li>What is Babel, and why is it used in JavaScript development?</li>
  <li>How do you integrate JavaScript with a front-end framework like React?</li>
  <li>What is the role of the package.json file in JavaScript projects?</li>
  <li>How do you debug JavaScript code using browser developer tools?</li>
</ul>

</div>
</div>
  );
};

export default WebdevIq;