import { Link, NavLink } from "react-router-dom";

export default function Menu({ isDark, setIsDark }) {
  return (
    <header className={`flex items-center justify-between px-10 py-6 ${isDark ? 'text-white' : 'text-[#121217]'}`}>
      <h1 className="text-3xl font-extrabold text-[#1eff7a]">
        <Link to="/">Hamza <span className="text-white">.</span></Link>
      </h1>
      <nav className="flex items-center space-x-8 text-lg font-normal">
        <NavLink 
          className={({ isActive }) => 
            isActive 
              ? "text-[#1eff7a] border-b-2 border-[#1eff7a] pb-0.5" 
              : "hover:text-[#1eff7a] pb-0.5"
          } 
          to="/"
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
        >
          Contact
        </NavLink>
        <Link to="/contact" className="bg-[#00ff9f] text-black rounded-full px-5 py-2 font-semibold hover:brightness-110 transition">
          Hire me
        </Link>
        <button 
          aria-label="Toggle theme" 
          className="text-[#1eff7a] text-xl focus:outline-none"
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