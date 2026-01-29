import SectionTitle from "@/components/section-title";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OurLatestCreation() {
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [className, setClassName] = useState("");

    const sectionData = [
        {
            title: "Logistique & Coordination",
            description: "Planification et coordination complètes pour assurer un événement fluide, organisé et parfaitement maîtrisé.",
            image: "assets/elegant-wedding-reception-decor.jpg",
            align: "object-center",
        },
        {
            title: "Décoration",
            description: "Création et mise en place de décors personnalisés pour sublimer chaque événement avec élégance.",
            image: "/assets/stylish-table-decoration-celebration.jpg",
            align: "object-right",
        },
        {
            title: "Wedding planning",
            description: "Organisation et accompagnement des couples pour un mariage unique, harmonieux et inoubliable.",
            image: "/assets/white-wedding-decorated-with-flowers.jpg",
            align: "object-center",
        },
    ];

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % sectionData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isHovered, sectionData.length]);

    return (
        <section className="flex flex-col items-center" id="creations">
            <SectionTitle
                title="Ce que nous offrons"
                description="Découvrez nos réalisations, pensées avec passion et souci du détail, pour sublimer chaque événement."
            />

            <div className="flex items-center gap-4 h-100 w-full max-w-6xl mt-20 mx-auto" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                {sectionData.map((data, index) => (
                    <motion.div key={data.title} className={`relative group flex-grow h-[400px] rounded-xl overflow-hidden ${isHovered && className ? "hover:w-full w-56" : index === activeIndex ? "w-full" : "w-56"} ${className} ${!className ? "pointer-events-none" : ""}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        onAnimationComplete={() => setClassName("transition-all duration-500")}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <img className={`h-full w-full object-cover ${data.align}`} src={data.image} alt={data.title} />
                        <div className={`absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 transition-all duration-300 ${isHovered && className ? "opacity-0 group-hover:opacity-100" : index === activeIndex ? "opacity-100" : "opacity-0"}`}>
                            <h1 className="text-3xl font-semibold">{data.title}</h1>
                            <p className="text-sm mt-2">{data.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
