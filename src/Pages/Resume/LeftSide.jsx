import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function LeftSide(){
    return(
        <section className="flex flex-col gap-6 md:w-1/3">
            <h2 className="text-3xl font-bold">Pourquoi me choisir ?</h2>
            <p className="text-gray-400 leading-relaxed">
                Passionné, rigoureux et créatif, je mets mon expertise au service de vos projets web pour garantir leur réussite.
            </p>
            <div className="flex flex-col gap-3">
                <NavLink
                    className={({ isActive }) => 
                        isActive 
                        ? "bg-[#1ef2a6] text-[#16161d] rounded-md py-3 font-medium text-sm hover:brightness-110 transition text-center"
                        : "bg-[#1a1a23] text-white rounded-md py-3 font-semibold text-sm hover:bg-[#22222b] transition text-center"
                    }
                    to="/resume"
                >
                    Expérience
                </NavLink>
                <NavLink
                    className={({ isActive }) => 
                        isActive 
                        ? "bg-[#1ef2a6] text-[#16161d] rounded-md py-3 font-medium text-sm hover:brightness-110 transition text-center"
                        : "bg-[#1a1a23] text-white rounded-md py-3 font-semibold text-sm hover:bg-[#22222b] transition text-center"
                    }
                    to="/education"
                >
                    Formation
                </NavLink>
                <NavLink
                    className={({ isActive }) => 
                        isActive 
                        ? "bg-[#1ef2a6] text-[#16161d] rounded-md py-3 font-medium text-sm hover:brightness-110 transition text-center"
                        : "bg-[#1a1a23] text-white rounded-md py-3 font-semibold text-sm hover:bg-[#22222b] transition text-center"
                    }
                    to="/skills"
                >
                    Compétences
                </NavLink>
                <NavLink
                    className={({ isActive }) => 
                        isActive 
                        ? "bg-[#1ef2a6] text-[#16161d] rounded-md py-3 font-medium text-sm hover:brightness-110 transition text-center"
                        : "bg-[#1a1a23] text-white rounded-md py-3 font-semibold text-sm hover:bg-[#22222b] transition text-center"
                    }
                    to="/about"
                >
                    À propos
                </NavLink>
            </div>
        </section>
    )
}