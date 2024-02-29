import { GetInTouch } from "./GetInTouch";
import { Propertie } from "./Propertie";

export const ActiveListings = async ({ data }) => {
	return (
		<section className="py-10 ">
			<h2 className="text-3xl font-semibold text-blue-600 lg:text-4xl">Aktywne ofert</h2>
			<p className="mb-6 mt-2 max-w-[700px] text-sm text-gray-400 lg:text-base">
				Odkryj naszą profesjonalnie dobraną kolekcję nieruchomości na sprzedaż. Z skupiając się na
				jakości i wartości, oferujemy jedne z najlepszych nieruchomości na rynku.
			</p>

			<div className="mb-8 grid  grid-cols-1 gap-12 lg:grid-cols-3">
				{data?.map((slug) => {
					return <Propertie key={slug.slug} slug={slug.slug} />;
				})}
			</div>
			<GetInTouch />
		</section>
	);
};
