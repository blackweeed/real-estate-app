import Image from "next/image";
import Link from "next/link";
import { getAgentsList } from "@/api/agents";

export default async function AgentsPage() {
  const agents = await getAgentsList();

  return (
    <main className="mt-32 px-6 lg:px-20">
      <h1 className="text-center text-4xl font-semibold text-blue-600 mb-6">
        Nasi Agenci
      </h1>
      <div className="grid gird-cols-1 lg:grid-cols-4 gap-6">
        {agents?.map((agent) => {
          return (
            <div key={agent.slug} className="rounded-lg overflow-hidden">
              <Link href={`/agents/${agent.slug}`}>
                <div className="w-full h-[400px] relative">
                  <Image
                    src={agent.featuredImage?.node.mediaItemUrl ?? ""}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <h2 className="font-semibold text-2xl text-blue-600 my-1">
                {agent.title}
              </h2>
              <p>{agent.agentFields?.phoneNumber}</p>
              <p>{agent.agentFields?.email}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
