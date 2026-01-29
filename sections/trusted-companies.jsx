import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

export default function TrustedCompanies() {
    return (
        <section className="flex flex-col items-center">
            <SectionTitle
                title="Nos réalisations"
                description="Découvrez une panoplie d'entreprises avec lesquelles nous avons eu l'honneur de collaborer pour la réalisation de projets et d'événements mémorables."
            />
            <motion.div
                className="relative max-w-5xl py-20 md:py-26 mt-18 md:w-full overflow-hidden mx-2 md:mx-auto border border-[#fbeee6] flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#401B98]/5 to-[#180027]/10 rounded-3xl p-4 md:p-10 text-white"
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
               <div className="absolute pointer-events-none top-10 -z-1 left-20 size-64 bg-gradient-to-br from-[#fbeee6] to-[#ffffff]/80 blur-[180px]"></div>
               <div className="absolute pointer-events-none bottom-10 -z-1 right-20 size-64 bg-gradient-to-br from-[#fbeee6] to-[#ffffff]/80 blur-[180px]"></div>

                {/* Texte de présentation */}
                <div className="flex flex-col items-center md:items-start max-md:text-center">
                    <a
                        href="#!"
                        className="group flex items-center gap-2 rounded-full text-sm p-1 pr-3 text-indigo-300 bg-[#728484]"
                    >
                        <span className="bg-[#fbeee6] text-black text-xs px-3.5 py-1 rounded-full">Nouveau</span>
                        <p className="flex items-center gap-1 text-white">
                            <span>Découvrez nos récents événements</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right group-hover:translate-x-0.5 transition duration-300">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </p>
                    </a>
                    <h1 className="text-3xl font-medium max-w-xl mt-5 bg-gradient-to-r from-white to-[#fbeee6] text-transparent bg-clip-text">
                        Faites confiance à notre expertise.
                    </h1>
                    <p className="text-base text-slate-600 max-w-lg mt-4">
                        Voici une panoplie d'entreprises avec lesquelles nous avons eu l'honneur de collaborer pour la
                        réalisation de projets et d'événements mémorables, représentées par leurs logos ci-dessous.
                    </p>
                    <button className="flex items-center gap-1 text-sm px-6 py-2.5 border border-[#728484] hover:bg-indigo-300/10 active:scale-95 transition rounded-full mt-6">
                        En savoir plus
                        <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.4243 5.42426C12.6586 5.18995 12.6586 4.81005 12.4243 4.57574L8.60589 0.757359C8.37157 0.523045 7.99167 0.523045 7.75736 0.757359C7.52304 0.991674 7.52304 1.37157 7.75736 1.60589L11.1515 5L7.75736 8.39411C7.52304 8.62843 7.52304 9.00833 7.75736 9.24264L12.4243 5.42426ZM0 5L0 5.6L12 5.6V5V4.4L0 4.4L0 5Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>

                {/* Section des logos avec bordures dégradées */}
                <div className="flex flex-col items-end gap-4">
                    {/* Ligne supérieure avec 4 logos */}
                    <div className="flex gap-4 justify-end">
                        <div className="px-2 py-4 border-t-white border-b-white/20 border-l-white border-r-white border-[1px] rounded-lg flex items-center justify-center" style={{ width: "100px", height: "100px" }}>
                            <img className="h-12 w-auto" src="/assets/Orange_logo.svg.png" alt="Logo Webflow" />
                        </div>
                        <div className="px-2 py-4 border-t-white border-b-white/20 border-l-white border-r-white border-[1px] rounded-lg flex items-center justify-center" style={{ width: "100px", height: "100px" }}>
                            <img className="h-12 w-auto" src="/assets/pngwing.com.png" alt="Logo Slack" />
                        </div>
                        <div className="px-2 py-4 border-t-white border-b-white/20 border-l-white border-r-white border-[1px] rounded-lg flex items-center justify-center" style={{ width: "100px", height: "100px" }}>
                            <img className="h-12 w-auto" src="/assets/Essilor.jpg" alt="Logo Google" />
                        </div>
                    </div>

                    {/* Ligne inférieure avec 2 logos */}
                    <div className="flex gap-4 justify-end">
                        <div className="px-2 py-4 border-t-white border-b-white/20 border-l-white border-r-white border-[1px] rounded-lg flex items-center justify-center" style={{ width: "100px", height: "100px" }}>
                            <img className="h-12 w-auto" src="/assets/chanel-logo-background-z0hvrc3j1i9bbxje.jpg" alt="Logo Spotify" />
                        </div>
                        <div className="px-2 py-4 border-t-white border-b-white/20 border-l-white border-r-white border-[1px] rounded-lg flex items-center justify-center" style={{ width: "100px", height: "100px" }}>
                            <img className="h-12 w-auto" src="/assets/spotify-logo-spotify-symbol-3.png" alt="Logo Figma" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}