import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import LenisScroll from "@/components/lenis-scroll";
import Footer from "@/components/footer";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata = {
    title: "Nice Events - Imaginer l’inoubliable",
    description: "description de l'application",
    icons: {
        icon: "/assets/nice_events.jpeg",
    },
    appleWebApp: {
        title: "Nice Events",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>
                <LenisScroll />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}