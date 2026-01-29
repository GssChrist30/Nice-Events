import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
    const testimonials = [
        { quote: "Définit la vision stratégique de l’entreprise et pilote son développement avec leadership et innovation.", name: "Richard Nelson", role: "CEO", image: "", },
        { quote: "Crée des univers uniques en accord avec l’identité et l’émotion de chaque événement.", name: "Sophia Martinez", role: "Décoratrice & Conceptrice d'ambiance", image: "/assets/portrait-businesswoman.jpg", },
        { quote: "Analyse et valorise les données pour optimiser nos décisions et améliorer nos performances événementielles.", name: "Jean-Christ", role: "Ingénieur data", image: "assets/favorite_linkedin.jpg", },
        { quote: "Conçoit des ambiances uniques en harmonie avec le thème, les couleurs et l’émotion de chaque événement.", name: "Victoria YAO", role: "Décoratrice événementiel", image: "/assets/african-woman-posing-studio.jpg", },
        { quote: "Imagine des concepts visuels originaux et transforme les idées en expériences esthétiques et immersives.", name: "Liane DELAFONT", role: "Designer evenementiel", image: "/assets/woman-with-braids.jpg", },
        { quote: "Planifie et coordonne l’ensemble des moyens techniques et humains pour assurer le bon déroulement des événements.", name: "Sebastien LACORNE", role: "Responsable logistique", image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png", },
    ];

    return (
        <section className="flex flex-col items-center" id="testimonials">
            <SectionTitle title="Notre équipe" description="Découvrez les visages passionnés qui imaginent, organisent et subliment chaque événement avec créativité et exigence." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-18 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div key={testimonial.name} className="group border border-slate-800 p-6 rounded-xl"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="flex justify-center mb-4">
                            <img className="size-20 rounded-full object-cover group-hover:scale-110 transition-transform duration-300" src={testimonial.image} alt="user image" />
                        </div>
                        <h2 className="text-black font-medium text-center">
                            {testimonial.name}
                        </h2>
                        <p className="text-indigo-500 text-sm text-center mb-4" style={{ color: "#728484" }}>{testimonial.role}</p>
                        <p className="text-100 text-sm text-center italic">&quot;{testimonial.quote}&quot;</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}