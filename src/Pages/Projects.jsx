import { useState } from 'react';
import { projectsData } from '../data/projectsData';

export default function Projects({ isDark }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const currentProject = projectsData[currentIndex];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === currentProject.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? currentProject.images.length - 1 : prevIndex - 1
        );
    };

    const nextProject = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        );
    };

    return (
        <main className={`flex flex-col lg:flex-row items-center justify-center flex-grow max-w-7xl mx-auto px-8 gap-12 ${isDark ? 'text-white' : 'text-[#121217]'}`}>
            <section className="flex flex-col max-w-xl w-lg h-[400px] space-y-6 mb-20">
                <h2 className="text-[90px] font-extrabold stroke-[1px] leading-none select-none mb-4">
                    {currentProject.number}
                </h2>
                <h3 className="text-3xl font-semibold mb-4">
                    {currentProject.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    {currentProject.description}
                </p>
                <p className="text-[#00ff9f] font-semibold mb-8">
                    {currentProject.technologies}
                </p>
                <hr className="border-gray-700 mb-8"/>
                <div className="flex space-x-4">
                    <a 
                        href={currentProject.liveUrl}
                        aria-label="Voir le projet" 
                        className="w-12 h-12 bg-[#2a2a33] rounded-full flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition group"
                    >
                        <svg 
                            className="w-5 h-5 text-white group-hover:scale-125 group-hover:rotate-45 transition-all duration-300 hover:text-black"
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M16 8l5 5-5 5 M21 13H3" />
                        </svg>
                    </a>
                   
                    <a 
                        href={currentProject.githubUrl}
                        aria-label="Voir le code source" 
                        className="w-12 h-12 bg-[#2a2a33] rounded-full flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>
            <section className="relative h-[400px] mb-20">
                <img 
                    src={currentProject.images[currentImageIndex]}
                    alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                    className="rounded-md w-xl h-full mb-8 object-cover cursor-pointer"
                    onClick={nextImage}
                     
                />
            
                
                {/* Image thumbnails */}
                <div className="absolute -bottom-12 left-0 flex space-x-2 bt-8">
                    {currentProject.images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-16 h-16 rounded-md overflow-hidden ${
                                currentImageIndex === index ? 'ring-2 ring-[#00ff9f]' : ''
                            }`}
                        >
                            <img 
                                src={image}
                                alt={`Miniature ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>

                {/* next Image navigation*/}
                <div className="absolute bottom-4 right-4 flex space-x-1">
                    <button 
                        onClick={prevImage}
                        aria-label="Image précédente" 
                        className="bg-[#00ff9f] text-black w-10 h-10 flex items-center justify-center rounded-sm hover:brightness-110 transition"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button 
                        onClick={nextImage}
                        aria-label="Image suivante" 
                        className="bg-[#00ff9f] text-black w-10 h-10 flex items-center justify-center rounded-sm hover:brightness-110 transition"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </section>

            {/* Next project navigation */}
            <div className="absolute bottom-4 right-4 flex space-x-1">
                <button 
                    onClick={prevProject}
                    aria-label="Image précédente" 
                    className="bg-[#00ff9f] text-black w-10 h-10 flex items-center justify-center rounded-sm hover:brightness-110 transition"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                    onClick={nextProject}
                    aria-label="Image suivante" 
                    className="bg-[#00ff9f] text-black w-10 h-10 flex items-center justify-center rounded-sm hover:brightness-110 transition"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </main>
    );
}