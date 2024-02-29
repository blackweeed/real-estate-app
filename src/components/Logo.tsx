"use client";

import { Home } from "lucide-react";
import Link from "next/link";

export const Logo = ({ setToggle }: { setToggle?: (toggle: boolean) => void }) => {
	return (
		<Link
			onClick={() => typeof setToggle === "function" && setToggle(false)}
			className="flex items-center gap-2 text-lg font-bold text-blue-600 lg:text-3xl"
			href="/"
		>
			<Home size={30} strokeWidth={2.75} absoluteStrokeWidth />
			<p className="hidden lg:block">TwojeNieruchomości</p>
		</Link>
	);
};
