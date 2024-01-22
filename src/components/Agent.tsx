import Image from "next/image";
import Link from "next/link";
import { getSingleAgentBySlug } from "@/api/agents";

export const Agent = async ({ slug }:{slug:string}) => {
  const agent = await getSingleAgentBySlug(slug);
  return (
    <Link
      href={`/agents/${slug}`}
      className="w-[400px] h-[200px] bg-gray-100 p-6 rounded-lg flex justify-center items-center mt-4"
    >
      <div className="flex gap-8 w-full h-full">
        <div className="relative w-36 h-full  rounded-lg overflow-hidden">
          <Image
            src={agent?.agentFields?.avatar?.node.mediaItemUrl ?? ""}
            fill
            alt=""
            className="object-cover "
          />
        </div>
        <div>
          <h2 className="text-blue-600 text-lg font-semibold mb-4">
            {agent?.title}
          </h2>
          <p>{agent?.agentFields?.email}</p>
          <p>{agent?.agentFields?.phoneNumber}</p>
        </div>
      </div>
    </Link>
  );
};
