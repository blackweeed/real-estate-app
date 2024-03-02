import type { Metadata } from "next";
import { GetPropertiesListBuyOrLease } from "@/api/properties";
import { Filters } from "@/components/Filters";
import { GetInTouch } from "@/components/GetInTouch";
import { Pagination } from "@/components/Pagination";
import { Propertie } from "@/components/Propertie";

export const metadata: Metadata = {
	title: "Kup nieruchomość",
	description: "Kup wymarzoną nieruchomość dla siebie z naszą pomocą.",
	keywords: "nieruchomość, kupno nieruchomości, mieszkanie, dom",
};

export default async function Buy() {
	const properties = await GetPropertiesListBuyOrLease("Na sprzedaż");

	const page = [1, 2, 3, 4, 5];
	return (
		<section className="mt-32">
			<section className=" -top-10 z-30 rounded-t-3xl bg-white px-6 pt-10 lg:px-20">
				<div className="mb-8 flex flex-wrap items-center justify-between gap-3 lg:gap-0">
					<div className="mb-5">
						<h2 className="text-3xl font-semibold text-blue-600 lg:text-4xl">
							Nieruchomości - Kupno
						</h2>
					</div>
					<Filters />
				</div>
				<div className="mb-10 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-10">
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
			<GetInTouch />
		</section>
	);
}
