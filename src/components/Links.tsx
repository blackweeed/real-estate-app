"use client";
import Link from "next/link";

export const Links = ({ setToggle }: { setToggle?: (toggle: boolean) => void }) => {
	const links = [
		{ label: "kup", link: "/buy" },
		{ label: "wynajmij", link: "/rent" },
		{ label: "sprzedaj", link: "/sell" },
		{ label: "agenci", link: "/agents" },
		{ label: "kontakt", link: "/contact" },
	];

	return (
		<div>
			<ul className="flex flex-col gap-4">
				{links.map((link) => {
					return (
						<Link
							key={link.label}
							href={`${link.link}`}
							onClick={() => typeof setToggle === "function" && setToggle(false)}
							className="text-2xl font-bold capitalize text-blue-600 transition-all duration-500 hover:underline  lg:text-3xl"
						>
							{link.label}
						</Link>
					);
				})}
			</ul>
		</div>
	);
};
