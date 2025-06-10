export function Contact({ isDark }) {
    return (
        <main className="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto px-8 gap-16 py-10 items-center justify-center">
            <section className="bg-[#22222a] rounded-lg p-8 flex-1 max-w-lg">
                <h1 className="text-[#00ff9f] text-2xl font-semibold mb-4">Contactez-moi</h1>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                    N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question.
                </p>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Nom"
                            className="bg-[#18181f] text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ff9f]"
                        />
                        <input
                            type="text"
                            placeholder="Prénom"
                            className="bg-[#18181f] text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ff9f]"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-[#18181f] text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ff9f]"
                        />
                        <input
                            type="tel"
                            placeholder="Téléphone"
                            className="bg-[#18181f] text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ff9f]"
                        />
                    </div>
                    <select
                        className="bg-[#18181f] text-white text-sm rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#00ff9f]"
                        aria-label="Sélectionnez un service"
                    >
                        <option value="" disabled selected>Sélectionnez un service</option>
                        <option value="web">Développement Web</option>
                        <option value="mobile">Applications Mobiles</option>
                        <option value="design">UI/UX Design</option>
                        <option value="other">Autre</option>
                    </select>
                    <textarea
                        rows="6"
                        placeholder="Votre message..."
                        className="bg-[#18181f] text-white text-sm rounded-md px-3 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#00ff9f]"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-[#00ff9f] text-black rounded-full px-6 py-2 font-semibold hover:brightness-110 transition w-full sm:w-auto"
                    >
                        Envoyer
                    </button>
                </form>
            </section>

            <section className="flex flex-col justify-center gap-8 flex-1 max-w-md">
                <div className="flex items-center gap-4">
                    <div className="bg-[#22222a] p-4 rounded-md flex items-center justify-center">
                        <i className="fas fa-phone-alt text-[#00ff9f] text-xl"></i>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs mb-1">Téléphone</p>
                        <p className="text-white font-semibold text-lg">
                            <span className="font-mono">(+212)</span> 774 60 21 65
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-[#22222a] p-4 rounded-md flex items-center justify-center">
                        <i className="fas fa-envelope text-[#00ff9f] text-xl"></i>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs mb-1">Email</p>
                        <p className="text-white font-semibold text-lg font-mono">hmidanh855@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-[#22222a] p-4 rounded-md flex items-center justify-center">
                        <i className="fas fa-map-marker-alt text-[#00ff9f] text-xl"></i>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs mb-1">Address</p>
                        <p className="text-white font-semibold text-lg font-mono">Code Corner, Tech Town 13579</p>
                    </div>
                </div>
            </section>
        </main>
    )
}