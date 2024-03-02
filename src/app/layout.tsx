import { SpeedInsights } from "@vercel/speed-insights/next";
import { Maven_Pro, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400", variable: "--font-roboto" });
const maven = Maven_Pro({ subsets: ["latin"], variable: "--font-maven" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={` ${roboto.variable} ${maven.variable}`}>
			<body className={roboto.className}>
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}
