import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen bg-black flex items-center px-7">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left">

          {/* Heading */}
         <h1 className="text-5xl sm:text-4xl lg:text-4xl font-medium
  bg-gradient-to-r from-pink-500 to-violet-500
  bg-clip-text text-transparent">
 Building Modern, Responsive Web Applications with MERN Stack

</h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-gray-300
            max-w-xl mx-auto lg:mx-0">
          A passionate fresher MERN Stack Developer currently focused on learning and
building responsive, user-friendly web applications using React, Node.js,
Express, MongoDB, JavaScript, and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-6 justify-center lg:justify-start">
            <Link to="/projects">
              <button className="px-6 py-2 rounded-md bg-slate-800 text-white
                font-medium hover:bg-indigo-950 hover:scale-105 duration-300">
                View Projects
              </button>
            </Link>

            <Link to="/resume">
              <button className="px-6 py-2 rounded-md bg-slate-800 text-white
                font-medium hover:bg-indigo-950 hover:scale-105 duration-300">
                My Resume
              </button>
            </Link>

  

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex flex-col items-center lg:items-start">

          <img
            src="/krishna_photo_copy.jpg"
            alt="Kishan Kumar Sahu"
            className="w-64 sm:w-72 rounded-xl shadow-lg
              hover:-translate-y-2 duration-500"
          />

          <div className="mt-6 text-xl font-bold italic mx-9
            bg-gradient-to-r from-pink-500 to-violet-500
            bg-clip-text text-transparent">
            Kishan Kumar Sahu
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
