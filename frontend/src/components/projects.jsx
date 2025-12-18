const Projects = () => {
  return (
    <div className="w-full min-h-screen flex  flex-col justify-center  items-center  gap-6  bg-slate-900 p-6">

      {/* GitHub Card */}
      <a
        href="https://github.com/kishan-kumar-sahu/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[80%] md:w-[50%] h-20 bg-orange-400 
                   text-white flex justify-center items-center 
                   rounded-lg text-xl font-semibold 
                   hover:scale-105 hover:bg-orange-500 
                   transition duration-300"
      >
        💼 GitHub
      </a>

      {/* LinkedIn Card */}
      <a
        href="https://www.linkedin.com/in/kishan-kumar-sahu-10b3b6315/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[80%] md:w-[50%] h-20 bg-blue-500 
                   text-white flex justify-center items-center 
                   rounded-lg text-xl font-semibold 
                   hover:scale-105 hover:bg-blue-600 
                   transition duration-300"
      >
        💼 LinkedIn
      </a>

    </div>
  );
};

export default Projects;
