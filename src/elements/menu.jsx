import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Menu({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`w-full flex items-center justify-between px-4 md:px-10 py-6 ${isDark ? 'bg-[#121217] text-white' : 'bg-white text-[#121217]'}`}>
      <h1 className="text-3xl font-extrabold ">
        <Link to="/"><span className="text-[#1eff7a]">Hamza </span> .</Link>
      </h1>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden text-[#1eff7a] text-2xl focus:outline-none"
        aria-label="Ouvrir le menu"
        onClick={() => setOpen(!open)}
      >
        <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
      </button>
      {/* Navigation */}
      <nav
        className={`flex-col md:flex-row md:flex items-center space-y-6 md:space-y-0 md:space-x-8 text-lg font-normal absolute md:static top-20 left-0 w-full md:w-auto bg-[#121217] md:bg-transparent z-50 transition-all duration-300 ${
          open ? "flex" : "hidden md:flex"
        }`}
      >
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#1eff7a] border-b-2 border-[#1eff7a] pb-0.5"
              : "hover:text-[#1eff7a] pb-0.5"
          }
          to="/"
          onClick={() => setOpen(false)}
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#1eff7a] border-b-2 border-[#1eff7a] pb-0.5"
              : "hover:text-[#1eff7a] pb-0.5"
          }
          to="/services"
          onClick={() => setOpen(false)}
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#1eff7a] border-b-2 border-[#1eff7a] pb-0.5"
              : "hover:text-[#1eff7a] pb-0.5"
          }
          to="/resume"
          onClick={() => setOpen(false)}
        >
          Resume
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#1eff7a] border-b-2 border-[#1eff7a] pb-0.5"
              : "hover:text-[#1eff7a] pb-0.5"
          }
          to="/projects"
          onClick={() => setOpen(false)}
        >
          Projets
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#1eff7a] border-b-2 border-[#1eff7a] pb-0.5"
              : "hover:text-[#1eff7a] pb-0.5"
          }
          to="/contact"
          onClick={() => setOpen(false)}
        >
          Contact
        </NavLink>
        <Link
          to="/contact1"
          className="bg-[#00ff9f] text-black rounded-full px-5 py-2 font-semibold hover:brightness-110 transition"
          onClick={() => setOpen(false)}
        >
          Hire me
        </Link>
        <button
          aria-label="Toggle theme"
          className="text-[#1eff7a] text-xl focus:outline-none mt-2 md:mt-0"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </button>
      </nav>
    </header>
  );
}