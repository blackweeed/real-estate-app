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
		<div className="hidden cursor-pointer  items-center gap-1.5 lg:inline-flex">
			<select
				onChange={(e) => handleSearch(e.target.value)}
				defaultValue={searchParams.get("transactionType")?.toString()}
				className="rounded-lg border border-none bg-white  py-2 transition duration-200 ease-in-out  focus:outline-none focus:ring "
			>
				<option className="border-none bg-white" value="kupno">
					Kup
				</option>
				<option className="border-none bg-white" value="sprzedaż">
					Sprzedaj
				</option>
			</select>
		</div>
	);
};
