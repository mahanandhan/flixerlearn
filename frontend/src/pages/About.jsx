import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700 text-center">About FlixerLearn</h1>
      <p className="mb-4 text-lg">
        FlixerLearn is an innovative e-learning platform designed to help learners master
        various technical skills such as programming, data structures and algorithms (DSA),
        web development, artificial intelligence, cybersecurity, and much more.
      </p>
      <p className="mb-4 text-lg">
        Our platform offers comprehensive courses, hands-on projects, and carefully
        curated study materials that are ideal for students, job seekers, and professionals
        aiming to upskill efficiently.
      </p>
      <p className="mb-4 text-lg">
        FlixerLearn emphasizes interactive learning, practical problem solving, and
        real-world applications to ensure you not only learn concepts but also apply
        them effectively.
      </p>
      <p className="mb-4 text-lg">
        Whether you are preparing for technical interviews, want to build projects, or
        deepen your understanding of computer science fundamentals, FlixerLearn is
        your go-to resource for focused and affordable learning.
      </p>
      <p className="mb-4 text-lg italic text-center">
        Join FlixerLearn today and take your skills to the next level!
      </p>
      <h1 className='text-2xl font-bold mb-6 text-indigo-700 text-center'>Founder: Narayanam Mahanandhan</h1>
      <h3 className='text-lg display flex justify-center gap-2'>Linkedin profile: <a className='text-blue-600 hover:text-blue-400' href="https://www.linkedin.com/in/mahanandhan/" target="_blank">https://www.linkedin.com/in/mahanandhan/</a></h3>
    </div>
  );
};

export default About;
