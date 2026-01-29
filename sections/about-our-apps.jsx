import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

export default function AboutOurApps() {
    const sectionData = [
        {
            title: "Identité",
            description: "Nous sommes une entreprise événementielle spécialisée dans la création et l’organisation d’événements uniques. Notre mission est d’accompagner nos clients à chaque étape afin de transformer leurs idées et leurs envies en expériences mémorables, élégantes et parfaitement organisées.",
            image: "/assets/id.png",
            className: "py-10 border-b border-slate-700 md:py-0 md:border-r md:border-b-0 md:px-10"
        },
        {
            title: "domaine d’activité",
            description: "Nous intervenons principalement dans l’organisation de mariages et d’événements privés. Nos services incluent le wedding planning, la décoration événementielle, la coordination du jour J ainsi que la mise en scène personnalisée de chaque événement, en accord avec le thème et les attentes de nos clients.",
            image: "https://cdn-icons-png.flaticon.com/512/3524/3524660.png",
            className: "py-10 border-b border-slate-700 md:py-0 lg:border-r md:border-b-0 md:px-10"
        },
        {
            title: "Objectifs",
            description: "Notre objectif est de créer des événements à l’image de nos clients, en alliant créativité, rigueur et sens du détail. Nous visons à offrir une expérience sereine et inoubliable, en garantissant une organisation fluide et un rendu esthétique à la hauteur de chaque occasion.",
            image: "/assets/6152022_general2_13.png",
            className: "py-10 border-b border-slate-700 md:py-0 md:border-b-0 md:px-10"
        },
    ];
    return (
        <section className="flex flex-col items-center" id="about">
            <SectionTitle title="A propos de nous" description="Cette section présente l’identité de l’entreprise, son domaine d’activité et ses objectifs." />
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 mt-18">
                {sectionData.map((data, index) => (
                    <motion.div key={data.title} className={data.className}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="size-11 p-2 rounded" style={{ backgroundColor: "#728484" }}>
                            <img src={data.image} alt="" />
                        </div>
                        <div className="mt-5 space-y-1">
                            <h3 className="text-base font-medium text-[#728484]">{data.title}</h3>
                            <p className="text-sm text-black leading-relaxed">{data.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}