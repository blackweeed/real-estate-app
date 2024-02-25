import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { type Metadata } from "next";
import { ActiveListings } from "@/components/ActiveListings";
import { getSingleAgentBySlug } from "@/api/agents";

type AgentPageProps = {
	params: { agentSlug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: AgentPageProps): Promise<Metadata> {
	const slug = params.agentSlug;
	const agent = await getSingleAgentBySlug(slug);

	return {
		title: agent?.title,
		description: agent?.agents?.agentsDescription,
	};
}

export default async function SingleAgentPage({ params }: AgentPageProps) {
	const agent = await getSingleAgentBySlug(params.agentSlug);

	return (
		<section className="mt-32 px-6 lg:px-20">
			<nav className="my-6 font-medium">
				<ul className="flex items-center gap-2 text-sm lg:gap-4 lg:text-base">
					<Link className="text-blue-600" href={"/"}>
						Strona Główna
					</Link>
					<ChevronRight size={18} />
					<Link className="text-blue-600" href={"/agents"}>
						Agenci
					</Link>
					<ChevronRight size={18} />
					<li className="font-normal">{agent?.title}</li>
				</ul>
			</nav>{" "}
			<div className="flex flex-col lg:flex-row">
				<aside className="flex-1">
					<div className="relative mb-6 h-[400px] overflow-hidden rounded-lg lg:mb-0 lg:h-[650px] lg:w-[500px]">
						<Image
							className="object-cover"
							src={agent?.agents?.avatar?.node.mediaItemUrl ?? ""}
							alt=""
							fill
						/>
					</div>
				</aside>
				<main className="flex-1">
					<h1 className="text-4xl font-semibold text-blue-600 lg:text-5xl">{agent?.title}</h1>
					<div className="inline-flex items-center gap-1 py-3 text-2xl font-medium">
						<MapPin size={20} />
						<p>{agent?.agents?.agentsLocation}</p>
					</div>
					<p className="flex items-center gap-2 text-base font-medium">
						<Phone />
						{agent?.agents?.phoneNumber}
					</p>
					<p className="mb-3 mt-2 flex items-center gap-2 text-base font-medium">
						<Mail />
						{agent?.agents?.email}
					</p>
					<button className="my-6 flex items-center gap-4 rounded-full bg-blue-600 px-6 py-2.5 text-white">
						Contact agent <ChevronRight />
					</button>
					<p
						dangerouslySetInnerHTML={{
							__html: agent?.agents?.agentsDescription ?? "",
						}}
					>
						{}
					</p>
				</main>
			</div>
			<Suspense>
				<ActiveListings data={agent?.agents?.relationWithProperties?.nodes} />
			</Suspense>
		</section>
	);
}
