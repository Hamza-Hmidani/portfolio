import { servicesData } from '../data/Data';

export default function Services({ isDark }) {
    const arrowRight = "M16 8l5 5-5 5 M21 13H3";
    
    return (
        <div className='px-8 pb-20 m-15 mt-5'>
            <main className={`mx-15 px-6 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-31 ${isDark ? 'text-white' : 'text-[#121217]'}`}>
                {servicesData.map((service) => (
                    
                    <section key={service.id} className="border-b border-[#2a2a33] pb-8 group hover:border-[#00ff9f] transition-colors mb-3">
                        <div className="flex items-center justify-between mb-3 mt-3">
                            <span className="group-hover:text-[#00ff9f] text-2xl font-extrabold tracking-widest transition-colors">
                                {service.number}
                            </span>
                            <button aria-label="Arrow" class="bg-white group-hover:bg-[#00ff9f] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all">
                                <svg class="w-5 h-5 text-black group-hover:rotate-45 transition-transform duration-300"
                                    fill="none" stroke="currentColor" 
                                    stroke-width="2" stroke-linecap="round" 
                                    stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d={arrowRight} />
                                </svg>
                            </button>
                        </div>
                        <h2 className="group-hover:text-[#00ff9f] font-extrabold text-2xl mb-3 transition-colors">
                            {service.title}
                        </h2>
                        <p className="text-[#9ca3af] text-sm leading-relaxed max-w-md">
                            {service.description}
                        </p>
                    </section>
                ))}
            </main>
        </div>
    );
}