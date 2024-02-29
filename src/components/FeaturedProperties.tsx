import Link from "next/link";
import { Propertie } from "./Propertie";
import { getPropertiesList } from "@/api/properties";

export const FeaturedProperties = async () => {
	const properties = await getPropertiesList();

	return (
		<section className=" -top-10 z-30 rounded-t-3xl bg-white px-6 py-10 lg:px-20">
			<div className="flex items-center justify-between">
				<div className="mb-5">
					<h2 className="text-3xl font-semibold text-blue-600 lg:text-4xl">
						Wyróżnione nieruchomości
					</h2>
					<p className="mb-6 mt-3 text-sm text-gray-400 lg:text-base">
						Sprawdź niektóre z naszych najbardziej ekskluzywnych domów, apartamentów, kamienic, i
						nie tylko.
					</p>
				</div>
			</div>
			<div className="mb-10 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-10">
				{properties?.map((propertie) => {
					return <Propertie key={propertie.slug} slug={propertie.slug ?? ""} />;
				})}
			</div>
			<Link
				className="mt-3 inline-flex items-center justify-between gap-2 rounded-full bg-blue-600 px-3 py-2 text-base text-white lg:mt-0 lg:px-6 lg:text-lg"
				href="/buy"
			>
				Zobacz więcej
			</Link>
		</section>
	);
};
