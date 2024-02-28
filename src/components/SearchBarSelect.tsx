"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const SearchBarSelect = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const handleSearch = (searchTerm: string) => {
		const params = new URLSearchParams(searchParams);
		if (searchTerm) {
			params.set("transactionType", searchTerm);
		} else {
			params.delete("transactionType");
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div className="inline-flex cursor-pointer items-center gap-1.5">
			<select
				onChange={(e) => handleSearch(e.target.value)}
				defaultValue={searchParams.get("transactionType")?.toString()}
				className="rounded-md border border-gray-300 p-2"
			>
				<option value="kupno">Kup</option>
				<option value="sprzedaż">Sprzedaj</option>
			</select>
		</div>
	);
};
