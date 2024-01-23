import Link from "next/link";

export const Links = () => {
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
							className="text-2xl font-bold capitalize text-blue-600 transition-all duration-500 hover:underline hover:decoration-wavy lg:text-3xl"
						>
							{link.label}
						</Link>
					);
				})}
			</ul>
		</div>
	);
};
