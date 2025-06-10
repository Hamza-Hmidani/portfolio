import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function LeftSide(){
    return(
        <section class="flex flex-col gap-6 md:w-1/3">
            <h2 class="text-3xl font-bold">Why hire me?</h2>
            <p class="text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="flex flex-col gap-3">
                <NavLink
                    className={({ isActive }) => 
                        isActive 
                        ? "bg-[#1ef2a6] text-[#16161d] rounded-md py-3 font-medium text-sm hover:brightness-110 transition text-center"
                        : "bg-[#1a1a23] text-white rounded-md py-3 font-semibold text-sm hover:bg-[#22222b] transition text-center"
                    }
                    to="/resume"
                >
                    Experience
                </NavLink>
                <NavLink
                    className={({ isActive }) => 
                        isActive 
                        ? "bg-[#1ef2a6] text-[#16161d] rounded-md py-3 font-medium text-sm hover:brightness-110 transition text-center"
                        : "bg-[#1a1a23] text-white rounded-md py-3 font-semibold text-sm hover:bg-[#22222b] transition text-center"
                    }
                    to="/education"
                >
                    Education
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
                    Sur moi
                </NavLink>
            </div>
        </section>
    )
}