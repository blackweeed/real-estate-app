import { Filters } from "./Filters";
import { Propertie } from "./Propertie";
import { Pagination } from "./Pagination";
import { getPropertiesList } from "@/api/properties";

export const FeaturedProperties = async () => {
	const properties = await getPropertiesList();

	const page = [1, 2, 3, 4, 5];

	return (
		<section className="relative -top-10 z-30 rounded-t-3xl bg-white px-6 pt-10 lg:px-20">
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
				<Filters />
			</div>
			<div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
				{properties?.map((propertie) => {
					return <Propertie key={propertie.slug} slug={propertie.slug ?? ""} />;
				})}
			</div>
			<div className="my-12 flex justify-center gap-4">
				{page.map((page) => (
					<Pagination key={page} page={page} pageNumber="1" />
				))}
			</div>
		</section>
	);
};
