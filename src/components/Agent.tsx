import Image from "next/image";
import Link from "next/link";
import { getSingleAgentBySlug } from "@/api/agents";

export const Agent = async ({ slug }: { slug: string }) => {
	const agent = await getSingleAgentBySlug(slug);
	return (
		<Link
			href={`/agents/${slug}`}
			className="mt-4 flex h-[200px] w-[320px] items-center justify-center rounded-lg bg-gray-100 p-4 lg:w-[400px] lg:p-6"
		>
			<div className="flex h-full w-full gap-8">
				<div className="relative h-full w-36  overflow-hidden rounded-lg">
					<Image
						src={agent?.agentFields?.avatar?.node.mediaItemUrl ?? ""}
						fill
						alt=""
						className="object-cover "
					/>
				</div>
				<div>
					<h2 className="mb-4 text-lg font-semibold text-blue-600">{agent?.title}</h2>
					<p>{agent?.agentFields?.email}</p>
					<p>{agent?.agentFields?.phoneNumber}</p>
				</div>
			</div>
		</Link>
	);
};
