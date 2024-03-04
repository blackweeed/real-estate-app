import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { cookies } from "next/headers";
import { refreshToken } from "@/api/token";
import { getCurrentUser } from "@/api/user";

export const metadata: Metadata = {
	title: "Twoje Nieruchomości - kup wymarzoną nieruchomość",
	description: "Znajdź idealną nieruchomość dla siebie z naszą pomocą.",
	keywords: "nieruchomość, kupno nieruchomości, mieszkanie, dom",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const cookieStore = cookies();
	const res = cookieStore.get("OurSiteJWT");
	const token = res?.value;
	const currentToken = await refreshToken(token);
	const user = await getCurrentUser(currentToken);
	return (
		<div>
			<Navbar isUser={!(user === null)} />
			{children}
			<Footer />
		</div>
	);
}
