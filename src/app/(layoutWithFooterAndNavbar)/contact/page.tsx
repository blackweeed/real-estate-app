import type { Metadata } from "next";
import { GetInTouch } from "@/components/GetInTouch";

export const metadata: Metadata = {
	title: "Skontaktuj się z nami",
	description: "Skontaktuj się z naszymi agentami aby omówić szczegóły współpracy.",
	keywords: "nieruchomość, kupno nieruchomości, mieszkanie, dom, kontakt",
};

export default function Contact() {
	return (
		<div className="mt-28">
			<GetInTouch />
		</div>
	);
}
