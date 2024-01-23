import { Home } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link className="flex items-center gap-2 text-lg font-bold text-blue-600 lg:text-3xl" href="/">
			<Home strokeWidth={2.75} absoluteStrokeWidth /> nieruchomości.pl
		</Link>
	);
};
