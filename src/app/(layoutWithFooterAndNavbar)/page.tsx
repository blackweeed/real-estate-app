import { FeaturedProperties } from "@/components/FeaturedProperties";
import { GetInTouch } from "@/components/GetInTouch";
import { Hero } from "@/components/Hero";

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
			<Hero query={query} transactionType={transactionType} />
			<FeaturedProperties />
			<GetInTouch />
		</main>
	);
}
