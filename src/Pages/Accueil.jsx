import '../App.css';

function Accueil({ isDark }) {
    return(
        <main className={`flex flex-col md:flex-row items-center justify-center md:px-20 gap-10 md:gap-20 ${isDark ? 'text-white' : 'text-[#121217]'}`}>
            <div className="home-img">
                <img src="images/main.png" alt="Profile" />
            </div>
            <div className="max-w-xl text-center md:text-left">
                <h2 className="text-5xl font-extrabold mb-2">
                    Bonjour, Je suis 
                    <span className="text-[#1eff7a] px-3">
                        Hamza
                    </span>
                </h2>
                <h3 className="typing-text">Je suis <span></span></h3>
                <p className="text-base mb-8">
                    Développeur passionné par la création d'applications web modernes et innovantes. Spécialisé dans le développement front-end et le design d'interfaces utilisateur.
                </p>
                <div class="social-icons flex space-x-6 mb-10 justify-center md:justify-start">
                    <a href="#" class="text-[#1eff7a] border border-[#1eff7a] rounded-full p-3 hover:bg-[#1eff7a] hover:text-black transition">
                        <img src="images/message.png" alt="" className="fa-brands fa-linkedin" width="20px"/>
                    </a>
                    <a href="https://github.com/Hamza-Hmidani" class="text-[#1eff7a] border border-[#1eff7a] rounded-full p-3 hover:bg-[#1eff7a] hover:text-black transition">
                        <img src="images/github.png" alt="" className="fa-brands fa-github" width="20px"/>
                    </a>
                    <a href="#" class="text-[#1eff7a] border border-[#1eff7a] rounded-full p-3 hover:bg-[#1eff7a] hover:text-black transition">
                        <img src="images/twitter.png" alt="" className="fa-brands fa-x-twitter" width="20px"/>
                    </a>
                    <a href="#" class="text-[#1eff7a] border border-[#1eff7a] rounded-full p-3 hover:bg-[#1eff7a] hover:text-black transition"><img src="images/instagram.png" alt="" className="fa-brands fa-instagram" width="20px"/></a>
                </div>
                <button className="border-2 border-[#1eff7a] rounded-full px-8 py-3 text-[#1eff7a] font-semibold tracking-widest hover:bg-[#1eff7a] hover:text-black transition">
                    Contactez-moi
                </button>
            </div>
        </main>
    )
}
export default Accueil;