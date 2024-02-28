import Image from "next/image";
import { SearchBar } from "../components/SearchBar";
import { FeaturedProperties } from "../components/FeaturedProperties";
import { GetInTouch } from "@/components/GetInTouch";

export default function Home({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		transactionType?: string;
	};
}) {
	const query = searchParams?.query || "";
	const transactionType = searchParams?.transactionType || "";

	return (
		<main>
			<div className="relative h-[80vh] w-full">
				<div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 ">
					<h1
						style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
						className="text-center text-3xl font-bold tracking-wide text-white lg:text-5xl"
					>
						Znajdź swój wymarzony dom.
					</h1>
					<h2
						style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
						className="text-xl font-bold tracking-wide text-white lg:text-2xl"
					>
						Z nami to proste!
					</h2>
					<div className="relative w-[92%] lg:w-[60%]">
						<SearchBar query={query} transactionType={transactionType} />
					</div>
				</div>
				<div
					className="absolute z-10 h-full w-full"
					style={{
						background:
							"linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 70%, rgba(0, 0, 0, 0.55) 110%)",
					}}
				/>
				<Image src="/images/bg-img.jpg" alt="bg-image" fill className="object-cover" priority />
			</div>
			<FeaturedProperties />
			<div className="bg-gray-50 px-6 py-6">
				<GetInTouch />
			</div>
		</main>
	);
}
