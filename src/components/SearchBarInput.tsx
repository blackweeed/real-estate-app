"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const SearchBarInput = ({ transactionType }: { transactionType: string }) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const handleSearch = (searchTerm: string) => {
		const params = new URLSearchParams(searchParams);
		if (searchTerm) {
			params.set("query", searchTerm);
			if (!transactionType) {
				params.set("transactionType", "Na sprzedaż");
			}
		} else {
			params.delete("query");
			params.delete("transactionType");
		}
		replace(`${pathname}?${params.toString()}`);
	};
	return (
		<div className="flex h-full w-full gap-8 py-1.5">
			<input
				onChange={(e) => handleSearch(e.target.value)}
				defaultValue={searchParams.get("query")?.toString()}
				type="text"
				className="w-full text-sm outline-none"
			/>
			<button className="h-full w-32 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-4 font-medium tracking-wide text-white transition-transform hover:scale-105">
				Szukaj
			</button>
		</div>
	);
};
