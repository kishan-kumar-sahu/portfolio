const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-6 mb-28">

      <h1 className="text-3xl font-bold text-white text-center mb-10">
        My Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Frontend */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 duration-500">
          <h2 className="text-xl font-semibold mb-4 text-pink-400">Frontend</h2>
          <ul className="space-y-2 text-white">
            <li>HTML5</li>
            <li>CSS3 / Tailwind CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js (Hooks, Context API)</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 duration-500">
          <h2 className="text-xl font-semibold mb-4 text-pink-400">Backend</h2>
          <ul className="space-y-2 text-white">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs / CRUD</li>
            <li>Authentication (JWT)</li>
          </ul>
        </div>

        {/* Python */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 duration-500">
          <h2 className="text-xl font-semibold mb-4 text-pink-400">Python</h2>
          <ul className="space-y-2 text-white">
            <li>Python 3.x</li>
            <li>Core Python (Loops, Functions)</li>
            <li>OOP Concepts</li>
            <li>File & Exception Handling</li>
          </ul>
        </div>

        {/* Database */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 duration-500">
          <h2 className="text-xl font-semibold mb-4 text-pink-400">Database</h2>
          <ul className="space-y-2 text-white">
            <li>MongoDB (Mongoose)</li>
            <li>Basic SQL</li>
            <li>Database Design Basics</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 duration-500">
          <h2 className="text-xl font-semibold mb-4 text-pink-400">Tools</h2>
          <ul className="space-y-2 text-white">
            <li>Git / GitHub</li>
            <li>VS Code</li>
            <li>npm / yarn</li>
            <li>Deployment (Netlify, Vercel)</li>
          </ul>
        </div>

        {/* CS Fundamentals & DSA */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 duration-500">
          <h2 className="text-xl font-semibold mb-4 text-pink-400">
            CS Fundamentals & DSA
          </h2>
          <ul className="space-y-2 text-white">
            <li>Data Structures & Algorithms</li>
            <li>Problem Solving</li>
            <li>OOP, DBMS (Basics)</li>
            <li>Time & Space Complexity</li>
          </ul>
        </div>

        {/* Future / Learning */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 duration-500 lg:col-span-3 ">
          <h2 className="text-xl font-semibold mb-4 text-pink-400   flex justify-center ">
            Future / Learning
          </h2>
          <ul className="space-y-2 text-white">
            <li>Python Backend (Flask / Django)</li>
            <li>System Design (Basics)</li>
            <li>Docker & Cloud Fundamentals</li>
            <li>Unit Testing & API Testing</li>
            <li>AI Tools & Prompt Engineering</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Skills;
