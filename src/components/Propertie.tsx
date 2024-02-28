import { Dot } from "lucide-react";
import Link from "next/link";
import { PropertieWithSlider } from "./PropertieWithSlider";
import { formatPrice } from "@/app/utils";
import { getSinglePropertieBySlug } from "@/api/properties";

export const Propertie = async ({ slug }: { slug: string }) => {
	const propertie = await getSinglePropertieBySlug(slug);

	return (
		<Link href={`/properties/${slug}`} className="h-[360px] w-full " key={propertie?.date}>
			<PropertieWithSlider
				buyOrLease={propertie?.propertieFields?.buyOrLease}
				images={propertie?.propertieFields?.images?.nodes}
			/>
			<p className="mt-2 text-xl font-semibold ">
				{formatPrice(propertie?.propertieFields?.price ?? 0)}
			</p>
			<div className="flex">
				<p>{propertie?.propertieFields?.map?.city && `${propertie?.propertieFields?.map?.city}`}</p>
				<p className="font-medium capitalize">
					{propertie?.propertieFields?.map?.streetName &&
						`, ${propertie?.propertieFields?.map?.streetName}`}
				</p>
				<p>
					{propertie?.propertieFields?.map?.postCode &&
						`, ${propertie?.propertieFields?.map?.postCode}`}
				</p>
			</div>
			<p className="inline-flex items-center ">
				{propertie?.propertieFields?.numberOfRooms} Pokoi <Dot />
				{propertie?.propertieFields?.numberOfBeds} Łóżek <Dot />
				{propertie?.propertieFields?.numberOfBathrooms} Łazieniek <Dot />
				{propertie?.propertieFields?.area}m²
			</p>
		</Link>
	);
};
