import SectionTitle from "@/components/section-title";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import emailjs from "emailjs-com";

import "react-datepicker/dist/react-datepicker.css";

export default function GetInTouch() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "", // Ajout du champ Numéro de téléphone
        date: null,
    });

    const [notification, setNotification] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.date) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        const userTemplateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone, // Ajout au template utilisateur
            date: formData.date.toLocaleString(),
        };

        const adminTemplateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone, // Ajout au template administrateur
            date: formData.date.toLocaleString(),
        };

        // Envoi à l'utilisateur
        emailjs
            .send("service_3xc4moq", "template_i9558xj", userTemplateParams, "9eGO16NEQq48XBLQK")
            .then((response) => {
                console.log("E-mail de confirmation envoyé à l'utilisateur avec succès !");
                setNotification({ type: "success", message: "E-mail de confirmation envoyé à l'utilisateur !" });

                // Supprime la notification après 5 secondes
                setTimeout(() => {
                    setNotification(null);
                }, 5000);
            })
            .catch((err) => {
                console.error("Erreur lors de l'envoi à l'utilisateur :", err);
                setNotification({ type: "error", message: "Une erreur s'est produite lors de l'envoi à l'utilisateur." });

                // Supprime la notification après 5 secondes
                setTimeout(() => {
                    setNotification(null);
                }, 5000);
            });

        // Envoi à l'administrateur
        emailjs
            .send("service_3xc4moq", "template_n0ll3co", adminTemplateParams, "9eGO16NEQq48XBLQK")
            .then((response) => {
                console.log("E-mail envoyé à l'administrateur avec succès !");
            })
            .catch((err) => {
                console.error("Erreur lors de l'envoi à l'administrateur :", err);
            });
    };

    return (
        <section className="flex flex-col items-center" id="contact">
            <SectionTitle
                title="Prendre un rendez-vous"
                description="Remplissez le formulaire et prenez rendez-vous simplement, rapidement et en toute sérénité."
            />
            <form
                onSubmit={handleSubmit}
                className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto text-slate-400 mt-16 w-full"
            >
                {/* Champ Nom */}
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <label className="font-medium text-slate-600">Nom</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Entrez votre nom"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full mt-2 p-3 outline-none border border-[#728484] rounded-lg transition focus:ring-2 focus:ring-[#728484] focus:border-[#728484] hover:border-[#728484] hover:bg-[#728484]/10"
                    />
                </motion.div>

                {/* Champ Email */}
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <label className="font-medium text-slate-600">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Entrez votre email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full mt-2 p-3 outline-none border border-[#728484] rounded-lg transition focus:ring-2 focus:ring-[#728484] focus:border-[#728484] hover:border-[#728484] hover:bg-[#728484]/10"
                    />
                </motion.div>

                {/* Champ Téléphone */}
                <motion.div
                    className="sm:col-span-1"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <label className="font-medium text-slate-600">Numéro de téléphone</label>
                    <input
                        name="phone"
                        type="tel"
                        placeholder="33 0 00 00 00 00"
                        value={formData.phone}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) {
                                handleInputChange(e);
                            }
                        }}
                        className="w-full mt-2 p-3 outline-none border border-[#728484] rounded-lg transition focus:ring-2 focus:ring-[#728484] focus:border-[#728484] hover:border-[#728484] hover:bg-[#728484]/10"
                    />
                </motion.div>

                {/* Champ Date sur la même ligne */}
                <motion.div
                    className="sm:col-span-1"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <label className="font-medium text-slate-600">Date et heure</label>
                    <div className="mt-2 w-full">
                        <DatePicker
                            selected={formData.date}
                            onChange={(date) =>
                                setFormData({
                                    ...formData,
                                    date: date,
                                })
                            }
                            showTimeSelect
                            dateFormat="Pp"
                            placeholderText="Choisissez la date et l'heure"
                            className="w-full p-3 outline-none border border-[#728484] rounded-lg transition focus:ring-2 focus:ring-[#728484] focus:border-[#728484] hover:border-[#728484] hover:bg-[#728484]/10"
                        />
                    </div>
                </motion.div>

                {/* Bouton Prendre rendez-vous */}
                <motion.button
                    type="submit"
className="col-span-2 w-max mt-4 flex items-center gap-2 bg-[#728484] focus:ring-2 focus:ring-[#728484] focus:outline-none focus:border-[#728484] hover:bg-[#b6c0c0] text-white px-8 py-3 rounded-full transition active:scale-95"                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Prendre rendez-vous
                    <ArrowUpRight className="size-4.5" />
                </motion.button>
            </form>

            {/* Notification stylisée */}
            {notification && (
                <motion.div
                    className={`mt-4 p-3 rounded-lg shadow ${
                        notification.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {notification.message}
                </motion.div>
            )}
        </section>
    );
}