import LeftSide from "./LeftSide"
import { educationData } from "../../data/Data"

export default function Education({ isDark }) {
    return (
        <main className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row gap-16 md:gap-24 pb-20">
            <LeftSide />

            <section className="md:w-2/3 flex flex-col gap-6">
                <h2 className="text-3xl font-bold">Ma formation</h2>
                <p className="text-gray-400 leading-relaxed">
                    Découvrez mon parcours académique et mes formations dans le développement web.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[300px] overflow-y-auto pr-3
                    scrollbar-thin scrollbar-thumb-[#1ef2a6] scrollbar-track-[#1a1a23]">
                    {educationData.map((education) => (
                        <article
                            key={education.id}
                            className="bg-[#1a1a23] rounded-md p-6 flex flex-col gap-3 min-h-[110px]"
                        >
                            <span className="text-[#1ef2a6] text-xs font-semibold">
                                {education.period}
                            </span>
                            <h3 className="font-semibold text-white text-base">
                                {education.degree}
                            </h3>
                            <p className="text-gray-400 flex items-center gap-2 text-sm">
                                <span className="text-[#1ef2a6] text-lg leading-none">•</span>
                                {education.school}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}