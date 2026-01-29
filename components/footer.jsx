'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-400 mt-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                <div className="lg:col-span-1 " >
                    <a href="#!">
                        <Image className="h-9 w-auto" src="/assets/nice_events.jpeg" width={138} height={36} alt="logo" />
                    </a>
                    <p className="text-sm/7 mt-6">Chez Nice Events, nous imaginons et mettons en lumière des événements uniques, en accompagnant les organisateurs et en aidant le public à vivre des expériences mémorables, simplement et efficacement.</p>
                </div>
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <div className="flex flex-col text-sm space-y-2.5">
                        <h2 className="font-semibold mb-5 text-black">Notre entreprise</h2>
                        <a className="hover:text-slate-500 transition" href="#">A propos de nous</a>
                        <a className="hover:text-slate-500 transition" href="#">Careers<span className="text-xs text-white bg-[#728484] rounded-md ml-2 px-2 py-1">chez Nice Events!</span></a>
                        <a className="hover:text-slate-500 transition" href="#">Nous contactez</a>
                        <a className="hover:text-slate-500 transition" href="#">Privacy policy</a>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold text-black mb-5">Souscrire a notre Newsletter</h2>
                    <div className="text-sm space-y-6 max-w-sm">
                        <p>Restez informé de nos dernières créations, inspirations et actualités événementielles en vous abonnant à notre newsletter.</p>
                        <div className="flex items-center justify-center gap-2 p-2 rounded-md" style={{ backgroundColor: "#b6c0c0" }}>
                            <input className="outline-none w-full max-w-64 py-2 rounded px-2" style={{ color: "black" }} type="email" placeholder="Entrez votre mail" />
                            <button className="px-4 py-2 text-white rounded" style={{ backgroundColor: "#728484" }}>Souscrire</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="py-4 text-center border-t mt-6 border-slate-700">
                Copyright 2025 © <a href="https://prebuiltui.com?utm_source=agentix" target="_blank">• Tous droits réservés</a> • Distributed by <a href="https://www.linkedin.com/in/pharis-gossou/" target="_blank">Gss_Christ.</a>
            </p>
        </motion.footer>
    );
};