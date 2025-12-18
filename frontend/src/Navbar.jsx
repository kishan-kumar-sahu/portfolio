import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-14 bg-[#1e293b] fixed top-0 left-0 z-50 flex items-center px-6">

      {/* Logo */}
      <div className="flex items-center gap-3 text-[#e5e7eb] font-semibold text-lg">
       <Link to="/">
         <img
        
          src="kishan1.jpg"
          alt="logo"
          className="w-10 h-10 rounded-full border-2 border-gray-600"
        />
       </Link>
        Kishan
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2 text-[#e5e7eb] ">
        <Link to="/" className="hover:text-[#93c5fd] hover:scale-110 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-[#93c5fd] hover:scale-110 transition">
          About
        </Link>
        <Link to="/skills" className="hover:text-[#93c5fd] hover:scale-110 transition">
          Skills
        </Link>
        <Link to="/contact" className="hover:text-[#93c5fd] hover:scale-110 transition">
          Contact
        </Link>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden ml-auto">
        <button onClick={() => setOpen(!open)}>
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-14 left-0 w-full bg-[#1e293b] flex flex-col items-center gap-6 py-6 text-[#e5e7eb] md:hidden">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/skills">Skills</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
