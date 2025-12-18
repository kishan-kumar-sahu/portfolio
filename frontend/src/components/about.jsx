import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
        About Me
      </h1>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Image Section */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="krishna_photo_copy.jpg" 
            alt="Kishan Kumar Sahu"
            className="w-64 sm:w-72 rounded-xl hover:scale-105 transition duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left text-white space-y-6">
          <p className="text-base sm:text-lg leading-relaxed">
            Hi, I’m <span className="font-semibold">Kishan Kumar Sahu</span>, a <span className="font-semibold">MERN Stack Developer</span> passionate about building modern and responsive web applications. I specialize in using <span className="font-medium text-pink-400">MongoDB, Express.js, React, and Node.js</span> to turn ideas into real-world digital solutions.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            I enjoy solving problems, writing clean and efficient code, and continuously learning new technologies to improve my skills. My goal is to create impactful web experiences that provide value to users and help businesses grow.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            I am a proactive learner and always excited to take on challenging projects that enhance my knowledge and contribute to meaningful solutions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
