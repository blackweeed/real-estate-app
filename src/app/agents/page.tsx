import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";
import { getAgentsList } from "@/api/agents";

export const metadata: Metadata = {
	title: "Poznaj naszych agentów",
	description: "Znajdź idealną nieruchomość dla siebie z naszą pomocą.",
	keywords: "nieruchomość, kupno nieruchomości, mieszkanie, dom, agenci nieruchomości",
};

export default async function AgentsPage() {
	const agents = await getAgentsList();

	return (
		<main className="mt-32 px-6 lg:px-20">
			<h1 className="mb-6 text-center text-4xl font-semibold text-blue-600">Nasi Agenci</h1>
			<div className="gird-cols-1 grid gap-6 lg:grid-cols-4">
				{agents?.map((agent) => {
					return (
						<div key={agent.slug} className="overflow-hidden rounded-lg">
							<Link href={`/agents/${agent.slug}`}>
								<div className="relative h-[400px] w-full">
									<Image
										src={agent.featuredImage?.node.mediaItemUrl ?? ""}
										alt=""
										fill
										className="object-cover"
									/>
								</div>
							</Link>
							<h2 className="my-1 text-2xl font-semibold text-blue-600">{agent.title}</h2>
							<p>{agent.agents?.phoneNumber}</p>
							<p>{agent.agents?.email}</p>
						</div>
					);
				})}
			</div>
		</main>
	);
}
