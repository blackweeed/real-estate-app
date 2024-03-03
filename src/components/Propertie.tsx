import { Dot } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { PropertieWithSlider } from "./PropertieWithSlider";
import { formatPrice } from "@/app/utils";
import { getSinglePropertieBySlug } from "@/api/properties";
import { getWishList } from "@/api/wishlist";

export const Propertie = async ({ slug }: { slug: string }) => {
	const propertie = await getSinglePropertieBySlug(slug);
	const cookieStore = cookies();
	const res = cookieStore.get("OurSiteJWT");
	const token = res?.value;
	// const user = await getCurrentUser(token);
	// const favorites = await getWishList(user?.id, token);

	return (
		<Link href={`/properties/${slug}`} className="h-[360px] w-full " key={propertie?.date}>
			<PropertieWithSlider
				id={slug}
				token={token}
				buyOrLease={propertie?.propertieFields?.buyOrLease}
				images={propertie?.propertieFields?.images?.nodes}
			/>
			<p className="mt-2 text-lg font-semibold lg:text-xl ">
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
			<p className=" inline-flex flex-wrap items-center">
				{propertie?.propertieFields?.numberOfRooms} Pokoi <Dot />
				{propertie?.propertieFields?.numberOfBeds} Łóżek <Dot />
				{propertie?.propertieFields?.numberOfBathrooms} Łazieniek <Dot />
				{propertie?.propertieFields?.area}m²
			</p>
		</Link>
	);
};
