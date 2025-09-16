import LeftSide from "./LeftSide"

export default function About({ isDark }) {
    return (
        <main className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row gap-16 md:gap-24">
            <LeftSide />

            <section className="flex flex-col max-w-2xl space-y-6 mb-40">
                <h2 className="text-2xl font-extrabold tracking-wide">À propos de moi</h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                    Développeur web passionné avec une solide expérience dans la création d'applications web modernes et performantes.
                </p>
                <div className="grid grid-cols-2 gap-x-20 gap-y-3 text-gray-400 text-xs max-w-xl py-3">
                    <div className="flex space-x-2 m-1">
                        <strong className="text-gray-500">Nom</strong>
                        <span className="text-white font-semibold">Hamza Hmidani</span>
                    </div>
                    <div className="flex space-x-2 m-1">
                        <strong className="text-gray-500">Téléphone</strong>
                        <span className="text-white font-semibold">(+212) 774 60 21 65</span>
                    </div>
                    <div className="flex space-x-2 m-1">
                        <strong className="text-gray-500">Expérience</strong>
                        <span className="text-white font-semibold">3+ ans</span>
                    </div>
                    <div className="flex space-x-2 m-1">
                        <strong className="text-gray-500">Skype</strong>
                        <span className="text-white font-semibold">hamza.dev</span>
                    </div>
                    <div className="flex space-x-2 m-1">
                        <strong className="text-gray-500">Nationalité</strong>
                        <span className="text-white font-semibold">Marocaine</span>
                    </div>
                    <div className="flex space-x-2 m-1">
                        <strong className="text-gray-500">Email</strong>
                        <span className="text-white font-semibold">hamidanh855@gamil.com</span>
                    </div>
                    <div className="flex space-x-2 m-1">
                        <strong className="text-gray-500">Freelance</strong>
                        <span className="text-white font-semibold">Disponible</span>
                    </div>
                    <div className="flex space-x-2 m-1">
                        <strong className="text-gray-500">Langues</strong>
                        <span className="text-white font-semibold">Français, Arabe, Anglais</span>
                    </div>
                </div>
            </section>
        </main>
    )
}