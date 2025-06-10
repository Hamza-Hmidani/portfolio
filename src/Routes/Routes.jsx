import Accueil from "../Pages/Accueil";
import { Route , Routes } from "react-router-dom";
import Services from "../Pages/Services";
import Experience from "../Pages/Resume/Experience";
import Education from "../Pages/Resume/Education";
import Skills from "../Pages/Resume/Skills";
import About from "../Pages/Resume/About";
import Projects from "../Pages/Projects";
import { Contact } from "../Pages/Contact";

export default function AppRoutes({ isDark }) {
    return(
        <Routes>
            <Route path="/" element={<Accueil isDark={isDark} />} />
            <Route path="/services" element={<Services isDark={isDark} />} />
            <Route path="/resume" element={<Experience isDark={isDark} />} />
            <Route path="/education" element={<Education isDark={isDark} />} />
            <Route path="/skills" element={<Skills isDark={isDark} />} />
            <Route path="/about" element={<About isDark={isDark} />} />

            <Route path="/projects" element={<Projects isDark={isDark} />} />
            <Route path="/contact" element={<Contact isDark={isDark} />} />



            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<h1 className="text-center text-2xl">Page Not Found</h1>} />
        </Routes>

    )
}