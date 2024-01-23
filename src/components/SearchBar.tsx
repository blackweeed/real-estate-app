import { ChevronDown, LocateFixed, Search } from "lucide-react";

export const SearchBar = () => {
	return (
		<div className="mt-6 flex w-[92%] items-center justify-between rounded-full bg-white py-2.5 pl-6 pr-4 lg:w-[60%] lg:py-5 lg:pl-12">
			<div className="inline-flex cursor-pointer items-center gap-1.5">
				Kup <ChevronDown size={20} strokeWidth={1.5} />
			</div>
			<div className="flex w-[50vw] items-center justify-between rounded-lg border border-black/40 px-6 lg:w-[40vw]">
				<input
					type="text"
					placeholder="Szukaj po adresie lub okolicy"
					className="w-full py-2.5 text-sm outline-none"
				/>
				<LocateFixed strokeWidth={1.5} className="hidden cursor-pointer lg:block" />
			</div>
			<button className="rounded-full bg-blue-600 p-2 lg:p-3">
				<Search color="white" size={21} strokeWidth={2.6} />
			</button>
		</div>
	);
};
