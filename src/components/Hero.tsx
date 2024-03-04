import Image from "next/image";
import React from "react";
import { SearchBar } from "./SearchBar";

export const Hero = ({ query, transactionType }: { query: string; transactionType: string }) => {
	return (
		<div className="relative h-[80vh] w-full">
			<div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 ">
				<h1
					style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
					className="px-6 text-center text-3xl font-bold tracking-wide text-white lg:px-0 lg:text-5xl"
				>
					Znajdź swój wymarzony dom.
				</h1>
				<h2
					style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
					className="text-xl font-bold tracking-wide text-white lg:text-2xl"
				>
					Z nami to proste!
				</h2>
				<SearchBar query={query} transactionType={transactionType} />
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
	);
};
