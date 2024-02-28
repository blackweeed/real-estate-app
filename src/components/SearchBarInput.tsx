"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const SearchBarInput = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const handleSearch = (searchTerm: string) => {
		const params = new URLSearchParams(searchParams);
		if (searchTerm) {
			params.set("query", searchTerm);
		} else {
			params.delete("query");
		}
		replace(`${pathname}?${params.toString()}`);
	};
	return (
		<input
			onChange={(e) => handleSearch(e.target.value)}
			defaultValue={searchParams.get("query")?.toString()}
			type="text"
			placeholder="Szukaj po adresie lub okolicy"
			className="w-full py-2.5 text-sm outline-none"
		/>
	);
};
