import LeftSide from "./LeftSide"
import { skillsData } from "../../data/Data"

export default function Skills({ isDark }) {
    return (
        <main className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row gap-16 md:gap-24 pb-20">
            <LeftSide />

            <section className="md:w-2/3 flex flex-col gap-6">
                <h2 className="text-3xl font-bold">Mes compétences</h2>
                <p className="text-gray-400 leading-relaxed">
                    Découvrez les technologies que je maîtrise pour créer des applications web modernes.
                </p>

                <div className="max-h-[280px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-[#1ef2a6] scrollbar-track-[#1a1a23]">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
                        {skillsData.map((skill) => (
                            <div 
                                key={skill.id}
                                className={`bg-[#1c1c24] hover:bg-[#1ef2a6] rounded-lg p-6 flex justify-center items-center cursor-pointer relative group`}
                            >
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-white text-black text-xs rounded px-2 py-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity select-none">
                                    {skill.name}
                                </div>
                                <img 
                                    alt={`${skill.name} logo`}
                                    className="w-12 h-12" 
                                    src={skill.image}
                                    width="48"
                                    height="48"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}