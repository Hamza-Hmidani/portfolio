import { useState } from "react";

export function Contact({ isDark }) {
    const [form, setForm] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        service: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can use EmailJS, Formspree, or your backend here.
        // Example: open mail client with prefilled info
        window.location.href = `mailto:hamidanh855@gmail.com?subject=Contact depuis le portfolio&body=
Nom: ${form.nom}%0D%0A
Prénom: ${form.prenom}%0D%0A
Email: ${form.email}%0D%0A
Téléphone: ${form.telephone}%0D%0A
Service: ${form.service}%0D%0A
Message: ${form.message}`;
    };

    return (
        <main className={`flex flex-col lg:flex-row max-w-7xl mx-auto px-8 gap-16 py-10 items-center justify-center ${isDark ? 'text-white' : 'text-[#121217]'}`}>
            <section className="bg-[#22222a] rounded-lg p-8 flex-1 max-w-lg">
                <h1 className="text-[#00ff9f] text-2xl font-semibold mb-4">Contactez-moi</h1>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                    N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="nom"
                            placeholder="Nom"
                            value={form.nom}
                            onChange={handleChange}
                            className="bg-[#18181f] text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ff9f]"
                        />
                        <input
                            type="text"
                            name="prenom"
                            placeholder="Prénom"
                            value={form.prenom}
                            onChange={handleChange}
                            className="bg-[#18181f] text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ff9f]"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            className="bg-[#18181f] text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ff9f]"
                        />
                        <input
                            type="tel"
                            name="telephone"
                            placeholder="Téléphone"
                            value={form.telephone}
                            onChange={handleChange}
                            className="bg-[#18181f] text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ff9f]"
                        />
                    </div>
                    <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="bg-[#18181f] text-white text-sm rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#00ff9f]"
                        aria-label="Sélectionnez un service"
                    >
                        <option value="" disabled>Sélectionnez un service</option>
                        <option value="Développement Web">Développement Web</option>
                        <option value="Applications Mobiles">Applications Mobiles</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Autre">Autre</option>
                    </select>
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Votre message..."
                        value={form.message}
                        onChange={handleChange}
                        className="bg-[#18181f] text-white text-sm rounded-md px-3 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#00ff9f]"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-[#00ff9f] text-black rounded-full px-6 py-2 font-semibold hover:brightness-110 transition w-full sm:w-auto"
                    >
                        Envoyer
                    </button>
                    <button
                        type="button"
                        onClick={() => window.open('https://wa.me/212774602165', '_blank')}
                        className="bg-green-500 text-white rounded-full px-6 py-2 font-semibold hover:brightness-110 transition w-full sm:w-auto flex items-center justify-center gap-2 mt-2"
                    >
                        <i className="fab fa-whatsapp text-lg"></i>
                        Discuter sur WhatsApp
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
                        <p className="font-semibold text-lg">
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
                        <p className="font-semibold text-lg font-mono">hamidanh855@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-[#22222a] p-4 rounded-md flex items-center justify-center">
                        <i className="fas fa-map-marker-alt text-[#00ff9f] text-xl"></i>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs mb-1">Address</p>
                        <p className="font-semibold text-lg font-mono">Morocco , Fés</p>
                    </div>
                </div>
            </section>
        </main>
    )
}