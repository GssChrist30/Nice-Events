import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

export default function SubscribeNewsletter() {
    return (
        <section className="flex flex-col items-center">
            <SectionTitle
                title="Souscrire à la newsletter"
                description="Recevez nos dernières actualités, conseils et nouveautés directement dans votre boîte mail."
            />
            <motion.div
                className="flex items-center justify-center mt-10 border border-[#728484] focus-within:ring-2 focus-within:ring-[#728484] focus-within:border-[#728484] text-sm rounded-full h-14 max-w-xl w-full transition hover:border-[#728484] hover:bg-[#728484]/10"
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <input
                    type="text"
                    className="bg-transparent outline-none rounded-full px-4 h-full flex-1 placeholder:text-slate-400"
                    placeholder="Entrez votre adresse email"
                />
                <button className="bg-[#728484] text-white rounded-full h-11 mr-1 px-10 flex items-center justify-center hover:bg-[#b6c0c0]/90 active:scale-95 transition">
                    Souscrire
                </button>
            </motion.div>
        </section>
    );
}