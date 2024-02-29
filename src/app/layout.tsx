import type { Metadata } from "next";
import { Maven_Pro, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "@/components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: "400", variable: "--font-roboto" });
const maven = Maven_Pro({ subsets: ["latin"], variable: "--font-maven" });

export const metadata: Metadata = {
	title: "Twoje Nieruchomości - kup wymarzoną nieruchomość",
	description: "Znajdź idealną nieruchomość dla siebie z naszą pomocą.",
	keywords: "nieruchomość, kupno nieruchomości, mieszkanie, dom",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${roboto.variable} ${maven.variable}`}>
			<body className={roboto.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
