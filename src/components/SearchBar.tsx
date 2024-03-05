import { SearchBarInput } from "./SearchBarInput";
import { SearchBarPropertie } from "./SearchBarPropertie";
import { SearchForm } from "@/api/forms";
import { capitalizeFirstLetter } from "@/app/utils";

export const SearchBar = async ({
	query,
	transactionType,
}: {
	query: string;
	transactionType: string;
}) => {
	const properties = await SearchForm(capitalizeFirstLetter(transactionType), query);

	return (
		<div className="relative w-[80%] px-2 lg:w-[50%]">
			<div className="mt-6 flex h-16 w-full items-center justify-between gap-2 rounded-md border-4 bg-white px-4 lg:px-8 ">
				<svg
					className="fill-blue-600"
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 20 20"
					aria-hidden="true"
					color="var(--blue)"
					height="32"
					width="32"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
						clipRule="evenodd"
					></path>
				</svg>
				<div className="relative z-[9999] flex h-full w-full items-center justify-between rounded-lg lg:ml-10">
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
				</div>
			</div>
		</div>
	);
};
