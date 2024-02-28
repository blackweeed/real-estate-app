import { LocateFixed, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SearchBarInput } from "./SearchBarInput";
import { SearchBarSelect } from "./SearchBarSelect";
import { SearchForm } from "@/api/forms";
import { capitalizeFirstLetter, formatPrice } from "@/app/utils";

export const SearchBar = async ({
	query,
	transactionType,
}: {
	query: string;
	transactionType: string;
}) => {
	const properties = await SearchForm(capitalizeFirstLetter(transactionType), query);

	return (
		<div className="mt-6 flex w-full items-center justify-between rounded-full bg-white py-2.5 pl-6 pr-4  lg:py-5 lg:pl-12">
			<SearchBarSelect />
			<div className=" relative z-[9999] flex w-[48vw] items-center justify-between rounded-lg border border-black/40 px-6 lg:w-[40vw]">
				<SearchBarInput transactionType={transactionType} />
				{query && (
					<div className="absolute bottom-0 left-0 top-12 h-fit w-full bg-white px-6 py-6 shadow">
						<h2 className="pb-4 text-xl font-semibold">Wyróżnione nieruchomości</h2>
						<div className="flex flex-col gap-4">
							{properties?.map((propertie) => (
								<Link
									href={`/properties/${propertie.slug}`}
									key={propertie.slug}
									className="flex items-center gap-6 "
								>
									<div className="relative h-16 w-24 overflow-hidden rounded-md">
										<Image
											className="object-cover"
											fill
											src={propertie.featuredImage?.node.mediaItemUrl ?? ""}
											alt=""
										/>
									</div>
									<div>
										<p className="text-lg font-semibold">
											{formatPrice(propertie.propertieFields?.price ?? 0)}
										</p>
										<p>{propertie.title}</p>
									</div>
								</Link>
							))}
						</div>
					</div>
				)}
				<LocateFixed strokeWidth={1.5} className="hidden cursor-pointer lg:block" />
			</div>
			<button className="rounded-full bg-blue-600 p-2 lg:p-3">
				<Search color="white" size={21} strokeWidth={2.6} />
			</button>
		</div>
	);
};
