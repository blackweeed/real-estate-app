import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
	title: "Twoje Nieruchomości - kup wymarzoną nieruchomość",
	description: "Znajdź idealną nieruchomość dla siebie z naszą pomocą.",
	keywords: "nieruchomość, kupno nieruchomości, mieszkanie, dom",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
