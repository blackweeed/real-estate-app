import { GetPropertiesListBuyOrLease } from "@/api/properties";
import { Filters } from "@/components/Filters";
import { GetInTouch } from "@/components/GetInTouch";
import { Pagination } from "@/components/Pagination";
import { Propertie } from "@/components/Propertie";

export default async function Rent() {
	const properties = await GetPropertiesListBuyOrLease("Pod wynajem");

	const page = [1, 2, 3, 4, 5];
	return (
		<section className="mt-32">
			<section className=" -top-10 z-30 rounded-t-3xl bg-white px-6 pt-10 lg:px-20">
				<div className="mb-8 flex items-center justify-between">
					<div className="mb-5">
						<h2 className="text-3xl font-semibold text-blue-600 lg:text-4xl">
							Nieruchomości - Wynajem
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
