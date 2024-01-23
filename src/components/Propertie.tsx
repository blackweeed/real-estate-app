import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/app/utils";
import { getSinglePropertieBySlug } from "@/api/properties";

export const Propertie = async ({ slug }: { slug: string }) => {
	const propertie = await getSinglePropertieBySlug(slug);

	return (
		<Link href={`/properites/${slug}`} className="h-[360px] w-full " key={propertie?.date}>
			<div className="relative h-[80%] w-full cursor-pointer overflow-hidden rounded-lg">
				<div className="absolute left-3 top-3 z-30 flex h-8 w-24 items-center justify-center rounded-md bg-white/60 font-semibold uppercase text-blue-600">
					{propertie?.propertieFields?.buyOrLease}
				</div>
				<Image
					className="object-cover transition hover:scale-110"
					src={propertie?.propertieFields?.images?.nodes[0].mediaItemUrl ?? ""}
					alt=""
					fill
				/>
			</div>
			<p className="mt-2 text-xl font-semibold ">
				{formatPrice(propertie?.propertieFields?.price ?? 0)}
			</p>
			<p className="font-medium capitalize">
				{propertie?.propertieFields?.map?.streetName}, {propertie?.propertieFields?.map?.city},{" "}
				{propertie?.propertieFields?.map?.postCode}
			</p>
			<p className="inline-flex items-center ">
				{propertie?.propertieFields?.numberOfBeds} Łóżek <Dot />
				{propertie?.propertieFields?.numberOfRooms} Pokoi <Dot />
				{propertie?.propertieFields?.area}m²
			</p>
		</Link>
	);
};
