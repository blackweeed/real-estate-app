import { LocateFixed, Search } from "lucide-react";
import { SearchBarInput } from "./SearchBarInput";
import { SearchBarSelect } from "./SearchBarSelect";
import { SearchBarPropertie } from "./SearchBarPropertie";
import { SearchForm } from "@/api/forms";
import { capitalizeFirstLetter } from "@/app/utils";

export const SearchBar2 = async ({
	query,
	transactionType,
}: {
	query: string;
	transactionType: string;
}) => {
	const properties = await SearchForm(capitalizeFirstLetter(transactionType), query);

	return (
		<div className="relative w-[92%] px-2 lg:w-[60%]">
			<div className="mt-6 flex w-full items-center justify-between gap-4 rounded-full bg-white py-2.5 pl-6 pr-4 lg:gap-0 lg:py-5 lg:pl-12">
				{/* <SearchBarSelect /> */}
				<div className="relative z-[9999] flex w-full items-center justify-between rounded-lg border border-black/40 px-6 lg:w-[40vw]">
					<SearchBarInput transactionType={transactionType} />
					{query && (
						<div className="absolute bottom-0 left-0 top-12 h-fit w-full bg-white px-2 py-3 shadow lg:px-6 lg:py-6">
							<h2 className="pb-4 text-lg font-semibold lg:text-xl">Wyróżnione nieruchomości</h2>
							<div className="flex flex-col gap-2  lg:gap-4">
								{properties?.map((propertie) => (
									<SearchBarPropertie
										key={propertie.slug}
										image={propertie.featuredImage?.node.mediaItemUrl ?? ""}
										price={propertie?.propertieFields?.price ?? 0}
										slug={propertie?.slug ?? ""}
										title={propertie?.title ?? ""}
									/>
								))}
							</div>
						</div>
					)}
					<LocateFixed strokeWidth={1.5} className="hidden cursor-pointer lg:block" />
				</div>
				<button className="rounded-full bg-blue-600 p-2 lg:p-3">
					<Search color="white" size={19} strokeWidth={2.6} />
				</button>
			</div>
		</div>
	);
};
